//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "../Margin/MarginCollateral.sol";
import "../Margin/MarginBorrowers.sol";

abstract contract MarginLongCore is MarginCollateral, MarginBorrowers {}