// HeroSection.tsx
"use client";

import { VideoText } from "@/components/magicui/video-text";
import { useState, useEffect, useRef } from "react";
// REMOVE: import Head from "next/head"; // Remove this line

// Helper function for linear interpolation (lerping)
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

export default function HeroSection() {
  const [opacity, setOpacity] = useState(0);
  const smoothedYOffset = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Effect for fade-in animation
  useEffect(() => {
    // Consider reducing this delay or removing it for an even faster perceived load
    const timer = setTimeout(() => setOpacity(1), 10);
    return () => clearTimeout(timer);
  }, []);

  // Effect for smooth parallax scroll
  useEffect(() => {
    let animationFrameId: number;
    let targetYOffset = 0;

    const handleScroll = () => {
      targetYOffset = window.scrollY;
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

  return (
    <>
      {/* REMOVE: <Head> tag and its contents from here */}
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]"
      >
        <div
          ref={heroRef}
          className="w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{ opacity: opacity }}
        >
          <VideoText src="/HeroVid.mp4" fontSize={12}>
            Programmatic
          </VideoText>
        </div>
      </div>
    </>
  );
}