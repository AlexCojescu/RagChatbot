import React from 'react';

// You can replace this with an icon from a library like `react-icons` if you have one installed.
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ContactFooter = () => {
  return (
    // Changed to `py-` to add symmetrical padding on the top and bottom
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* A simple divider to separate this section from the content above */}
        <div className="w-full border-t border-gray-200"></div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Looking Forward to Connecting
          </h3>
          <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
            I personally review every message and will respond within 24 business hours. In the meantime, feel free to connect with me on LinkedIn.
          </p>
          
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.linkedin.com/in/alexandrucojescu/" // <-- IMPORTANT: Change this URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;