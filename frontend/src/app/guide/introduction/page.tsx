import Link from 'next/link';

/**
 * FHEVM Introduction Page
 * 
 * Explains FHE, FHEVM and Zama Protocol.
 * Basic concepts for beginners.
 */
export default function IntroductionPage() {
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
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
            Lesson 1/4
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-4">
            📖 Introduction to FHEVM
          </h1>
          <p className="text-xl text-gray-400">
            Learn about Fully Homomorphic Encryption and Zama Protocol
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              🔐 What is FHE?
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-purple-300">Fully Homomorphic Encryption (FHE)</strong> is a special form of encryption that allows computations to be performed on encrypted data without decrypting it.
              </p>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <p className="text-sm font-mono">
                  <span className="text-green-400">{'// Simple example:'}</span><br/>
                  encrypt(5) + encrypt(3) = encrypt(8)<br/>
                  <span className="text-gray-500">{'// Addition is performed on encrypted data!'}</span>
                </p>
              </div>
              <p>
                This means the server can process your data without 
                <strong className="text-purple-300"> ever seeing the actual value</strong>.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              ⛓️ FHEVM on Blockchain
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-purple-300">FHEVM (FHE Virtual Machine)</strong> is 
                a virtual machine developed by Zama to run smart contracts with encrypted data.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">Before:</h4>
                  <ul className="text-sm space-y-1">
                    <li>❌ All data on blockchain is public</li>
                    <li>❌ Anyone can read your balance</li>
                    <li>❌ Secret transactions are very difficult</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">With FHEVM:</h4>
                  <ul className="text-sm space-y-1">
                    <li>✅ Data is encrypted on-chain</li>
                    <li>✅ Only you can decrypt it</li>
                    <li>✅ Smart contracts can still compute</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              🏗️ Zama Protocol
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Zama is the company behind FHEVM. They provide:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <strong className="text-purple-300">@fhevm/solidity</strong>
                    <p className="text-sm text-gray-400">Solidity library to write FHE smart contracts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <strong className="text-purple-300">Hardhat Plugin</strong>
                    <p className="text-sm text-gray-400">Plugin for Hardhat to test and deploy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <strong className="text-purple-300">Relayer SDK</strong>
                    <p className="text-sm text-gray-400">SDK to interact from frontend</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Key Concepts */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              📚 Key Concepts
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-purple-300 font-semibold mb-2">euint32</h4>
                <p className="text-gray-300 text-sm">
                  Encrypted unsigned integer 32-bit. This is the encrypted data type 
                  replacing the regular uint32.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-purple-300 font-semibold mb-2">externalEuint32</h4>
                <p className="text-gray-300 text-sm">
                  Encrypted value created externally (frontend) and sent to the contract.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-purple-300 font-semibold mb-2">FHE.add(), FHE.sub()</h4>
                <p className="text-gray-300 text-sm">
                  Functions to perform calculations on encrypted data (addition, subtraction, etc.).
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-purple-300 font-semibold mb-2">FHE.allow()</h4>
                <p className="text-gray-300 text-sm">
                  Grants permission for a specific address to decrypt the value.
                </p>
              </div>
            </div>
          </section>

          {/* Network Info */}
          <section className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              🌐 Sepolia Testnet
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                In this tutorial, we will use the <strong className="text-blue-300">Sepolia Testnet</strong>.
              </p>
              <div className="bg-slate-800/50 rounded-xl p-4 font-mono text-sm">
                <p><span className="text-gray-500">Network Name:</span> <span className="text-white">Sepolia</span></p>
                <p><span className="text-gray-500">Chain ID:</span> <span className="text-white">11155111</span></p>
                <p><span className="text-gray-500">RPC URL:</span> <span className="text-white">https://sepolia.infura.io/v3/YOUR_KEY</span></p>
              </div>
              <p className="text-sm text-gray-400">
                💡 Need Sepolia ETH? Get it free at{' '}
                <a href="https://sepoliafaucet.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  sepoliafaucet.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
          <Link 
            href="/guide/smart-contract"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Next: Smart Contract
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}