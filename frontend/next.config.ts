import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Force using webpack instead of turbopack
  // Explicitly disable turbopack
  turbopack: {},
  
  webpack: (config, { isServer }) => {
    // Fix for WalletConnect and other packages that have issues with webpack 5
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };
    
    // Ignore test files from node_modules
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\\.test\\.(js|ts)$/,
      use: 'ignore-loader',
    });
    
    return config;
  },
  
  // Transpile specific packages
  transpilePackages: [
    '@rainbow-me/rainbowkit',
    '@wagmi/connectors',
    'wagmi',
  ],
};

export default nextConfig;
