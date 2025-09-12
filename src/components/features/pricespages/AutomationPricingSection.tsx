import React from 'react';
import Image from 'next/image';

const AutomationPricingSection = () => {
  // A reusable checkmark icon
  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  return (
    <div className="my-0">
      <section className="bg-white py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Heading and Subheading */}
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Reclaim Your Time with Intelligent Automation
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We eradicate manual, error-prone tasks by building robust automation systems, allowing your team to focus on what matters most.
            </p>
          </div>

          {/* Updated Tool Logos Section with Next.js Image Component */}
          <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-8 lg:mb-10">
            <p className="text-base font-semibold text-gray-500 uppercase tracking-wider">Powered By</p>
            <Image 
              src="/make.png" 
              alt="Make.com Logo" 
              width={64} 
              height={64} 
              className="drop-shadow-lg object-contain" 
            />
            <Image 
              src="/zapier.png" 
              alt="Zapier Logo" 
              width={150} 
              height={64} 
              className="drop-shadow-lg object-contain" 
            />
            <Image 
              src="/n8n.png" 
              alt="n8n Logo" 
              width={64} 
              height={64} 
              className="drop-shadow-lg object-contain" 
            />
          </div>

          {/* Tiered Pricing Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            
            {/* Starter Tier */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Task Automator</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">For specific, high-impact tasks.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">$950<span className="text-lg font-medium text-gray-500"> /workflow</span></p>
              <p className="text-xs text-gray-500 mb-6">One-time fee per automated workflow.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Automate 1 core repetitive task</li>
                <li className="flex"><CheckIcon /> Up to 3 connected apps</li>
                <li className="flex"><CheckIcon /> Ideal for lead notifications, data entry, etc.</li>
                <li className="flex"><CheckIcon /> Includes setup & testing</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-gray-700 transition-colors">
                Automate a Task
              </a>
            </div>

            {/* Professional Tier (Highlighted) */}
            <div className="bg-white rounded-xl shadow-2xl border-2 border-blue-600 p-8 flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">System Integrator</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">Connect your entire sales or marketing stack.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">$2,500+</p>
              <p className="text-xs text-gray-500 mb-6">One-time project fee. Varies by complexity.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> End-to-end process automation</li>
                <li className="flex"><CheckIcon /> Connect multiple, complex apps</li>
                <li className="flex"><CheckIcon /> Logic-based paths & data formatting</li>
                <li className="flex"><CheckIcon /> Perfect for CRM & Email Marketing pipelines</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-blue-700 transition-colors">
                Build a System
              </a>
            </div>

            {/* Business Tier */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">Automation Partner</h3>
              <p className="text-gray-500 mt-1 mb-4 flex-grow">Ongoing support and new automations.</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">Custom<span className="text-lg font-medium text-gray-500"> /mo</span></p>
              <p className="text-xs text-gray-500 mb-6">Monthly retainer for continuous improvement.</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex"><CheckIcon /> Includes system integration + more</li>
                <li className="flex"><CheckIcon /> Proactive new workflow discovery</li>
                <li className="flex"><CheckIcon /> Priority support & maintenance</li>
                <li className="flex"><CheckIcon /> Ideal for scaling operations</li>
              </ul>
              <a href="#contact-me" className="mt-auto w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-gray-700 transition-colors">
                Become a Partner
              </a>
            </div>

          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900">Need a Website and Automation?</h4>
            <p className="text-lg text-gray-600 mt-2">
              Our core strength lies in combining high-performance web development with intelligent automation. We can build your website and its underlying operational systems as one cohesive project.
            </p>
            <a href="#contact-me" className="inline-block mt-6 bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-center hover:bg-blue-700 transition-colors shadow-lg">
                Schedule a Unified Strategy Call
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AutomationPricingSection;