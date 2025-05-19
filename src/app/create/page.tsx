'use client';

import { 
  LinkIcon,
  SparklesIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';
import { useState } from 'react';

export default function Create() {
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Create Your
              <span className="gradient-text block mt-4">Link Page</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Build your digital presence with a stunning link page that connects all your platforms.
              Share your achievements, showcase your work, and grow your audience.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/signup" className="button-primary text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LinkIcon className="w-12 h-12 text-primary" />,
                title: "Unified Links",
                description: "Connect all your social media, DeFi achievements, and professional profiles in one place"
              },
              {
                icon: <SparklesIcon className="w-12 h-12 text-primary" />,
                title: "Customizable Design",
                description: "Choose from beautiful themes and customize your page to match your style"
              },
              {
                icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
                title: "Grow Your Audience",
                description: "Make it easy for your followers to find and connect with you across platforms"
              },
              {
                icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
                title: "Track Performance",
                description: "Monitor your page views and engagement with built-in analytics"
              },
              {
                icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
                title: "Secure & Private",
                description: "Your data is protected with industry-standard security measures"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Create Your Page?</h2>
              <p className="text-xl mb-8 text-gray-300">Join thousands of creators and professionals</p>
              <a href="/signup" className="button-primary text-lg px-8 py-4 inline-flex items-center">
                Start Creating
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 