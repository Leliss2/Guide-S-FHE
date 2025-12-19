import Link from 'next/link';

/**
 * FHE Smart Contract Page
 * 
 * Detailed guide on writing FHE smart contracts with FHEVM.
 * Includes code examples and step-by-step explanations.
 */
export default function SmartContractPage() {
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
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
            Lesson 2/4
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-4">
            📝 FHE Smart Contract
          </h1>
          <p className="text-xl text-gray-400">
            Learn how to write smart contracts with encrypted data using FHEVM
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 - Setup */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              1️⃣ Environment Setup
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Clone template from Zama:</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <code className="text-green-400">
                  git clone https://github.com/zama-ai/fhevm-hardhat-template.git
                </code>
                <br/>
                <code className="text-green-400">cd fhevm-hardhat-template</code>
                <br/>
                <code className="text-green-400">npm install</code>
              </div>
              <p className="text-sm text-gray-400">
                Configure environment variables:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <code className="text-yellow-400">npx hardhat vars set MNEMONIC</code>
                <br/>
                <code className="text-yellow-400">npx hardhat vars set INFURA_API_KEY</code>
                <br/>
                <code className="text-yellow-400">npx hardhat vars set ETHERSCAN_API_KEY</code>
              </div>
            </div>
          </section>

          {/* Section 2 - Contract Structure */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              2️⃣ Contract Structure
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-purple-300">Must import</strong> FHE libraries:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-blue-300">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// ⚠️ REQUIRED: Import FHE library
import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
// ⚠️ REQUIRED: Import config for Sepolia
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

// Contract must inherit from SepoliaConfig
contract FHECounter is SepoliaConfig {
    // State variable using encrypted type
    euint32 private _count;
    
    // ... functions
}`}</pre>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-4">
                <h4 className="text-purple-300 font-semibold mb-2">💡 Explanation:</h4>
                <ul className="text-sm space-y-2">
                  <li>• <code className="text-yellow-300">euint32</code>: Encrypted uint32 - stores encrypted integers</li>
                  <li>• <code className="text-yellow-300">externalEuint32</code>: Encrypted value created externally and sent to contract</li>
                  <li>• <code className="text-yellow-300">SepoliaConfig</code>: Configuration for Sepolia testnet</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - Functions */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              3️⃣ Basic FHE Functions
            </h2>
            <div className="text-gray-300 space-y-6">
              {/* Increment function */}
              <div>
                <h4 className="text-purple-300 font-semibold mb-2">Increment Function:</h4>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-blue-300">{`function increment(
    externalEuint32 inputEuint32, 
    bytes calldata inputProof
) external {
    // Convert from external to internal euint32
    euint32 evalue = FHE.fromExternal(inputEuint32, inputProof);
    
    // Perform addition on encrypted data
    _count = FHE.add(_count, evalue);
    
    // ⚠️ IMPORTANT: Grant decryption permissions
    FHE.allowThis(_count);        // For this contract
    FHE.allow(_count, msg.sender); // For the caller
}`}</pre>
                </div>
              </div>
              
              {/* Explanation */}
              <div className="bg-orange-900/30 rounded-xl p-4">
                <h4 className="text-orange-300 font-semibold mb-2">⚠️ Important: inputProof</h4>
                <p className="text-sm">
                  The <code className="text-yellow-300">inputProof</code> parameter contains Zero-Knowledge Proof 
                  proving that the encrypted value was created by the function caller (msg.sender) 
                  and is bound to this contract.
                </p>
              </div>

              {/* GetCount function */}
              <div>
                <h4 className="text-purple-300 font-semibold mb-2">GetCount Function:</h4>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-blue-300">{`function getCount() external view returns (euint32) {
    return _count;
}

// Note: This function returns an ENCRYPTED value
// Only authorized users can decrypt it in the frontend`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - FHE Operations */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              4️⃣ FHE Operations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-green-400 font-mono mb-2">FHE.add(a, b)</h4>
                <p className="text-sm text-gray-400">Add two encrypted values</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-green-400 font-mono mb-2">FHE.sub(a, b)</h4>
                <p className="text-sm text-gray-400">Subtract two encrypted values</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-green-400 font-mono mb-2">FHE.mul(a, b)</h4>
                <p className="text-sm text-gray-400">Multiply two encrypted values</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-green-400 font-mono mb-2">FHE.eq(a, b)</h4>
                <p className="text-sm text-gray-400">Equality comparison (returns ebool)</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-green-400 font-mono mb-2">FHE.lt(a, b)</h4>
                <p className="text-sm text-gray-400">Less than comparison</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-green-400 font-mono mb-2">FHE.select(cond, a, b)</h4>
                <p className="text-sm text-gray-400">Select value based on condition</p>
              </div>
            </div>
          </section>

          {/* Section 5 - Permissions */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              5️⃣ Access Permissions
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                To allow users to decrypt values, you <strong className="text-red-400">MUST</strong> grant permissions:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-blue-300">{`// Grant permission to contract (so contract can read)
FHE.allowThis(_count);

// Grant permission to caller (so user can decrypt)
FHE.allow(_count, msg.sender);

// Or grant to specific address
FHE.allow(_count, someAddress);`}</pre>
              </div>
              <div className="bg-red-900/30 rounded-xl p-4">
                <h4 className="text-red-300 font-semibold mb-2">❌ Common Error:</h4>
                <p className="text-sm">
                  If you forget to call <code className="text-yellow-300">FHE.allow()</code>, 
                  users will <strong>not be able to decrypt</strong> values from the frontend, 
                  even if they created those values.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 - Compile & Deploy */}
          <section className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              6️⃣ Compile & Deploy
            </h2>
            <div className="text-gray-300 space-y-4">
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto space-y-2">
                <div>
                  <span className="text-gray-500"># Compile contract</span>
                  <br/>
                  <code className="text-green-400">npm run compile</code>
                </div>
                <div>
                  <span className="text-gray-500"># Test locally</span>
                  <br/>
                  <code className="text-green-400">npm run test</code>
                </div>
                <div>
                  <span className="text-gray-500"># Deploy to Sepolia</span>
                  <br/>
                  <code className="text-green-400">npx hardhat deploy --network sepolia</code>
                </div>
                <div>
                  <span className="text-gray-500"># Verify contract</span>
                  <br/>
                  <code className="text-green-400">{`npx hardhat verify --network sepolia <CONTRACT_ADDRESS>`}</code>
                </div>
              </div>
            </div>
          </section>

          {/* Full Contract Example */}
          <section className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              📄 Complete Contract
            </h2>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-x-auto">
              <pre className="text-blue-300">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title FHECounter - A simple encrypted counter
contract FHECounter is SepoliaConfig {
    euint32 private _count;

    function getCount() external view returns (euint32) {
        return _count;
    }

    function increment(externalEuint32 inputEuint32, bytes calldata inputProof) external {
        euint32 evalue = FHE.fromExternal(inputEuint32, inputProof);
        _count = FHE.add(_count, evalue);
        FHE.allowThis(_count);
        FHE.allow(_count, msg.sender);
    }

    function decrement(externalEuint32 inputEuint32, bytes calldata inputProof) external {
        euint32 evalue = FHE.fromExternal(inputEuint32, inputProof);
        _count = FHE.sub(_count, evalue);
        FHE.allowThis(_count);
        FHE.allow(_count, msg.sender);
    }
}`}</pre>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/guide/introduction"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Introduction to FHEVM
          </Link>
          <Link 
            href="/guide/frontend"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Next: Frontend Integration
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}