'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Logo from '../components/Logo';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-gray-900">
      {/* Header */}
      <header className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </header>

      {/* Pricing Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-400 mb-12">Choose the perfect plan for your needs</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                description: 'Perfect for getting started',
                features: [
                  '5 Link Pages',
                  'Basic Themes',
                  'Private Messaging',
                  'Connect with Friends & Followers',
                  'Basic Analytics',
                  'Community Support'
                ],
                buttonText: 'Get Started',
                popular: false
              },
              {
                name: 'Standard',
                price: '$15',
                description: 'Best for growing creators',
                features: [
                  'Everything in Free',
                  'Unlimited Links',
                  'Custom Themes',
                  'AI Content Generator',
                  'Ad Placement Tools',
                  'Priority Support',
                  'Advanced Analytics',
                  'Custom Domain'
                ],
                buttonText: 'Upgrade to Standard',
                popular: true
              },
              {
                name: 'Premium',
                price: '$24',
                description: 'For professional creators',
                features: [
                  'Everything in Standard',
                  'Verified Profile Badge',
                  'Advanced Analytics',
                  'VPN Access',
                  'API Access',
                  'White-label Solution',
                  'Dedicated Support',
                  'Custom Branding'
                ],
                buttonText: 'Go Premium',
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''} flex flex-col h-full`}>
                <div className="flex-grow">
                  {plan.popular && (
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
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

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency payments."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all paid plans come with a 14-day free trial. No credit card required."
              },
              {
                question: "Can I get a refund?",
                answer: "We offer a 30-day money-back guarantee for all paid plans."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-card-bg/30 backdrop-blur-sm border border-gray-800/50">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
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