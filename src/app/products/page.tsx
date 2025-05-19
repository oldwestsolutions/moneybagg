'use client';

import { 
  ChartBarIcon, 
  SparklesIcon, 
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerIcon,
  ChartPieIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-gray-900">
      {/* Header */}
      <header className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Powerful Features for Modern Creators</h1>
            <p className="text-xl text-gray-400 mb-12">Discover the tools that will transform your digital presence</p>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <ChartBarIcon className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Advanced Analytics</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Gain deep insights into your audience and content performance with our comprehensive analytics suite.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <ArrowTrendingUpIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Real-time Performance Tracking</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Live visitor monitoring and behavior analysis</li>
                    <li>• Conversion rate tracking across all platforms</li>
                    <li>• Engagement metrics and interaction patterns</li>
                    <li>• Custom event tracking and goal setting</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Audience Insights</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Detailed demographic analysis</li>
                    <li>• Geographic distribution mapping</li>
                    <li>• Device and platform usage statistics</li>
                    <li>• User journey and flow visualization</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <ChartPieIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Custom Reports</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Automated report generation</li>
                    <li>• Custom dashboard creation</li>
                    <li>• Data export in multiple formats</li>
                    <li>• Scheduled report delivery</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <ChartBarIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engine Section */}
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
              <div className="flex items-center space-x-4 mb-6">
                <SparklesIcon className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">AI Content Engine</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Leverage cutting-edge AI to create engaging content and optimize your digital presence.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <CpuChipIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Smart Content Generation</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• AI-powered post and caption creation</li>
                    <li>• Style and tone customization</li>
                    <li>• Multi-platform content adaptation</li>
                    <li>• Trend-based content suggestions</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <RocketLaunchIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Engagement Optimization</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Best time to post predictions</li>
                    <li>• Hashtag and keyword optimization</li>
                    <li>• Audience engagement analysis</li>
                    <li>• Content performance predictions</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <BoltIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Performance Analytics</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Content success prediction</li>
                    <li>• A/B testing automation</li>
                    <li>• Competitor analysis</li>
                    <li>• Growth trend forecasting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPN Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <ShieldCheckIcon className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Secure VPN Access</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Protect your privacy and access content securely with our enterprise-grade VPN solution.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <GlobeAltIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Global Network</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• 1000+ servers across 60+ countries</li>
                    <li>• Unlimited bandwidth and speed</li>
                    <li>• Smart server selection</li>
                    <li>• Automatic location switching</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <LockClosedIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Advanced Security</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Military-grade encryption (AES-256)</li>
                    <li>• Kill switch protection</li>
                    <li>• DNS leak prevention</li>
                    <li>• Split tunneling support</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <ServerIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Privacy Features</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Strict no-logs policy</li>
                    <li>• Anonymous payment options</li>
                    <li>• Automatic IP rotation</li>
                    <li>• Ad and malware blocking</li>
                  </ul>
                </div>
              </div>
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
                <li><a href="/enterprise" className="hover:text-primary">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-primary">About</a></li>
                <li><a href="/careers" className="hover:text-primary">Careers</a></li>
                <li><a href="/partners" className="hover:text-primary">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-primary">Privacy</a></li>
                <li><a href="/terms" className="hover:text-primary">Terms</a></li>
                <li><a href="/security" className="hover:text-primary">Security</a></li>
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