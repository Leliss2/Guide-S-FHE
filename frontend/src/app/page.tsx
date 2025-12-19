import Link from 'next/link';

/**
 * Guide-S-FHE Homepage
 * 
 * Overview of the FHEVM learning course.
 * Displays learning modules and related resources.
 */
export default function Home() {
  const guides = [
    {
      id: 1,
      title: '📖 Introduction to FHEVM',
      description: 'Learn about Fully Homomorphic Encryption and Zama Protocol',
      icon: '📖',
      href: '/guide/introduction',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: '📝 FHE Smart Contract',
      description: 'Learn how to write smart contracts with encrypted data using FHEVM',
      icon: '📝',
      href: '/guide/smart-contract',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: '⚡ Frontend Integration',
      description: 'Connecting React/Next.js with FHEVM contract on Sepolia',
      icon: '⚡',
      href: '/guide/frontend',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: '🚀 FHECounter Demo',
      description: 'Try interacting with FHECounter on Sepolia Testnet',
      icon: '🚀',
      href: '/guide/demo',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
              Zama Developer Program - December 2025
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Guide-S-FHE
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guide to building DApps with Fully Homomorphic Encryption on Zama Protocol
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4</div>
              <div className="text-gray-400 text-sm">Learning Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Sepolia</div>
              <div className="text-gray-400 text-sm">Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">English</div>
              <div className="text-gray-400 text-sm">Language</div>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="/guide/introduction"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Learning Modules
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400">
                      {guide.description}
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-gray-500 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 What is FHEVM?
            </h3>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-purple-300">Fully Homomorphic Encryption Virtual Machine (FHEVM)</strong> is 
                a technology that allows computations to be performed on encrypted data without decrypting it.
              </p>
              <p>
                With Zama Protocol, you can build DApps with 
                <strong className="text-purple-300"> complete on-chain data privacy</strong>, 
                where even validators cannot read your data.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <a 
                href="https://docs.zama.ai/protocol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg transition-colors"
              >
                📚 Zama Docs
              </a>
              <a 
                href="https://github.com/zama-ai/fhevm-hardhat-template" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-600/20 hover:bg-slate-600/30 text-gray-300 px-4 py-2 rounded-lg transition-colors"
              >
                🐙 Hardhat Template
              </a>
              <a 
                href="https://github.com/zama-ai/fhevm-react-template" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-600/20 hover:bg-slate-600/30 text-gray-300 px-4 py-2 rounded-lg transition-colors"
              >
                ⚛️ React Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>
            Built for Zama Developer Program • 
            <a href="https://docs.zama.org/programs/developer-program" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}