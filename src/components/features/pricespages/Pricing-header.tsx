// components/pricing/pricing-header.tsx
import React from 'react';
import { Sparkles, TrendingUp, Zap } from "lucide-react";

interface PricingHeaderProps {
  className?: string;
}

export default function PricingHeader({ className = "" }: PricingHeaderProps) {
  return (
    <section 
      className={`relative bg-gradient-to-b from-white via-gray-50/20 to-white pt-32 lg:pt-40 xl:pt-48 pb-20 lg:pb-28 overflow-hidden ${className}`}
      aria-labelledby="pricing-header"
    >
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-30" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full border border-blue-200/60 bg-white/80 backdrop-blur-sm px-5 py-2.5 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 tracking-wide">
                AI-Powered Growth Solutions
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Growth Plan
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto sm:text-2xl">
              Unlock your business potential with our tailored AI solutions designed to drive growth and maximize efficiency.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {[
              { icon: TrendingUp, text: "Proven Results" },
              { icon: Zap, text: "Lightning Fast" },
              { icon: Sparkles, text: "AI-Powered" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/60 shadow-sm opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
              >
                <item.icon className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 animate-bounce">
            <span>Explore our plans below</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

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
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
