//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, ERC20Permit, ERC20Votes, Ownable {
    uint256 private cappedAmount;

    constructor(uint256 amount) ERC20("Wabbit", "WBT") ERC20Permit("TKN") {
        _mint(owner(), amount);
    }

    function yield(address to, uint256 value) external {
        // **** This function should be responsible for yielding out farm tokens to users, however it is not clear how they should be distributed ???
        // **** Perhaps use the oracle and look at the value that should be received for each deposit amount in regard to the entire allowed block ?
        // **** Perhaps a proportion of tokens will be lent out relative to what was deposited and then this amount will be slashed with time
    }

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}