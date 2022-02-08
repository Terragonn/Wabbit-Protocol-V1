import {HardhatRuntimeEnvironment} from "hardhat/types";
import {chooseConfig, ConfigType, saveConfig} from "../util/utilConfig";
import {saveTempConstructor} from "../util/utilVerify";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    const constructorArgs = {
        pool: config.leveragePoolAddress,
        maxFeePercentNumerator: 10,
        maxFeePercentDenominator: 100,
    };

    const FlashLender = await hre.ethers.getContractFactory("FlashLender");
    const flashLender = await FlashLender.deploy(constructorArgs.pool, constructorArgs.maxFeePercentNumerator, constructorArgs.maxFeePercentDenominator);
    await flashLender.deployed();

    config.flashLender = flashLender.address;
    console.log(`Deployed: FlashLender | ${flashLender.address}`);

    if (configType !== "fork") saveTempConstructor(flashLender.address, constructorArgs);
    saveConfig(config, configType);
}