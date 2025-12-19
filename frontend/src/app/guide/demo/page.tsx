'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAccount } from 'wagmi';

/**
 * FHECounter Demo Page
 * 
 * Interactive demo with FHECounter contract on Sepolia.
 * Users can increment/decrement and view counter value.
 */
export default function DemoPage() {
  const { address, isConnected } = useAccount();
  const [inputValue, setInputValue] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>('');

  // Placeholder for contract address - Update after deployment
  const contractAddress = process.env.NEXT_PUBLIC_FHE_COUNTER_ADDRESS || 'Not deployed';

  const handleIncrement = async () => {
    setIsLoading(true);
    setStatus('Encrypting value...');
    
    try {
      // TODO: Implement actual FHE encryption and contract call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('✅ Increment successful! (Demo)');
    } catch (error) {
      setStatus('❌ Error: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrement = async () => {
    setIsLoading(true);
    setStatus('Encrypting value...');
    
    try {
      // TODO: Implement actual FHE encryption and contract call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('✅ Decrement successful! (Demo)');
    } catch (error) {
      setStatus('❌ Error: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

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
          <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
            Lesson 4/4
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-4">
            🚀 FHECounter Demo
          </h1>
          <p className="text-xl text-gray-400">
            Try interacting with FHECounter on Sepolia Testnet
          </p>
        </div>

        {/* Contract Info */}
        <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            📋 Contract Info
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-32">Network:</span>
              <span className="text-purple-300 font-mono">Sepolia Testnet</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-32">Contract:</span>
              <span className="text-purple-300 font-mono text-sm break-all">
                {contractAddress}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-32">Your Wallet:</span>
              <span className="text-green-300 font-mono text-sm">
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Not connected'}
              </span>
            </div>
          </div>
        </section>

        {/* Demo UI */}
        <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            🎮 Interact with Contract
          </h2>

          {/* Counter Display */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 text-center mb-8">
            <p className="text-gray-400 mb-2">Encrypted Counter Value</p>
            <div className="text-6xl font-bold text-white mb-2">🔐</div>
            <p className="text-sm text-gray-500">
              (Encrypted value - only you can decrypt)
            </p>
          </div>

          {/* Input */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Value to increase/decrease:
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-slate-700 text-white px-4 py-3 rounded-xl border border-slate-600 focus:border-purple-500 focus:outline-none"
              placeholder="Enter number..."
              min="1"
            />
          </div>

          {/* Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={handleIncrement}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-xl transition-all"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                '➕'
              )}
              Increment (+{inputValue})
            </button>
            <button
              onClick={handleDecrement}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-xl transition-all"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                '➖'
              )}
              Decrement (-{inputValue})
            </button>
          </div>

          {/* Status */}
          {status && (
            <div className={`p-4 rounded-xl ${
              status.includes('✅') ? 'bg-green-900/30 text-green-300' :
              status.includes('❌') ? 'bg-red-900/30 text-red-300' :
              'bg-blue-900/30 text-blue-300'
            }`}>
              {status}
            </div>
          )}
        </section>

        {/* How it works */}
        <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            🔄 Workflow
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                1
              </div>
              <div>
                <h4 className="text-white font-semibold">Encrypt Value</h4>
                <p className="text-gray-400 text-sm">
                  Your input value is encrypted client-side before sending to blockchain
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                2
              </div>
              <div>
                <h4 className="text-white font-semibold">Send Transaction</h4>
                <p className="text-gray-400 text-sm">
                  Transaction containing encrypted value + proof is sent to Sepolia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                3
              </div>
              <div>
                <h4 className="text-white font-semibold">Smart Contract Processing</h4>
                <p className="text-gray-400 text-sm">
                  Contract performs calculation (add/subtract) on ENCRYPTED data
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                4
              </div>
              <div>
                <h4 className="text-white font-semibold">Decrypt Result</h4>
                <p className="text-gray-400 text-sm">
                  Only you (with permission) can decrypt to see the actual value
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4">
            📚 Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://docs.zama.ai/protocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-purple-300 font-semibold mb-1">📖 Zama Documentation</h4>
              <p className="text-sm text-gray-400">Complete documentation on FHEVM</p>
            </a>
            <a 
              href="https://github.com/zama-ai/fhevm-hardhat-template" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-purple-300 font-semibold mb-1">🔧 Hardhat Template</h4>
              <p className="text-sm text-gray-400">Template to start your project</p>
            </a>
            <a 
              href="https://github.com/zama-ai/fhevm-react-template" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-purple-300 font-semibold mb-1">⚛️ React Template</h4>
              <p className="text-sm text-gray-400">Frontend template with React</p>
            </a>
            <a 
              href="https://docs.zama.org/programs/developer-program" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-700/50 transition-colors"
            >
              <h4 className="text-purple-300 font-semibold mb-1">🏆 Developer Program</h4>
              <p className="text-sm text-gray-400">Join the developer program</p>
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/guide/frontend"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Frontend Integration
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Back to Home
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}