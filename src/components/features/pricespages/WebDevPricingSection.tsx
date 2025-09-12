import React from 'react';

const WebDevPricingSection = () => {
  // A reusable checkmark icon for the features list
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
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Simple Pricing for a Complete Growth System
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We combine a one-time project with an ongoing partnership to build your foundation and scale your growth.
            </p>
          </div>

          {/* --- STEP 1: THE FOUNDATION PROJECT --- */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="text-center mb-8">
              <span className="text-blue-600 font-semibold tracking-wider uppercase">Step 1</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">The Foundation Project</h3>
              <p className="text-base sm:text-lg text-gray-500 mt-1">One-Time Project Investment</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                This is the initial, intensive build where we construct your entire digital architecture and deploy your core brand assets. 50% is due at the start, with the remainder upon successful completion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Core Asset Construction:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex"><CheckIcon /> High-performance Next.js website</li>
                    <li className="flex"><CheckIcon /> Complete brand identity package (logo, etc.)</li>
                    <li className="flex"><CheckIcon /> Professional, AI-assisted web copy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Strategy & Automation Setup:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex"><CheckIcon /> Foundational SEO & content blueprint</li>
                    <li className="flex"><CheckIcon /> Integration with your core tools (CRM, etc.)</li>
                    <li className="flex"><CheckIcon /> Automation of one key manual process</li>
                    <li className="flex"><CheckIcon /> Creation of one high-value brand asset</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">Starting at a One-Time Investment of</p>
                <p className="text-4xl font-bold text-gray-900 mt-1">$7,500+</p>
                <p className="text-xs text-gray-500 mt-1">Final quote provided after our discovery call.</p>
              </div>
            </div>
          </div>
          
          {/* --- STEP 2: GROWTH & SUPPORT PARTNERSHIP --- */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
                <span className="text-blue-600 font-semibold tracking-wider uppercase">Step 2</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Growth & Support Partnership</h3>
                <p className="text-base sm:text-lg text-gray-500 mt-1">Monthly Retainer</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Essential Plan */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900">Essential</h4>
                <p className="text-gray-500 mt-1 mb-4">Peace of Mind & Support</p>
                <p className="text-4xl font-bold text-gray-900 mb-4">$500<span className="text-lg font-medium text-gray-500">/mo</span></p>
                <ul className="space-y-3 text-gray-600 flex-grow">
                  <li className="font-bold text-gray-800 text-sm uppercase tracking-wider">Core Features</li>
                  <li className="flex"><CheckIcon /> 24/7 Priority Support</li>
                  <li className="flex"><CheckIcon /> Secure Hosting & Maintenance</li>
                  <li className="flex"><CheckIcon /> Performance Monitoring</li>
                </ul>
              </div>

              {/* Growth Plan (Highlighted) */}
              <div className="bg-white rounded-xl shadow-2xl border-2 border-blue-600 p-6 flex flex-col relative">
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Growth</h4>
                <p className="text-gray-500 mt-1 mb-4">Proactive Content & Leads</p>
                <p className="text-4xl font-bold text-gray-900 mb-4">$1,800<span className="text-lg font-medium text-gray-500">/mo</span></p>
                <ul className="space-y-3 text-gray-600 flex-grow">
                    <li className="font-bold text-gray-800 text-sm uppercase tracking-wider">All Core Features, Plus:</li>
                    <li className="flex"><CheckIcon /> Monthly Strategic Content (2 Articles)</li>
                    <li className="flex"><CheckIcon /> Active Lead Gen Campaigns</li>
                </ul>
              </div>

              {/* Scale Plan */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900">Scale</h4>
                <p className="text-gray-500 mt-1 mb-4">Aggressive Market Leadership</p>
                <p className="text-4xl font-bold text-gray-900 mb-4">$4,500<span className="text-lg font-medium text-gray-500">/mo</span></p>
                <ul className="space-y-3 text-gray-600 flex-grow">
                    <li className="font-bold text-gray-800 text-sm uppercase tracking-wider">All Growth Features, Plus:</li>
                    <li className="flex"><CheckIcon /> Expanded Content (6 Articles + Video)</li>
                    <li className="flex"><CheckIcon /> New Process Automations</li>
                    <li className="flex"><CheckIcon /> Monthly Strategy Calls</li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- FINAL CALL TO ACTION --- */}
          <div className="text-center mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Ready to Build Your Foundation?</h3>
            <p className="text-lg text-gray-600 mt-2 mb-6">Every great partnership starts with a single conversation.</p>
            <a 
                href="#contact-me" 
                className="inline-block bg-blue-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full text-center text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Schedule a Free Discovery Call
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WebDevPricingSection;