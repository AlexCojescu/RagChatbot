"use client";

import React, { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "@/components/features/Navbar";
import PricingHeader from "@/components/features/pricespages/Pricing-header";

// Dynamically import pricing sections to reduce initial bundle size
const WebDevPricingSection = dynamic(() => import("@/components/features/pricespages/WebDevPricingSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
});

const AutomationPricingSection = dynamic(() => import("@/components/features/pricespages/AutomationPricingSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
});

const AiContentPricingSection = dynamic(() => import("@/components/features/pricespages/AIContentPricingSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
});

const LeadGenPricingSection = dynamic(() => import("@/components/features/pricespages/LeadGenPricingSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
});

const ChatbotWidget = dynamic(() => import("../../components/chatbotui/chat-widget/page"), {
  ssr: false
});

// Memoized Arrow SVG component to prevent unnecessary re-renders
const ArrowIcon = React.memo(({ direction = 'left' }: { direction?: 'left' | 'right' }) => (
  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} 
    />
  </svg>
));

ArrowIcon.displayName = 'ArrowIcon';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized sections array to prevent recreation on every render
  const sections = useMemo(() => [
    { title: "Web Development", component: <WebDevPricingSection /> },
    { title: "Automation", component: <AutomationPricingSection /> },
    { title: "Lead Generation", component: <LeadGenPricingSection /> },
    { title: "AI Content", component: <AiContentPricingSection /> }
  ], []);

  // Memoized navigation functions to prevent recreation
  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sections.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sections.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === sections.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sections.length]);

  // Memoized slide navigation function
  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: white !important;
          margin: 0;
          padding: 0;
        }
        
        html {
          background-color: white !important;
        }
      `}</style>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Pricing Header Section */}
        <PricingHeader />


        
        {/* Main Content Container - Reduced top padding since header provides spacing */}
        <div className="w-full pt-8 pb-4">
          
          {/* Filter Navigation Buttons with added margin bottom for blank space */}
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-8 px-4 flex-wrap">
            {sections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => goToSlide(index)}
                className={`py-2 px-4 my-1 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  currentIndex === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                aria-label={`Switch to ${section.title}`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Carousel Container with dynamic height */}
          <main className="relative w-full">
            
            {/* Navigation Arrow: Previous */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 sm:left-4 md:left-6 lg:left-8 z-10 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous section"
            >
              <ArrowIcon direction="left" />
            </button>

            {/* Pricing Section Container with dynamic height and no overflow hidden */}
            <div className="w-full relative">
              {sections.map((section, index) => (
                <div 
                  key={`${section.title}-${index}`} 
                  className={`w-full transition-all duration-500 ease-in-out ${
                    currentIndex === index 
                      ? 'opacity-100 relative z-10' 
                      : 'opacity-0 absolute top-0 left-0 z-0 pointer-events-none'
                  }`}
                  role="tabpanel"
                  aria-hidden={currentIndex !== index}
                >
                  {section.component}
                </div>
              ))}
            </div>

            {/* Navigation Arrow: Next */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 sm:right-4 md:right-6 lg:right-8 z-20 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next section"
            >
              <ArrowIcon direction="right" />
            </button>

            <ChatbotWidget />

          </main>
        </div>
      </div>
    </>
  );
}
