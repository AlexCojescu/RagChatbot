import React from 'react';

// --- Reusable SVG Icons for the feature columns ---

const TargetIcon = () => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.66-4.66l-1.42 1.42M6.34 17.66l-1.42 1.42"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
  </div>
);

const ResearchIcon = () => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35"></path>
    </svg>
  </div>
);

const IcebreakerIcon = () => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
    </svg>
  </div>
);


const LeadGen = () => {
  return (
    <section className="bg-white py-16 lg:py-24 mt-24 sm:mt-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading and Subheading */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Search Intent Lead Generation
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Stop wasting time on generic outreach and manual research. We deliver a steady stream of high-intent leads, complete with personalized icebreakers, so you can focus on one thing: closing deals.
          </p>
        </div>

        {/* 3-Column Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Target with Precision */}
          <div className="text-center">
            <div className="flex justify-center">
              <TargetIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Pinpoint Your Ideal Customer
            </h3>
            <p className="text-gray-600">
              We go beyond basic demographics. Our system scrapes search intent data to find companies actively looking for your solution right now. Advanced filters let you zero in on the perfect fit.
            </p>
          </div>

          {/* Column 2: Identify & Research */}
          <div className="text-center">
            <div className="flex justify-center">
              <ResearchIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Identify & Research Decision-Makers
            </h3>
            <p className="text-gray-600">
              Forget guessing games. We identify the key decision-makers within your target accounts and automatically research their recent activity, professional background, and online presence.
            </p>
          </div>

          {/* Column 3: Engage with Intelligence */}
          <div className="text-center">
            <div className="flex justify-center">
              <IcebreakerIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Receive Custom-Crafted Icebreakers
            </h3>
            <p className="text-gray-600">
              Turn cold leads into warm conversations. For every prospect, you&apos;ll receive a hyper-personalized icebreaker that references their specific needs or recent activity, guaranteeing higher reply rates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadGen;
