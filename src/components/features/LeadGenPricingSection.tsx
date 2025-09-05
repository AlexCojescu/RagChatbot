import React from 'react';
import Image from 'next/image';

const LeadGenPricingSection = () => {
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
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Connect Directly with Your Next Customer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We bypass the guesswork by building hyper-targeted lists of verified decision-makers, ready for you to engage.
            </p>
          </div>

          {/* Updated Tool Logos Section with Next.js Image Component */}
          <div className="flex justify-center items-center space-x-6 sm:space-x-8 mb-12 lg:mb-16 flex-wrap">
            <p className="w-full text-center text-base font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:w-auto sm:mb-0">Our Tech Stack</p>
            <Image 
              src="/Apollo.png" 
              alt="Apollo.io Logo" 
              width={180} 
              height={60} 
              className="drop-shadow-lg object-contain"
            />
            <Image 
              src="/instantly.jpg" 
              alt="Instantly.ai Logo" 
              width={150} 
              height={50}
              className="object-contain" 
            />
            <Image 
              src="/apify.png" 
              alt="Apify Logo" 
              width={120} 
              height={50}
              className="object-contain"
            />
            <Image 
              src="/zerobounce.png" 
              alt="ZeroBounce Logo" 
              width={180} 
              height={50}
              className="drop-shadow-lg object-contain" 
            />
          </div>

          {/* Tiered Pricing Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Starter Tier: One-Time List Build */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Prospect List</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">A one-time, custom-built list of ideal clients.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">$1,500+</p>
              <p className="text-xs text-gray-500 mb-6">One-time fee. Based on list size & complexity.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Up to 500 hyper-targeted leads</li>
                <li className="flex"><CheckIcon /> Decision-maker identification</li>
                <li className="flex"><CheckIcon /> 100% verified & deliverable emails</li>
                <li className="flex"><CheckIcon /> Delivered as a ready-to-use CSV/spreadsheet</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-gray-700 transition-colors">
                Build My List
              </a>
            </div>

            {/* Professional Tier (Highlighted): List + Campaign Setup */}
            <div className="bg-white rounded-xl shadow-2xl border-2 border-blue-600 p-8 flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Outreach Engine</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">Your complete lead generation & outreach setup.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">$3,500<span className="text-lg font-medium text-gray-500">/mo</span></p>
              <p className="text-xs text-gray-500 mb-6">Monthly retainer for leads and campaign management.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Includes everything in Prospect List</li>
                <li className="flex"><CheckIcon /> New leads delivered monthly</li>
                <li className="flex"><CheckIcon /> Email campaign setup in Instantly</li>
                <li className="flex"><CheckIcon /> A/B tested copy & sequence writing</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Launch Outreach
              </a>
            </div>

            {/* Business Tier: Fully Managed Service */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Growth Partner</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">A fully managed, data-driven sales pipeline.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">Custom<span className="text-lg font-medium text-gray-500">/mo</span></p>
              <p className="text-xs text-gray-500 mb-6">For teams focused on aggressive, predictable growth.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Includes everything in Outreach Engine</li>
                <li className="flex"><CheckIcon /> Full campaign management & optimization</li>
                <li className="flex"><CheckIcon /> Weekly performance reporting</li>
                <li className="flex"><CheckIcon /> Direct integration with your CRM</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-gray-700 transition-colors">
                Become a Partner
              </a>
            </div>

          </div>

          {/* --- How It Works Section --- */}
          <div className="max-w-5xl mx-auto mt-16 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Our Precision Process</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-lg">1</div>
                <h5 className="mt-4 font-bold">Define</h5>
                <p className="text-gray-600 text-sm mt-1">We pinpoint your Ideal Customer Profile and key value proposition.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-lg">2</div>
                <h5 className="mt-4 font-bold">Scrape & Enrich</h5>
                <p className="text-gray-600 text-sm mt-1">We use our tech stack to find and enrich data on decision-makers.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-lg">3</div>
                <h5 className="mt-4 font-bold">Verify</h5>
                <p className="text-gray-600 text-sm mt-1">Every single email is verified to ensure maximum deliverability.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto font-bold text-lg">4</div>
                <h5 className="mt-4 font-bold">Engage</h5>
                <p className="text-gray-600 text-sm mt-1">We deliver the list or launch the outreach campaign to start conversations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGenPricingSection;