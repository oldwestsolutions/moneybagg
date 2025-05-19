'use client';

import { 
  RocketLaunchIcon, 
  UserGroupIcon, 
  SparklesIcon,
  HeartIcon,
  BoltIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

export default function CareersPage() {
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
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-400 mb-12">Build the future of creator economy with us</p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <HeartIcon className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Our Culture</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                We're building a diverse team of passionate individuals who are excited to revolutionize the creator economy. Join us in our mission to empower creators worldwide.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                  <div className="flex items-center mb-4">
                    <SparklesIcon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Benefits & Perks</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Competitive salary and equity</li>
                    <li>• Remote-first work environment</li>
                    <li>• Flexible PTO and holidays</li>
                    <li>• Health, dental, and vision coverage</li>
                    <li>• Learning and development budget</li>
                    <li>• Home office setup allowance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <HeartIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-400">Join us in building the future</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Senior Frontend Engineer",
                location: "Remote",
                type: "Full-time",
                description: "Build and maintain our web platform using React, Next.js, and modern web technologies.",
                requirements: [
                  "5+ years of frontend development experience",
                  "Strong React and TypeScript skills",
                  "Experience with Next.js and modern web frameworks",
                  "Passion for creating beautiful user experiences"
                ]
              },
              {
                title: "AI/ML Engineer",
                location: "Remote",
                type: "Full-time",
                description: "Develop and improve our AI content generation and optimization systems.",
                requirements: [
                  "3+ years of ML/AI development experience",
                  "Strong Python and deep learning framework skills",
                  "Experience with NLP and content generation",
                  "Understanding of modern AI architectures"
                ]
              },
              {
                title: "Product Designer",
                location: "Remote",
                type: "Full-time",
                description: "Create beautiful and intuitive user experiences for our platform.",
                requirements: [
                  "4+ years of product design experience",
                  "Strong portfolio showcasing web/mobile designs",
                  "Experience with Figma and design systems",
                  "Understanding of user research and testing"
                ]
              },
              {
                title: "DevOps Engineer",
                location: "Remote",
                type: "Full-time",
                description: "Build and maintain our cloud infrastructure and deployment pipelines.",
                requirements: [
                  "3+ years of DevOps experience",
                  "Strong AWS/GCP knowledge",
                  "Experience with Kubernetes and Docker",
                  "CI/CD pipeline expertise"
                ]
              }
            ].map((position, index) => (
              <div key={index} className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-primary">{position.location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{position.type}</span>
                </div>
                <p className="text-gray-400 mb-4">{position.description}</p>
                <h4 className="font-bold mb-2">Requirements:</h4>
                <ul className="space-y-2 text-gray-400">
                  {position.requirements.map((req, i) => (
                    <li key={i}>• {req}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-3 px-6 rounded-lg font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Apply Now
                </button>
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