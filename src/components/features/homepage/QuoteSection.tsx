import React from 'react';

const QuoteSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="max-w-4xl mx-auto">
          <blockquote className="relative pl-10 sm:pl-16">
            {/* Quote icon - unchanged */}
            <div className="absolute left-0 top-0">
              <svg className="h-10 w-10 text-blue-400 opacity-80 hover:opacity-100 transition-opacity duration-300"
                fill="currentColor"
                viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            {/* Mobile-specific underlines (hidden on desktop) */}
            <div className="md:hidden space-y-1">
              <p className="text-2xl font-semibold leading-tight text-blue-900">
                <span className="relative">
                  A one-person
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-700/60"></span>
                </span>
              </p>
              <p className="text-2xl font-semibold leading-tight text-blue-900">
                <span className="relative">
                  billion-dollar company
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-700/60"></span>
                </span>
              </p>
              <p className="text-2xl font-semibold leading-tight text-blue-900">
                <span className="relative">
                  will happen.
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-700/60"></span>
                </span>
              </p>
            </div>

            {/* Original desktop quote (hidden on mobile) */}
            <p className="hidden md:block text-3xl md:text-4xl font-semibold leading-tight text-blue-900">
              A one-person billion-dollar company will happen.
            </p>
          </blockquote>

          {/* Attribution (unchanged) */}
          <figcaption className="mt-6 sm:mt-8">
            <div className="inline-flex items-center space-x-3 group">
              <div className="h-px w-8 bg-blue-400 group-hover:w-12 transition-all duration-300" />
              <span className="text-lg sm:text-xl font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                Sam Altman, CEO of OpenAI
              </span>
              <div className="h-px w-8 bg-blue-400 group-hover:w-12 transition-all duration-300" />
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default QuoteSection;