import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { WalletGuard } from "@/components/WalletGuard";
import { Header } from "@/components/Header";
import { I18nProvider } from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guide-S-FHE | Zama FHEVM Tutorial",
  description: "Comprehensive guide to building DApps with Fully Homomorphic Encryption on Zama Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        <I18nProvider>
          <Providers>
            <WalletGuard>
              <Header />
              <main className="pt-16">
                {children}
              </main>
            </WalletGuard>
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}