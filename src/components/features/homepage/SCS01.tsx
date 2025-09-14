'use client'; // This directive must be at the very top of the file

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './scs.module.css'; // ✅ Correct import

interface StrategyConsultingSectionProps {
  imageSource?: string;
  imageAlt?: string;
  className?: string;
}

const StrategyConsultingSection: React.FC<StrategyConsultingSectionProps> = ({
  imageSource = "/agent01.png",
  imageAlt = "Service 01 illustration",
  className = ""
}) => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/services');
  };

  return (
    <section className={`${styles.strategyConsultingContainer} ${className}`}>
      {/* MAIN CARD */}
      <div className={styles.strategyConsultingCard}>
        {/* Left Side */}
        <div className={styles.leftSection}>
          {/* Image with shadow */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWithShadow}>
              <Image
                src={imageSource}
                alt={imageAlt}
                width={290}
                height={130}
                className={styles.topImage}
              />
              <div className={styles.saucerShadow}></div>
            </div>
          </div>

          <div className={styles.leftContent}>
            <h2 className={styles.mainTitle}>Systems Automation</h2>
            <h3 className={styles.subtitle}>Optimize Business Operations. Streamline Workflows. Drive Efficiency.</h3>
            <p className={styles.description}>
              Deploy intelligent, tailored AI solutions to leverage operational efficiency, automate routine tasks, and significantly reduce manual overhead. Our solutions turn process execution into a scalable productivity enabler.
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
              <h3 className={styles.blockTitle}>1. Strategic AI Process Design</h3>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Define</strong> precise workflow automation flows to maximize objective attainment and operational efficiency.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Integrate</strong> proprietary data sources for robust, domain-specific knowledge retrieval and decision-making.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Engineer</strong> custom automation logic to align with business rules and targeted operational needs.</span>
                </div>
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>2. Seamless Deployment & Integration</h3>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Facilitate</strong> rapid deployment across all designated enterprise systems and applications (e.g., ERP, CRM, legacy systems).</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Ensure</strong> robust, bidirectional integration with existing IT infrastructure, databases, and support systems.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Implement</strong> scalable architectures to accommodate fluctuating workload volumes and ensure consistent performance.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyConsultingSection;
