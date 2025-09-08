'use client';

import React, { useState, useEffect } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth <= 768 && window.innerWidth > 480);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services: Service[] = [
    {
      icon: "⚡",
      title: "Intent-Driven Lead Generation",
      description: "Receive high-intent contacts, turning buyers into conversations"
    },
    {
      icon: "🚀",
      title: "Web Development",
      description: "Custom-built, high-performance websites and web applications designed for speed, scalability, and seamless user experience."
    },
    {
      icon: "✨",
      title: "Process Automation",
      description: "Technology to execute systemic tasks and entire workflows automatically"
    },
    {
      icon: "🛡️",
      title: "RAG Implementation",
      description: "Automate smarter decisions: Fuel your AI with instant access to verified company knowledge"
    }
  ];

  // --- Styles ---
  const commonStyles: React.CSSProperties = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  const containerStyle: React.CSSProperties = {
    ...commonStyles,
    background: 'transparent',
    padding: '4rem 0',
    margin: 0,
    textAlign: 'left',
    maxWidth: '100%',
    overflow: 'hidden'
  };

  const contentStyle: React.CSSProperties = {
    ...commonStyles,
    maxWidth: '100%',
    margin: 0,
    marginLeft: isMobile ? '1rem' : isTablet ? '2rem' : '8rem',
    marginRight: '0',
    padding: '0 2rem'
  };

  const headingStyle: React.CSSProperties = {
    ...commonStyles,
    fontSize: isMobile ? '2.5rem' : isTablet ? '3.5rem' : '4.5rem',
    fontWeight: 700,
    color: '#111827',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    marginBottom: '3rem',
    maxWidth: '100%',
    wordBreak: 'normal'
  };

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, #111827, #4b5563, #111827)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const servicesGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
    maxWidth: '100%'
  };

  const serviceCardBaseStyle: React.CSSProperties = {
    ...commonStyles,
    display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  padding: isMobile ? '1rem' : '1.5rem',
  borderRadius: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: '1px solid #d1d5db', // Changed from #f3f4f6 to darker gray
  transition: 'all 0.3s ease',
  cursor: 'pointer'
};

  const iconContainerStyle: React.CSSProperties = {
    flexShrink: 0,
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb',
    fontSize: '1.25rem',
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const serviceTitleStyle: React.CSSProperties = {
    ...commonStyles,
    fontWeight: 600,
    color: '#111827',
    fontSize: isMobile ? '1rem' : '1.125rem',
    marginBottom: '0.25rem',
  };

  const serviceDescriptionStyle: React.CSSProperties = {
    ...commonStyles,
    color: '#6b7280',
    fontSize: isMobile ? '0.8rem' : '0.875rem',
    lineHeight: 1.5,
  };

  const descriptionStyle: React.CSSProperties = {
    ...commonStyles,
    fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
    color: '#6b7280',
    lineHeight: 1.6,
    maxWidth: '100%',
    marginBottom: '2.5rem',
    fontWeight: 300,
  };

  const ctaButtonStyle: React.CSSProperties = {
    ...commonStyles,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: '#111827',
    color: 'white',
    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
    borderRadius: '9999px',
    fontSize: isMobile ? '1rem' : '1.125rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  };

  // --- Hover Handlers ---
  const handleServiceHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = '#e5e7eb';
    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleServiceLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = '#f3f4f6';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#1f2937';
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#111827';
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  // --- Button Click Handler ---
  const handleLearnMoreClick = () => {
    window.location.href = '/services';
  };

  return (
    <header style={containerStyle}>
      <div style={contentStyle}>
        {/* Main Heading */}
        <div>
          <h1 style={headingStyle}>
            Agentic and {' '}
            <span style={gradientTextStyle}>
              Generative AI
            </span>{' '}
            Services
          </h1>
        </div>

        {/* Services Grid */}
        <div style={servicesGridStyle}>
          {services.map((service, index) => (
            <div
              key={index}
              style={serviceCardBaseStyle}
              onMouseEnter={handleServiceHover}
              onMouseLeave={handleServiceLeave}
            >
              <div style={iconContainerStyle}>
                {service.icon}
              </div>
              <div>
                <h3 style={serviceTitleStyle}>
                  {service.title}
                </h3>
                <p style={serviceDescriptionStyle}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <p style={descriptionStyle}>
            Integrate advanced agentic and generative AI capabilities to elevate decision making 
            across sectors such as remodeling, renovating, energy, and financial services.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button 
            style={ctaButtonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={handleLearnMoreClick} // Added click handler here
          >
            <span>Learn more about our solutions</span>
            <span style={{transition: 'transform 0.3s ease'}}>→</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;