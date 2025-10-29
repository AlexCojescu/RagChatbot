'use client';

import React from 'react';
import Image from 'next/image';

// --- Define your technology stack logos here ---
const techLogos = [
  {
    name: 'Apify',
    src: '/apify.png',
  },
  {
    name: 'Apollo.io',
    src: '/Apollo.png',
  },
  {
    name: 'Instantly.ai',
    src: '/instantly.jpg',
  },
  {
    name: 'Anymailfinder',
    src: '/anymailfinder.png',
  },
  {
    name: 'Zerobounce',
    src: '/zerobounce.png',
  },
];

const TechStackSection = () => {
  return (
    <div className="relative py-16">
      <div className="relative container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
            <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Our Technology Stack
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry-Leading Tools
            </span>
          </h3>
          <p className="text-gray-600 text-lg">
            We leverage the best tools in the industry to deliver exceptional results
          </p>
        </div>

        {/* Logos Grid */}
        <div className="p-8 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {techLogos.map((logo) => (
              <div 
                key={logo.name}
                className="flex items-center justify-center p-6 rounded-2xl hover:scale-110 transition-all duration-500 ease-out group"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={50}
                  className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            And many more cutting-edge tools to ensure your success
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;