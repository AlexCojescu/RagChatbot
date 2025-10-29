import React from 'react';

const AutomationSection = () => {
  return (
    <div className="relative py-20">
      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-orange-700 mb-6">
            <div className="mr-2 h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Business Automation
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Intelligent{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Process Automation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Systematize your operations for maximum efficiency. We replace scattered data and manual, error-prone tasks 
            with a single, reliable source of truth, giving you the capacity to scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Marketing Automation */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Marketing Campaign Automation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Deploy marketing campaigns systematically to expand your operational capacity without hiring more staff.
            </p>
          </div>

          {/* System Integration */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">System Integration & Data Unification</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Integrate disparate systems (like your CRM, email platform, and analytics) into a single, reliable source of truth for better decision-making.
            </p>
          </div>

          {/* Process Automation */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Workflow & Process Optimization</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Automate repetitive, error-prone processes to reclaim valuable team resources and dramatically improve accuracy across the board.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="p-12 rounded-3xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Automate Your Business?</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss how automation can transform your operations and free up your team for strategic work.
            </p>

            <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationSection;
