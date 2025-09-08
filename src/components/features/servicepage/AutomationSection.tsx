'use client';

import React from 'react';
import Image from 'next/image'; // 1. Import the Image component

// A reusable checkmark icon for the features list
const CheckIcon = () => (
  <svg className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);


const AutomationSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24 mt-24 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Explanatory Text & Benefits */}
          <div className="md:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Marketing & Systems <span className="text-blue-600">Automation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Systematize your operations for maximum efficiency. We replace scattered data and manual, error-prone tasks with a single, reliable source of truth, giving you the capacity to scale.
            </p>
            
            <ul className="space-y-5">
              <li className="flex items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-gray-900">Execute with Precision</h4>
                  <p className="text-gray-600 leading-relaxed">Deploy marketing campaigns systematically to expand your operational capacity without hiring more staff.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-gray-900">Unify Your Data</h4>
                  <p className="text-gray-600 leading-relaxed">Integrate disparate systems (like your CRM, email platform, and analytics) into a single, reliable source of truth for better decision-making.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-gray-900">Eradicate Manual Work</h4>
                  <p className="text-gray-600 leading-relaxed">Automate repetitive, error-prone processes to reclaim valuable team resources and dramatically improve accuracy across the board.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Visual Element */}
          <div className="flex items-center justify-center">
            {/* Wrapper div to handle shadow and hover effects */}
            <div className="rounded-2xl shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-400/30">
              <Image 
                src="/AutomationCreation.png"
                alt="Automation workflow diagram"
                width={700}
                height={600}
                // Shadow classes removed from here and applied to parent
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
