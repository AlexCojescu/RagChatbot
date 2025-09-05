import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    // Centered section container
    <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Main Heading and Subheading */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Deploying Logic to Achieve Decisive Outcomes.
        </h1>
        <p className="text-lg text-gray-700">
          Growth is a function of output, not complexity. We provide a suite of services designed to build core assets and install intelligent systems. Each capability is a direct, controllable path to a specific, measurable result. We replace ambiguity with action.
        </p>
      </div>

      {/* Grid container for the services */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Service 1: Digital Presence & Architecture */}
        <div className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Digital Presence & Architecture
          </h3>
          <p className="text-gray-700 mb-6">
            Construct your core digital asset with logic and purpose. Engineer a website that serves as a stable, scalable foundation for all commercial activity. Ensure responsive design for flawless function across all platforms. Build a platform optimized for clear communication and efficient conversion.
          </p>
          <Link href="/digital-architecture">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 group">
              Learn More
              <svg className="ml-2 -mr-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Service 2: Intent-Driven Lead Generation */}
        <div className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Intent-Driven Lead Generation
          </h3>
          <p className="text-gray-700 mb-6">
            Engage active buyers, not passive prospects. Bypass guesswork by identifying prospects actively searching for your solution. Focus resources exclusively on in-market buyers to shorten sales cycles and increase conversion. Receive a structured list of high-intent contacts, transforming raw search data into actionable intelligence.
          </p>
          <Link href="/lead-generation">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 group">
              Learn More
              <svg className="ml-2 -mr-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Service 3: Marketing & Systems Automation */}
        <div className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Marketing & Systems Automation
          </h3>
          <p className="text-gray-700 mb-6">
            Systematize operations for maximum efficiency. Execute marketing campaigns with systematic precision to expand operational capacity. Unify disparate data systems into a single, reliable source of truth. Eradicate manual, error-prone processes to reclaim resources and improve accuracy.
          </p>
          <Link href="/automations">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 group">
              Learn More
              <svg className="ml-2 -mr-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Service 4: Strategic Content Deployment */}
        <div className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Strategic Content Deployment
          </h3>
          <p className="text-gray-700 mb-6">
            Command authority through calculated content. Develop and deploy content that directly addresses the search intent of your target market. Establish market leadership by providing clear, valuable information that solves specific problems. Structure content to systematically guide prospects from awareness to decision.
          </p>
          <Link href="/content-strategy">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 group">
              Learn More
              <svg className="ml-2 -mr-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;