# EmpaFee Bridge

Welcome to the **EmpaFee Bridge** repository! This project enables seamless cross-chain token transfers, making it simple to move your **EmpaFee (EPF)** tokens between five supported blockchains: Ethereum, Base, Binance Smart Chain (BSC), Arbitrum, and Solana.

## Overview

The EmpaFee Bridge leverages Wormhole technology to facilitate efficient, decentralized token transfers. It supports the bridging of the EPF token across multiple chains with a user-friendly interface and customizable configuration.

Key Features:
- Supports **Ethereum**, **Base**, **BSC**, **Arbitrum**, and **Solana**.
- Fully customizable UI and theme.
- Cross-chain compatibility with EPF tokens using Wormhole's secure infrastructure.
- No additional fees beyond standard gas costs.

## Configuration

The app is built using the Wormhole Connect library, with the configuration tailored to the EmpaFee token:

- **Chains Supported**: Ethereum, Base, BSC, Arbitrum, Solana.
- **Tokens Supported**: EPF tokens on each chain.
- **RPC Endpoints**: Infura and Helius for robust and fast connectivity.
- **Custom Theme**: The bridge uses a clean, light theme with brand-specific styling.

### Key Configuration Snippet

```javascript
const config: WormholeConnectConfig = {
    network: 'Mainnet',
    chains: ['Ethereum', 'Base', 'Bsc', 'Arbitrum', 'Solana'],
    tokens: ["EPFeth", "EPFbase", "EPFbsc", "EPFarb", "EPFsol"],
    ui: {
        defaultInputs: {
            fromChain: 'Ethereum',
            toChain: 'Solana',
            tokenKey: 'EPFeth',
            requiredChain: 'Ethereum',
        },
        title: 'The EmpaFee Bridge',
        getHelpUrl: 'https://examplehelp.com/',
    },
    routes: [
        ...nttRoutes({
            tokens: {
                EPFntt: [
                    // Route definitions for all chains
                ],
            },
        }),
    ],
    rpcs: {
        Ethereum: 'https://mainnet.infura.io/v3/your-infura-api-key',
        Solana: 'https://mainnet.helius-rpc.com/?api-key=your-api-key',
        Arbitrum: 'https://arbitrum-mainnet.infura.io/v3/your-infura-api-key',
        Bsc: 'https://bsc-mainnet.infura.io/v3/your-infura-api-key',
        Base: 'https://base-mainnet.infura.io/v3/your-infura-api-key',
    },
    tokensConfig: {
        EPFeth: {
            key: 'EPFeth',
            symbol: 'EPF',
            nativeChain: 'Ethereum',
            decimals: 18,
        },
        // Other tokens...
    },
};
