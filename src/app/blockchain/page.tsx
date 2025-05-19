'use client';

import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';
import { useState } from 'react';

export default function Blockchain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-bg/90 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="nav-link hover:text-primary transition-colors">Features</a>
              <a href="/blockchain" className="nav-link hover:text-primary transition-colors">Blockchain</a>
              <a href="/create" className="nav-link hover:text-primary transition-colors">Create</a>
              <a href="/login" className="button-primary bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">Login</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/features" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary">Features</a>
                <a href="/blockchain" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary">Blockchain</a>
                <a href="/create" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary">Create</a>
                <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary">Login</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-dark-bg to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">DeFi</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Blockchain</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Blockchain
                <span className="gradient-text block mt-2">Integration</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Seamlessly integrate blockchain technology into your digital presence. Track your DeFi achievements, NFT collections, and crypto portfolio.
              </p>
              <div className="flex gap-4">
                <button className="button-primary text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Connect Wallet
                </button>
                <button className="button-secondary text-lg px-8 py-4 border border-gray-700 hover:border-primary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <BoltIcon className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Connect Your Wallet</h3>
                    <p className="text-gray-400 mb-6">Start tracking your blockchain achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Blockchain Features</h2>
            <p className="section-subtitle">Power up your digital presence with blockchain technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CurrencyDollarIcon className="w-12 h-12 text-primary" />,
                title: "DeFi Tracking",
                description: "Track your DeFi portfolio and achievements in real-time",
                stats: "Real-time Updates"
              },
              {
                icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
                title: "NFT Showcase",
                description: "Display your NFT collection with stunning visuals",
                stats: "Auto-sync NFTs"
              },
              {
                icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
                title: "Secure Integration",
                description: "Connect your wallet securely with industry-standard encryption",
                stats: "100% Secure"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-primary font-medium">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-secondary rounded-2xl p-12 text-center relative overflow-hidden neon-border">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
              <p className="text-xl mb-8 text-gray-300">Join the blockchain revolution</p>
              <button className="button-primary text-lg px-8 py-4">
                Connect Wallet
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 