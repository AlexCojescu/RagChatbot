'use client';

import React, { useEffect, useMemo, Suspense } from 'react';
import { LazyMotion, domAnimation, m, Transition, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';

// Component Imports - Optimized with dynamic imports for non-critical components
import Navbar from "@/components/features/Navbar";
import ServicesHeader from '@/components/features/servicepage/ServicesHeader';
import { Separator } from '@/components/features/Seperator';

// Lazy-loaded components for better initial page load performance
const LeadGen = dynamic(() => import("@/components/features/servicepage/LeadGen"), {
  loading: () => <div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-32" />,
  ssr: true
});

const TechStackSection = dynamic(() => import("@/components/features/servicepage/TechStackSection"), {
  loading: () => <div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-40" />,
  ssr: true
});

const AutomationSection = dynamic(() => import("@/components/features/servicepage/AutomationSection"), {
  loading: () => <div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-32" />,
  ssr: true
});

const WebDev = dynamic(() => import("@/components/features/servicepage/WebDev"), {
  loading: () => <div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-36" />,
  ssr: true
});

const ChatbotWidget = dynamic(() => import("../../components/chatbotui/chat-widget/page"), {
  loading: () => <div className="animate-pulse bg-blue-100/30 backdrop-blur-sm rounded-lg h-12 w-32" />,
  ssr: false // Chatbot doesn't need SSR
});

// Type-safe Lenis configuration interface
interface LenisOptions {
  lerp?: number;
  duration?: number;
  easing?: (t: number) => number;
  touchMultiplier?: number;
}

// Memoized hook for Lenis initialization
const useLenisScroll = () => {
  useEffect(() => {
    const lenisOptions: LenisOptions = {
      lerp: 0.1,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2
    };

    const lenis = new Lenis(lenisOptions);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);
};

// Type-safe animation variants
const sectionVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  whileInView: { 
    opacity: 1, 
    y: 0 
  }
};

const sectionTransition: Transition = {
  duration: 0.5,
  ease: "easeOut"
};

// --- Main Page Component ---
export default function Page() {
  useLenisScroll();

  const memoizedAnimations = useMemo(() => ({
    section: {
      variants: sectionVariants,
      viewport: { once: true, amount: 0.15 },
      transition: sectionTransition
    }
  }), []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen text-gray-800">
        {/* Exact background gradient matching your main page */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" />
        
        <Navbar />

        <ServicesHeader />

        <main className="relative py-20 sm:py-24">
          <div className="px-6 space-y-20 sm:space-y-24">

            {/* Web Development Section */}
            <m.section 
              id="web-development"
              variants={memoizedAnimations.section.variants}
              initial="initial"
              whileInView="whileInView"
              viewport={memoizedAnimations.section.viewport}
              transition={memoizedAnimations.section.transition}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300"
            >
              <Suspense fallback={<div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-36" />}>
                <WebDev />
              </Suspense>
            </m.section>

            <Separator />

            {/* Lead Generation Section */}
            <m.section 
              id="lead-generation"
              variants={memoizedAnimations.section.variants}
              initial="initial"
              whileInView="whileInView"
              viewport={memoizedAnimations.section.viewport}
              transition={{...memoizedAnimations.section.transition, delay: 0.1}}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300"
            >
              <Suspense fallback={<div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-32 mb-8" />}>
                <LeadGen />
              </Suspense>
              
              <div className="mt-12">
                <Suspense fallback={<div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-40" />}>
                  <TechStackSection />
                </Suspense>
              </div>
            </m.section>

            <Separator />

            {/* Automation Section */}
            <m.section 
              id="automation"
              variants={memoizedAnimations.section.variants}
              initial="initial"
              whileInView="whileInView"
              viewport={memoizedAnimations.section.viewport}
              transition={{...memoizedAnimations.section.transition, delay: 0.2}}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300"
            >
              <Suspense fallback={<div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-32" />}>
                <AutomationSection />
              </Suspense>
            </m.section>

            <Separator />

            {/* Content Strategy Section - Empty but structured for future content */}
            <m.section 
              id="content-strategy"
              variants={memoizedAnimations.section.variants}
              initial="initial"
              whileInView="whileInView"
              viewport={memoizedAnimations.section.viewport}
              transition={{...memoizedAnimations.section.transition, delay: 0.3}}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-sm hover:bg-white/20 transition-all duration-300"
            >
              {/* Future content strategy component can be added here */}
              <div className="text-center py-12 text-gray-500">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">Content Strategy</h3>
                  <p className="text-lg">Comprehensive content solutions coming soon</p>
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                </div>
              </div>
            </m.section>

            <Separator />
          </div>

          <div className="mt-20 flex justify-center">
            <Suspense fallback={<div className="animate-pulse bg-blue-100/30 backdrop-blur-sm rounded-lg h-12 w-32" />}>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-sm">
                <ChatbotWidget />
              </div>
            </Suspense>
          </div>
        </main>
      </div>
    </LazyMotion>
  );
}