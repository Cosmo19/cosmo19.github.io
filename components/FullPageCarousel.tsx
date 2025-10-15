"use client";

import React, { FC, useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FastAverageColor } from "fast-average-color";

interface FullPageCarouselProps {
  images: string[];
  onColorChange?: (color: "white" | "black") => void;
  captions?: (string | null)[];
}

const FullPageCarousel: FC<FullPageCarouselProps> = ({ images, onColorChange, captions }) => {
  const n = images.length;
  const slides = useMemo(() => [images[n - 1], ...images, images[0]], [images, n]);
  const captionsPadded = useMemo(
    () =>
      captions
        ? [captions[n - 1] ?? null, ...captions, captions[0] ?? null]
        : Array(slides.length).fill(null),
    [captions, n, slides.length]
  );
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastColorRef = useRef<"white" | "black" | null>(null);
  const skipTransitionRef = useRef(false);
  const [loaded, setLoaded] = useState<boolean[]>(() => Array(slides.length).fill(false));
  const [captionVisible, setCaptionVisible] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const colorAnalysisCache = useRef<Map<string, "white" | "black">>(new Map());

  const hasMultiple = images.length > 1;

  // Optimized color analysis with caching
  const updateNavColor = useCallback((src: string) => {
    if (colorAnalysisCache.current.has(src)) {
      const cachedColor = colorAnalysisCache.current.get(src)!;
      if (lastColorRef.current !== cachedColor) {
        lastColorRef.current = cachedColor;
        if (onColorChange) onColorChange(cachedColor);
      }
      return;
    }

    const fac = new FastAverageColor();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      fac.getColorAsync(img).then((color) => {
        const [r, g, b] = color.value;
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const textColor: "white" | "black" = luminance < 128 ? "white" : "black";
        
        colorAnalysisCache.current.set(src, textColor);
        
        if (lastColorRef.current !== textColor) {
          lastColorRef.current = textColor;
          if (onColorChange) onColorChange(textColor);
        }
      });
    };
  }, [onColorChange]);

  const onSlideChange = useCallback((swiper: any) => {
    setIsTransitioning(true);
    let realIndex = swiper.activeIndex - 1;
    if (realIndex < 0) realIndex = n - 1;
    if (realIndex >= n) realIndex = 0;
    setActiveIndex(realIndex);

    setCaptionVisible(false);
    setTimeout(() => {
      setCaptionVisible(true);
      setIsTransitioning(false);
    }, 300);

    updateNavColor(images[realIndex]);
  }, [n, images, updateNavColor]);

  const handleTransitionEnd = useCallback((swiper: any) => {
    if (skipTransitionRef.current) {
      skipTransitionRef.current = false;
      setCaptionVisible(true); // Instantly show caption when looping
      return;
    }

    if (swiper.activeIndex === 0) {
      skipTransitionRef.current = true;
      swiper.slideTo(n, 0, false);
      setCaptionVisible(true); // Instantly show caption when looping
    }
    if (swiper.activeIndex === slides.length - 1) {
      skipTransitionRef.current = true;
      swiper.slideTo(1, 0, false);
      setCaptionVisible(true); // Instantly show caption when looping
    }
  }, [n, slides.length]);

  const handleNext = useCallback(() => {
    if (!isTransitioning) swiperRef.current?.slideNext(600);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (!isTransitioning) swiperRef.current?.slidePrev(600);
  }, [isTransitioning]);

  const handleThumbnailClick = useCallback((index: number) => {
    if (!swiperRef.current || isTransitioning) return;
    swiperRef.current.slideTo(index + 1, 600);
    updateNavColor(images[index]);
  }, [isTransitioning, images, updateNavColor]);

  const scrollDown = useCallback(() => {
    const start = window.scrollY;
    const end = window.innerHeight;
    const duration = 800;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    function animateScroll(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(animateScroll);
    }
    requestAnimationFrame(animateScroll);
  }, []);

  // Preload adjacent images for smoother transitions
  useEffect(() => {
    if (loaded[activeIndex]) {
      const nextIdx = (activeIndex + 1) % n;
      const prevIdx = (activeIndex - 1 + n) % n;
      [nextIdx, prevIdx].forEach(idx => {
        const img = new Image();
        img.src = images[idx];
      });
    }
  }, [activeIndex, n, images, loaded]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCaptionVisible(true);
      setInitialLoad(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!hasMultiple) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultiple, handleNext, handlePrev]);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={hasMultiple ? { delay: 12000, disableOnInteraction: false } : false}
        loop={false}
        allowTouchMove={hasMultiple}
        onSwiper={(s) => (swiperRef.current = s)}
        initialSlide={1}
        onSlideChange={onSlideChange}
        onTransitionEnd={handleTransitionEnd}
        className="w-full h-screen"
        speed={600}
        observer={false}
        observeParents={false}
        touchRatio={1.5}
        resistance={true}
        resistanceRatio={0.85}
      >
        {slides.map((src, idx) => {
          const realIdx = idx === 0 ? n - 1 : idx === slides.length - 1 ? 0 : idx - 1;
          const isLoaded = loaded[realIdx];
          
          return (
            <SwiperSlide key={idx}>
              <div
                className={`w-full h-screen bg-center bg-cover relative transition-all duration-500
                  ${initialLoad && idx === 1 ? "scale-105" : "scale-100"}
                `}
                style={{ 
                  backgroundImage: `url(${src})`,
                  filter: isLoaded ? "none" : "blur(20px)",
                }}
                data-carousel-slide={idx}
              >
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
                      <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  </div>
                )}
                
                <img
                  src={src}
                  alt=""
                  className="hidden"
                  onLoad={() =>
                    setLoaded((l) => {
                      const arr = [...l];
                      arr[realIdx] = true;
                      return arr;
                    })
                  }
                  ref={img => {
                    if (img && img.complete && !loaded[realIdx]) {
                      setLoaded((l) => {
                        const arr = [...l];
                        arr[realIdx] = true;
                        return arr;
                      });
                    }
                  }}
                />
                
                {captionsPadded && captionsPadded[idx] && isLoaded && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-out
                      ${activeIndex + 1 === idx && captionVisible 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4"
                      }`}
                    // Add a key to force remount on slide change
                    key={`caption-${activeIndex}`}
                  >
                    <span className="text-white text-4xl md:text-3xl italic text-center px-8 text-shadow-md drop-shadow-md">
                      {captionsPadded[idx]}
                    </span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {hasMultiple && (
        <>
          <div
            onClick={handlePrev}
            className="absolute top-0 left-0 w-1/2 h-full z-20 cursor-w-resize"
          />
          <div
            onClick={handleNext}
            className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-e-resize"
          />
        </>
      )}

      {hasMultiple && (
        <div className="absolute bottom-4 w-full left-4 flex gap-2 z-30">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              disabled={isTransitioning}
              className={`w-8 h-8 rounded-full border-2 overflow-hidden p-0 focus:outline-none cursor-pointer ${
                idx === activeIndex
                  ? "border-white scale-110"
                  : "border-gray-500 opacity-60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <img 
                src={src} 
                alt={`Slide ${idx + 1}`} 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        aria-label="Scroll down"
        onClick={scrollDown}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex flex-col items-center group cursor-pointer"
      >
        <span className="block w-10 h-10">
          <svg
            className={`w-full h-full animate-pulse drop-shadow-lg ${
              lastColorRef.current === "black" ? "text-black" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        <span className="sr-only">Scroll down</span>
      </button>
    </div>
  );
};

export default FullPageCarousel;