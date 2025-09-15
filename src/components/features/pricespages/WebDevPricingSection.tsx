import React from 'react';

const WebDevPricingSection = () => {
  // A reusable checkmark icon for the features list
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="relative py-20">
      {/* Subtle background pattern - made transparent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm mb-6">
            <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Web Development
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Premium{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Web Development
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine a one-time project with an ongoing partnership to build your foundation and scale your growth.
          </p>
        </div>

        {/* Project Investment Section */}
        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-12 border border-white/30 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">One-Time Project Investment</h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              This is the initial, intensive build where we construct your entire digital architecture and deploy your core brand assets. 
              50% is due at the start, with the remainder upon successful completion.
            </p>
          </div>

          <div className="text-center bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/40">
            <div className="mb-6">
              <div className="text-lg font-semibold text-gray-900 mb-2">Starting at a One-Time Investment of</div>
              <div className="text-6xl font-bold text-blue-600 mb-2">$7,500+</div>
              <div className="text-gray-500">Final quote provided after our discovery call.</div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                'Custom website development',
                'Mobile-responsive design',
                'SEO optimization',
                'Performance optimization',
                'Content management system',
                'Analytics integration'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Retainer Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Monthly Retainer</h3>
            <p className="text-gray-600 text-lg">Choose the level of ongoing support that fits your growth goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Support */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Peace of Mind & Support</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">$500<span className="text-lg">/mo</span></div>
              </div>
              
              <div className="space-y-4">
                {[
                  'Website maintenance & updates',
                  'Security monitoring',
                  'Backup & recovery',
                  'Technical support',
                  'Monthly performance reports'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content & Leads */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg hover:bg-white/25 transition-all duration-300 transform scale-105">
              <div className="text-center mb-8">
                <div className="inline-flex items-center rounded-full bg-blue-100/50 px-3 py-1 text-xs font-semibold text-blue-800 mb-4">
                  Most Popular
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Proactive Content & Leads</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">$1,800<span className="text-lg">/mo</span></div>
              </div>
              
              <div className="space-y-4">
                {[
                  'Everything in basic support',
                  'Content creation & publishing',
                  'SEO optimization',
                  'Lead generation setup',
                  'Email marketing automation',
                  'Monthly strategy calls'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aggressive Growth */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Market Leadership</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">$4,500<span className="text-lg">/mo</span></div>
              </div>
              
              <div className="space-y-4">
                {[
                  'Everything in content & leads',
                  'Advanced automation systems',
                  'Multi-channel campaigns',
                  'A/B testing & optimization',
                  'Custom integrations',
                  'Weekly performance reviews',
                  'Priority support & updates'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/30 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 text-lg mb-8">
            Every great partnership starts with a single conversation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
            Schedule a Free Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevPricingSection;
