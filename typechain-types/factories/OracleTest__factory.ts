/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleTest, OracleTestInterface } from "../OracleTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "thresholdNumerator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thresholdDenominator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceDecimals_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    name: "amountMax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    name: "amountMin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "isSupported",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "priceMax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "priceMin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "reservePriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token_",
        type: "address[]",
      },
      {
        internalType: "contract AggregatorV3Interface[]",
        name: "priceFeed_",
        type: "address[]",
      },
      {
        internalType: "contract AggregatorV3Interface[]",
        name: "reservePriceFeed_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "correctDecimals_",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "supported_",
        type: "bool[]",
      },
    ],
    name: "setPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "threshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c3e380380610c3e83398101604081905261002f91610099565b61003833610049565b6004929092556005556003556100c7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000606084860312156100ae57600080fd5b8351925060208401519150604084015190509250925092565b610b68806100d66000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80636145f2031161009757806395f881c91161006657806395f881c91461025c578063b1d5e1b91461026f578063d449a83214610282578063f2fde38b1461029557600080fd5b80636145f20314610200578063715018a614610213578063833b82821461021b5780638da5cb5b1461024b57600080fd5b806342cde4e8116100d357806342cde4e814610180578063468cde721461019b5780634f129c53146101ae578063561c2ed8146101ed57600080fd5b8062e4768b146100f957806305300b28146101255780631fd48b9a1461013c575b600080fd5b610123610107366004610697565b6001600160a01b03909116600090815260026020526040902055565b005b6003545b6040519081526020015b60405180910390f35b61016861014a3660046106c3565b6001600160a01b039081166000908152600160205260409020541690565b6040516001600160a01b039091168152602001610133565b60045460055460408051928352602083019190915201610133565b6101296101a9366004610697565b6102a8565b6101dd6101bc3660046106c3565b6001600160a01b031660009081526001602052604090206003015460ff1690565b6040519015158152602001610133565b6101296101fb366004610697565b6102f7565b61012361020e366004610884565b61032b565b610123610495565b6101686102293660046106c3565b6001600160a01b03908116600090815260016020819052604090912001541690565b6000546001600160a01b0316610168565b61012961026a366004610697565b6104cb565b61012961027d366004610697565b6104e6565b6101296102903660046106c3565b61050d565b6101236102a33660046106c3565b61052b565b6000806102c3846102b88661050d565b6101fb90600a610a50565b90506102ed816102e76102d58761050d565b6102e090600a610a50565b86906105c6565b906105d2565b9150505b92915050565b60006103246004600101546102e761030f86866105de565b60045460055461031e9161061a565b906105c6565b9392505050565b6000546001600160a01b0316331461035e5760405162461bcd60e51b815260040161035590610a5c565b60405180910390fd5b60005b855181101561048d5760006001600088848151811061038257610382610a91565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002090508582815181106103be576103be610a91565b602090810291909101015181546001600160a01b0319166001600160a01b0390911617815584518590839081106103f7576103f7610a91565b60200260200101518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555083828151811061043957610439610a91565b6020026020010151816002018190555082828151811061045b5761045b610a91565b6020908102919091010151600391909101805460ff19169115159190911790558061048581610aa7565b915050610361565b505050505050565b6000546001600160a01b031633146104bf5760405162461bcd60e51b815260040161035590610a5c565b6104c96000610626565b565b6000806102c3846104db8661050d565b61027d90600a610a50565b60006103246004600101546102e76104fe86866105de565b60045460055461031e91610676565b6001600160a01b031660009081526001602052604090206002015490565b6000546001600160a01b031633146105555760405162461bcd60e51b815260040161035590610a5c565b6001600160a01b0381166105ba5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610355565b6105c381610626565b50565b60006103248284610ac2565b60006103248284610ae1565b60006103246105ec8461050d565b6105f790600a610a50565b6001600160a01b0385166000908152600260205260409020546102e790856105c6565b60006103248284610b03565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006103248284610b1b565b6001600160a01b03811681146105c357600080fd5b600080604083850312156106aa57600080fd5b82356106b581610682565b946020939093013593505050565b6000602082840312156106d557600080fd5b813561032481610682565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561071f5761071f6106e0565b604052919050565b600067ffffffffffffffff821115610741576107416106e0565b5060051b60200190565b600082601f83011261075c57600080fd5b8135602061077161076c83610727565b6106f6565b82815260059290921b8401810191818101908684111561079057600080fd5b8286015b848110156107b45780356107a781610682565b8352918301918301610794565b509695505050505050565b600082601f8301126107d057600080fd5b813560206107e061076c83610727565b82815260059290921b840181019181810190868411156107ff57600080fd5b8286015b848110156107b45780358352918301918301610803565b600082601f83011261082b57600080fd5b8135602061083b61076c83610727565b82815260059290921b8401810191818101908684111561085a57600080fd5b8286015b848110156107b457803580151581146108775760008081fd5b835291830191830161085e565b600080600080600060a0868803121561089c57600080fd5b853567ffffffffffffffff808211156108b457600080fd5b6108c089838a0161074b565b965060208801359150808211156108d657600080fd5b6108e289838a0161074b565b955060408801359150808211156108f857600080fd5b61090489838a0161074b565b9450606088013591508082111561091a57600080fd5b61092689838a016107bf565b9350608088013591508082111561093c57600080fd5b506109498882890161081a565b9150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156109a757816000190482111561098d5761098d610956565b8085161561099a57918102915b93841c9390800290610971565b509250929050565b6000826109be575060016102f1565b816109cb575060006102f1565b81600181146109e157600281146109eb57610a07565b60019150506102f1565b60ff8411156109fc576109fc610956565b50506001821b6102f1565b5060208310610133831016604e8410600b8410161715610a2a575081810a6102f1565b610a34838361096c565b8060001904821115610a4857610a48610956565b029392505050565b600061032483836109af565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610abb57610abb610956565b5060010190565b6000816000190483118215151615610adc57610adc610956565b500290565b600082610afe57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610b1657610b16610956565b500190565b600082821015610b2d57610b2d610956565b50039056fea264697066735822122037d6b1678e2d26f4b405e5edd52a002b193a6aa77f1878a684d04a7ea6c8c32764736f6c63430008090033";

type OracleTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleTest__factory extends ContractFactory {
  constructor(...args: OracleTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OracleTest";
  }

  deploy(
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    priceDecimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OracleTest> {
    return super.deploy(
      thresholdNumerator_,
      thresholdDenominator_,
      priceDecimals_,
      overrides || {}
    ) as Promise<OracleTest>;
  }
  getDeployTransaction(
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    priceDecimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      thresholdNumerator_,
      thresholdDenominator_,
      priceDecimals_,
      overrides || {}
    );
  }
  attach(address: string): OracleTest {
    return super.attach(address) as OracleTest;
  }
  connect(signer: Signer): OracleTest__factory {
    return super.connect(signer) as OracleTest__factory;
  }
  static readonly contractName: "OracleTest";
  public readonly contractName: "OracleTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleTestInterface {
    return new utils.Interface(_abi) as OracleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleTest;
  }
}
