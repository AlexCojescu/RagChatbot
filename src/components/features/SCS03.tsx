'use client';

import React from 'react';
import Image from 'next/image';

interface StrategyConsultingSectionProps {
  imageSource?: string;
  imageAlt?: string;
  className?: string;
}

const StrategyConsultingSection: React.FC<StrategyConsultingSectionProps> = ({
  imageSource = "/agent03.png",
  imageAlt = "Service 01 illustration",
  className = ""
}) => {
  return (
    <section className={`strategy-consulting-container ${className}`}>


      {/* EXISTING BORDERED CARD */}
      <div className="strategy-consulting-card">
        {/* Left Side */}
        <div className="left-section">
          {/* Image at top with saucer shadow */}
          <div className="image-container">
            <div className="image-with-shadow">
              <Image
                src={imageSource}
                alt={imageAlt}
                width={250}
                height={130}
                className="top-image"
              />
              <div className="saucer-shadow"></div>
            </div>
          </div>

          <div className="left-content">
            {/* Title */}
            <h2 className="main-title">Customized Chatbot Solutions</h2>

            {/* Subtitle */}
            <h3 className="subtitle">Optimize Customer Interactions. Streamline Support. Drive Efficiency.</h3>

            {/* Description */}
            <p className="description">
            Deploy intelligent, tailored AI agents to enhance customer engagement, automate routine inquiries, and significantly reduce operational overhead. Our solutions transform service delivery into a scalable revenue enabler.
            </p>

            {/* Learn More Button */}
            <button className="learn-more-btn">
              <span>Learn More</span>
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Grey Divider */}
        <div className="divider-line"></div>

        {/* Right Side */}
        <div className="right-section">
          <div className="right-content">
            {/* First Section */}
            <div className="content-block">
              <h3 className="block-title">1. Strategic AI Agent Design</h3>
              <div className="bullet-points">
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Define</strong> precise conversational flows to maximize objective attainment and user satisfaction.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Integrate</strong> proprietary data sources for robust, domain-specific knowledge retrieval.

</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Engineer</strong> custom chatbot personas to align with brand voice and targeted customer segments.

</span>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="content-block">
              <h3 className="block-title">2. Seamless Deployment & Integration</h3>
              <div className="bullet-points">
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Facilitate</strong> rapid deployment across all designated customer touchpoints (e.g., web, mobile, messaging platforms).</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Ensure</strong> robust, bidirectional integration with existing CRM, ERP, and support system infrastructures.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Implement</strong> scalable architectures to accommodate fluctuating user volume and ensure consistent performance.</span>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>



      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .strategy-consulting-container {
          width: 100%;
          max-width: 1400px;
          margin: 2rem auto 0 auto;
          padding: 2rem 2rem 0 2rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* UPDATED HEADER SECTION - NO BORDER, REDUCED SPACING */
        .above-border-section {
          background: #ffffff;
          color: #1a202c;
          padding: 3rem 2rem;
          text-align: center;
          margin-bottom: 2rem;
          border-radius: 16px 16px 0 0;
        }

        .above-border-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-header {
          font-family: 'Inter', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 2rem 0;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .section-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0 0 2.5rem 0;
          font-weight: 400;
        }

        .talk-to-expert-btn {
          font-family: 'Inter', sans-serif;
          background: #1a202c;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.025em;
        }

        .talk-to-expert-btn:hover {
          background: #2d3748;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(26, 32, 44, 0.3);
        }

        /* EXISTING STYLES WITH PROFESSIONAL FONT */
        .strategy-consulting-card {
          display: flex;
          border: 0.1px solid #f8f9fa;
          border-radius: 16px;
          background: white;
          overflow: hidden;
          min-height: 650px;
          height: 650px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 
                      0 8px 25px rgba(0, 0, 0, 0.1),
                      0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .left-section {
          flex: 1;
          padding: 3rem 0.5rem 2rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        /* REVERTED IMAGE CONTAINER - ORIGINAL LEFT POSITIONING */
        .image-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  width: 100%;
  margin-left: 40px;
  margin-top: -30px; /* Add this to move image 5px higher */
  margin-bottom: 0.5rem; /* Add this - reduces space below image */
}


        /* REVERTED IMAGE WITH SHADOW - FIXED SIZING */
        .image-with-shadow {
          position: relative;
          display: inline-block;
        }

        .top-image {
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 2;
        }

        /* REVERTED SAUCER SHADOW - FIXED SIZING */
        .saucer-shadow {
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 20px;
          background: radial-gradient(ellipse, rgba(0, 0, 0, 0.7) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(8px);
          z-index: 1;
        }

        .left-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-self: flex-start;
          width: 100%;
        }

        .main-title {
          font-family: 'Inter', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: #4a5568;
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.025em;
        }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #718096;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          max-width: none;
          font-weight: 400;
        }

        /* NEW LEARN MORE BUTTON */
        .learn-more-btn {
          font-family: 'Inter', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #1a202c;
          border: 1px solid #e2e8f0;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.025em;
          align-self: flex-start;
        }

        .learn-more-btn:hover {
          background: #f7fafc;
          border-color: #cbd5e0;
          transform: translateX(2px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .learn-more-btn:hover .arrow-icon {
          transform: translateX(3px);
        }

        .divider-line {
          width: 1px;
          background-color: #000000;
          flex-shrink: 0;
          align-self: center;
          height: 85%;
          margin: 15px 0;
        }

        .right-section {
          flex: 1.2;
          padding: 3rem 3rem 2rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .content-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .block-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          letter-spacing: -0.025em;
        }

        .bullet-points {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .bullet-item {
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 1.1rem;
          line-height: 1.5;
          font-weight: 400;
        }

        .bullet {
          color: #3182ce;
          font-weight: bold;
          margin-top: 0.1rem;
          flex-shrink: 0;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .strategy-consulting-container {
            margin: 1rem auto 0 auto;
            padding: 1rem 1rem 0 1rem;
          }

          .above-border-section {
            padding: 2rem 1.5rem;
            margin-bottom: 1.5rem;
          }

          .section-header {
            font-size: 2rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .strategy-consulting-card {
            flex-direction: column;
            height: auto;
            min-height: auto;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12), 
                        0 6px 20px rgba(0, 0, 0, 0.08),
                        0 2px 8px rgba(0, 0, 0, 0.06);
          }

          .saucer-shadow {
            width: 150px;
            height: 16px;
            bottom: -10px;
            background: radial-gradient(ellipse, rgba(0, 0, 0, 0.7) 0%, transparent 70%);
          }

          .divider-line {
            width: 85%;
            height: 2px;
            margin: 15px auto;
          }

          .left-section {
            justify-content: flex-start;
            padding: 2rem 1.5rem;
            gap: 2rem;
            align-items: center;
          }

          .image-container {
            justify-content: center;
            margin-left: 0;
          }

          .right-section {
            padding: 2rem 1.5rem;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .left-content {
            align-self: center;
            text-align: center;
          }

          .learn-more-btn {
            align-self: center;
          }

          .block-title {
            font-size: 1.3rem;
          }

          .bullet-item {
            font-size: 1rem;
          }

          .right-content {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StrategyConsultingSection;
