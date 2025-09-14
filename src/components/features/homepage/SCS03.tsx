'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './scs.module.css';

interface DigitalSEOSolutionsProps {
  imageSource?: string;
  imageAlt?: string;
  className?: string;
}

const DigitalSEOSolutions: React.FC<DigitalSEOSolutionsProps> = ({
  imageSource = "/agent03.png",
  imageAlt = "Digital SEO Solutions illustration",
  className = ""
}) => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/services');
  };

  return (
    <section className={`${styles.strategyConsultingContainer} ${className}`}>
      <div className={styles.strategyConsultingCard}>
        {/* Left Side */}
        <div className={styles.leftSection}>
          {/* Image with shadow */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWithShadow}>
              <Image
                src={imageSource}
                alt={imageAlt}
                width={250}
                height={130}
                className={styles.topImage}
              />
              <div className={styles.saucerShadow}></div>
            </div>
          </div>

          <div className={styles.leftContent}>
            <h2 className={styles.mainTitle}>Digital SEO Solutions</h2>
            <h3 className={styles.subtitle}>
              Optimize Customer Interactions. Streamline Support. Drive Efficiency.
            </h3>
            <p className={styles.description}>
              Our AI-driven web development solutions merge cutting-edge design with powerful SEO strategies and intelligent chatbot integration. We create high-performance websites that not only rank higher but also provide instant, personalized user experiences. By leveraging AI, we automate engagement, capture leads, and ensure your site is a dynamic, always-on asset for your business.
            </p>
            <button className={styles.learnMoreBtn} onClick={handleLearnMoreClick}>
              <span>Learn More</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.dividerLine}></div>

        {/* Right Side */}
        <div className={styles.rightSection}>
          <div className={styles.rightContent}>
            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>1. Intelligent AI Chatbots</h3>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Deploy</strong> custom AI agents that handle customer inquiries, offer real-time support, and guide users through the sales funnel 24/7.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Build</strong> fast, responsive websites optimized to convert traffic into sales. The AI chatbot acts as a seamless extension of your sales team, engaging visitors and turning them into qualified leads.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Scalable Architecture</strong> Our solutions are built to grow with your business, ensuring your website and AI agents can handle increasing traffic and data without compromising performance.</span>
                </div>
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>2. Seamless Deployment & Integration</h3>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Facilitate</strong> rapid deployment across all designated customer touchpoints (e.g., web, mobile, messaging platforms).</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Ensure</strong> robust, bidirectional integration with existing CRM, ERP, and support system infrastructures.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Implement</strong> scalable architectures to accommodate fluctuating user volume and ensure consistent performance.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSEOSolutions;
