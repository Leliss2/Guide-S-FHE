// Language translations - Only English now
export const translations = {
  en: {
    // Header
    'header.title': 'Guide-S-FHE',
    'header.subtitle': 'Zama FHEVM Tutorial',
    'header.home': 'Home',
    'header.introduction': 'Introduction',
    'header.smartContract': 'Smart Contract',
    'header.frontend': 'Frontend',
    'header.demo': 'Demo',

    // Home Page
    'home.welcome': 'Welcome to Guide-S-FHE',
    'home.description': 'Comprehensive guide to building DApps with Fully Homomorphic Encryption on Zama Protocol',
    'home.getStarted': 'Get Started',
    'home.guides': 'Learning Modules',
    'home.whatIsFHEVM': 'What is FHEVM?',
    
    // Introduction Page
    'intro.title': '📖 Introduction to FHEVM',
    'intro.description': 'Learn about Fully Homomorphic Encryption and Zama Protocol',
    'intro.fheTitle': 'What is FHE?',
    'intro.fheDescription': 'Fully Homomorphic Encryption (FHE) is a special form of encryption that allows computations to be performed on encrypted data without decrypting it.',
    'intro.example': '// Simple example:',
    'intro.exampleExplanation': '// Addition is performed on encrypted data!',
    'intro.before': 'Before:',
    'intro.after': 'With FHEVM:',
    'intro.zamaTitle': '🏗️ Zama Protocol',
    'intro.conceptsTitle': '📚 Key Concepts',
    'intro.networkTitle': '🌐 Sepolia Testnet',
    
    // Smart Contract Page
    'sc.title': '📝 FHE Smart Contract',
    'sc.description': 'Learn how to write smart contracts with encrypted data using FHEVM',
    'sc.setup': '1️⃣ Environment Setup',
    'sc.structure': '2️⃣ Contract Structure',
    'sc.functions': '3️⃣ Basic FHE Functions',
    'sc.operations': '4️⃣ FHE Operations',
    'sc.permissions': '5️⃣ Access Permissions',
    'sc.compile': '6️⃣ Compile & Deploy',
    'sc.fullContract': '📄 Complete Contract',
    
    // Frontend Page
    'fe.title': '⚡ Frontend Integration',
    'fe.description': 'Connecting React/Next.js with FHEVM contract on Sepolia',
    'fe.dependencies': '1️⃣ Install Dependencies',
    'fe.wallet': '2️⃣ Wallet Configuration',
    'fe.providers': '3️⃣ Setup Providers',
    'fe.guard': '4️⃣ Wallet Requirement',
    'fe.interaction': '5️⃣ Contract Interaction',
    'fe.encryption': '6️⃣ Encryption/Decryption',
    'fe.bestPractices': '✅ Best Practices',
    
    // Demo Page
    'demo.title': '🚀 FHECounter Demo',
    'demo.description': 'Try interacting with FHECounter on Sepolia Testnet',
    'demo.contractInfo': '📋 Contract Info',
    'demo.interact': '🎮 Interact with Contract',
    'demo.counter': 'Encrypted Counter Value',
    'demo.inputLabel': 'Value to increase/decrease:',
    'demo.increment': 'Increment (+{value})',
    'demo.decrement': 'Decrement (-{value})',
    'demo.workflow': '🔄 Workflow',
    'demo.resources': '📚 Resources',
    
    // Wallet Guard
    'wallet.connect': 'Welcome to Guide-S-FHE',
    'wallet.description': 'Guide to building DApps with Fully Homomorphic Encryption on Zama Protocol',
    'wallet.requirements': '📋 Access Requirements:',
    'wallet.req1': '• Connect MetaMask or compatible wallet',
    'wallet.req2': '• Use Sepolia Testnet',
    'wallet.req3': '• Need some Sepolia ETH to interact',
    'wallet.needEth': 'Need Sepolia ETH? Get it free at:',
    'wallet.wrongNetwork': 'Wrong Network!',
    'wallet.switchToSepolia': 'Please switch to Sepolia to continue',
    'wallet.connectedTo': 'Connected wallet:',
    'wallet.currentChain': 'Current Chain ID: {chainId}',
    'wallet.note': '⚠️ Note:',
    'wallet.noteText': 'This DApp only works on Sepolia Testnet (Chain ID: 11155111). This is Zama Protocol\'s test environment for FHEVM.',
    'wallet.switchButton': '🔄 Switch to Sepolia',
    'wallet.switching': 'Switching...',
    
    // Common
    'next': 'Next',
    'previous': 'Previous',
    'backToHome': 'Back to Home',
    'loading': 'Loading...',
    'continue': 'Continue learning',
  }
};

// Available languages - Only English now
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' }
];
