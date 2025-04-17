const ABI = [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
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
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'burn',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'BelowMinimumK',
      type: 'error',
    },
    {
      inputs: [],
      name: 'claimFees',
      outputs: [
        {
          internalType: 'uint256',
          name: 'claimed0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'claimed1',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DepositsNotEqual',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FactoryAlreadySet',
      type: 'error',
    },
    {
      inputs: [],
      name: 'getK',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'InsufficientInputAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientLiquidity',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientLiquidityBurned',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientLiquidityMinted',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientOutputAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidTo',
      type: 'error',
    },
    {
      inputs: [],
      name: 'IsPaused',
      type: 'error',
    },
    {
      inputs: [],
      name: 'K',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotEmergencyCouncil',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'str',
          type: 'string',
        },
      ],
      name: 'StringTooLong',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      name: 'Burn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      name: 'Claim',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'EIP712DomainChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      name: 'Fees',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_token0',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_token1',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: '_stable',
          type: 'bool',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '__name',
          type: 'string',
        },
      ],
      name: 'setName',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '__symbol',
          type: 'string',
        },
      ],
      name: 'setSymbol',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'skim',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount0Out',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount1Out',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'swap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0In',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1In',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0Out',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1Out',
          type: 'uint256',
        },
      ],
      name: 'Swap',
      type: 'event',
    },
    {
      inputs: [],
      name: 'sync',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reserve0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reserve1',
          type: 'uint256',
        },
      ],
      name: 'Sync',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'claimable0',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'claimable1',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'currentCumulativePrices',
      outputs: [
        {
          internalType: 'uint256',
          name: 'reserve0Cumulative',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserve1Cumulative',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'blockTimestamp',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'eip712Domain',
      outputs: [
        {
          internalType: 'bytes1',
          name: 'fields',
          type: 'bytes1',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'version',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'chainId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'verifyingContract',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
        {
          internalType: 'uint256[]',
          name: 'extensions',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'factory',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'tokenIn',
          type: 'address',
        },
      ],
      name: 'getAmountOut',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '_reserve0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_reserve1',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_blockTimestampLast',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'index0',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'index1',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lastObservation',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'timestamp',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'reserve0Cumulative',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'reserve1Cumulative',
              type: 'uint256',
            },
          ],
          internalType: 'struct IPool.Observation',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'metadata',
      outputs: [
        {
          internalType: 'uint256',
          name: 'dec0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'dec1',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'r0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'r1',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'st',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: 't0',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 't1',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'nonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'observationLength',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'observations',
      outputs: [
        {
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserve0Cumulative',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserve1Cumulative',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'periodSize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'poolFees',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenIn',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'points',
          type: 'uint256',
        },
      ],
      name: 'prices',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenIn',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'granularity',
          type: 'uint256',
        },
      ],
      name: 'quote',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountOut',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenIn',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'points',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'window',
          type: 'uint256',
        },
      ],
      name: 'sample',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stable',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'supplyIndex0',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'supplyIndex1',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token0',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token1',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'tokens',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
      ],
      name: 'createPool',
      outputs: [
        {
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'uint24',
          name: 'fee',
          type: 'uint24',
        },
      ],
      name: 'createPool',
      outputs: [
        {
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_implementation',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'FeeInvalid',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FeeTooHigh',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidPool',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotFeeManager',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotPauser',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotVoter',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PoolAlreadyExists',
      type: 'error',
    },
    {
      inputs: [],
      name: 'SameAddress',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'fee',
          type: 'uint256',
        },
      ],
      name: 'setCustomFee',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: '_stable',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: '_fee',
          type: 'uint256',
        },
      ],
      name: 'setFee',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_feeManager',
          type: 'address',
        },
      ],
      name: 'setFeeManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ZeroAddress',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ZeroFee',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'token0',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'token1',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'PoolCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fee',
          type: 'uint256',
        },
      ],
      name: 'SetCustomFee',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'feeManager',
          type: 'address',
        },
      ],
      name: 'SetFeeManager',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_pauser',
          type: 'address',
        },
      ],
      name: 'setPauser',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: 'SetPauseState',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'pauser',
          type: 'address',
        },
      ],
      name: 'SetPauser',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: '_state',
          type: 'bool',
        },
      ],
      name: 'setPauseState',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_voter',
          type: 'address',
        },
      ],
      name: 'setVoter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'SetVoter',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allPools',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'allPoolsLength',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'customFee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'feeManager',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: '_stable',
          type: 'bool',
        },
      ],
      name: 'getFee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
      ],
      name: 'getPool',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
      ],
      name: 'isPool',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_FEE',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pauser',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stableFee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'volatileFee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'voter',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ZERO_FEE_INDICATOR',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'amountADesired',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountBDesired',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountAMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountBMin',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'addLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'amountTokenDesired',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountTokenMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountETHMin',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'addLiquidityETH',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountToken',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountETH',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IOmnidromeWaitlist',
          name: '_wl',
          type: 'address',
        },
        {
          internalType: 'contract IOmnidromeRegistry',
          name: '_registry',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_forwarder',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_feeManager',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_factoryRegistry',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_voter',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_weth',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'ETHTransferFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Expired',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientAmountA',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientAmountADesired',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientAmountAOptimal',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientAmountB',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientAmountBDesired',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientLiquidity',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientOutputAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidAmountInForETHDeposit',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidPath',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidRouteA',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidRouteB',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidTokenInForETHDeposit',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyWETH',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PoolDoesNotExist',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PoolFactoryDoesNotExist',
      type: 'error',
    },
    {
      inputs: [],
      name: 'SameAddresses',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountOutMin',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'ref',
          type: 'address',
        },
      ],
      name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountOutMin',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'ref',
          type: 'address',
        },
      ],
      name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountOutMin',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'ref',
          type: 'address',
        },
      ],
      name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'UNSAFE_swapExactTokensForTokens',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenIn',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountInA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountInB',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'tokenA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'tokenB',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amountOutMinA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountOutMinB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountAMin',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountBMin',
              type: 'uint256',
            },
          ],
          internalType: 'struct IRouter.Zap',
          name: 'zapInPool',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesA',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesB',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stake',
          type: 'bool',
        },
      ],
      name: 'zapIn',
      outputs: [
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ZeroAddress',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'tokenOut',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'tokenReward',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'ReferralRewardPaid',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountAMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountBMin',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'removeLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountB',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountTokenMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountETHMin',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'removeLiquidityETH',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountToken',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountETH',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountTokenMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountETHMin',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountETH',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountOutMin',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'ref',
          type: 'address',
        },
      ],
      name: 'swapExactETHForTokens',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountOutMin',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'ref',
          type: 'address',
        },
      ],
      name: 'swapExactTokensForETH',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountOutMin',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'ref',
          type: 'address',
        },
      ],
      name: 'swapExactTokensForTokens',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenOut',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'tokenA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'tokenB',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amountOutMinA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountOutMinB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountAMin',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountBMin',
              type: 'uint256',
            },
          ],
          internalType: 'struct IRouter.Zap',
          name: 'zapOutPool',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesA',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesB',
          type: 'tuple[]',
        },
      ],
      name: 'zapOut',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
    {
      inputs: [],
      name: 'defaultFactory',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ETHER',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'factoryRegistry',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'feeManager',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountInA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountInB',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesA',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesB',
          type: 'tuple[]',
        },
      ],
      name: 'generateZapInParams',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountOutMinA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountOutMinB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountAMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountBMin',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesA',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routesB',
          type: 'tuple[]',
        },
      ],
      name: 'generateZapOutParams',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountOutMinA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountOutMinB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountAMin',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountBMin',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountIn',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
          ],
          internalType: 'struct IRouter.Route[]',
          name: 'routes',
          type: 'tuple[]',
        },
      ],
      name: 'getAmountsOut',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
      ],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: 'reserveA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveB',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'forwarder',
          type: 'address',
        },
      ],
      name: 'isTrustedForwarder',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
      ],
      name: 'poolFor',
      outputs: [
        {
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amountADesired',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountBDesired',
          type: 'uint256',
        },
      ],
      name: 'quoteAddLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'stable',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      name: 'quoteRemoveLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amountA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amountB',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
      ],
      name: 'quoteStableLiquidityRatio',
      outputs: [
        {
          internalType: 'uint256',
          name: 'ratio',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'registry',
      outputs: [
        {
          internalType: 'contract IOmnidromeRegistry',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
      ],
      name: 'sortTokens',
      outputs: [
        {
          internalType: 'address',
          name: 'token0',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'token1',
          type: 'address',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'voter',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'weth',
      outputs: [
        {
          internalType: 'contract IWETH',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'wl',
      outputs: [
        {
          internalType: 'contract IOmnidromeWaitlist',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_factory',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'srcLen',
          type: 'uint8',
        },
        {
          internalType: 'contract IERC20Metadata[]',
          name: 'connectors',
          type: 'address[]',
        },
      ],
      name: 'calculateManyRates',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'rates',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'factory',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'qty',
          type: 'uint256',
        },
        {
          internalType: 'contract IERC20Metadata',
          name: 'token0',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata',
          name: 'token1',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata[]',
          name: 'baseCurrencies',
          type: 'address[]',
        },
      ],
      name: 'getBestPath',
      outputs: [
        {
          internalType: 'uint256',
          name: 'bestAmount',
          type: 'uint256',
        },
        {
          internalType: 'address[]',
          name: 'bestPath',
          type: 'address[]',
        },
        {
          internalType: 'bool[]',
          name: 'isStablePath',
          type: 'bool[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IERC20Metadata',
          name: 'targetTokenAddress',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata[]',
          name: 'baseCurrencies',
          type: 'address[]',
        },
        {
          internalType: 'address',
          name: '_Router',
          type: 'address',
        },
      ],
      name: 'honeyCheck',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'buyResult',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenBalance2',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'sellResult',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'buyCost',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'sellCost',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expectedAmount',
              type: 'uint256',
            },
          ],
          internalType: 'struct OmniHelper.HoneyResponse',
          name: 'response',
          type: 'tuple',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'guy',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'withdraw',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'deposit',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          name: 'guy',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          name: 'dst',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'dst',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Deposit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Withdrawal',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'addBonus',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'adr',
          type: 'address',
        },
      ],
      name: 'authorize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
      ],
      name: 'BonusRedeemed',
      type: 'event',
    },
    {
      inputs: [],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newPoints',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newRank',
          type: 'uint256',
        },
      ],
      name: 'LeaderboardUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'userAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'redeemBonus',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'referrer',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'referral',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'level',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'RefBonus',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'removeBonus',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256[3]',
          name: 'newPercents',
          type: 'uint256[3]',
        },
      ],
      name: 'setRefPercents',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'topupUser',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'adr',
          type: 'address',
        },
      ],
      name: 'unauthorize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
      ],
      name: 'Welcome',
      type: 'event',
    },
    {
      inputs: [],
      name: 'bonus',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLeaderboard',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'points',
              type: 'uint256',
            },
          ],
          internalType: 'struct OmnidromeWaitlist.TopUsers[20]',
          name: 'leaderboard',
          type: 'tuple[20]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'adr',
          type: 'address',
        },
      ],
      name: 'isAuthorized',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'isRegistered',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'lastUserBonus',
      outputs: [
        {
          internalType: 'uint256',
          name: 'day',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxDailyDirectBonus',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'participants',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'referralRegistry',
      outputs: [
        {
          internalType: 'contract IREGISTRY',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'refPercents',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'today',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'topUsers',
      outputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'points',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalPoints',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalRefBonus',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'UserBonus',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'userAddress',
          type: 'address',
        },
      ],
      name: 'userData',
      outputs: [
        {
          internalType: 'uint256',
          name: 'directRefs',
          type: 'uint256',
        },
        {
          internalType: 'uint256[]',
          name: 'multiLevelRef',
          type: 'uint256[]',
        },
        {
          internalType: 'uint256',
          name: 'teamSize',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'UserRedeemed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'zeroTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_voter',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_registry',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'MAX_EPOCHS',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_FACTORIES',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_REWARDS',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'WEEK',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'poolAddr',
          type: 'address',
        },
      ],
      name: 'constructPoolData',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string',
            },
            {
              internalType: 'uint8',
              name: 'decimals',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'totalSupply',
              type: 'uint256',
            },
          ],
          internalType: 'struct LpHelper.PoolData',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_gauge',
          type: 'address',
        },
      ],
      name: 'epochLatestByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'ts',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'emissions',
              type: 'uint256',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.LpEpochReward[]',
              name: 'bribes',
              type: 'tuple[]',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.LpEpochReward[]',
              name: 'fees',
              type: 'tuple[]',
            },
          ],
          internalType: 'struct LpHelper.LpEpoch',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_limit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_offset',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_address',
          type: 'address',
        },
      ],
      name: 'epochsByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'ts',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'emissions',
              type: 'uint256',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.LpEpochReward[]',
              name: 'bribes',
              type: 'tuple[]',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.LpEpochReward[]',
              name: 'fees',
              type: 'tuple[]',
            },
          ],
          internalType: 'struct LpHelper.LpEpoch[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_limit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_offset',
          type: 'uint256',
        },
      ],
      name: 'epochsLatest',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'ts',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'emissions',
              type: 'uint256',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.LpEpochReward[]',
              name: 'bribes',
              type: 'tuple[]',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'amount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.LpEpochReward[]',
              name: 'fees',
              type: 'tuple[]',
            },
          ],
          internalType: 'struct LpHelper.LpEpoch[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_limit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_offset',
          type: 'uint256',
        },
      ],
      name: 'forSwaps',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'stable',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'token0',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'token1',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'factory',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'poolFee',
              type: 'uint256',
            },
          ],
          internalType: 'struct LpHelper.SwapLp[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'pageNumber',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'pageLength',
          type: 'uint256',
        },
        {
          internalType: 'contract IPoolFactory',
          name: 'factory',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getLPDetailsPaginated',
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'lp',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factory',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'stable',
                  type: 'bool',
                },
                {
                  internalType: 'uint256',
                  name: 'totalSupply',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolData',
              name: 'poolData',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token0',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token1',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'gauge',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'gaugeTotalSupply',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'emissions',
                  type: 'uint256',
                },
                {
                  internalType: 'address',
                  name: 'emissionsToken',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'emissionsDecimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'emissionSymbol',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'gaugeAlive',
                  type: 'bool',
                },
              ],
              internalType: 'struct LpHelper.PoolGauge',
              name: 'gauge',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'feeAddress',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'bribeAddress',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factoryAddress',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'poolFee',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'token0Fees',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'token1Fees',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolFee',
              name: 'fee',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'accountBalance',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'accountEarned',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'accountStaked',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'claimable0',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'claimable1',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.Account',
              name: 'account',
              type: 'tuple',
            },
          ],
          internalType: 'struct LpHelper.PoolMetadataExtended[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'poolAddr',
          type: 'address',
        },
      ],
      name: 'getPoolDetailsByAddress',
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'lp',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factory',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'stable',
                  type: 'bool',
                },
                {
                  internalType: 'uint256',
                  name: 'totalSupply',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolData',
              name: 'poolData',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token0',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token1',
              type: 'tuple',
            },
          ],
          internalType: 'struct LpHelper.PoolMetadata',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'poolAddr',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'acct',
          type: 'address',
        },
      ],
      name: 'getPoolDetailsByAddressV2',
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'lp',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factory',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'stable',
                  type: 'bool',
                },
                {
                  internalType: 'uint256',
                  name: 'totalSupply',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolData',
              name: 'poolData',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token0',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token1',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'gauge',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'gaugeTotalSupply',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'emissions',
                  type: 'uint256',
                },
                {
                  internalType: 'address',
                  name: 'emissionsToken',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'emissionsDecimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'emissionSymbol',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'gaugeAlive',
                  type: 'bool',
                },
              ],
              internalType: 'struct LpHelper.PoolGauge',
              name: 'gauge',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'feeAddress',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'bribeAddress',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factoryAddress',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'poolFee',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'token0Fees',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'token1Fees',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolFee',
              name: 'fee',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'accountBalance',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'accountEarned',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'accountStaked',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'claimable0',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'claimable1',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.Account',
              name: 'account',
              type: 'tuple',
            },
          ],
          internalType: 'struct LpHelper.PoolMetadataExtended',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'pIndex',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'factoryIndex',
          type: 'uint8',
        },
      ],
      name: 'getPoolDetailsByIndex',
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'lp',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factory',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'stable',
                  type: 'bool',
                },
                {
                  internalType: 'uint256',
                  name: 'totalSupply',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolData',
              name: 'poolData',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token0',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token1',
              type: 'tuple',
            },
          ],
          internalType: 'struct LpHelper.PoolMetadata',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'pageNumber',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'pageLength',
          type: 'uint256',
        },
        {
          internalType: 'contract IPoolFactory',
          name: 'factory',
          type: 'address',
        },
      ],
      name: 'getPoolDetailsPaginated',
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: 'address',
                  name: 'lp',
                  type: 'address',
                },
                {
                  internalType: 'address',
                  name: 'factory',
                  type: 'address',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'bool',
                  name: 'stable',
                  type: 'bool',
                },
                {
                  internalType: 'uint256',
                  name: 'totalSupply',
                  type: 'uint256',
                },
              ],
              internalType: 'struct LpHelper.PoolData',
              name: 'poolData',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token0',
              type: 'tuple',
            },
            {
              components: [
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint8',
                  name: 'decimals',
                  type: 'uint8',
                },
                {
                  internalType: 'uint256',
                  name: 'reserve',
                  type: 'uint256',
                },
                {
                  internalType: 'string',
                  name: 'name',
                  type: 'string',
                },
                {
                  internalType: 'string',
                  name: 'symbol',
                  type: 'string',
                },
              ],
              internalType: 'struct LpHelper.PoolToken',
              name: 'token1',
              type: 'tuple',
            },
          ],
          internalType: 'struct LpHelper.PoolMetadata[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'lp',
          type: 'address',
        },
        {
          internalType: 'contract IRates',
          name: 'rateHelper',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata',
          name: 'wCoin',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata[]',
          name: 'baseCurrencies',
          type: 'address[]',
        },
      ],
      name: 'quote1LpInBaseToken',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'contract IRates',
          name: 'rateHelper',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata',
          name: 'wCoin',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata[]',
          name: 'baseCurrencies',
          type: 'address[]',
        },
      ],
      name: 'quote1TokenInBaseToken',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'registry',
      outputs: [
        {
          internalType: 'contract IFactoryRegistry',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_limit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_offset',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_venft_id',
          type: 'uint256',
        },
      ],
      name: 'rewards',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'venft_id',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'token',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'fee',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'bribe',
              type: 'address',
            },
          ],
          internalType: 'struct LpHelper.Reward[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_venft_id',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_pool',
          type: 'address',
        },
      ],
      name: 'rewardsByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'venft_id',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'lp',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'token',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'fee',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'bribe',
              type: 'address',
            },
          ],
          internalType: 'struct LpHelper.Reward[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_limit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_offset',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_account',
          type: 'address',
        },
      ],
      name: 'tokens',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'tokenAddress',
              type: 'address',
            },
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string',
            },
            {
              internalType: 'uint8',
              name: 'decimals',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'accountBalance',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'listed',
              type: 'bool',
            },
          ],
          internalType: 'struct LpHelper.Token[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'voter',
      outputs: [
        {
          internalType: 'contract IVoter',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  
module.exports = ABI;
    
