import hre from "hardhat";
import fs from "fs";
import config from "../config.json";
import getFutureAddress from "../utils/getFutureAddress";

export default async function main() {
    // Deploy the token
    const signer = hre.ethers.provider.getSigner();
    const yieldApprovalAddress = await getFutureAddress(signer, 1);

    const tokenConfig = {
        tokenAmount: hre.ethers.BigNumber.from(10).pow(18).mul(1000),
        yieldSlashRate: 10000,
        yieldReward: hre.ethers.BigNumber.from(10).pow(18).mul(5),
        yieldApproval: yieldApprovalAddress,
    };
    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy(...Object.values(tokenConfig));
    await token.deployed();

    console.log(`Deployed token to ${token.address}`);
    config.tokenAddress = token.address;

    fs.writeFileSync("config.json", JSON.stringify(config));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
