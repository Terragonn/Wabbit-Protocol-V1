/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Converter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Converter__factory>;
    getContractFactory(
      name: "IConverter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConverter__factory>;
    getContractFactory(
      name: "IPokeMe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPokeMe__factory>;
    getContractFactory(
      name: "PokeMeReady",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PokeMeReady__factory>;
    getContractFactory(
      name: "Resolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Resolver__factory>;
    getContractFactory(
      name: "UniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Router02__factory>;
    getContractFactory(
      name: "LPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPool__factory>;
    getContractFactory(
      name: "LPoolApproved",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolApproved__factory>;
    getContractFactory(
      name: "LPoolClaim",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolClaim__factory>;
    getContractFactory(
      name: "LPoolCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolCore__factory>;
    getContractFactory(
      name: "LPoolDeposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolDeposit__factory>;
    getContractFactory(
      name: "LPoolInterest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolInterest__factory>;
    getContractFactory(
      name: "LPoolLiquidity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolLiquidity__factory>;
    getContractFactory(
      name: "LPoolProvide",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolProvide__factory>;
    getContractFactory(
      name: "LPoolTax",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolTax__factory>;
    getContractFactory(
      name: "LPoolToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPoolToken__factory>;
    getContractFactory(
      name: "MarginAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginAccount__factory>;
    getContractFactory(
      name: "MarginApproved",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginApproved__factory>;
    getContractFactory(
      name: "MarginBorrowers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginBorrowers__factory>;
    getContractFactory(
      name: "MarginCollateral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginCollateral__factory>;
    getContractFactory(
      name: "MarginCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginCore__factory>;
    getContractFactory(
      name: "MarginLevel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLevel__factory>;
    getContractFactory(
      name: "MarginLimits",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLimits__factory>;
    getContractFactory(
      name: "MarginPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginPool__factory>;
    getContractFactory(
      name: "MarginLong",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLong__factory>;
    getContractFactory(
      name: "MarginLongBorrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLongBorrow__factory>;
    getContractFactory(
      name: "MarginLongCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLongCore__factory>;
    getContractFactory(
      name: "MarginLongLiquidate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLongLiquidate__factory>;
    getContractFactory(
      name: "MarginLongLiquidateCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLongLiquidateCore__factory>;
    getContractFactory(
      name: "MarginLongRepay",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLongRepay__factory>;
    getContractFactory(
      name: "MarginLongRepayCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarginLongRepayCore__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "Oracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Oracle__factory>;
    getContractFactory(
      name: "OracleTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleTest__factory>;
    getContractFactory(
      name: "OracleTokens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleTokens__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Converter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Converter>;
    getContractAt(
      name: "IConverter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConverter>;
    getContractAt(
      name: "IPokeMe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPokeMe>;
    getContractAt(
      name: "PokeMeReady",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PokeMeReady>;
    getContractAt(
      name: "Resolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Resolver>;
    getContractAt(
      name: "UniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Router02>;
    getContractAt(
      name: "LPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPool>;
    getContractAt(
      name: "LPoolApproved",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolApproved>;
    getContractAt(
      name: "LPoolClaim",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolClaim>;
    getContractAt(
      name: "LPoolCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolCore>;
    getContractAt(
      name: "LPoolDeposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolDeposit>;
    getContractAt(
      name: "LPoolInterest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolInterest>;
    getContractAt(
      name: "LPoolLiquidity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolLiquidity>;
    getContractAt(
      name: "LPoolProvide",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolProvide>;
    getContractAt(
      name: "LPoolTax",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolTax>;
    getContractAt(
      name: "LPoolToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPoolToken>;
    getContractAt(
      name: "MarginAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginAccount>;
    getContractAt(
      name: "MarginApproved",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginApproved>;
    getContractAt(
      name: "MarginBorrowers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginBorrowers>;
    getContractAt(
      name: "MarginCollateral",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginCollateral>;
    getContractAt(
      name: "MarginCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginCore>;
    getContractAt(
      name: "MarginLevel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLevel>;
    getContractAt(
      name: "MarginLimits",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLimits>;
    getContractAt(
      name: "MarginPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginPool>;
    getContractAt(
      name: "MarginLong",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLong>;
    getContractAt(
      name: "MarginLongBorrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLongBorrow>;
    getContractAt(
      name: "MarginLongCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLongCore>;
    getContractAt(
      name: "MarginLongLiquidate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLongLiquidate>;
    getContractAt(
      name: "MarginLongLiquidateCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLongLiquidateCore>;
    getContractAt(
      name: "MarginLongRepay",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLongRepay>;
    getContractAt(
      name: "MarginLongRepayCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarginLongRepayCore>;
    getContractAt(
      name: "IOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: "Oracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Oracle>;
    getContractAt(
      name: "OracleTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleTest>;
    getContractAt(
      name: "OracleTokens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleTokens>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
