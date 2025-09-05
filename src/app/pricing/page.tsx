"use client";

import React, { useState } from 'react';
import Navbar from "@/components/features/Navbar";
import WebDevPricingSection from "@/components/features/WebDevPricingSection";
import AutomationPricingSection from "@/components/features/AutomationPricingSection";
import AiContentPricingSection from "@/components/features/AIContentPricingSection";
import LeadGenPricingSection from "@/components/features/LeadGenPricingSection";

// Reusable Arrow SVG component for navigation
const ArrowIcon = ({ direction = 'left' }: { direction?: 'left' | 'right' }) => (
  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
  </svg>
);


export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // An array of objects, each containing the title for the filter and the component to render
  const sections = [
    { title: "Web Development", component: <WebDevPricingSection /> },
    { title: "Automation", component: <AutomationPricingSection /> },
    { title: "Lead Generation", component: <LeadGenPricingSection /> },
    { title: "AI Content", component: <AiContentPricingSection /> }
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sections.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sections.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Directly navigate to a specific section
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <Navbar />
      {/* Adjusted padding: Increased top padding (pt-32) for more space below the navbar */}
      <div className="w-full pt-32 sm:pt-36 pb-4">
        {/* Filter Navigation Buttons */}
        {/* Adjusted margin: Bottom margin is further reduced (mb-2) to tighten the space to the section below */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-2 px-4 flex-wrap">
          {sections.map((section, index) => (
            <button
              key={section.title}
              onClick={() => goToSlide(index)}
              className={`py-2 px-4 my-1 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                currentIndex === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <main className="relative w-full overflow-hidden">
          {/* Navigation Arrow: Previous */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 sm:left-4 md:left-6 lg:left-8 z-10 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white transition-colors shadow-md"
            aria-label="Previous section"
          >
            <ArrowIcon direction="left" />
          </button>

          {/* Pricing Section Container with Transition */}
          <div className="w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="flex">
              {sections.map((section, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {section.component}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow: Next */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 sm:right-4 md:right-6 lg:right-8 z-10 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white transition-colors shadow-md"
            aria-label="Next section"
          >
            <ArrowIcon direction="right" />
          </button>
        </main>
      </div>
    </>
  );
}