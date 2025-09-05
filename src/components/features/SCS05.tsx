'use client';

import React from 'react';
import Image from 'next/image';

interface StrategyConsultingSectionProps {
  imageSource?: string;
  imageAlt?: string;
  className?: string;
}

const StrategyConsultingSection: React.FC<StrategyConsultingSectionProps> = ({
  imageSource = "/agent04.png",
  imageAlt = "Service 01 illustration",
  className = ""
}) => {
  return (
    <section className={`strategy-consulting-container ${className}`}>
      <div className="strategy-consulting-card">
        {/* Left Side */}
        <div className="left-section">
          {/* Image at top center with saucer shadow */}
          <div className="image-container">
            <div className="image-with-shadow">
              <Image
                src={imageSource}
                alt={imageAlt}
                width={200}
                height={150}
                className="top-image"
              />
              <div className="saucer-shadow"></div>
            </div>
          </div>

          {/* Content at bottom */}
          <div className="left-content">
            {/* Title */}
            <h2 className="main-title">Strategy + Technology Consulting</h2>

            {/* Subtitle */}
            <h3 className="subtitle">Imodata&apos;s Methodologies to Think + Discover</h3> {/* CORRECTED LINE */}

            {/* Description */}
            <p className="description">
              We help enterprises develop AI/GenAI digital transformation roadmaps and optimize data and technology infrastructures.
            </p>
          </div>
        </div>

        {/* Enhanced Grey Divider */}
        <div className="divider-line"></div>

        {/* Right Side */}
        <div className="right-section">
          <div className="right-content">
            {/* First Section */}
            <div className="content-block">
              <h3 className="block-title">1. Strategy + Feasibility Assessment</h3>
              <div className="bullet-points">
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Define</strong> business objectives, AI opportunities, use cases, and feasibility.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Assess</strong> current workflows and AI maturity.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Analyze</strong> data needs, assess the current data infrastructure, and evaluate the feasibility of delivering data on-demand via a cloud-based service.</span>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="content-block">
              <h3 className="block-title">2. Future State Vision + Blueprint</h3>
              <div className="bullet-points">
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Outline</strong> security, compliance, and infrastructure requirements.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Oversee</strong> a vision workshop to map Agentic AI/Copilot-powered workflows and user interactions.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet">•</span>
                  <span><strong>Design</strong> data architecture for seamless integration.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .strategy-consulting-container {
          width: 100%;
          max-width: 1400px;
          margin: 4rem auto;
          padding: 3rem;
        }

        .strategy-consulting-card {
          display: flex;
          border: 0.1px solid #f8f9fa;
          border-radius: 16px;
          background: white;
          overflow: hidden;
          min-height: 600px;
          height: 600px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 
                      0 8px 25px rgba(0, 0, 0, 0.1),
                      0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .left-section {
          flex: 1;
          padding: 4rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .image-container {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-shrink: 0;
          width: 100%;
          margin-left: 80px;
        }

        /* NEW STYLES FOR IMAGE WITH SAUCER SHADOW */
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
          font-size: 2.2rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          margin: 0;
          font-weight: 500;
        }

        .description {
          font-size: 0.95rem;
          color: #718096;
          line-height: 1.6;
          margin: 0;
          max-width: 350px;
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
          padding: 4rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .content-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .block-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
        }

        .bullet-points {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 1.1rem;
          line-height: 1.5;
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
            padding: 2rem 1rem;
          }

          .strategy-consulting-card {
            flex-direction: column;
            height: auto;
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
            padding: 3rem 2rem;
            gap: 2rem;
            align-items: center;
          }

          .image-container {
            justify-content: center;
            margin-left: 0;
          }

          .right-section {
            padding: 3rem 2rem;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .left-content {
            align-self: center;
            text-align: center;
          }

          .block-title {
            font-size: 1.3rem;
          }

          .bullet-item {
            font-size: 1.rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StrategyConsultingSection;