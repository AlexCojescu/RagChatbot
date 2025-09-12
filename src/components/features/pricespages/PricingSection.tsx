import React from 'react';

const PricingSection = () => {
  // A reusable checkmark icon for the features list
  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  return (
    <div className="my-6 sm:my-8 lg:my-16">
      <section className="bg-white py-6 sm:py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Main Heading and Subheading */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">
              Custom Solutions to Grow Your Business
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-2 sm:px-0">
              Let&apos;s work together to build the perfect AI-powered solution for your needs.
            </p>
          </div>

          {/* NEW: Early Adopter / Portfolio-Building Section */}
          <div className="max-w-3xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
              Now Accepting New Portfolio Clients!
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              As I build my portfolio, I&apos;m offering my first few clients foundational pricing. This is a unique opportunity to get dedicated service and cutting-edge solutions at an exceptional value. Let&apos;s connect!
            </p>
          </div>

          {/* Pricing Grid - 1 column on mobile, 2 columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

            {/* Plan 1: Digital Presence & Architecture */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Digital Presence & Architecture
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Build a powerful, scalable foundation for your business.
                </p>
                <div className="mb-4 sm:mb-6">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Custom Quote
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 font-medium">One-Time Project</p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Core Asset Construction</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Scalable Website Foundation</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Responsive Cross-Platform Design</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Optimized for Conversion</span>
                  </li>
                </ul>
              </div>
              <a 
                href="#contact-me" 
                className="w-full bg-blue-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full text-center text-sm sm:text-base hover:bg-blue-700 transition-colors touch-manipulation"
              >
                Schedule a Free Discovery Call
              </a>
            </div>

            {/* Plan 2: Intent-Driven Lead Generation */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Intent-Driven Lead Generation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Engage active buyers and shorten your sales cycle.
                </p>
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base text-gray-500 font-medium mb-1">Monthly Retainer</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Starting at $1,500<span className="text-base sm:text-lg lg:text-xl font-medium text-gray-500">/mo</span>
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Active Buyer Identification</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">High-Intent Contact Lists</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Reduced Sales Cycles</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Actionable Search Intelligence</span>
                  </li>
                </ul>
              </div>
              <a 
                href="#contact-me" 
                className="w-full bg-blue-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full text-center text-sm sm:text-base hover:bg-blue-700 transition-colors touch-manipulation"
              >
                Schedule a Free Discovery Call
              </a>
            </div>

            {/* Plan 3: Marketing & Systems Automation */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Marketing & Systems Automation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Systematize operations to expand capacity and accuracy.
                </p>
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base text-gray-500 font-medium mb-1">Monthly Retainer</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Starting at $1,200<span className="text-base sm:text-lg lg:text-xl font-medium text-gray-500">/mo</span>
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Systematic Campaign Execution</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Unified Data Systems (CRM, etc.)</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Manual Process Eradication</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Resource & Accuracy Gains</span>
                  </li>
                </ul>
              </div>
              <a 
                href="#contact-me" 
                className="w-full bg-blue-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full text-center text-sm sm:text-base hover:bg-blue-700 transition-colors touch-manipulation"
              >
                Schedule a Free Discovery Call
              </a>
            </div>

            {/* Plan 4: Strategic Content Deployment */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Strategic Content Deployment
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Command authority with content that converts.
                </p>
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base text-gray-500 font-medium mb-1">Monthly Retainer</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Starting at $1,800<span className="text-base sm:text-lg lg:text-xl font-medium text-gray-500">/mo</span>
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Calculated Content Strategy</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Search-Intent Focused Articles</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Establish Market Leadership</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckIcon /> 
                    <span className="leading-relaxed">Full-Funnel Content Structure</span>
                  </li>
                </ul>
              </div>
              <a 
                href="#contact-me" 
                className="w-full bg-blue-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full text-center text-sm sm:text-base hover:bg-blue-700 transition-colors touch-manipulation"
              >
                Schedule a Free Discovery Call
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;