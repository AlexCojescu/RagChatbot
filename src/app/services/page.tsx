'use client';

import React, { useState, useMemo, Suspense, useRef, useLayoutEffect } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from "@/components/features/Navbar";
import ServicesHeader from '@/components/features/servicepage/ServicesHeader';
import { Separator } from '@/components/features/Seperator';

const WebDev = dynamic(() => import("@/components/features/servicepage/WebDev"));
const LeadGen = dynamic(() => import("@/components/features/servicepage/LeadGen"));
const TechStackSection = dynamic(() => import("@/components/features/servicepage/TechStackSection"));
const AutomationSection = dynamic(() => import("@/components/features/servicepage/AutomationSection"));
const ChatbotWidget = dynamic(() => import("../../components/chatbotui/chat-widget/page"));

const sectionOrder = [
  {
    id: "web-development",
    label: "Web Development",
    Section: WebDev,
  },
  {
    id: "lead-generation",
    label: "Lead Generation",
    Section: LeadGen,
    nested: TechStackSection
  },
  {
    id: "automation",
    label: "Automation",
    Section: AutomationSection,
  },
  {
    id: "content-strategy",
    label: "Content Strategy",
    Section: () => (
      <div className="text-center py-12 text-gray-500">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Content Strategy</h3>
          <p className="text-lg">Comprehensive content solutions coming soon</p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
      </div>
    )
  }
];

const sectionVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 }
};

export default function Page() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const isLast = currentIdx === sectionOrder.length - 1;
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMore = () => {
    if (!isLast) {
      setCurrentIdx(idx => idx + 1);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  const { id, Section, nested } = sectionOrder[currentIdx];

  // Ensure fixed button sits just below last visible section
  // and not at the very bottom if very little content is above.
  useLayoutEffect(() => {
    if (!isLast && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentIdx]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen text-gray-800">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" />
        <Navbar />
        <ServicesHeader />
<main className="relative py-20 sm:py-24 flex flex-col items-center">
  <div className="w-full max-w-6xl px-4"> {/* increased width, optional */}
    <AnimatePresence mode="wait">
      <m.section
        ref={sectionRef}
        key={id}
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:bg-white/20 transition-all duration-300" // border removed
        style={{ boxShadow: '0 6px 32px 0 rgba(36,53,77,0.07)' }} // softer shadow, optional
      >
        <Suspense fallback={<div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-32" />}>
          <Section />
          {nested && (
            <div className="mt-12">
              <Suspense fallback={<div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg h-40" />}>
                {React.createElement(nested)}
              </Suspense>
            </div>
          )}
        </Suspense>
      </m.section>
    </AnimatePresence>
            {/* More button: fixed just below the section, not at page bottom */}
            {!isLast && (
              <div className="flex justify-center pt-8 pb-4">
                <button
                  onClick={handleMore}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl px-8 py-4 shadow-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  aria-label="Reveal next section"
                >
                  More
                </button>
              </div>
            )}
          </div>
        </main>
        <ChatbotWidget />
      </div>
    </LazyMotion>
  );
}
