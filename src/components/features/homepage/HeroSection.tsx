"use client";

import { VideoText } from "@/components/magicui/video-text";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Helper function for linear interpolation (lerping)
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export default function HeroSection() {
  const [opacity, setOpacity] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const smoothedYOffset = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Effect for fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 10);
    return () => clearTimeout(timer);
  }, []);

  // Effect for button fade-in after video text
  useEffect(() => {
    if (opacity === 1) {
      const buttonTimer = setTimeout(() => setButtonOpacity(1), 1000);
      return () => clearTimeout(buttonTimer);
    }
  }, [opacity]);

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
      
      if (heroRef.current) {
        heroRef.current.style.willChange = 'transform';
        heroRef.current.style.transform = `translateY(-${smoothedYOffset.current * 0.5}px)`;
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    window.addEventListener("scroll", handleScroll);
    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
            <VideoText src="/HeroVid.mp4" fontSize={12}>
              Programmatic
            </VideoText>
          </div>
          
          {/* Button positioned with proper z-index */}
          {showButton && (
            <div 
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out z-10"
              style={{ opacity: buttonOpacity }}
            >
              <div className="pointer-events-auto" style={{ marginTop: '20rem' }}>


                <button 
                  onClick={handleServicesClick}
                  className="px-16 py-5 bg-transparent text-black font-bold text-2xl rounded-xl transition-all duration-500 ease-out shadow-lg backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:bg-black hover:text-white cursor-pointer relative z-20"
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
