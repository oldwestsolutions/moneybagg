'use client';

import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  PaintBrushIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  LinkIcon,
  SparklesIcon,
  ChartPieIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import Logo from './components/Logo';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full bg-dark-bg/90 backdrop-blur-md z-50 border-b border-gray-800/50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-64">
                <SearchBar />
              </div>
              <a href="/products" className="nav-link hover:text-primary transition-colors">Products</a>
              <a href="/pricing" className="nav-link hover:text-primary transition-colors">Pricing</a>
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
                <div className="mb-4">
                  <SearchBar />
                </div>
                <a href="/products" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary">Products</a>
                <a href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary">Pricing</a>
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
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">All-in-One</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Customizable</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your Links,
                <span className="gradient-text block mt-2">Your Style</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Create a stunning link page that connects all your social media, DeFi achievements, and professional profiles in one place.
              </p>
              <div className="flex gap-4">
                <a href="/signup" className="button-primary text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Sign Up & Link
                </a>
                <a href="/features" className="button-secondary text-lg px-8 py-4 border border-gray-700 hover:border-primary transition-colors">
                  Features
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-dark-bg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&h=100&fit=crop&q=80" alt="Fiverr" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-dark-bg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=100&h=100&fit=crop&q=80" alt="LinkedIn" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-dark-bg overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-gray-400">Connect all your platforms</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=800&fit=crop&q=80" 
                    alt="Example Profile" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link Cards Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Beautiful Link Cards</h2>
            <p className="section-subtitle">Customize your links with stunning designs</p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "YouTube",
                icon: "https://www.youtube.com/favicon.ico",
                color: "from-gray-900 to-black"
              },
              {
                title: "Snapchat",
                icon: "https://www.snapchat.com/favicon.ico",
                color: "from-yellow-400 to-yellow-500"
              },
              {
                title: "TikTok",
                icon: "https://www.tiktok.com/favicon.ico",
                color: "from-black to-gray-800"
              },
              {
                title: "Instagram",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
                color: "from-pink-500 via-purple-500 to-orange-500"
              }
            ].map((link, index) => (
              <div 
                key={index}
                className="group p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                    <img src={link.icon} alt={link.title} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-200">{link.title}</h3>
                    <p className="text-sm text-gray-400">Click to visit</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Power Up Your Presence</h2>
            <p className="section-subtitle">Unleash your potential with cutting-edge features</p>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-gray-400 text-lg">
                Transform your digital identity into a powerful hub that connects all your platforms. 
                From social media to DeFi achievements, showcase everything in one stunning, customizable space.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LinkIcon className="w-12 h-12 text-primary" />,
                title: "All Your Links",
                description: "Connect and showcase all your social media and content in one beautiful hub"
              },
              {
                icon: <SparklesIcon className="w-12 h-12 text-primary" />,
                title: "Custom Themes",
                description: "Choose from beautiful themes or create your own"
              },
              {
                icon: <ChartPieIcon className="w-12 h-12 text-primary" />,
                title: "Analytics",
                description: "Track clicks and engagement in real-time"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Platform Power</h2>
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

      {/* Pro Portfolio Feature */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <SparklesIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">AI Content Engine</h3>
              <p className="text-xl text-gray-400 mb-8">
                Harness the power of AI to create engaging content that resonates with your audience. Our advanced engine helps you craft the perfect message every time.
              </p>
              <ul className="space-y-4">
                {[
                  'AI-powered content generation',
                  'Smart engagement optimization',
                  'Trend analysis and insights',
                  'Performance analytics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ShieldCheckIcon className="w-6 h-6 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VPN Feature */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Secure VPN Access</h3>
              <p className="text-xl text-gray-400 mb-8">
                Browse and manage your content securely with our built-in VPN. Protect your privacy and access content from anywhere in the world.
              </p>
              <ul className="space-y-4">
                {[
                  'Global server network',
                  'Military-grade encryption',
                  'No-logs policy',
                  'Unlimited bandwidth'
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
                  <ShieldCheckIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Feature */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <ChartBarIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">Analytics Dashboard</h3>
              <p className="text-xl text-gray-400 mb-8">
                Track your performance with real-time stats and insights. Make data-driven decisions to level up your game.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time visitor tracking',
                  'Engagement metrics',
                  'Conversion analytics',
                  'Custom reports'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ShieldCheckIcon className="w-6 h-6 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Choose Your Path</h2>
            <p className="section-subtitle">Select the power level that matches your ambitions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                features: [
                  '5 Link Pages',
                  'Basic Themes',
                  'Private Messaging',
                  'Connect with Friends & Followers',
                  'Basic Analytics'
                ],
                buttonText: 'Get Started'
              },
              {
                name: 'Standard',
                price: '$15',
                features: [
                  'Everything in Free',
                  'Unlimited Links',
                  'Custom Themes',
                  'AI Content Generator',
                  'Ad Placement Tools'
                ],
                buttonText: 'Upgrade to Standard',
                popular: true
              },
              {
                name: 'Premium',
                price: '$24',
                features: [
                  'Everything in Standard',
                  'Verified Profile Badge',
                  'Advanced Analytics',
                  'VPN Access'
                ],
                buttonText: 'Go Premium'
              }
            ].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''} flex flex-col h-full`}>
                <div className="flex-grow">
                  {plan.popular && (
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <ShieldCheckIcon className="w-5 h-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                      : 'border border-gray-700 hover:border-primary'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold neon-text mb-4">moneyba.gg</h3>
              <p className="text-gray-500">Level up your digital presence with the ultimate portfolio platform.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="/features" className="hover:text-primary">Features</a></li>
                <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-500">
            <p>© 2024 moneyba.gg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
