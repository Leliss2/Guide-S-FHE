'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

export function Header() {
  const { t } = useI18n();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔐</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">{t('header.title')}</h1>
              <p className="text-gray-400 text-xs">{t('header.subtitle')}</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              {t('header.home')}
            </Link>
            <Link href="/guide/introduction" className="text-gray-300 hover:text-white transition-colors">
              {t('header.introduction')}
            </Link>
            <Link href="/guide/smart-contract" className="text-gray-300 hover:text-white transition-colors">
              {t('header.smartContract')}
            </Link>
            <Link href="/guide/frontend" className="text-gray-300 hover:text-white transition-colors">
              {t('header.frontend')}
            </Link>
            <Link href="/guide/demo" className="text-gray-300 hover:text-white transition-colors">
              {t('header.demo')}
            </Link>
          </nav>

          {/* Wallet Connect - Removed language selector */}
          <div className="flex items-center gap-4">
            <ConnectButton 
              showBalance={false}
              chainStatus="icon"
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}