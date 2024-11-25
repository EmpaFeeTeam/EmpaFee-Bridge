import WormholeConnect, {
    nttRoutes,
    WormholeConnectTheme,
    WormholeConnectConfig,
} from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
    network: 'Mainnet',
    chains: ['Ethereum', 'Base', 'Bsc', 'Arbitrum', 'Solana'], // Chain list
    tokens: ["EPFeth", "EPFbase", "EPFbsc", "EPFarb", "EPFsol"], // Token keys
    ui: {
        defaultInputs: {
            fromChain: 'Ethereum', 
            toChain: 'Solana',
            tokenKey: 'EPFeth',
            requiredChain: 'Ethereum',
        },
        title: 'The EmpaFee Bridge',
        getHelpUrl: 'https://examplehelp.com/',
        menu: [
            {
                label: 'Support',
                href: 'https://examplehelp.com/support',
                target: '_blank',
                order: 1, // Order of appearance in the menu
            },
            {
                label: 'About',
                href: 'https://examplehelp.com/about',
                target: '_blank',
                order: 2,
            },
        ],
        showHamburgerMenu: true,
    },
    routes: [
        ...nttRoutes({
            tokens: {
                EPFntt: [
                    {
                        chain: 'Ethereum',
                        manager: '*******************************', // NTT Manager Address for Ethereum
                        token: '0x6f6707c06a50fA993FB8125a8eC6541d6b113680', // Token Address for EPF on Ethereum
                        transceiver: [
                            {
                                address: '*******************************', // Wormhole Transceiver Address for Ethereum
                                type: 'wormhole',
                            },
                        ],
                    },
                    {
                        chain: 'Base',
                        manager: '*************************', // NTT Manager Address for Base
                        token: '0x475047B17Aefe93ba9AEF423cF336253e1929208', // Token Address for EPF on Base
                        transceiver: [
                            {
                                address: '************************', // Wormhole Transceiver Address for Base
                                type: 'wormhole',
                            },
                        ],
                    },
                    {
                        chain: 'Arbitrum',
                        manager: '*******************************', // NTT Manager Address for Arbitrum
                        token: '0x9bd96Bc1db18E41084875C6d2B004f86d2DB75b6', // Token Address for EPF on Arbitrum
                        transceiver: [
                            {
                                address: '***************************', // Wormhole Transceiver Address for Arbitrum
                                type: 'wormhole',
                            },
                        ],
                    },
                    {
                        chain: 'Solana',
                        manager: '*******************************', // NTT Manager Address for Solana
                        token: 'GTigccQjmwEPUBDUpHyu2ud9FPsmbCjysHi8dGCRKcBv', // Token Address for EPF on Solana
                        transceiver: [
                            {
                                address: '*******************************', // Wormhole Transceiver Address for Solana
                                type: 'wormhole',
                            },
                        ],
                    },
                    {
                        chain: 'Bsc',
                        manager: '*******************************', // NTT Manager Address for BSC
                        token: '0xbf9e89BD70e7dBaA30d0faE636925b1A5d1C94F9', // Token Address for EPF on BSC
                        transceiver: [
                            {
                                address: '*******************************', // Wormhole Transceiver Address for BSC
                                type: 'wormhole',
                            },
                        ],
                    },
                ],
            },
        }),
    ],
    rpcs: {
        Ethereum: 'https://mainnet.infura.io/v3/************************',
        Solana: 'https://mainnet.helius-rpc.com/************************',
        Arbitrum: 'https://arbitrum-mainnet.infura.io/********************',
        Bsc: 'https://bsc-mainnet.infura.io/v3/*************************',
        Base: 'https://base-mainnet.infura.io/v3/*************************',
    },
    tokensConfig: {
        EPFeth: {
            key: 'EPFeth',
            symbol: 'EPF',
            nativeChain: 'Ethereum',
            icon: 'https://iili.io/dLH1Jzx.png',
            tokenId: {
                chain: 'Ethereum',
                address: '0x6f6707c06a50fA993FB8125a8eC6541d6b113680',
            },
            coinGeckoId: 'test',
            color: '#00C3D9',
            decimals: 18,
        },
        EPFbase: {
            key: 'EPFbase',
            symbol: 'EPF',
            nativeChain: 'Base',
            icon: 'https://iili.io/dLH1Jzx.png',
            tokenId: {
                chain: 'Base',
                address: '0x475047B17Aefe93ba9AEF423cF336253e1929208',
            },
            coinGeckoId: 'test',
            color: '#00C3D9',
            decimals: 18,
        },
        EPFarb: {
            key: 'EPFarb',
            symbol: 'EPF',
            nativeChain: 'Arbitrum',
            icon: 'https://iili.io/dLH1Jzx.png',
            tokenId: {
                chain: 'Arbitrum',
                address: '0x9bd96Bc1db18E41084875C6d2B004f86d2DB75b6',
            },
            coinGeckoId: 'test',
            color: '#00C3D9',
            decimals: 18,
        },
        EPFsol: {
            key: 'EPFsol',
            symbol: 'EPF',
            nativeChain: 'Solana',
            icon: 'https://iili.io/dLH1Jzx.png',
            tokenId: {
                chain: 'Solana',
                address: 'GTigccQjmwEPUBDUpHyu2ud9FPsmbCjysHi8dGCRKcBv',
            },
            coinGeckoId: 'test',
            color: '#00C3D9',
            decimals: 9,
        },
        EPFbsc: {
            key: 'EPFbsc',
            symbol: 'EPF',
            nativeChain: 'Bsc',
            icon: 'https://iili.io/dLH1Jzx.png',
            tokenId: {
                chain: 'Bsc',
                address: '0xbf9e89BD70e7dBaA30d0faE636925b1A5d1C94F9',
            },
            coinGeckoId: 'test',
            color: '#00C3D9',
            decimals: 18,
        },
    },
};

const theme: WormholeConnectTheme = {
    "mode": "light",
    "input": "#ebebeb",
    "primary": "#991313",
    "secondary": "#9e9e9e",
    "text": "#212121",
    "textSecondary": "#424242",
    "error": "#894c48",
    "success": "#4caf50",
    "badge": "#f9f9f9",
    "font": "\"fantom fusion\", sans-serif"
};

function App() {
    return (
        <WormholeConnect config={config} theme={theme} />
    )
}

export default App;
