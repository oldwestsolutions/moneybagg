'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { 
  BriefcaseIcon, 
  CodeBracketIcon, 
  PhotoIcon, 
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

// Mock data - replace with actual API calls
const mockData = {
  platforms: [
    {
      name: "LinkedIn",
      icon: <BriefcaseIcon className="w-8 h-8 text-blue-500" />,
      category: "Professional Networks",
      description: "The world's largest professional network"
    },
    {
      name: "GitHub",
      icon: <CodeBracketIcon className="w-8 h-8 text-gray-800" />,
      category: "Professional Networks",
      description: "The world's leading software development platform"
    },
    {
      name: "Instagram",
      icon: <PhotoIcon className="w-8 h-8 text-pink-500" />,
      category: "Social Media",
      description: "Visual storytelling platform"
    },
    {
      name: "Twitter",
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-400" />,
      category: "Social Media",
      description: "Real-time conversation platform"
    },
    {
      name: "YouTube",
      icon: <VideoCameraIcon className="w-8 h-8 text-red-600" />,
      category: "Content Creation",
      description: "The world's largest video platform"
    },
    {
      name: "Twitch",
      icon: <RocketLaunchIcon className="w-8 h-8 text-purple-500" />,
      category: "Content Creation",
      description: "Live streaming platform"
    },
    {
      name: "Fiverr",
      icon: <CurrencyDollarIcon className="w-8 h-8 text-green-500" />,
      category: "Freelance & Business",
      description: "Global freelance marketplace"
    },
    {
      name: "Upwork",
      icon: <SparklesIcon className="w-8 h-8 text-green-600" />,
      category: "Freelance & Business",
      description: "Professional freelancing platform"
    }
  ]
};

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filteredResults = mockData.platforms.filter(platform => 
          platform.name.toLowerCase().includes(query.toLowerCase()) ||
          platform.category.toLowerCase().includes(query.toLowerCase()) ||
          platform.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setLoading(false);
      }, 500);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-bg/90 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="nav-link hover:text-primary transition-colors">Features</a>
              <a href="/blockchain" className="nav-link hover:text-primary transition-colors">Blockchain</a>
              <a href="/login" className="button-primary bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">Login</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <section className="pt-40 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-dark-bg to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Search Results
            </h1>
            <div className="mt-8">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-400">Searching...</p>
            </div>
          ) : query ? (
            <>
              <p className="text-gray-400 mb-8">
                Found {results.length} results for "{query}"
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center mb-4">
                      {result.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">{result.name}</h3>
                        <p className="text-sm text-gray-400">{result.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{result.description}</p>
                  </div>
                ))}
              </div>
              {results.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No results found. Try different keywords.</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">Enter a search term to find platforms and features.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800/50 mt-12">
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