import React from 'react';

const SalesSection: React.FC = () => {
  return (
    <section className="bg-transparent py-16 px-6">
      <div className="max-w-4xl text-left">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
          Drive 90% more sales-ready
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>opportunities to your team
        </h2>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl leading-relaxed">
          Verse&apos;s human-backed AI automatically engages, qualifies, {/* CORRECTED LINE */}
          and books appointments with leads to help you turn more 
          prospects into customers.
        </p>
        
        {/* Features List */}
        <div className="space-y-4 md:space-y-6 max-w-2xl">
          {/* Trailblazing AI */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                Trailblazing AI:
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Leverage advanced machine learning models to transform 
                businesses communication.
              </p>
            </div>
          </div>
          
          {/* Backed by Humans */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                Backed by Humans:
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Texts are constantly monitored by human concierges to 
                ensure authenticity and train our advanced AI.
              </p>
            </div>
          </div>
          
          {/* Two-Way Texting */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                Two-Way Texting:
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Engage in powerful conversations on the world&apos;s #1 {/* CORRECTED LINE */}
                communication channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;