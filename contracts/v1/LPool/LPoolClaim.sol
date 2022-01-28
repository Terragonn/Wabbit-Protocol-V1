//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "./LPoolApproved.sol";

abstract contract LPoolClaim is LPoolApproved {
    using SafeMathUpgradeable for uint256;

    mapping(address => mapping(address => uint256)) private _claimed;
    mapping(address => uint256) private _totalClaimed;

    // Claim an amount of a given token
    function claim(address token_, uint256 amount_) external onlyRole(POOL_APPROVED) onlyApprovedPT(token_) {
        require(amount_ > 0, "LPoolClaim: claim amount must be greater than 0");
        require(amount_ <= liquidity(token_), "LPoolClaim: Cannot claim more than total liquidity");

        _claimed[_msgSender()][token_] = _claimed[_msgSender()][token_].add(amount_);
        _totalClaimed[token_] = _totalClaimed[token_].add(amount_);

        emit Claim(_msgSender(), token_, amount_);
    }

    // Unclaim an amount of a given token
    function unclaim(address token_, uint256 amount_) external onlyRole(POOL_APPROVED) onlyPT(token_) {
        require(amount_ > 0, "LPoolClaim: Unclaim amount must be greater than 0");
        require(amount_ <= _claimed[_msgSender()][token_], "LPoolClaim: Cannot unclaim more than current claim");

        _claimed[_msgSender()][token_] = _claimed[_msgSender()][token_].sub(amount_);
        _totalClaimed[token_] = _totalClaimed[token_].sub(amount_);

        emit Unclaim(_msgSender(), token_, amount_);
    }

    // Get the amount an account has claimed
    function claimed(address token_, address account_) public view onlyPT(token_) returns (uint256) {
        return _claimed[account_][token_];
    }

    // Get the total amount claimed
    function totalClaimed(address token_) public view onlyPT(token_) returns (uint256) {
        return _totalClaimed[token_];
    }

    function liquidity(address token_) public view virtual returns (uint256);

    event Claim(address indexed account, address token, uint256 amount);
    event Unclaim(address indexed account, address token, uint256 amount);
}