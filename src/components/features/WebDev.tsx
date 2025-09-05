'use client';

import React from 'react';
// Import motion and Variants for animations
import { motion, type Variants } from 'framer-motion';

// --- Reusable SVG Icons for the feature columns ---

const BlueprintIcon = () => (
  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 mb-4 sm:mb-6">
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  </div>
);

const ScaleIcon = () => (
  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 mb-4 sm:mb-6">
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 6h12l3-6H3z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m-5.657-5.657l-1.414-1.414m12.728 0l-1.414 1.414M6 18h12"></path>
    </svg>
  </div>
);

const DevicesIcon = () => (
  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 mb-4 sm:mb-6">
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3"></path>
    </svg>
  </div>
);

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animating in
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};


const WebDev = () => {
  return (
    // MODIFIED: The main section is now a motion component
    <motion.section 
      className="bg-white py-12 sm:py-16 lg:py-24 mt-12 sm:mt-16 lg:mt-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        
        {/* Main Heading and Subheading */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Web Design + Development 
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-2 sm:px-0 leading-relaxed">
            Construct your core digital asset with logic and purpose. We engineer a website that serves as a stable, scalable foundation for all commercial activity.
          </p>
        </motion.div>

        {/* 3-Column Benefits Grid */}
        {/* MODIFIED: This grid now staggers its children */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16"
          variants={containerVariants}
        >
          
          {/* Column 1: Core Asset Construction */}
          <motion.div className="text-center px-2 sm:px-0" variants={itemVariants}>
            <div className="flex justify-center">
              <BlueprintIcon />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Core Asset Construction
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We don&apos;t just build websites; we engineer your central digital asset. It&apos;s the stable, reliable core from which all marketing and sales activities will operate.
            </p>
          </motion.div>

          {/* Column 2: Scalable Foundation */}
          <motion.div className="text-center px-2 sm:px-0" variants={itemVariants}>
            <div className="flex justify-center">
              <ScaleIcon />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Scalable & Future-Proof
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Your business will grow, and your website should grow with it. We build on a flexible foundation that handles increased traffic and new features without a complete rebuild.
            </p>
          </motion.div>

          {/* Column 3: Flawless On Every Device */}
          <motion.div className="text-center px-2 sm:px-0" variants={itemVariants}>
            <div className="flex justify-center">
              <DevicesIcon />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Optimized for All Platforms
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              A seamless experience is non-negotiable. Your platform will be fully responsive, providing a perfect, intuitive user experience on desktops, tablets, and smartphones alike.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDev;
