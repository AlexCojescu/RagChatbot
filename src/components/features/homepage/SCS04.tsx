'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './scs.module.css';

interface IntelligentRAGInfrastructureProps {
  imageSource?: string;
  imageAlt?: string;
  className?: string;
}

const IntelligentRAGInfrastructure: React.FC<IntelligentRAGInfrastructureProps> = ({
  imageSource = "/agent04.png",
  imageAlt = "Intelligent RAG Infrastructure illustration",
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
            <h2 className={styles.mainTitle}>Intelligent RAG Infrastructure</h2>
            <h3 className={styles.subtitle}>
              Unlock Verified Data. Accelerate AI Decisions. Drive Strategic Advantage.
            </h3>
            <p className={styles.description}>
              Deploy robust Retrieval-Augmented Generation (RAG) capabilities to empower your AI with precise, fact-checked insights from proprietary data. Reduce AI hallucination, enhance operational accuracy, and transform raw information into actionable intelligence.
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
              <h3 className={styles.blockTitle}>1. Strategic Data Engineering & Optimized Retrieval Design</h3>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Conduct</strong> exhaustive analysis and meticulous structuring of vast, disparate enterprise data reservoirs.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Engineer</strong> advanced, custom-tuned indexing and vectorization methodologies for unparalleled information retrieval precision.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Develop</strong> a proprietary, context-aware retrieval strategy, ensuring maximal relevance and minimal latency across complex data modalities.</span>
                </div>
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>2. Fortified LLM Integration & Resilient Orchestration</h3>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Orchestrate</strong> seamless, secure integration with mission-critical large language model deployments and existing enterprise systems.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Implement</strong> rigorous, multi-layered security protocols and sophisticated governance frameworks to safeguard sensitive information.</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bullet}>•</span>
                  <span><strong>Architect</strong> a highly scalable, self-optimizing infrastructure, engineered for extreme operational demands and long-term, transformative growth.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentRAGInfrastructure;
