'use client';

import React from 'react';
// MODIFIED: Explicitly import the 'Variants' type
import { motion, type Variants } from 'framer-motion';

// --- Data for the navigation links ---
const serviceLinks = [
  { name: 'AI Solutions', href: '#ai-solutions', isFeatured: true },
  { name: 'Advanced Data Architecture', href: '#data-architecture' },
  { name: 'AI UGC', href: '#apps', isFeatured: true },
  { name: 'Automation', href: '#automation', isFeatured: true },
  { name: 'Digital Innovation & Strategy', href: '#digital-strategy', isFeatured: true },
  { name: 'Enterprise Digital Transformation', href: '#enterprise-transformation' },
  { name: 'Performance Technology', href: '#performance-tech' },
  { name: 'Web Design', href: '#web-design', isFeatured: true },
  { name: 'Web Development', href: '#web-development', isFeatured: true },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ServicesHeader = () => {
  return (
    // UPDATED: Removed white background to show gradient
    <div className="pt-16 sm:pt-20 lg:pt-24 xl:pt-32">
      <motion.header 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="pt-36 sm:pt-48 pb-0 px-20 sm:px-32 lg:px-48 xl:px-64">
          
          {/* Main "Services" Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-7xl sm:text-8xl lg:text-9xl font-light text-gray-900 tracking-tighter"
          >
            Services
          </motion.h1>

          {/* Navigation Links Container */}
          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {serviceLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className={`text-xl sm:text-2xl text-gray-500 hover:text-gray-900 transition-colors duration-300 relative group
                    ${link.isFeatured ? 'font-medium text-gray-800' : ''}
                  `}
                >
                  <span>{link.name}</span>
                  {link.isFeatured && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-px bg-gray-400"></span>
                  )}
                  {!link.isFeatured && (
                    <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.header>
    </div>
  );
};

export default ServicesHeader;