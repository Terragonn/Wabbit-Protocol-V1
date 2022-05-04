//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import {BaseVault} from "./BaseVault.sol";
import {BaseImpersonate} from "../../bases/BaseImpersonate.sol";

contract AuthorizeTest is BaseVault, BaseImpersonate {
    // Fail to deposit moving funds into the strategy due to lack of authorization.
    function testFailInjectFunds() public impersonate(vm, _empty) {
        _vault.depositIntoStrategy(_tokenAmount);
    }

    // Fail to deposit moving all funds into the strategy due to lack of authorization.
    function testFailInjectAllFunds() public impersonate(vm, _empty) {
        _vault.depositAllIntoStrategy();
    }

    // Fail to deposit moving funds from the strategy due to lack of authorization.
    function testFailEjectFunds() public impersonate(vm, _empty) {
        _vault.withdrawFromStrategy(_tokenAmount);
    }

    // Fail to deposit moving all funds from the strategy due to lack of authorization.
    function testFailEjectAllFunds() public impersonate(vm, _empty) {
        _vault.withdrawAllFromStrategy();
    }
}
