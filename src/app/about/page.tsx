'use client';

import React, { useEffect, useMemo, Suspense } from 'react';
import { LazyMotion, domAnimation, m, Transition, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';

// Component Imports - Core components for immediate rendering
import Navbar from "@/components/features/Navbar";
import AboutHeader from '@/components/features/aboutuspage/AboutHeader';
import { Separator } from "@/components/features/Seperator";

// Lazy-loaded components for better initial page load performance
const MissionVision = dynamic(() => import('@/components/features/aboutuspage/MissionVision'), {
  loading: () => <div className="animate-pulse bg-gray-100 rounded-lg h-32" />,
  ssr: true
});

const ValueProposition = dynamic(() => import('@/components/features/aboutuspage/ValueProposition'), {
  loading: () => <div className="animate-pulse bg-gray-100 rounded-lg h-24" />,
  ssr: true
});

// REMOVED: SocailProof import since it's not being used

// Updated ChatbotWidget import with better error handling
const ChatbotWidget = dynamic(() => import("@/components/chatbotui/chat-widget/page"), {
  loading: () => <div className="animate-pulse bg-blue-100 rounded-lg h-12 w-32 mx-auto" />,
  ssr: false
});

// Type-safe Lenis configuration interface
interface LenisOptions {
  lerp?: number;
  duration?: number;
  easing?: (t: number) => number;
  touchMultiplier?: number;
}

// Memoized hook for Lenis initialization with proper types
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

// Type-safe animation variants - Optimized for better performance
const fadeInVariants: Variants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1 
  }
};

const fadeInTransition: Transition = {
  duration: 0.5,
  ease: "easeOut"
};

const scaleVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.98 
  },
  whileInView: { 
    opacity: 1, 
    scale: 1 
  }
};

const scaleTransition: Transition = {
  duration: 0.4,
  ease: "easeOut"
};

const slideUpVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 15 
  },
  whileInView: { 
    opacity: 1, 
    y: 0 
  }
};

const slideUpTransition: Transition = {
  duration: 0.4,
  ease: "easeOut",
  delay: 0.05
};

// Founder section variants for better visual hierarchy
const founderSectionVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  whileInView: { 
    opacity: 1, 
    y: 0 
  }
};

const founderSectionTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
  delay: 0.1
};

// --- Main Page Component ---
export default function Page() {
  useLenisScroll();

  const memoizedAnimations = useMemo(() => ({
    fadeIn: {
      variants: fadeInVariants,
      transition: fadeInTransition
    },
    scale: {
      variants: scaleVariants,
      viewport: { once: true, amount: 0.15 },
      transition: scaleTransition
    },
    slideUp: {
      variants: slideUpVariants,
      viewport: { once: true, amount: 0.2 },
      transition: slideUpTransition
    },
    founderSection: {
      variants: founderSectionVariants,
      viewport: { once: true, amount: 0.25 },
      transition: founderSectionTransition
    }
  }), []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen text-gray-800">
        {/* Exact background gradient from your main page */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" />
        
        <Navbar />

        {/* --- Hero Section --- */}
        <m.header 
          className="relative"
          variants={memoizedAnimations.fadeIn.variants}
          initial="initial"
          animate="animate"
          transition={memoizedAnimations.fadeIn.transition}
        >
          <AboutHeader />

          <div className="max-w-7xl mx-auto pt-40 pb-24 sm:pt-48 sm:pb-32 px-6 text-center">
            <Separator />
            
            <Suspense fallback={<div className="animate-pulse bg-gray-100 rounded-lg h-24 mb-8" />}>
              <m.div
                variants={memoizedAnimations.slideUp.variants}
                initial="initial"
                whileInView="whileInView"
                viewport={memoizedAnimations.slideUp.viewport}
                transition={memoizedAnimations.slideUp.transition}
              >
                <ValueProposition />
              </m.div>
            </Suspense>

            <Separator />

            <Suspense fallback={<div className="animate-pulse bg-gray-100 rounded-lg h-32 mb-8" />}>
              <m.div
                variants={memoizedAnimations.slideUp.variants}
                initial="initial"
                whileInView="whileInView"
                viewport={memoizedAnimations.slideUp.viewport}
                transition={{...memoizedAnimations.slideUp.transition, delay: 0.2}}
              >
                <MissionVision />
              </m.div>
            </Suspense>

            <Separator />

            {/* REMOVED: Empty SocailProof section */}
          </div>
        </m.header>

        <main>
          <ChatbotWidget />
          
          {/* --- Our Process Section --- */}
          <m.section
            variants={memoizedAnimations.slideUp.variants}
            initial="initial"
            whileInView="whileInView"
            viewport={memoizedAnimations.slideUp.viewport}
            transition={{...memoizedAnimations.slideUp.transition, delay: 0.1}}
          >
            {/* Add your process content here */}
          </m.section>
        </main>
      </div>
    </LazyMotion>
  );
}
