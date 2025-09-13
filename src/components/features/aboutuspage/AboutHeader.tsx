'use client';

import React from 'react';
import { ChevronDownIcon, SparklesIcon, HeartIcon, TrophyIcon, UsersIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const AboutHeader = () => {
  // Navigation sections with icons and descriptions
  const sections = [
    {
      id: 'mission-vision',
      label: 'Mission & Vision',
      icon: <SparklesIcon className="w-5 h-5" />,
      description: 'Our purpose and future goals'
    },
    {
      id: 'origin-story',
      label: 'Our Story',
      icon: <HeartIcon className="w-5 h-5" />,
      description: 'Where we began and how we grew'
    },
    {
      id: 'value-proposition',
      label: 'Why Choose Us',
      icon: <CheckBadgeIcon className="w-5 h-5" />,
      description: 'What makes us different'
    },
    {
      id: 'social-proof',
      label: 'Success Stories',
      icon: <TrophyIcon className="w-5 h-5" />,
      description: 'Client wins and testimonials'
    }
  ];

  // Smooth scroll to section function utilizing Next.js 15.3.5 navigation features
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <header className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-20 h-20 border border-blue-200/30 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-12 w-16 h-16 bg-blue-100/20 rounded-lg rotate-45 opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-blue-300/20 rounded-lg rotate-12 opacity-30"></div>
      
      {/* Main header content with increased top spacing */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 xl:pt-40 pb-16 lg:pb-24">
        <div className="text-center max-w-5xl mx-auto space-y-16">
          {/* Main heading with staggered animation */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-blue-50/50 rounded-full px-6 py-3 border border-blue-100/50">
              <UsersIcon className="w-6 h-6 text-blue-600" />
              <span className="text-blue-700 font-medium">About Our Company</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">Building</span>
              <span className="block opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards] bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Tomorrow&apos;s
              </span>
              <span className="block opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">Solutions</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
              Discover the story behind our innovation, the values that drive us, and the successes that define our journey in transforming digital experiences.
            </p>
          </div>

          {/* Quick navigation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-[fadeInUp_0.8s_1s_forwards]">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-left"
                style={{
                  animationDelay: `${1.2 + (index * 0.1)}s`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {section.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ChevronDownIcon className="w-4 h-4 ml-1 transform rotate-[-90deg]" />
                </div>
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="opacity-0 animate-[fadeInUp_0.8s_1.4s_forwards]">
            <div className="inline-flex flex-col items-center space-y-2 text-gray-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default AboutHeader;
