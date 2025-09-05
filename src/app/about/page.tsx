'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// MODIFIED: Import from 'lenis' instead of the deprecated package
import Lenis from 'lenis';
// MODIFIED: Import Link from 'next/link'
import Link from 'next/link';
// MODIFIED: Removed the incorrect 'Link' import from lucide-react
import { ArrowRight, Briefcase, Cpu, Lightbulb } from 'lucide-react';

// Component Imports
import Navbar from "@/components/features/Navbar";
import { ProcessTimeline } from '@/components/features/ProcessTimeline';

// --- Main Page Component ---
export default function Page() {
  // Effect for Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* --- Hero Section --- */}
      <motion.header 
        className="bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto pt-40 pb-24 sm:pt-48 sm:pb-32 px-6 text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            We Are Your Digital Growth Partner.
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            {/* FIXED: Replaced ' with &apos; */}
            We don&apos;t just build solutions; we architect ecosystems. By integrating advanced technology with strategic insight, we empower businesses to navigate complexity, automate processes, and achieve sustainable growth.
          </motion.p>
        </div>
      </motion.header>

      <main>
        {/* --- Founder & Mission Section --- */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="w-full h-96 lg:h-full bg-gray-100 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Image
                src="/Creator.png"
                alt="Agency Founder"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Meet the Founder</h2>
              <p className="mt-4 text-lg text-gray-600">
                With a background in enterprise data architecture and a passion for disruptive technology, our founder established this agency to bridge the gap between complex digital potential and tangible business outcomes.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                {/* FIXED: Replaced ' with &apos; */}
                &quot;Our core philosophy is simple: technology should be an accelerator, not a bottleneck. We build with purpose, ensuring every line of code, every automated workflow, and every piece of content serves a strategic goal. We are committed to being true partners in our clients&apos; success.&quot;
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Core Philosophy Section --- */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Our Guiding Principles</h2>
              <p className="mt-4 text-lg text-gray-600">
                Three core values drive every project we undertake.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Principle 1 */}
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Strategic Innovation</h3>
                <p className="mt-2 text-gray-600">We apply technology not for its own sake, but as a strategic tool to solve core business challenges and unlock new opportunities.</p>
              </div>
              {/* Principle 2 */}
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Radical Partnership</h3>
                <p className="mt-2 text-gray-600">Your success is our metric. We integrate with your team to understand your vision deeply, ensuring our solutions are perfectly aligned.</p>
              </div>
              {/* Principle 3 */}
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pragmatic Execution</h3>
                <p className="mt-2 text-gray-600">Big ideas are only valuable when executed flawlessly. We focus on building robust, scalable, and maintainable systems that deliver lasting value.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* --- Our Process Section --- */}
        <ProcessTimeline />

        {/* --- CTA Section --- */}
        <section className="bg-white py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Ready to Build Your Future?</h2>
            <p className="mt-4 text-lg text-gray-600">
              {/* FIXED: Replaced ' with &apos; */}
              Let&apos;s discuss how our strategic approach to technology can accelerate your growth.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105">
                Schedule a Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
