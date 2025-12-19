'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { SEPOLIA_CHAIN_ID } from '@/config/wagmi';
import { useEffect, useState } from 'react';
import { useI18n } from '@/components/I18nProvider';

interface WalletGuardProps {
  children: React.ReactNode;
}

/**
 * WalletGuard Component
 * 
 * Ensures users:
 * 1. Connect wallet
 * 2. Switch to Sepolia network
 * 
 * Shows requirement screen if conditions aren't met.
 */
export function WalletGuard({ children }: WalletGuardProps) {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  // Hydration fix for SSR
  useEffect(() => {
    // Use setTimeout to avoid setState during render
    setTimeout(() => setMounted(true), 0);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">{t('loading')}</div>
      </div>
    );
  }

  // Case 1: Wallet not connected
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
          <div className="text-center">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl font-bold text-white mb-2">
              {t('wallet.connect')}
            </h1>
            <p className="text-gray-400 mb-6">
              {t('wallet.description')}
            </p>
            
            {/* Requirements */}
            <div className="bg-purple-900/30 rounded-xl p-4 mb-6 text-left">
              <h3 className="text-purple-300 font-semibold mb-2">{t('wallet.requirements')}</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>{t('wallet.req1')}</li>
                <li>{t('wallet.req2')}</li>
                <li>{t('wallet.req3')}</li>
              </ul>
            </div>
            
            {/* Connect Button */}
            <div className="flex justify-center">
              <ConnectButton />
            </div>
            
            {/* Faucet info */}
            <div className="mt-6 text-sm text-gray-500">
              <p>{t('wallet.needEth')}</p>
              <a 
                href="https://sepoliafaucet.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                sepoliafaucet.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Case 2: Wrong network (not Sepolia)
  if (chainId !== SEPOLIA_CHAIN_ID) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20 shadow-2xl">
          <div className="text-center">
            {/* Warning Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl font-bold text-white mb-2">
              {t('wallet.wrongNetwork')}
            </h1>
            <p className="text-gray-400 mb-6">
              {t('wallet.switchToSepolia')}
            </p>
            
            {/* Connected wallet info */}
            <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-400">{t('wallet.connectedTo')}</p>
              <p className="text-white font-mono text-sm">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
              <p className="text-orange-400 text-sm mt-2">
                {t('wallet.currentChain').replace('{chainId}', chainId.toString())}
              </p>
            </div>
            
            {/* Explanation */}
            <div className="bg-orange-900/30 rounded-xl p-4 mb-6 text-left">
              <h3 className="text-orange-300 font-semibold mb-2">{t('wallet.note')}</h3>
              <p className="text-gray-300 text-sm">
                {t('wallet.noteText')}
              </p>
            </div>
            
            {/* Switch Network Button */}
            <button
              onClick={() => switchChain({ chainId: SEPOLIA_CHAIN_ID })}
              disabled={isPending}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t('wallet.switching')}
                </>
              ) : (
                <>
                  {t('wallet.switchButton')}
                </>
              )}
            </button>
            
            {/* Alternative: Disconnect */}
            <div className="mt-4">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Case 3: All good - show content
  return <>{children}</>;
}