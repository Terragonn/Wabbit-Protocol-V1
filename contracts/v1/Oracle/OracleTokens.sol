//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

abstract contract OracleTokens is Ownable {
    struct Token {
        AggregatorV3Interface priceFeed;
        AggregatorV3Interface reservePriceFeed;
        uint256 decimals;
        bool supported;
    }
    mapping(address => Token) private _tokens;

    modifier onlySupported(address token_) {
        require(isSupported(token_), "OracleTokens: Only supported tokens may be used");
        _;
    }

    // Set the price feed for a given asset along with the decimals
    function setPriceFeed(
        address[] memory token_,
        AggregatorV3Interface[] memory priceFeed_,
        AggregatorV3Interface[] memory reservePriceFeed_,
        uint256[] memory correctDecimals_,
        bool[] memory supported_
    ) external onlyOwner {
        for (uint256 i = 0; i < token_.length; i++) {
            Token storage token = _tokens[token_[i]];

            token.priceFeed = priceFeed_[i];
            token.reservePriceFeed = reservePriceFeed_[i];
            token.decimals = correctDecimals_[i];
            token.supported = supported_[i];
        }
    }

    // Check if an asset is supported by the oracle
    function isSupported(address token_) public view returns (bool) {
        return _tokens[token_].supported;
    }

    // Get the price feed for a given asset
    function priceFeed(address token_) public view returns (AggregatorV3Interface) {
        return _tokens[token_].priceFeed;
    }

    // Get the reserve price feed for a given asset
    function reservePriceFeed(address token_) public view returns (AggregatorV3Interface) {
        return _tokens[token_].reservePriceFeed;
    }

    // Get the correct decimals for a given asset
    function decimals(address token_) public view returns (uint256) {
        return _tokens[token_].decimals;
    }
}