'use client';

import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  PaintBrushIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-bg/80 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold neon-text">moneyba.gg</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="nav-link">Features</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <button className="button-primary">Level Up Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Level Up Your
                <span className="gradient-text block mt-2"> Digital Game</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Dominate the digital landscape with a powerful, customizable portfolio that sets you apart from the competition.
              </p>
              <div className="flex gap-4">
                <button className="button-primary text-lg px-8 py-4">
                  Start Your Journey
                </button>
                <button className="button-secondary text-lg px-8 py-4">
                  Watch Gameplay
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <RocketLaunchIcon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Join the Elite</h3>
                    <p className="text-gray-400 mb-6">Start your journey to digital dominance</p>
                    <div className="flex items-center justify-center text-primary">
                      <span className="mr-2">Learn More</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Power Up Your Presence</h2>
            <p className="section-subtitle">Unleash your potential with cutting-edge features</p>
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
                  <RocketLaunchIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">Pro Portfolio</h3>
              <p className="text-xl text-gray-400 mb-8">
                Craft an elite portfolio that showcases your skills and achievements. Stand out from the crowd with our powerful customization tools.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom themes and layouts',
                  'Advanced media galleries',
                  'Interactive elements',
                  'Mobile-first design'
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

      {/* Analytics Feature */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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

      {/* Custom Branding Feature */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card-bg/50 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center">
                  <PaintBrushIcon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">Custom Branding</h3>
              <p className="text-xl text-gray-400 mb-8">
                Level up your brand with personalized themes and styles. Create a unique identity that resonates with your audience.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom color schemes',
                  'Typography controls',
                  'Logo integration',
                  'Brand consistency tools'
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
                name: 'Starter',
                price: '$19',
                features: ['Pro Portfolio', 'Basic Analytics', 'Custom Domain', '24/7 Support'],
                buttonText: 'Begin Quest'
              },
              {
                name: 'Elite',
                price: '$49',
                features: ['Advanced Analytics', 'Priority Support', 'Custom Branding', 'Multiple Portfolios'],
                buttonText: 'Level Up',
                popular: true
              },
              {
                name: 'Legend',
                price: '$99',
                features: ['Dedicated Manager', 'API Access', 'Team Features', 'Custom Integration'],
                buttonText: 'Become Legend'
              }
            ].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                {plan.popular && (
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                )}
                <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <ShieldCheckIcon className="w-5 h-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.popular ? 'button-primary' : 'button-secondary'}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Champion Testimonials</h2>
            <p className="section-subtitle">Hear from the legends who've leveled up their game</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "LinkFolio has completely transformed my digital presence. The analytics are next-level!",
                author: "Alex 'The Pro' Johnson",
                role: "Pro Gamer"
              },
              {
                quote: "This platform is a game-changer. The customization options are insane!",
                author: "Sarah 'Pixel' Chen",
                role: "Content Creator"
              },
              {
                quote: "The best investment for my brand. The features are absolutely legendary.",
                author: "Mike 'StreamKing' Ross",
                role: "Streamer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <BoltIcon className="w-12 h-12 text-primary mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-200">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
              <p className="text-xl mb-8 text-gray-300">Join the elite players using LinkFolio</p>
              <button className="button-primary text-lg px-8 py-4">
                Start Your Journey
              </button>
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
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
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
            <p>© 2024 LinkFolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
