'use client';

import { 
  RocketLaunchIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

export default function AboutPage() {
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
            <h1 className="text-5xl font-bold mb-6">About moneyba.gg</h1>
            <p className="text-xl text-gray-400 mb-12">Empowering creators to build their digital legacy</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <RocketLaunchIcon className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                We're on a mission to revolutionize how creators connect with their audience and monetize their content. Our platform combines cutting-edge technology with user-friendly design to help creators build their digital empire.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <HeartIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Our Values</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Innovation at our core</li>
                    <li>• Creator-first approach</li>
                    <li>• Privacy and security</li>
                    <li>• Community-driven growth</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <RocketLaunchIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-400">Meet the minds behind moneyba.gg</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                bio: "Former tech lead at major social platforms, passionate about creator economy"
              },
              {
                name: "Sarah Johnson",
                role: "Head of Product",
                bio: "10+ years in product development, focused on user experience"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                bio: "Expert in AI and security, building the future of digital platforms"
              }
            ].map((member, index) => (
              <div key={index} className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center mb-4">{member.role}</p>
                <p className="text-gray-400 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
                stat: "1M+",
                label: "Active Users"
              },
              {
                icon: <GlobeAltIcon className="w-12 h-12 text-primary" />,
                stat: "150+",
                label: "Countries"
              },
              {
                icon: <SparklesIcon className="w-12 h-12 text-primary" />,
                stat: "99.9%",
                label: "Uptime"
              }
            ].map((stat, index) => (
              <div key={index} className="p-8 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.stat}</div>
                <div className="text-gray-400">{stat.label}</div>
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