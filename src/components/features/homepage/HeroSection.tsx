"use client";

import { VideoText } from "@/components/magicui/video-text";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from './HeroSection.module.css';

// Helper function for linear interpolation (lerping)
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export default function HeroSection() {
  const [opacity, setOpacity] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const smoothedYOffset = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Effect for fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
      if (isMobile) {
        setTimeout(() => setTitleAnimated(true), 300);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Effect for button fade-in after content
  useEffect(() => {
    if (opacity === 1) {
      const buttonTimer = setTimeout(() => setButtonOpacity(1), isMobile ? 800 : 1000);
      return () => clearTimeout(buttonTimer);
    }
  }, [opacity, isMobile]);

  // Effect for smooth parallax scroll AND button visibility tracking
  useEffect(() => {
    let animationFrameId: number;
    let targetYOffset = 0;

    const handleScroll = () => {
      targetYOffset = window.scrollY;
      
      // Check if hero section is still visible
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRef.current.offsetHeight;
        
        // Button should be visible when hero section is in view
        const heroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
        const scrolledPastHero = window.scrollY > heroHeight * 0.8;
        
        setShowButton(heroVisible && !scrolledPastHero);
      }
    };

    const smoothScroll = () => {
      smoothedYOffset.current = lerp(smoothedYOffset.current, targetYOffset, 0.15);
      
      if (heroRef.current && !isMobile) {
        heroRef.current.style.willChange = 'transform';
        heroRef.current.style.transform = `translateY(-${smoothedYOffset.current * 0.5}px)`;
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    window.addEventListener("scroll", handleScroll);
    if (!isMobile) {
      animationFrameId = requestAnimationFrame(smoothScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  // Handle navigation to services page
  const handleServicesClick = () => {
    router.push('/services');
  };

  return (
    <>
      <div className="sticky top-0 h-screen w-full bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]">
        <div
          ref={heroRef}
          className="w-full h-full transition-opacity duration-1000 ease-in-out relative"
          style={{ opacity: opacity }}
        >
          <div className="w-full h-full flex items-center justify-center">
            {isMobile ? (
              // Mobile: Professional text with animations
              <div className={styles.mobileHeroContent}>
                <div className={styles.floatingElements}>
                  <div className={`${styles.floatingCircle} ${styles.circle1}`}></div>
                  <div className={`${styles.floatingCircle} ${styles.circle2}`}></div>
                  <div className={`${styles.floatingCircle} ${styles.circle3}`}></div>
                </div>
                
                <div className={`${styles.mobileTitle} ${titleAnimated ? styles.animated : ''}`}>
                  <h1 className={styles.titleText}>Programmatic</h1>
                  <div className={styles.titleUnderline}></div>
                  <p className={styles.titleTagline}>AI-Powered Business Solutions</p>
                </div>
              </div>
            ) : (
              // Desktop: Keep video text
              <VideoText src="/HeroVid.mp4" fontSize={12}>
                Programmatic
              </VideoText>
            )}
          </div>
          
          {/* Button positioned with proper z-index */}
          {showButton && (
            <div 
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out z-10"
              style={{ opacity: buttonOpacity }}
            >
              <div className={`pointer-events-auto ${styles.buttonContainer}`}>
                <button 
                  onClick={handleServicesClick}
                  className={styles.heroButton}
                >
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
