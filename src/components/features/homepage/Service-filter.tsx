'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SCS01 from './SCS01';
import SCS03 from './SCS03';
import SCS04 from './SCS04';

interface ServiceOption {
  id: string;
  label: string;
  shortLabel?: string;
  component: React.ComponentType;
  description: string;
  icon: React.ReactNode;
}

interface EnterpriseServicesHubProps {
  className?: string;
}

const EnterpriseServicesHub: React.FC<EnterpriseServicesHubProps> = ({
  className = ""
}) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeService, setActiveService] = useState('automation');
  const [contentKey, setContentKey] = useState(0);

  const serviceOptions: ServiceOption[] = [
    {
      id: 'automation',
      label: 'Systems Automation',
      shortLabel: 'Automation',
      component: SCS01,
      description: 'Optimize operations and streamline workflows with intelligent automation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'seo',
      label: 'SEO Solutions',
      shortLabel: 'SEO',
      component: SCS03,
      description: 'Boost visibility with AI-driven SEO and intelligent chatbot integration',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'consulting',
      label: 'Strategy Consulting',
      shortLabel: 'Strategy',
      component: SCS04,
      description: 'Strategic AI transformation roadmaps and infrastructure optimization',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTalkToExpertClick = () => {
    router.push('/contact');
  };

  const handleServiceHover = (serviceId: string) => {
    if (serviceId === activeService) return;
    setActiveService(serviceId);
    setContentKey(prev => prev + 1);
  };

  const ActiveComponent = serviceOptions.find(option => option.id === activeService)?.component || SCS01;
  const activeServiceData = serviceOptions.find(option => option.id === activeService);

  return (
    <div className={`enterprise-services-hub ${className}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            {/* Main Content */}
            <div className="content-wrapper">
              <div className="title-section">
                <h1 className="main-title">
                  Our AI for Enterprises Offerings
                </h1>
                <div className="title-underline"></div>
              </div>
              
              <p className="hero-description">
                Persimium empowers enterprises with AI-driven digital transformation, 
                implementation, and managing custom solutions that boost revenue, cut costs, and streamline 
                workflows. Explore our comprehensive AI solutions:
              </p>
              
              {/* Service Navigation */}
              <div className="service-navigation">
                <div className="service-tabs">
                  {serviceOptions.map((option, index) => (
                    <button
                      key={option.id}
                      onMouseEnter={() => handleServiceHover(option.id)}
                      className={`service-tab ${activeService === option.id ? 'active' : ''}`}
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="tab-icon">
                        {option.icon}
                      </div>
                      <div className="tab-content">
                        <span className="tab-label-full">{option.label}</span>
                        <span className="tab-label-short">{option.shortLabel}</span>
                        <span className="tab-description">{option.description}</span>
                      </div>
                      <div className="tab-indicator"></div>
                    </button>
                  ))}
                </div>

                {/* Active Service Highlight */}
                <div className="active-service-highlight">
                  <div className="highlight-content">
                    <div className="highlight-icon">
                      {activeServiceData?.icon}
                    </div>
                    <div className="highlight-text">
                      <h3 className="highlight-title">{activeServiceData?.label}</h3>
                      <p className="highlight-description">{activeServiceData?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cta-wrapper">
                <button 
                  className={`cta-button ${isHovered ? 'hovered' : ''}`}
                  onClick={handleTalkToExpertClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="button-text">Talk to an Expert</span>
                  <div className="button-background"></div>
                  <div className="button-shine"></div>
                  <svg 
                    className="button-arrow" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="service-content">
        <div key={contentKey} className="content-container">
          <ActiveComponent />
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* Main Container - Pure White */
        .enterprise-services-hub {
          width: 100%;
          background: #ffffff;
        }

        /* Hero Section - Pure White, No Borders */
        .hero-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .hero-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 6rem 2rem;
          position: relative;
          z-index: 2;
        }

        /* Hero Content - Ultra Smooth Animations */
        .hero-content {
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          z-index: 3;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Title Section */
        .title-section {
          margin-bottom: 2rem;
        }

        .main-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          margin: 1.5rem auto;
          border-radius: 2px;
          transform: scaleX(0);
          animation: expandLine 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
        }

        @keyframes expandLine {
          to { transform: scaleX(1); }
        }

        /* Hero Description */
        .hero-description {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          color: #475569;
          line-height: 1.7;
          margin: 0 0 4rem 0;
          font-weight: 400;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Service Navigation - Ultra Smooth */
        .service-navigation {
          margin: 0 0 4rem 0;
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.8s forwards;
        }

        .service-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .service-tab {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          text-align: left;
          opacity: 0;
          transform: translateY(10px);
          animation: slideInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          will-change: transform, box-shadow, background;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-tab:hover {
          border-color: #e2e8f0;
          background: #fafbfc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .service-tab.active {
          border-color: #dbeafe;
          background: #f8faff;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 6px rgba(59, 130, 246, 0.04);
        }

        .tab-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: 12px;
          color: #64748b;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: background, color;
        }

        .service-tab:hover .tab-icon,
        .service-tab.active .tab-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
        }

        .tab-content {
          flex: 1;
          min-width: 0;
        }

        .tab-label-full {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .tab-label-short {
          display: none;
        }

        .tab-description {
          display: block;
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .service-tab:hover .tab-description,
        .service-tab.active .tab-description {
          color: #475569;
        }

        .tab-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 0 2px 2px 0;
          transform: scaleY(0);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
        }

        .service-tab:hover .tab-indicator,
        .service-tab.active .tab-indicator {
          transform: scaleY(1);
        }

        /* Active Service Highlight (Mobile) */
        .active-service-highlight {
          display: none;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          border-radius: 16px;
          padding: 1.5rem;
          margin-top: 1.5rem;
          color: white;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .highlight-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .highlight-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
        }

        .highlight-text {
          flex: 1;
        }

        .highlight-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: white;
        }

        .highlight-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.4;
        }

        /* CTA Button - Ultra Smooth */
        .cta-wrapper {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1.0s forwards;
        }

        .cta-button {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          letter-spacing: 0.025em;
          box-shadow: 0 4px 20px rgba(30, 41, 59, 0.2),
                      0 1px 3px rgba(0, 0, 0, 0.08);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          will-change: transform, box-shadow;
        }

        .cta-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 25px rgba(30, 41, 59, 0.25),
                      0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .button-text {
          position: relative;
          z-index: 3;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .button-arrow {
          position: relative;
          z-index: 3;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .cta-button:hover .button-text {
          transform: translateX(-1px);
        }

        .cta-button:hover .button-arrow {
          transform: translateX(2px) translateY(-2px);
        }

        .button-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 1;
        }

        .cta-button:hover .button-background {
          opacity: 1;
        }

        .button-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 2;
        }

        .cta-button:hover .button-shine {
          transform: rotate(45deg) translateX(100%);
        }

        /* Service Content - Ultra Smooth Transitions */
        .service-content {
          background: #ffffff;
        }

        .content-container {
          opacity: 0;
          transform: translateY(5px);
          animation: contentFadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes contentFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .hero-wrapper {
            padding: 6vw 4vw 8vw 4vw;
          }

          .main-title {
            font-size: clamp(2rem, 8vw, 2.75rem);
            line-height: 1.2;
          }

          .hero-description {
            font-size: clamp(1rem, 4vw, 1.125rem);
            margin-bottom: 6vw;
            padding: 0 2vw;
          }

          .title-underline {
            width: 60px;
            height: 3px;
            margin: 4vw auto;
          }

          .service-tabs {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .service-tab {
            padding: 1rem;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .tab-label-full {
            display: none;
          }

          .tab-label-short {
            display: block;
            font-size: 1rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.25rem;
          }

          .tab-description {
            font-size: 0.85rem;
          }

          .active-service-highlight {
            display: block;
          }

          .cta-button {
            padding: 4vw 8vw;
            font-size: max(16px, 4vw);
            gap: 3vw;
            min-height: 56px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .hero-wrapper {
            padding: 8vw 3vw 10vw 3vw;
          }

          .service-tab {
            padding: 0.75rem;
          }

          .tab-icon {
            width: 40px;
            height: 40px;
          }
        }

        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          .hero-content,
          .hero-description,
          .service-navigation,
          .cta-wrapper,
          .service-tab,
          .content-container {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .title-underline {
            animation: none;
            transform: scaleX(1);
          }

          * {
            transition-duration: 0.1s !important;
          }
        }

        /* Hardware Acceleration */
        .service-tab,
        .cta-button,
        .content-container {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .enterprise-services-hub * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default EnterpriseServicesHub;
