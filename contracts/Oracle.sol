//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./ILPool.sol";
import "./IOracle.sol";
import "./lib/UniswapV2Router02.sol";

contract Oracle is IOracle, Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    address private router;
    address private lPool;
    uint256 private decimals;

    constructor(address router_, address lPool_, uint256 decimals_) {
        router = router_;
        lPool = lPool_;
        decimals = decimals_;
    }

    function poolTokenValue(address _token) public view returns (uint256 _value) {
        // Validate that the token is valid
        ILPool pool = ILPool(lPool);
        require(pool.isPoolToken(_token), "Invalid pool token");
        address approvedAsset = pool.getApprovedAsset(_token);

        // Find how much approved asset each pool token is worth
        uint256 numerator = decimals.mul(IERC20(approvedAsset).balanceOf(lPool));
        uint256 denominator = IERC20(_token).totalSupply();
        _value = numerator.div(denominator.add(1)); // Prevent division by 0 errors
    }

    function pairValue(address _token1, address _token2) public view returns (uint256 _value) {
        // Make sure that the tokens are valid
        ILPool pool = ILPool(lPool);
        require(pool.isApprovedAsset(_token1) || pool.isPoolToken(_token1), "Token 1 is not an approved asset or pool token");
        require(pool.isApprovedAsset(_token2) || pool.isPoolToken(_token2), "Token 2 is not an approved asset or pool token");

        // Update the path if the tokens are pool tokens
        address[] memory path = new address[](2);
        if (pool.isPoolToken(_token1)) {
            path[0] = pool.getApprovedAsset(_token1);
        } else {
            path[0] = _token1;
        }
        if (pool.isPoolToken(_token2)) {
            path[1] = pool.getApprovedAsset(_token2);
        } else {
            path[1] = _token2;
        }

        // Get the amount of token2 earned from token1
        uint256 asset1ToAsset2 = UniswapV2Router02(router).getAmountsOut(decimals, path)[1];

        // Now consider the value of the pool tokens along with the swapped value
        if (pool.isPoolToken(_token1) && pool.isPoolToken(_token2)) {
            uint256 token1ToAsset = poolTokenValue(_token1);
            uint256 token2ToAsset = poolTokenValue(_token2);

            _value = token1ToAsset.mul(asset1ToAsset2).div(token2ToAsset.add(1)); // Add one to avoid division by 0

        } else if (pool.isPoolToken(_token1)) {
            uint256 token1ToAsset = poolTokenValue(_token1);
            _value = asset1ToAsset2.mul(token1ToAsset).div(decimals.add(1)); // Add one to avoid division by 0

        } else if (pool.isPoolToken(_token2)) {
            uint256 token2ToAsset = poolTokenValue(_token2);
            _value = asset1ToAsset2.mul(decimals).div(token2ToAsset.add(1)); // Add one to avoid division by 0

        } else {
            _value = asset1ToAsset2;
        }
    }

    function setDecimals(uint256 _decimals) public onlyOwner {
        decimals = _decimals;
    }

    function setRouterAddress(address _router) public onlyOwner {
        router = _router;
    }

    function setLPoolAddress(address _lPool) public onlyOwner {
        lPool = _lPool;
    }

    function getDecimals() public view returns (uint256 _decimals) {
        _decimals = decimals;
    }
}