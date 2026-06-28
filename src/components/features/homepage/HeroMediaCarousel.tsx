"use client";

import Link from "next/link";
import {
  memo,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  HERO_AUTOPLAY_DELAY_MS,
  HERO_AUTOPLAY_PAUSE_AFTER_INTERACTION_MS,
  HERO_SLIDES,
  heroAssetUrl,
  type HeroImageSlide,
  type HeroSlide,
  type HeroVideoSlide,
} from "@/lib/hero-slides";
import styles from "./HeroMediaCarousel.module.css";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

const HeroSlideImage = memo(function HeroSlideImage({
  slide,
  isActive,
}: {
  slide: HeroImageSlide;
  isActive: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- direct /public paths; avoids stale _next/image cache when swapping hero assets
    <img
      src={heroAssetUrl(slide.src)}
      alt={slide.alt}
      className={styles.media}
      decoding="async"
      fetchPriority={slide.priority ? "high" : "auto"}
      loading={slide.priority ? "eager" : "lazy"}
      aria-hidden={!isActive}
    />
  );
});

const HeroSlideVideo = memo(function HeroSlideVideo({
  slide,
  isActive,
  prefersReducedMotion,
}: {
  slide: HeroVideoSlide;
  isActive: boolean;
  prefersReducedMotion: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideoSource, setHasVideoSource] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideoSource) return;

    if (isActive && !prefersReducedMotion) {
      video.preload = "metadata";
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          /* Autoplay blocked or missing file — poster remains visible */
        });
      }
      return;
    }

    video.pause();
    video.preload = "none";
    video.currentTime = 0;
  }, [hasVideoSource, isActive, prefersReducedMotion]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- see HeroSlideImage */}
      <img
        src={heroAssetUrl(slide.poster)}
        alt={slide.alt}
        className={styles.media}
        decoding="async"
        fetchPriority={slide.priority ? "high" : "auto"}
        loading={slide.priority ? "eager" : "lazy"}
        aria-hidden={isActive && hasVideoSource && !prefersReducedMotion}
      />
      {hasVideoSource ? (
        <video
          ref={videoRef}
          className={styles.media}
          poster={heroAssetUrl(slide.poster)}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden={!isActive}
          onError={() => setHasVideoSource(false)}
        >
          <source src={heroAssetUrl(slide.mp4)} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
});

const HeroSlideOverlay = memo(function HeroSlideOverlay({
  slide,
  index,
  isActive,
}: {
  slide: HeroSlide;
  index: number;
  isActive: boolean;
}) {
  const HeadingTag = index === 0 ? "h1" : "h2";
  const { content } = slide;

  return (
    <div
      className={styles.slideOverlay}
      aria-hidden={!isActive}
      inert={!isActive ? true : undefined}
    >
      <div className={styles.slideCopy}>
        <HeadingTag className={styles.slideTitle}>{content.title}</HeadingTag>
        <p className={styles.slideDescription}>{content.description}</p>

        <div className={styles.slideActions}>
          <Link
            href={content.primaryCta.href}
            className={styles.primaryButton}
            prefetch={false}
          >
            {content.primaryCta.label}
          </Link>
          <Link
            href={content.secondaryCta.href}
            className={styles.secondaryButton}
            prefetch={false}
          >
            {content.secondaryCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
});

const HeroSlideContent = memo(function HeroSlideContent({
  slide,
  index,
  isActive,
  prefersReducedMotion,
}: {
  slide: HeroSlide;
  index: number;
  isActive: boolean;
  prefersReducedMotion: boolean;
}) {
  return (
    <div className={styles.slide} aria-hidden={!isActive}>
      <div className={styles.slideMedia}>
        {slide.type === "image" ? (
          <HeroSlideImage slide={slide} isActive={isActive} />
        ) : (
          <HeroSlideVideo
            slide={slide}
            isActive={isActive}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}
      </div>
      <div className={styles.slideFilm} aria-hidden="true" />
      <HeroSlideOverlay slide={slide} index={index} isActive={isActive} />
    </div>
  );
});

function HeroCarouselControls({
  selectedIndex,
  onSelectSlide,
  onPrev,
  onNext,
}: {
  selectedIndex: number;
  onSelectSlide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={onPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={onNext}
        aria-label="Next slide"
      >
        <ChevronRight aria-hidden="true" />
      </button>

      <div className={styles.dots} role="tablist" aria-label="Choose a hero slide">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
              onClick={() => onSelectSlide(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default function HeroMediaCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: HERO_AUTOPLAY_DELAY_MS,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      align: "start",
      containScroll: false,
    },
    prefersReducedMotion ? [] : [autoplayPlugin]
  );

  const pauseAutoplayTemporarily = useCallback(() => {
    if (prefersReducedMotion || !emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    autoplay.stop();

    if (autoplayResumeTimeoutRef.current) {
      clearTimeout(autoplayResumeTimeoutRef.current);
    }

    autoplayResumeTimeoutRef.current = setTimeout(() => {
      autoplay.play();
      autoplayResumeTimeoutRef.current = null;
    }, HERO_AUTOPLAY_PAUSE_AFTER_INTERACTION_MS);
  }, [emblaApi, prefersReducedMotion]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    startTransition(() => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || prefersReducedMotion) return;

    const onPointerDown = () => pauseAutoplayTemporarily();
    emblaApi.on("pointerDown", onPointerDown);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
    };
  }, [emblaApi, pauseAutoplayTemporarily, prefersReducedMotion]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit(
      {
        loop: true,
        dragFree: false,
        align: "start",
        containScroll: false,
      },
      prefersReducedMotion ? [] : [autoplayPlugin]
    );
  }, [autoplayPlugin, emblaApi, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (autoplayResumeTimeoutRef.current) {
        clearTimeout(autoplayResumeTimeoutRef.current);
      }
    };
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      pauseAutoplayTemporarily();
    },
    [emblaApi, pauseAutoplayTemporarily]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    pauseAutoplayTemporarily();
  }, [emblaApi, pauseAutoplayTemporarily]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    pauseAutoplayTemporarily();
  }, [emblaApi, pauseAutoplayTemporarily]);

  return (
    <>
      <section
        className={styles.viewport}
        ref={emblaRef}
        aria-roledescription="carousel"
        aria-label="Hero highlights"
      >
        <div className={styles.container}>
          {HERO_SLIDES.map((slide, index) => (
            <HeroSlideContent
              key={slide.id}
              slide={slide}
              index={index}
              isActive={index === selectedIndex}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </section>

      <HeroCarouselControls
        selectedIndex={selectedIndex}
        onSelectSlide={scrollTo}
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
    </>
  );
}
