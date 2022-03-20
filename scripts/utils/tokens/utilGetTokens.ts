import {HardhatRuntimeEnvironment} from "hardhat/types";

import {ERC20Upgradeable, LPoolToken} from "../../../typechain-types";

import {Config} from "../config/utilConfig";

type Filter = "leveragePool" | "marginLongBorrow" | "marginLongCollateral" | "flashLender" | "oracle" | null;

// Get filtered approved tokens
export function getFilteredApproved(config: Config, filter: Filter) {
    if (filter === null) return config.tokens.approved;
    return config.tokens.approved.filter((approved) => approved.setup && approved.setup[filter]);
}

// Get token address filted by approved configuration
export function getFilteredTokenAddresses(config: Config, filter: Filter) {
    return getFilteredApproved(config, filter).map((approved) => approved.address);
}

// Get tokens filtered by their approved configuration
export async function getFilteredTokens(config: Config, hre: HardhatRuntimeEnvironment, filter: Filter) {
    let tokens: ERC20Upgradeable[] = [];
    for (const address of getFilteredTokenAddresses(config, filter)) tokens.push(await hre.ethers.getContractAt("ERC20Upgradeable", address));

    return tokens;
}

// Get LP token addressess
export function getLPTokenAddresses(config: Config) {
    return config.tokens.lpTokens.tokens;
}

// Get a list of LP tokens
export async function getLPTokens(config: Config, hre: HardhatRuntimeEnvironment) {
    let tokens: LPoolToken[] = [];
    for (const approved of getLPTokenAddresses(config)) tokens.push(await hre.ethers.getContractAt("LPoolToken", approved));

    return tokens;
}