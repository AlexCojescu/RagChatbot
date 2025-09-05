'use client';

import React from 'react';
// REMOVED: Lenis, useScroll, useTransform, and other animation-specific imports are no longer needed.
import { motion } from 'framer-motion';

// Component Imports
import Navbar from "@/components/features/Navbar";
import LeadGen from "@/components/features/LeadGen";
import TechStackSection from "@/components/features/TechStackSection";
import AutomationSection from "@/components/features/AutomationSection";
import WebDev from "@/components/features/WebDev";
import ServicesHeader from '@/components/features/ServicesHeader';

// REMOVED: The 'servicesData' array and the 'ServiceSection' component have been removed.

// --- Main Page Component (MODIFIED) ---
export default function Page() {
  // REMOVED: The useEffect for Lenis smooth scrolling is gone.

  return (
    <div className="bg-white">
      <Navbar />

      {/* The ServicesHeader remains at the top */}
      <ServicesHeader />

      {/* NEW SECTION: This is the new container for all your service components.
        It's designed to be added as a single block to your page.
      */}
      {/* MODIFIED: Changed bg-gray-50/50 to bg-white to remove the gray background */}
      <main className="bg-white py-20 sm:py-24">
        {/* MODIFIED: Removed max-w-4xl and mx-auto to make this container full-width */}
        <div className="px-6 space-y-20 sm:space-y-24">
          
          {/* Each service component is now an individual section with an ID for potential deep-linking */}
          <motion.section 
            id="web-development"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <WebDev />
          </motion.section>

         

          <motion.section 
            id="lead-generation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >

            <LeadGen />
            <TechStackSection />
          </motion.section>

          <motion.section 
            id="automation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <AutomationSection />
          </motion.section>

          <motion.section 
            id="content-strategy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >

          </motion.section>

     
        </div>
      </main>
    </div>
  );
}
