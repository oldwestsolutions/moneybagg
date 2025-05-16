'use client';

import { 
  GlobeAltIcon,
  UserGroupIcon,
  VideoCameraIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Networks() {
  const platforms = [
    {
      category: "Professional Networks",
      platforms: [
        {
          name: "LinkedIn",
          icon: <BriefcaseIcon className="w-8 h-8 text-blue-500" />,
          description: "The world's largest professional network",
          strengths: [
            "Professional networking",
            "Job opportunities",
            "Industry insights",
            "Business connections"
          ],
          stats: "850M+ professionals"
        },
        {
          name: "GitHub",
          icon: <CodeBracketIcon className="w-8 h-8 text-gray-800" />,
          description: "The world's leading software development platform",
          strengths: [
            "Code collaboration",
            "Project showcase",
            "Open source contribution",
            "Developer portfolio"
          ],
          stats: "100M+ developers"
        }
      ]
    },
    {
      category: "Social Media",
      platforms: [
        {
          name: "Instagram",
          icon: <PhotoIcon className="w-8 h-8 text-pink-500" />,
          description: "Visual storytelling platform",
          strengths: [
            "Visual content",
            "Brand building",
            "Engagement metrics",
            "Story features"
          ],
          stats: "2B+ monthly users"
        },
        {
          name: "Twitter",
          icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-400" />,
          description: "Real-time conversation platform",
          strengths: [
            "Quick updates",
            "Trending topics",
            "Direct engagement",
            "Thought leadership"
          ],
          stats: "450M+ monthly users"
        }
      ]
    },
    {
      category: "Content Creation",
      platforms: [
        {
          name: "YouTube",
          icon: <VideoCameraIcon className="w-8 h-8 text-red-600" />,
          description: "The world's largest video platform",
          strengths: [
            "Video content",
            "Monetization",
            "Community building",
            "Long-form content"
          ],
          stats: "2.5B+ monthly users"
        },
        {
          name: "Twitch",
          icon: <RocketLaunchIcon className="w-8 h-8 text-purple-500" />,
          description: "Live streaming platform",
          strengths: [
            "Live streaming",
            "Gaming content",
            "Real-time interaction",
            "Subscription model"
          ],
          stats: "140M+ monthly users"
        }
      ]
    },
    {
      category: "Freelance & Business",
      platforms: [
        {
          name: "Fiverr",
          icon: <CurrencyDollarIcon className="w-8 h-8 text-green-500" />,
          description: "Global freelance marketplace",
          strengths: [
            "Service marketplace",
            "Freelance opportunities",
            "Portfolio showcase",
            "Secure payments"
          ],
          stats: "4M+ active sellers"
        },
        {
          name: "Upwork",
          icon: <SparklesIcon className="w-8 h-8 text-green-600" />,
          description: "Professional freelancing platform",
          strengths: [
            "Project-based work",
            "Long-term contracts",
            "Enterprise solutions",
            "Talent matching"
          ],
          stats: "12M+ registered freelancers"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-bg/90 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Moneyba.gg</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="nav-link hover:text-primary transition-colors">Features</a>
              <a href="/blockchain" className="nav-link hover:text-primary transition-colors">Blockchain</a>
              <a href="/login" className="button-primary bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">Login</a>
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
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connect Your
              <span className="gradient-text block mt-2">Digital Universe</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Discover the power of each platform and learn how to leverage their unique strengths to build your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {platforms.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">{category.category}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.platforms.map((platform, platformIndex) => (
                  <div 
                    key={platformIndex}
                    className="p-8 rounded-2xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center mb-6">
                      {platform.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold">{platform.name}</h3>
                        <p className="text-gray-400">{platform.description}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4">Key Strengths</h4>
                      <ul className="space-y-3">
                        {platform.strengths.map((strength, strengthIndex) => (
                          <li key={strengthIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-primary font-medium">
                      {platform.stats}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-secondary rounded-2xl p-12 text-center relative overflow-hidden neon-border">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Connect Your Platforms?</h2>
              <p className="text-xl mb-8 text-gray-300">Create your unified digital presence today</p>
              <a href="/signup" className="button-primary text-lg px-8 py-4 inline-block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold neon-text mb-4">Moneyba.gg</h3>
              <p className="text-gray-500">Level up your digital presence with the ultimate portfolio platform.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="/features" className="hover:text-primary">Features</a></li>
                <li><a href="/networks" className="hover:text-primary">Networks</a></li>
                <li><a href="/blockchain" className="hover:text-primary">Blockchain</a></li>
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
            <p>© 2024 Moneyba.gg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 