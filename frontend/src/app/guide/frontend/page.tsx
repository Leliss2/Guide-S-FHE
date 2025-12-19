import Link from 'next/link';

/**
 * Frontend Integration Page
 * 
 * Guide on connecting frontend with FHEVM contract.
 * Using Relayer SDK and wagmi/viem.
 */
export default function FrontendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full">
            Lesson 3/4
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-4">
            ⚡ Frontend Integration
          </h1>
          <p className="text-xl text-gray-400">
            Connecting React/Next.js with FHEVM contract on Sepolia
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 - Setup */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              1️⃣ Install Dependencies
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Use React template from Zama or install manually:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <code className="text-green-400">
                  npm install @rainbow-me/rainbowkit wagmi viem @tanstack/react-query
                </code>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-4">
                <h4 className="text-purple-300 font-semibold mb-2">📦 Main Packages:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <code className="text-yellow-300">wagmi</code>: React hooks for Ethereum</li>
                  <li>• <code className="text-yellow-300">viem</code>: TypeScript interface for Ethereum</li>
                  <li>• <code className="text-yellow-300">@rainbow-me/rainbowkit</code>: Wallet connection UI</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 - Wallet Config */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              2️⃣ Wallet Configuration
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Create wagmi config file for Sepolia:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300">{`// src/config/wagmi.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Guide-S-FHE',
  projectId: 'your-walletconnect-project-id',
  chains: [sepolia],
  ssr: true,
});

// Sepolia chain configuration
export const SEPOLIA_CHAIN_ID = 11155111;

// ⚠️ USE relayer.testnet.zama.org
export const FHEVM_CONFIG = {
  relayerUrl: 'https://relayer.testnet.zama.org',
  chainId: SEPOLIA_CHAIN_ID,
};`}</pre>
              </div>
            </div>
          </section>

          {/* Section 3 - Providers */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              3️⃣ Setup Providers
            </h2>
            <div className="text-gray-300 space-y-4">
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300">{`// src/components/Providers.tsx
'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@/config/wagmi';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}`}</pre>
              </div>
            </div>
          </section>

          {/* Section 4 - Wallet Guard */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              4️⃣ Wallet Requirement
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Create component that requires user to connect wallet and switch to Sepolia:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300">{`// src/components/WalletGuard.tsx
'use client';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const SEPOLIA_CHAIN_ID = 11155111;

export function WalletGuard({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  // Not connected
  if (!isConnected) {
    return (
      <div className="text-center">
        <h1>Please connect wallet</h1>
        <ConnectButton />
      </div>
    );
  }

  // Wrong network
  if (chainId !== SEPOLIA_CHAIN_ID) {
    return (
      <div className="text-center">
        <h1>Please switch to Sepolia</h1>
        <button onClick={() => switchChain({ chainId: SEPOLIA_CHAIN_ID })}>
          Switch to Sepolia
        </button>
      </div>
    );
  }

  return <>{children}</>;
}`}</pre>
              </div>
            </div>
          </section>

          {/* Section 5 - Contract Interaction */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              5️⃣ Contract Interaction
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Use wagmi hooks to read/write contract:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300">{`// src/hooks/useFHECounter.ts
import { useReadContract, useWriteContract } from 'wagmi';
import { FHECounterABI } from '@/abi/FHECounter';

const CONTRACT_ADDRESS = '0x...'; // Deployed contract address

export function useFHECounter() {
  // Read encrypted count value
  const { data: encryptedCount, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: FHECounterABI,
    functionName: 'getCount',
  });

  // Write: Increment
  const { writeContract } = useWriteContract();

  const increment = async (encryptedValue: string, proof: string) => {
    await writeContract({
      address: CONTRACT_ADDRESS,
      abi: FHECounterABI,
      functionName: 'increment',
      args: [encryptedValue, proof],
    });
  };

  return { encryptedCount, increment, refetch };
}`}</pre>
              </div>
            </div>
          </section>

          {/* Section 6 - Encryption/Decryption */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              6️⃣ Encryption/Decryption
            </h2>
            <div className="text-gray-300 space-y-4">
              <div className="bg-orange-900/30 rounded-xl p-4 mb-4">
                <h4 className="text-orange-300 font-semibold mb-2">⚠️ Important Note:</h4>
                <p className="text-sm">
                  Use <code className="text-yellow-300">relayer.testnet.zama.org</code> instead of 
                  <code className="text-gray-500"> relayer.testnet.zama.cloud</code> for API endpoint.
                </p>
              </div>
              
              <p>Encrypt value before sending:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300">{`// Create encrypted input
const fhevmInstance = await createFhevmInstance({
  chainId: SEPOLIA_CHAIN_ID,
  relayerUrl: 'https://relayer.testnet.zama.org',
});

// Encrypt value (example: 1)
const encryptedInput = await fhevmInstance
  .createEncryptedInput(contractAddress, userAddress)
  .add32(1) // Add uint32 value
  .encrypt();

// Get handle and proof
const encryptedValue = encryptedInput.handles[0];
const inputProof = encryptedInput.inputProof;

// Call contract with encrypted value
await contract.increment(encryptedValue, inputProof);`}</pre>
              </div>

              <p className="mt-6">Decrypt value from contract:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300">{`// Get encrypted count from contract
const encryptedCount = await contract.getCount();

// Decrypt (requires permission - granted by FHE.allow())
const clearValue = await fhevmInstance.decrypt(
  contractAddress,
  encryptedCount
);

console.log('Count value:', clearValue);`}</pre>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Best Practices
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">1.</span>
                <p className="text-gray-300">
                  <strong className="text-white">Check network</strong>: Always verify user is on Sepolia before allowing interaction
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">2.</span>
                <p className="text-gray-300">
                  <strong className="text-white">Handle loading states</strong>: Encryption and transactions take time, show loading UI
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">3.</span>
                <p className="text-gray-300">
                  <strong className="text-white">Error handling</strong>: Handle errors from Relayer and contract calls
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">4.</span>
                <p className="text-gray-300">
                  <strong className="text-white">Cache encrypted values</strong>: Avoid re-encrypting the same value multiple times
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/guide/smart-contract"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Smart Contract
          </Link>
          <Link 
            href="/guide/demo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Next: Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}