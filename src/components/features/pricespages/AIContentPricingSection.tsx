import React from 'react';

const AiContentPricingSection = () => {
  // A reusable checkmark icon
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
          <div className="inline-flex items-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm mb-6">
            <div className="mr-2 h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            AI Content Creation
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Content Creation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage a suite of advanced generative AI tools to produce a complete, cohesive package of brand assets at unparalleled speed and quality.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Package */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Foundations</h3>
              <p className="text-gray-600 mb-6">The foundational assets for any new venture.</p>
              <div className="text-4xl font-bold text-purple-600 mb-2">$1,500+</div>
              <p className="text-sm text-gray-500">One-time project fee.</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Logo design & brand identity',
                'Color palette & typography',
                'Brand guidelines document',
                'Basic marketing materials',
                '2 rounds of revisions'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Launch Package */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg hover:bg-white/25 transition-all duration-300 transform scale-105">
            <div className="text-center mb-8">
              <div className="inline-flex items-center rounded-full bg-purple-100/50 px-3 py-1 text-xs font-semibold text-purple-800 mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Launch</h3>
              <p className="text-gray-600 mb-6">A complete asset package for a product launch or marketing push.</p>
              <div className="text-4xl font-bold text-purple-600 mb-2">$4,000+</div>
              <p className="text-sm text-gray-500">One-time project fee.</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Everything in Brand Foundations',
                'Social media content suite',
                'Email marketing templates',
                'Website graphics & banners',
                'Video/motion graphics',
                'Content calendar template'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Scaling</h3>
              <p className="text-gray-600 mb-6">A continuous flow of content for scaling brands.</p>
              <div className="text-4xl font-bold text-purple-600 mb-2">Custom/mo</div>
              <p className="text-sm text-gray-500">Monthly retainer for ongoing creative work.</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Ongoing content production',
                'Multi-platform optimization',
                'A/B testing & optimization',
                'Performance analytics',
                'Priority support',
                'Custom workflows'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our AI Content Process</h3>
            <p className="text-gray-600 text-lg">From concept to creation in four strategic steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Brand Discovery",
                description: "We start by deeply understanding your brand, audience, and campaign goals."
              },
              {
                step: "2", 
                title: "AI Instruction",
                description: "We translate your vision into precise, expert-level instructions for generative AI models."
              },
              {
                step: "3",
                title: "Generate & Refine",
                description: "We generate a wealth of options, then select and refine the very best to match your vision."
              },
              {
                step: "4",
                title: "Deliver Assets",
                description: "You receive a complete, cohesive package of brand assets, ready for deployment."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiContentPricingSection;
