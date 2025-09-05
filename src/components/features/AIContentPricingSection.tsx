import React from 'react';

const AiContentPricingSection = () => {
  // A reusable checkmark icon
  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  return (
    <div className="my-0">
      <section className="bg-white py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Heading and Subheading */}
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Your On-Demand, AI-Powered Creative Studio
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We leverage a suite of advanced generative AI tools to produce a complete, cohesive package of brand assets at unparalleled speed and quality.
            </p>
          </div>

          {/* Capability Showcase */}
          <div className="flex justify-center items-center text-center space-x-4 sm:space-x-8 mb-12 lg:mb-16 text-gray-500 font-medium text-sm flex-wrap">
              <span>Logos & Branding</span>
              <span className="text-gray-300">•</span>
              <span>Promotional Videos</span>
              <span className="text-gray-300">•</span>
              <span>Photorealistic Images</span>
              <span className="text-gray-300">•</span>
              <span>Voiceovers & Audio</span>
              <span className="text-gray-300">•</span>
              <span>Marketing Copy</span>
          </div>


          {/* Tiered Pricing Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Starter Tier: Brand Essentials Kit */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Brand Essentials Kit</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">The foundational assets for any new venture.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">$1,500+</p>
              <p className="text-xs text-gray-500 mb-6">One-time project fee.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Custom Logo Package</li>
                <li className="flex"><CheckIcon /> Core Brand Style Guide</li>
                <li className="flex"><CheckIcon /> Suite of 10 Social Media Templates</li>
                <li className="flex"><CheckIcon /> Foundational Website Copy</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-gray-700 transition-colors">
                Get Your Kit
              </a>
            </div>

            {/* Professional Tier (Highlighted): Content Campaign */}
            <div className="bg-white rounded-xl shadow-2xl border-2 border-blue-600 p-8 flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Content Campaign Package</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">A complete asset package for a product launch or marketing push.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">$4,000+</p>
              <p className="text-xs text-gray-500 mb-6">One-time project fee.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Everything in the Essentials Kit</li>
                <li className="flex"><CheckIcon /> 1 Short-Form Promotional Video (~30s)</li>
                <li className="flex"><CheckIcon /> 20 Social Media Graphics & Posts</li>
                <li className="flex"><CheckIcon /> Professional Voiceover for Video</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Launch a Campaign
              </a>
            </div>

            {/* Business Tier: Creative Partner */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Creative Partner</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">A continuous flow of content for scaling brands.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">Custom<span className="text-lg font-medium text-gray-500">/mo</span></p>
              <p className="text-xs text-gray-500 mb-6">Monthly retainer for ongoing creative work.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Ongoing monthly content delivery</li>
                <li className="flex"><CheckIcon /> Long-form & short-form video</li>
                <li className="flex"><CheckIcon /> Ad creative, social posts, & more</li>
                <li className="flex"><CheckIcon /> Direct access & priority queue</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-gray-700 transition-colors">
                Become a Partner
              </a>
            </div>
          </div>

          {/* --- How It Works / Prompt Engineering Section --- */}
          <div className="max-w-5xl mx-auto mt-16 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Our AI-Powered Creative Process</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-3xl">1</div>
                <h5 className="mt-5 text-xl font-bold">Deep Dive & Vision</h5>
                <p className="text-gray-600 text-base mt-2">We start by deeply understanding your brand, audience, and campaign goals.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-3xl">2</div>
                <h5 className="mt-5 text-xl font-bold">Expert Prompt Engineering</h5>
                <p className="text-gray-600 text-base mt-2">We translate your vision into precise, expert-level instructions for generative AI models.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-3xl">3</div>
                <h5 className="mt-5 text-xl font-bold">Curation & Refinement</h5>
                <p className="text-gray-600 text-base mt-2">We generate a wealth of options, then select and refine the very best to match your vision.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-3xl">4</div>
                <h5 className="mt-5 text-xl font-bold">Delivery</h5>
                <p className="text-gray-600 text-base mt-2">You receive a complete, cohesive package of brand assets, ready for deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiContentPricingSection;