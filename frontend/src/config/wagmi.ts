import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

// Using Infura RPC for Sepolia
const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY || 'b086af5445304ba3b6339bcf12d72153';

export const config = getDefaultConfig({
  appName: 'Guide-S-FHE',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo-project-id',
  chains: [sepolia],
  ssr: true,
});

// Sepolia chain configuration
export const SEPOLIA_CHAIN_ID = 11155111;
export const SEPOLIA_RPC_URL = `https://sepolia.infura.io/v3/${INFURA_API_KEY}`;

// Contract addresses (update after deployment)
export const CONTRACT_ADDRESSES = {
  FHECounter: process.env.NEXT_PUBLIC_FHE_COUNTER_ADDRESS || '',
};

// FHEVM Relayer configuration
// Sử dụng relayer.testnet.zama.org thay vì relayer.testnet.zama.cloud
export const FHEVM_CONFIG = {
  relayerUrl: 'https://relayer.testnet.zama.org',
  chainId: SEPOLIA_CHAIN_ID,
};
