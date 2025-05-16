'use client';

import { 
  LinkIcon,
  SparklesIcon,
  ChartPieIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';
import { useState } from 'react';

export default function Features() {
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-dark-bg to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful Features
              <span className="gradient-text block mt-2">For Your Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Transform your digital identity into a powerful hub that connects all your platforms. 
              From social media to DeFi achievements, showcase everything in one stunning, customizable space.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Core Features</h2>
            <p className="section-subtitle">Everything you need to build your digital presence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LinkIcon className="w-12 h-12 text-primary" />,
                title: "Unlimited Links",
                description: "Add as many links as you want to your page",
                stats: "100+ Link Types"
              },
              {
                icon: <SparklesIcon className="w-12 h-12 text-primary" />,
                title: "Custom Themes",
                description: "Choose from beautiful themes or create your own",
                stats: "50+ Themes"
              },
              {
                icon: <ChartPieIcon className="w-12 h-12 text-primary" />,
                title: "Analytics",
                description: "Track clicks and engagement in real-time",
                stats: "Real-time Stats"
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

      {/* Platform Integration */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Platform Integration</h2>
            <p className="section-subtitle">Connect and conquer across all platforms</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CodeBracketIcon className="w-12 h-12 text-primary" />,
                title: "Fiverr Integration",
                description: "Showcase your gigs and earnings directly on your portfolio",
                stats: "2.5M+ Active Users"
              },
              {
                icon: <GlobeAltIcon className="w-12 h-12 text-primary" />,
                title: "LinkedIn Sync",
                description: "Automatically sync your professional achievements",
                stats: "850M+ Professionals"
              },
              {
                icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
                title: "Instagram Connect",
                description: "Display your social proof and engagement metrics",
                stats: "1B+ Monthly Users"
              }
            ].map((platform, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.title}</h3>
                <p className="text-gray-400 mb-4">{platform.description}</p>
                <div className="text-primary font-medium">{platform.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DeFi Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">DeFi Achievement System</h3>
              <p className="text-xl text-gray-400 mb-8">
                Track your crypto journey with our gamified achievement system. Showcase your trading prowess, NFT collection, and DeFi contributions.
              </p>
              <ul className="space-y-4">
                {[
                  'Trading volume milestones',
                  'NFT collection showcase',
                  'DeFi protocol contributions',
                  'Community engagement metrics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ShieldCheckIcon className="w-6 h-6 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <BoltIcon className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Level Up</h3>
                    <p className="text-gray-400 mb-6">Unlock achievements and badges</p>
                    <div className="flex items-center justify-center text-primary">
                      <span className="mr-2">View Progress</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-secondary rounded-2xl p-12 text-center relative overflow-hidden neon-border">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-gray-300">Join thousands of creators and professionals</p>
              <a href="/signup" className="button-primary text-lg px-8 py-4 inline-flex items-center">
                Create Your Page
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 