'use client';

import React from 'react';
// Import motion and Variants for animations
import { motion, type Variants } from 'framer-motion';

// --- Reusable SVG Icons for the feature columns ---
const BlueprintIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ResponsiveIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const WebDev = () => {
  return (
    <div className="relative py-20">
      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-6"
          >
            <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Web Development
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
          >
            Strategic{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Web Development
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Construct your core digital asset with logic and purpose. We engineer a website that serves as a stable, 
            scalable foundation for all commercial activity.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Digital Foundation */}
          <motion.div 
            variants={itemVariants}
            className="p-8 hover:scale-105 transition-all duration-700 ease-out group text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500 mx-auto">
                <BlueprintIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Strategic Digital Foundation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We dont just build websites; we engineer your central digital asset. It;s the stable, reliable core from which all marketing and sales activities will operate.
            </p>
          </motion.div>

          {/* Scalable Architecture */}
          <motion.div 
            variants={itemVariants}
            className="p-8 hover:scale-105 transition-all duration-700 ease-out group text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500 mx-auto">
                <ScaleIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Future-Proof Scalability</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Your business will grow, and your website should grow with it. We build on a flexible foundation that handles increased traffic and new features without a complete rebuild.
            </p>
          </motion.div>

          {/* Responsive Design */}
          <motion.div 
            variants={itemVariants}
            className="p-8 hover:scale-105 transition-all duration-700 ease-out group text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500 mx-auto">
                <ResponsiveIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Seamless User Experience</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              A seamless experience is non-negotiable. Your platform will be fully responsive, providing a perfect, intuitive user experience on desktops, tablets, and smartphones alike.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="p-12 rounded-3xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Digital Foundation?</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let;s create a website that serves as the cornerstone of your digital growth strategy.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDev;