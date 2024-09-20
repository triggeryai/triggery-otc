/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ITManToken,
  ITManTokenInterface,
} from "../../contracts/ITManToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f49544d616e546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f49544d000000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000366565b508060049080519060200190620000af92919062000366565b505050620000d2620000c66200011760201b60201c565b6200011f60201b60201c565b6200011133620000e7620001e560201b60201c565b600a620000f5919062000556565b620f424062000105919062000693565b620001ee60201b60201c565b620007d5565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000258906200044e565b60405180910390fd5b62000275600083836200035c60201b60201c565b80600260008282546200028991906200049e565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200033c919062000470565b60405180910390a362000358600083836200036160201b60201c565b5050565b505050565b505050565b82805462000374906200070b565b90600052602060002090601f016020900481019282620003985760008555620003e4565b82601f10620003b357805160ff1916838001178555620003e4565b82800160010185558215620003e4579182015b82811115620003e3578251825591602001919060010190620003c6565b5b509050620003f39190620003f7565b5090565b5b8082111562000412576000816000905550600101620003f8565b5090565b600062000425601f836200048d565b91506200043282620007ac565b602082019050919050565b6200044881620006f4565b82525050565b60006020820190508181036000830152620004698162000416565b9050919050565b60006020820190506200048760008301846200043d565b92915050565b600082825260208201905092915050565b6000620004ab82620006f4565b9150620004b883620006f4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004f057620004ef62000741565b5b828201905092915050565b6000808291508390505b60018511156200054d5780860481111562000525576200052462000741565b5b6001851615620005355780820291505b808102905062000545856200079f565b945062000505565b94509492505050565b60006200056382620006f4565b91506200057083620006fe565b92506200059f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005a7565b905092915050565b600082620005b957600190506200068c565b81620005c957600090506200068c565b8160018114620005e25760028114620005ed5762000623565b60019150506200068c565b60ff84111562000602576200060162000741565b5b8360020a9150848211156200061c576200061b62000741565b5b506200068c565b5060208310610133831016604e8410600b84101617156200065d5782820a90508381111562000657576200065662000741565b5b6200068c565b6200066c8484846001620004fb565b9250905081840481111562000686576200068562000741565b5b81810290505b9392505050565b6000620006a082620006f4565b9150620006ad83620006f4565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620006e957620006e862000741565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200072457607f821691505b602082108114156200073b576200073a62000770565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6117fd80620007e56000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f91906111c2565b60405180910390f35b610132600480360381019061012d9190610f7d565b6103b4565b60405161013f91906111a7565b60405180910390f35b6101506103d7565b60405161015d9190611324565b60405180910390f35b610180600480360381019061017b9190610f2e565b6103e1565b60405161018d91906111a7565b60405180910390f35b61019e610410565b6040516101ab919061133f565b60405180910390f35b6101ce60048036038101906101c99190610f7d565b610419565b6040516101db91906111a7565b60405180910390f35b6101fe60048036038101906101f99190610f7d565b610450565b005b61021a60048036038101906102159190610ec9565b610466565b6040516102279190611324565b60405180910390f35b6102386104ae565b005b6102426104c2565b60405161024f919061118c565b60405180910390f35b6102606104ec565b60405161026d91906111c2565b60405180910390f35b610290600480360381019061028b9190610f7d565b61057e565b60405161029d91906111a7565b60405180910390f35b6102c060048036038101906102bb9190610f7d565b6105f5565b6040516102cd91906111a7565b60405180910390f35b6102f060048036038101906102eb9190610ef2565b610618565b6040516102fd9190611324565b60405180910390f35b610320600480360381019061031b9190610ec9565b61069f565b005b60606003805461033190611454565b80601f016020809104026020016040519081016040528092919081815260200182805461035d90611454565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610723565b90506103cc81858561072b565b600191505092915050565b6000600254905090565b6000806103ec610723565b90506103f98582856108f6565b610404858585610982565b60019150509392505050565b60006012905090565b600080610424610723565b90506104458185856104368589610618565b6104409190611376565b61072b565b600191505092915050565b610458610bfa565b6104628282610c78565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104b6610bfa565b6104c06000610dcf565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104fb90611454565b80601f016020809104026020016040519081016040528092919081815260200182805461052790611454565b80156105745780601f1061054957610100808354040283529160200191610574565b820191906000526020600020905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b600080610589610723565b905060006105978286610618565b9050838110156105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d3906112e4565b60405180910390fd5b6105e9828686840361072b565b60019250505092915050565b600080610600610723565b905061060d818585610982565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106a7610bfa565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070e90611204565b60405180910390fd5b61072081610dcf565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561079b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610792906112c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080290611224565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108e99190611324565b60405180910390a3505050565b60006109028484610618565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461097c578181101561096e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096590611244565b60405180910390fd5b61097b848484840361072b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e9906112a4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a59906111e4565b60405180910390fd5b610a6d838383610e95565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610af3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aea90611264565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610be19190611324565b60405180910390a3610bf4848484610e9a565b50505050565b610c02610723565b73ffffffffffffffffffffffffffffffffffffffff16610c206104c2565b73ffffffffffffffffffffffffffffffffffffffff1614610c76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6d90611284565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ce8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdf90611304565b60405180910390fd5b610cf460008383610e95565b8060026000828254610d069190611376565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610db79190611324565b60405180910390a3610dcb60008383610e9a565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081359050610eae81611799565b92915050565b600081359050610ec3816117b0565b92915050565b600060208284031215610edb57600080fd5b6000610ee984828501610e9f565b91505092915050565b60008060408385031215610f0557600080fd5b6000610f1385828601610e9f565b9250506020610f2485828601610e9f565b9150509250929050565b600080600060608486031215610f4357600080fd5b6000610f5186828701610e9f565b9350506020610f6286828701610e9f565b9250506040610f7386828701610eb4565b9150509250925092565b60008060408385031215610f9057600080fd5b6000610f9e85828601610e9f565b9250506020610faf85828601610eb4565b9150509250929050565b610fc2816113cc565b82525050565b610fd1816113de565b82525050565b6000610fe28261135a565b610fec8185611365565b9350610ffc818560208601611421565b611005816114e4565b840191505092915050565b600061101d602383611365565b9150611028826114f5565b604082019050919050565b6000611040602683611365565b915061104b82611544565b604082019050919050565b6000611063602283611365565b915061106e82611593565b604082019050919050565b6000611086601d83611365565b9150611091826115e2565b602082019050919050565b60006110a9602683611365565b91506110b48261160b565b604082019050919050565b60006110cc602083611365565b91506110d78261165a565b602082019050919050565b60006110ef602583611365565b91506110fa82611683565b604082019050919050565b6000611112602483611365565b915061111d826116d2565b604082019050919050565b6000611135602583611365565b915061114082611721565b604082019050919050565b6000611158601f83611365565b915061116382611770565b602082019050919050565b6111778161140a565b82525050565b61118681611414565b82525050565b60006020820190506111a16000830184610fb9565b92915050565b60006020820190506111bc6000830184610fc8565b92915050565b600060208201905081810360008301526111dc8184610fd7565b905092915050565b600060208201905081810360008301526111fd81611010565b9050919050565b6000602082019050818103600083015261121d81611033565b9050919050565b6000602082019050818103600083015261123d81611056565b9050919050565b6000602082019050818103600083015261125d81611079565b9050919050565b6000602082019050818103600083015261127d8161109c565b9050919050565b6000602082019050818103600083015261129d816110bf565b9050919050565b600060208201905081810360008301526112bd816110e2565b9050919050565b600060208201905081810360008301526112dd81611105565b9050919050565b600060208201905081810360008301526112fd81611128565b9050919050565b6000602082019050818103600083015261131d8161114b565b9050919050565b6000602082019050611339600083018461116e565b92915050565b6000602082019050611354600083018461117d565b92915050565b600081519050919050565b600082825260208201905092915050565b60006113818261140a565b915061138c8361140a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113c1576113c0611486565b5b828201905092915050565b60006113d7826113ea565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561143f578082015181840152602081019050611424565b8381111561144e576000848401525b50505050565b6000600282049050600182168061146c57607f821691505b602082108114156114805761147f6114b5565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6117a2816113cc565b81146117ad57600080fd5b50565b6117b98161140a565b81146117c457600080fd5b5056fea264697066735822122039c8ce95df4c93ea9b6841685a8e5e5d15b37a0f4a9098c5ba2b868339218e0264736f6c63430008040033";

type ITManTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ITManTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ITManToken__factory extends ContractFactory {
  constructor(...args: ITManTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ITManToken> {
    return super.deploy(overrides || {}) as Promise<ITManToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ITManToken {
    return super.attach(address) as ITManToken;
  }
  override connect(signer: Signer): ITManToken__factory {
    return super.connect(signer) as ITManToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ITManTokenInterface {
    return new utils.Interface(_abi) as ITManTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITManToken {
    return new Contract(address, _abi, signerOrProvider) as ITManToken;
  }
}
