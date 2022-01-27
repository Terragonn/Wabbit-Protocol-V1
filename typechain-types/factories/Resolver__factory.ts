/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Resolver, ResolverInterface } from "../Resolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pokeMe_",
        type: "address",
      },
      {
        internalType: "address",
        name: "marginLong_",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool_",
        type: "address",
      },
      {
        internalType: "address",
        name: "converter_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ETH",
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
    name: "checkLiquidate",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkReset",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "converter",
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
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "executeLiquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "executeReset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gelato",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marginLong",
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
    name: "pokeMe",
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
    name: "pool",
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
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001bf438038062001bf4833981016040819052620000349162000128565b83806001600160a01b03166080816001600160a01b031681525050806001600160a01b031663573ea5756040518163ffffffff1660e01b815260040160206040518083038186803b1580156200008957600080fd5b505afa1580156200009e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c4919062000190565b6001600160a01b0390811660a052600180546001600160a01b0319908116968316969096179055600280548616948216949094179093555060008054909316911617905550620001b7565b6001600160a01b03811681146200012557600080fd5b50565b600080600080608085870312156200013f57600080fd5b84516200014c816200010f565b60208601519094506200015f816200010f565b604086015190935062000172816200010f565b606086015190925062000185816200010f565b939692955090935050565b600060208284031215620001a357600080fd5b8151620001b0816200010f565b9392505050565b60805160a0516119f5620001ff6000396000818160ed0152818161117e0152611243015260008181610186015281816101b3015281816104c101526106e201526119f56000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638322fff2116100665780638322fff21461013857806386f041ba14610153578063ae8cb76314610166578063bd38837b1461016e578063c84eee0d1461018157600080fd5b806316f0115b146100a35780635509708c146100d3578063573ea575146100e857806358b272161461010f5780637e0b09b114610125575b600080fd5b6002546100b6906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e66100e1366004611668565b6101a8565b005b6100b67f000000000000000000000000000000000000000000000000000000000000000081565b6101176102ba565b6040516100ca9291906116dd565b6100e6610133366004611668565b6104b6565b6100b673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6001546100b6906001600160a01b031681565b61011761055e565b6000546100b6906001600160a01b031681565b6100b67f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461021f5760405162461bcd60e51b8152602060048201526017602482015276506f6b654d6552656164793a206f6e6c79506f6b654d6560481b60448201526064015b60405180910390fd5b6001546040516365189a7b60e11b81526001600160a01b038381166004830152600092839291169063ca3134f6906024015b600060405180830381600087803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102a791908101906117d7565b915091506102b582826106dd565b505050565b600060606000600160009054906101000a90046001600160a01b03166001600160a01b0316636847e50b6040518163ffffffff1660e01b815260040160006040518083038186803b15801561030e57600080fd5b505afa158015610322573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261034a9190810190611892565b905060005b815181101561049a5760015482516001600160a01b039091169063ffec70af90849084908110610381576103816118c7565b60200260200101516040518263ffffffff1660e01b81526004016103b491906001600160a01b0391909116815260200190565b60206040518083038186803b1580156103cc57600080fd5b505afa1580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040491906118dd565b156104885760019350637e0b09b160e01b828281518110610427576104276118c7565b602002602001015160405160240161044e91906001600160a01b0391909116815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152939492505050565b8061049281611915565b91505061034f565b5060006040518060200160405280600081525092509250509091565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105285760405162461bcd60e51b8152602060048201526017602482015276506f6b654d6552656164793a206f6e6c79506f6b654d6560481b6044820152606401610216565b600154604051638ac5d4a360e01b81526001600160a01b0383811660048301526000928392911690638ac5d4a390602401610251565b600060606000600160009054906101000a90046001600160a01b03166001600160a01b0316636847e50b6040518163ffffffff1660e01b815260040160006040518083038186803b1580156105b257600080fd5b505afa1580156105c6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105ee9190810190611892565b905060005b815181101561049a5760015482516001600160a01b0390911690632dbaacdc90849084908110610625576106256118c7565b60200260200101516040518263ffffffff1660e01b815260040161065891906001600160a01b0391909116815260200190565b60206040518083038186803b15801561067057600080fd5b505afa158015610684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a891906118dd565b156106cb5760019350635509708c60e01b828281518110610427576104276118c7565b806106d581611915565b9150506105f3565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b810c6366040518163ffffffff1660e01b8152600401604080518083038186803b15801561073857600080fd5b505afa15801561074c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107709190611930565b90925090506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156107aa576107a5848484610915565b6107b6565b6107b684848385610d26565b6107c08282611155565b60005b845181101561090e5760008482815181106107e0576107e06118c7565b602002602001015111156108fc57600254845161084d916001600160a01b031690869084908110610813576108136118c7565b602002602001015187848151811061082d5761082d6118c7565b60200260200101516001600160a01b031661126c9092919063ffffffff16565b60025485516001600160a01b03909116906347e7ef2490879084908110610876576108766118c7565b6020026020010151868481518110610890576108906118c7565b60200260200101516040518363ffffffff1660e01b81526004016108c99291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b1580156108e357600080fd5b505af11580156108f7573d6000803e3d6000fd5b505050505b8061090681611915565b9150506107c3565b5050505050565b60005b8351811015610d20576000805485516001600160a01b039091169063bd046e1a9087908590811061094b5761094b6118c7565b6020026020010151868581518110610965576109656118c7565b60200260200101516040518363ffffffff1660e01b815260040161099e9291906001600160a01b03929092168252602082015260400190565b60206040518083038186803b1580156109b657600080fd5b505afa1580156109ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ee9190611960565b905082811115610bdf576000805486516001600160a01b039091169063c0c3d39790889086908110610a2257610a226118c7565b6020026020010151866040518363ffffffff1660e01b8152600401610a5c9291906001600160a01b03929092168252602082015260400190565b60206040518083038186803b158015610a7457600080fd5b505afa158015610a88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aac9190611960565b9050610ad860008054906101000a90046001600160a01b03168288868151811061082d5761082d6118c7565b60005486516001600160a01b039091169063fcf5ee8d90889086908110610b0157610b016118c7565b6020026020010151836040518363ffffffff1660e01b8152600401610b3b9291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610b5557600080fd5b505af1158015610b69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8d9190611960565b50610bba81868581518110610ba457610ba46118c7565b60200260200101516113c390919063ffffffff16565b858481518110610bcc57610bcc6118c7565b6020026020010181815250505050610d20565b6000548451610c1e916001600160a01b031690869085908110610c0457610c046118c7565b602002602001015187858151811061082d5761082d6118c7565b60005485516001600160a01b039091169063fcf5ee8d90879085908110610c4757610c476118c7565b6020026020010151868581518110610c6157610c616118c7565b60200260200101516040518363ffffffff1660e01b8152600401610c9a9291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610cb457600080fd5b505af1158015610cc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cec9190611960565b506000848381518110610d0157610d016118c7565b6020026020010181815250505080610d1881611915565b915050610918565b50505050565b60005b845181101561090e576000805486516001600160a01b039091169063d868e12d90889085908110610d5c57610d5c6118c7565b6020026020010151878581518110610d7657610d766118c7565b60209081029190910101516040516001600160e01b031960e085901b1681526001600160a01b0392831660048201526024810191909152908716604482015260640160206040518083038186803b158015610dd057600080fd5b505afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190611960565b90508281111561100b576000805487516001600160a01b0390911690639994f75e90899086908110610e3c57610e3c6118c7565b602002602001015187898781518110610e5757610e576118c7565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b039384166004820152929091166024830152604482015260640160206040518083038186803b158015610eaf57600080fd5b505afa158015610ec3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee79190611960565b9050610f1360008054906101000a90046001600160a01b03168289868151811061082d5761082d6118c7565b60005487516001600160a01b03909116906373a1abe090899086908110610f3c57610f3c6118c7565b60209081029190910101516040516001600160e01b031960e084901b1681526001600160a01b039182166004820152602481018590529088166044820152606401602060405180830381600087803b158015610f9757600080fd5b505af1158015610fab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcf9190611960565b50610fe681878581518110610ba457610ba46118c7565b868481518110610ff857610ff86118c7565b602002602001018181525050505061090e565b600054855161104a916001600160a01b031690879085908110611030576110306118c7565b602002602001015188858151811061082d5761082d6118c7565b60005486516001600160a01b03909116906373a1abe090889085908110611073576110736118c7565b602002602001015187858151811061108d5761108d6118c7565b60209081029190910101516040516001600160e01b031960e085901b1681526001600160a01b03928316600482015260248101919091529087166044820152606401602060405180830381600087803b1580156110e957600080fd5b505af11580156110fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111219190611960565b506000858381518110611136576111366118c7565b602002602001018181525050508061114d81611915565b915050610d29565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561123d5760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360405160006040518083038185875af1925050503d80600081146111e7576040519150601f19603f3d011682016040523d82523d6000602084013e6111ec565b606091505b50509050806102b55760405162461bcd60e51b815260206004820152601e60248201527f5f7472616e736665723a20455448207472616e73666572206661696c656400006044820152606401610216565b611268817f0000000000000000000000000000000000000000000000000000000000000000846113d6565b5050565b8015806112f55750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156112bb57600080fd5b505afa1580156112cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f39190611960565b155b6113605760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610216565b6040516001600160a01b0383166024820152604481018290526102b590849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611406565b60006113cf8284611979565b9392505050565b6040516001600160a01b0383166024820152604481018290526102b590849063a9059cbb60e01b9060640161138c565b600061145b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114d89092919063ffffffff16565b8051909150156102b5578080602001905181019061147991906118dd565b6102b55760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610216565b60606114e784846000856114ef565b949350505050565b6060824710156115505760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610216565b843b61159e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610216565b600080866001600160a01b031685876040516115ba9190611990565b60006040518083038185875af1925050503d80600081146115f7576040519150601f19603f3d011682016040523d82523d6000602084013e6115fc565b606091505b509150915061160c828286611617565b979650505050505050565b606083156116265750816113cf565b8251156116365782518084602001fd5b8160405162461bcd60e51b815260040161021691906119ac565b6001600160a01b038116811461166557600080fd5b50565b60006020828403121561167a57600080fd5b81356113cf81611650565b60005b838110156116a0578181015183820152602001611688565b83811115610d205750506000910152565b600081518084526116c9816020860160208601611685565b601f01601f19169290920160200192915050565b82151581526040602082015260006114e760408301846116b1565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611737576117376116f8565b604052919050565b600067ffffffffffffffff821115611759576117596116f8565b5060051b60200190565b600082601f83011261177457600080fd5b815160206117896117848361173f565b61170e565b82815260059290921b840181019181810190868411156117a857600080fd5b8286015b848110156117cc5780516117bf81611650565b83529183019183016117ac565b509695505050505050565b600080604083850312156117ea57600080fd5b825167ffffffffffffffff8082111561180257600080fd5b61180e86838701611763565b935060209150818501518181111561182557600080fd5b85019050601f8101861361183857600080fd5b80516118466117848261173f565b81815260059190911b8201830190838101908883111561186557600080fd5b928401925b828410156118835783518252928401929084019061186a565b80955050505050509250929050565b6000602082840312156118a457600080fd5b815167ffffffffffffffff8111156118bb57600080fd5b6114e784828501611763565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156118ef57600080fd5b815180151581146113cf57600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611929576119296118ff565b5060010190565b6000806040838503121561194357600080fd5b82519150602083015161195581611650565b809150509250929050565b60006020828403121561197257600080fd5b5051919050565b60008282101561198b5761198b6118ff565b500390565b600082516119a2818460208701611685565b9190910192915050565b6020815260006113cf60208301846116b156fea26469706673582212203cb628351468fc14c2467fc120c87bd9349d426c818c1c044cf34a270f3398bd64736f6c63430008090033";

type ResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Resolver__factory extends ContractFactory {
  constructor(...args: ResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Resolver";
  }

  deploy(
    pokeMe_: string,
    marginLong_: string,
    pool_: string,
    converter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Resolver> {
    return super.deploy(
      pokeMe_,
      marginLong_,
      pool_,
      converter_,
      overrides || {}
    ) as Promise<Resolver>;
  }
  getDeployTransaction(
    pokeMe_: string,
    marginLong_: string,
    pool_: string,
    converter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      pokeMe_,
      marginLong_,
      pool_,
      converter_,
      overrides || {}
    );
  }
  attach(address: string): Resolver {
    return super.attach(address) as Resolver;
  }
  connect(signer: Signer): Resolver__factory {
    return super.connect(signer) as Resolver__factory;
  }
  static readonly contractName: "Resolver";
  public readonly contractName: "Resolver";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResolverInterface {
    return new utils.Interface(_abi) as ResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Resolver {
    return new Contract(address, _abi, signerOrProvider) as Resolver;
  }
}
