'use client';

import React from 'react';
import Image from 'next/image';

// --- Define your technology stack logos here ---
// Instructions:
// 1. Download the SVG or PNG logos for each service.
// 2. Place them inside your `/public/` directory.
// 3. Update the `src` paths below to match your filenames.

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
    // CHANGED: Background is now white, and top padding has been removed.
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logos Grid */}
        <div className="mt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-24">
            {techLogos.map((logo) => (
              // This container now controls the sizing for a uniform look
              <div 
                key={logo.name} 
                // CHANGED: Increased height for much larger logos
                className="h-20 flex justify-center items-center" 
                title={`Powered by ${logo.name}`}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={200} // Increased base width for better optimization
                  height={80} // Increased base height
                  // CHANGED: Removed grayscale filter to show colors. Added a subtle hover effect.
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TechStackSection;
