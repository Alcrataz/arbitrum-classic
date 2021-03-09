/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import { RollupEventBridge } from './RollupEventBridge'

export class RollupEventBridgeFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _bridge: string,
    _rollup: string,
    overrides?: Overrides
  ): Promise<RollupEventBridge> {
    return super.deploy(
      _bridge,
      _rollup,
      overrides || {}
    ) as Promise<RollupEventBridge>
  }
  getDeployTransaction(
    _bridge: string,
    _rollup: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bridge, _rollup, overrides || {})
  }
  attach(address: string): RollupEventBridge {
    return super.attach(address) as RollupEventBridge
  }
  connect(signer: Signer): RollupEventBridgeFactory {
    return super.connect(signer) as RollupEventBridgeFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupEventBridge {
    return new Contract(address, _abi, signerOrProvider) as RollupEventBridge
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_rollup',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'InboxMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'InboxMessageDeliveredFromOrigin',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'claimNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'nodeConfirmed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'prev',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'asserter',
        type: 'address',
      },
    ],
    name: 'nodeCreated',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'nodeRejected',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'confirmPeriodBlocks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'extraChallengeTimeBlocks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'arbGasSpeedLimitPerBlock',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'baseStake',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'stakeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'extraConfig',
        type: 'bytes',
      },
    ],
    name: 'rollupInitialized',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'stakeCreated',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610a10380380610a108339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b031991821617909155600180549390921692169190911790556109968061007a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806316b9109b1461006757806330a826b41461008657806364126c7c146100a35780638b8ca199146100cf578063b0f2af2914610107578063f03c04a5146101a8575b600080fd5b6100846004803603602081101561007d57600080fd5b50356101d4565b005b6100846004803603602081101561009c57600080fd5b5035610255565b610084600480360360408110156100b957600080fd5b50803590602001356001600160a01b03166102d3565b610084600480360360808110156100e557600080fd5b50803590602081013590604081013590606001356001600160a01b03166104fa565b610084600480360360e081101561011d57600080fd5b8135916020810135916040820135916060810135916001600160a01b03608083013581169260a08101359091169181019060e0810160c082013564010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184600183028401116401000000008311171561019d57600080fd5b50909250905061059b565b610084600480360360408110156101be57600080fd5b506001600160a01b03813516906020013561079a565b6001546001600160a01b03163314610221576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600160f81b6020820152602180820184905282518083039091018152604190910190915261025290610834565b50565b6001546001600160a01b031633146102a2576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600160f91b6020820152602180820184905282518083039091018152604190910190915261025290610834565b6001546001600160a01b03163314610320576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60015460408051634f0f4aa960e01b81526004810185905290516001600160a01b03909216916000918391634f0f4aa991602480820192602092909190829003018186803b15801561037157600080fd5b505afa158015610385573d6000803e3d6000fd5b505050506040513d602081101561039b57600080fd5b5051604080516348b4573960e11b81526001600160a01b038681166004830152915192935090831691639168ae7291602480820192602092909190829003018186803b1580156103ea57600080fd5b505afa1580156103fe573d6000803e3d6000fd5b505050506040513d602081101561041457600080fd5b5051610454576040805162461bcd60e51b815260206004820152600a6024820152691393d517d4d51052d15160b21b604482015290519081900360640190fd5b816001600160a01b0316632b2af0ab856040518263ffffffff1660e01b81526004018082815260200191505060006040518083038186803b15801561049857600080fd5b505afa1580156104ac573d6000803e3d6000fd5b505060408051600160fa1b6020820152602181018890526001600160a01b0387166041808301919091528251808303909101815260619091019091526104f492509050610834565b50505050565b6001546001600160a01b03163314610547576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600060208201526021810186905260418101859052436061820152608181018490526001600160a01b03831660a1808301919091528251808303909101815260c19091019091526104f490610834565b6001546001600160a01b031633146105e8576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b6060888888888860601b60601c6001600160a01b03168860601b60601c6001600160a01b03168888604051602001808981526020018881526020018781526020018681526020018581526020018481526020018383808284376040805191909301818103601f190182528084526000805483516020808601919091206302bbfad160e01b855260048086015233602486015260448501529551939f50909d506001600160a01b03169b506302bbfad19a5060648082019a509398509096508690039091019350849250899150889050803b1580156106c557600080fd5b505af11580156106d9573d6000803e3d6000fd5b505050506040513d60208110156106ef57600080fd5b5051604080516020808252855182820152855193945084937fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b938793928392918301919085019080838360005b8381101561075457818101518382015260200161073c565b50505050905090810190601f1680156107815780820380516001836020036101000a031916815260200191505b509250505060405180910390a250505050505050505050565b6001546001600160a01b031633146107e7576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600360f81b60208201526001600160a01b0384166021820152604181018390524360618083019190915282518083039091018152608190910190915261083090610834565b5050565b600080548251602080850191909120604080516302bbfad160e01b8152600860048201523360248201526044810192909252516001600160a01b03909316936302bbfad193606480840194939192918390030190829087803b15801561089957600080fd5b505af11580156108ad573d6000803e3d6000fd5b505050506040513d60208110156108c357600080fd5b505160408051602080825284518282015284517fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b938693928392918301919085019080838360005b8381101561092357818101518382015260200161090b565b50505050905090810190601f1680156109505780820380516001836020036101000a031916815260200191505b509250505060405180910390a25056fea264697066735822122014a60b547891eb4dbf30e760eaaa31af1eb3dc9794863c441c6aa1bfe78c910b64736f6c634300060b0033'
