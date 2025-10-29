import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Marketing Campaign Automation",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Deploy marketing campaigns systematically to expand your operational capacity without hiring more staff."
  },
  {
    title: "System Integration & Data Unification",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    description: "Integrate disparate systems (like CRM, email, analytics) into a single, reliable source of truth for better decision-making."
  },
  {
    title: "Workflow & Process Optimization",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Automate repetitive, error-prone processes to reclaim time and improve accuracy across the board."
  }
];

const AutomationSection = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image */}
        <div className="flex-1 relative flex items-center justify-center mb-12 lg:mb-0">
          <Image
            src="/AutomationCreation.png"
            alt="Automation service example"
            width={540}
            height={420}
            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        {/* Right: Feature Cards & Content */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="mb-12 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-6 bg-blue-50">
              <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Business Automation
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Process Automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Systematize your operations for maximum efficiency. We replace scattered data and manual, error-prone tasks 
              with a single, reliable source of truth—giving you the capacity to scale.
            </p>
          </div>

          {/* Features as vertical stack */}
          <div className="space-y-8">
            {features.map((feat, idx) => (
              <div
                key={feat.title}
                className="flex items-start gap-6 p-7 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group border border-blue-100 hover:border-blue-200"
              >
                <div className="min-w-[3rem] min-h-[3rem] flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-200 transition-colors duration-300">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-14 text-center lg:text-left">
            <div className="inline-block p-1 rounded-2xl">
              <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Automate Your Business?</h3>
                <p className="text-gray-600 mb-6 text-lg max-w-xl">
                  Let&apos;s discuss how automation can transform your operations and free up your team for strategic work.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Schedule a Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;