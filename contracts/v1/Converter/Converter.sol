//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "../lib/UniswapV2Router02.sol";
import "./IConverter.sol";

contract Converter is IConverter, Ownable {
    using SafeERC20Upgradeable for IERC20Upgradeable;

    address public router;

    constructor(address router_) {
        router = router_;
    }

    // Set the router to be used
    function setRouter(address router_) external onlyOwner {
        router = router_;
    }

    // Swap the given amount for the maximum tokens out
    function swapMaxTokenOut(
        address tokenIn_,
        uint256 amountIn_,
        address tokenOut_
    ) external override returns (uint256) {
        address[] memory path = new address[](3);
        path[0] = tokenIn_;
        path[1] = UniswapV2Router02(router).WETH();
        path[2] = tokenOut_;

        IERC20Upgradeable(tokenIn_).safeTransferFrom(_msgSender(), address(this), amountIn_);
        IERC20Upgradeable(tokenIn_).safeApprove(router, amountIn_);
        uint256 amountOut = UniswapV2Router02(router).swapExactTokensForTokens(amountIn_, 0, path, _msgSender(), block.timestamp + 1)[1];

        return amountOut;
    }

    // Get the maximum output tokens for given input tokens
    function maxAmountTokenOut(
        address tokenIn_,
        uint256 amountIn_,
        address tokenOut_
    ) external view override returns (uint256) {
        address[] memory path = new address[](3);
        path[0] = tokenIn_;
        path[1] = UniswapV2Router02(router).WETH();
        path[2] = tokenOut_;

        uint256 amountOut = UniswapV2Router02(router).getAmountsOut(amountIn_, path)[1];
        return amountOut;
    }

    // Get the minimum input tokens required for the given output tokens
    function minAmountTokenInTokenOut(
        address tokenIn_,
        address tokenOut_,
        uint256 amountOut_
    ) external view override returns (uint256) {
        address[] memory path = new address[](3);
        path[0] = tokenIn_;
        path[1] = UniswapV2Router02(router).WETH();
        path[2] = tokenOut_;

        uint256 amountIn = UniswapV2Router02(router).getAmountsIn(amountOut_, path)[0];
        return amountIn;
    }

    // Swap the given amount for the maximum ETH out
    function swapMaxEthOut(address tokenIn_, uint256 amountIn_) external override returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = tokenIn_;
        path[1] = UniswapV2Router02(router).WETH();

        IERC20Upgradeable(tokenIn_).safeTransferFrom(_msgSender(), address(this), amountIn_);
        IERC20Upgradeable(tokenIn_).safeApprove(router, amountIn_);
        uint256 amountOut = UniswapV2Router02(router).swapExactTokensForETH(amountIn_, 0, path, _msgSender(), block.timestamp + 1)[1];

        return amountOut;
    }

    // Get the maximum output eth for given input tokens
    function maxAmountEthOut(address tokenIn_, uint256 amountIn_) external view override returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = tokenIn_;
        path[1] = UniswapV2Router02(router).WETH();

        uint256 amountOut = UniswapV2Router02(router).getAmountsOut(amountIn_, path)[1];
        return amountOut;
    }

    // Get the minimum input tokens for required output eth
    function minAmountTokenInEthOut(address tokenIn_, uint256 amountOut_) external view override returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = tokenIn_;
        path[1] = UniswapV2Router02(router).WETH();

        uint256 amountIn = UniswapV2Router02(router).getAmountsIn(amountOut_, path)[0];
        return amountIn;
    }
}