import {HardhatRuntimeEnvironment} from "hardhat/types";
import {getImplementationAddress} from "@openzeppelin/upgrades-core";

import {chooseConfig, ConfigType, saveConfig} from "../utils/utilConfig";
import {saveTempConstructor} from "../utils/utilVerify";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    const constructorArgs = {
        converter: hre.ethers.constants.AddressZero,
        oracle: hre.ethers.constants.AddressZero,
        taxPercentNumerator: 5,
        taxPercentDenominator: 100,
        timePerInterestApplication: hre.ethers.BigNumber.from(86400).mul(365),
    };

    const Pool = await hre.ethers.getContractFactory("LPool");
    const pool = await hre.upgrades.deployProxy(Pool, Object.values(constructorArgs));
    await pool.deployed();

    config.contracts.leveragePoolAddress = pool.address;
    const implementation = await getImplementationAddress(hre.ethers.provider, pool.address);
    console.log(`Deployed: LPool, implementation | ${pool.address} ${implementation}`);

    if (configType !== "fork") saveTempConstructor(implementation, {});
    saveConfig(config, configType);
}
