import React from 'react';

const ContactHeader = () => {
  return (
    // Added mt-32 and lg:mt-48 to create a large margin above the component
    <div className="py-24 sm:py-18 mt-18 lg:mt-18">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Optional: A small badge for a modern UI touch */}
        <div className="mb-4">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                Let&apos;s Connect
            </span>
        </div>
        
        {/* The main heading with a gradient text effect */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Start a Conversation
        </h1>
        
        {/* Updated paragraph with slightly larger text and more top margin */}
        <p className="mt-8 text-xl sm:text-2xl leading-8 text-gray-700">
          Have a project in mind or just want to ask a question? I&apos;m here to help.
          Schedule a free discovery call below or send a message, and I&apos;ll get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;