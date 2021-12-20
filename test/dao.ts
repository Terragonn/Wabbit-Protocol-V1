import { ethers, network } from "hardhat";
import config from "../config.json";
import DAO from "../artifacts/contracts/Governor.sol/DAO.json";
import Timelock from "../artifacts/@openzeppelin/contracts/governance/TimelockController.sol/TimelockController.json";
import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";
import { expect } from "chai";

describe("DAO", async () => {
    it("Should create a proposal, vote on the proposal, then execute the proposal after the given time", async () => {
        // Initialize the contracts
        const signer = ethers.provider.getSigner();
        const signerAddress = await signer.getAddress();
        const dao = new ethers.Contract(config.daoAddress, DAO.abi, signer);
        const timelock = new ethers.Contract(config.timelockAddress, Timelock.abi, signer);
        const testToken = new ethers.Contract(config.approved[0].address, ERC20.abi, signer);

        // Transfer tokens to the timelock
        const initialBal = await testToken.balanceOf(signerAddress);
        const tokenAmount = (1e18).toString();
        await testToken.transfer(timelock.address, tokenAmount);
        console.log("Transferred tokens to the timelock");

        // Create a proposal to transfer tokens back to owner
        const transferCallData = testToken.interface.encodeFunctionData("transfer", [signerAddress, tokenAmount]);
        const proposalConfig = {
            contracts: [testToken.address],
            values: [0],
            calldata: [transferCallData],
            description: `Proposal #${Date.now()}: Give grant to owner`,
        };
        await dao["propose(address[],uint256[],bytes[],string)"](...Object.values(proposalConfig));
        proposalConfig.description = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(proposalConfig.description));
        const proposalId = await dao["hashProposal(address[],uint256[],bytes[],bytes32)"](...Object.values(proposalConfig));

        console.log(`Proposed grant for owner with proposal id: ${proposalId.toHexString()}`);

        // Vote on proposal
        await dao.castVote(proposalId, 1);
        console.log("Voted for proposal");

        // Execute the proposal

        // **** Eventually integrate the yield and other tokens into this for a full test AND add the correct ownerships and such
    });
});
