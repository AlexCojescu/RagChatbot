import React from 'react';

// --- Reusable SVG Icons for the feature columns ---
const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const LeadGen = () => {
  return (
    <div className="relative py-20">
      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-purple-700 mb-6">
            <div className="mr-2 h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            Lead Generation
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Precision{' '}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Lead Generation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop wasting time on generic outreach and manual research. We deliver a steady stream of high-intent leads, 
            complete with personalized icebreakers, so you can focus on one thing: closing deals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Intent-Based Targeting */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <TargetIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Intent-Based Targeting</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We go beyond basic demographics. Our system scrapes search intent data to find companies actively looking for your solution right now. Advanced filters let you zero in on the perfect fit.
            </p>
          </div>

          {/* Decision-Maker Identification */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <SearchIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Decision-Maker Research</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Forget guessing games. We identify the key decision-makers within your target accounts and automatically research their recent activity, professional background, and online presence.
            </p>
          </div>

          {/* Contact Discovery */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <UserIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Contact Discovery</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Using advanced data enrichment tools, we find verified contact information and ensure maximum deliverability for your outreach campaigns.
            </p>
          </div>

          {/* Personalized Icebreakers */}
          <div className="p-8 hover:scale-105 transition-all duration-500 ease-out group text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <MessageIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Personalized Icebreakers</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Turn cold leads into warm conversations. For every prospect, you;ll receive a hyper-personalized icebreaker that references their specific needs or recent activity, guaranteeing higher reply rates.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="p-12 rounded-3xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Generate Quality Leads?</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let;s build a lead generation system that delivers qualified prospects directly to your sales team.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Generating Leads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGen;
