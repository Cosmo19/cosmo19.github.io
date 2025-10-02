"use client";

import React, { FC, useMemo, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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

  // Analyze the actual image for color
  const updateNavColor = (src: string) => {
    const fac = new FastAverageColor();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      fac.getColorAsync(img).then((color) => {
        const [r, g, b] = color.value;
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const textColor: "white" | "black" = luminance < 128 ? "white" : "black";

        // Only update if changed
        if (lastColorRef.current !== textColor) {
          lastColorRef.current = textColor;
          console.log("Navbar color changed to:", textColor);
          if (onColorChange) onColorChange(textColor);
        }
      });
    };
  };

  const [captionVisible, setCaptionVisible] = useState(false);

  // Only track slide change, not transition end
  const onSlideChange = (swiper: any) => {
    let realIndex = swiper.activeIndex - 1;
    if (realIndex < 0) realIndex = n - 1;
    if (realIndex >= n) realIndex = 0;
    setActiveIndex(realIndex);

    // Hide, then show caption for fade/blur effect
    setCaptionVisible(false);
    setTimeout(() => setCaptionVisible(true), 50);

    // Update based on the real image only
    updateNavColor(images[realIndex]);
  };

  // handleTransitionEnd is now ONLY for fixing loop jumps
  const handleTransitionEnd = (swiper: any) => {
    if (skipTransitionRef.current) {
      skipTransitionRef.current = false;
      return;
    }

    if (swiper.activeIndex === 0) {
      skipTransitionRef.current = true;
      swiper.slideTo(n, 0, false);
    }
    if (swiper.activeIndex === slides.length - 1) {
      skipTransitionRef.current = true;
      swiper.slideTo(1, 0, false);
    }
  };

  const handleNext = () => swiperRef.current?.slideNext(500);
  const handlePrev = () => swiperRef.current?.slidePrev(500);

  const handleThumbnailClick = (index: number) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(index + 1, 500);
    updateNavColor(images[index]);
  };

  const hasMultiple = images.length > 1;

  useEffect(() => {
    // Delay to ensure DOM is ready for transition
    const timeout = setTimeout(() => setCaptionVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const scrollDown = () => {
    const start = window.scrollY;
    const end = window.innerHeight;
    const duration = 500; // ms
    const startTime = performance.now();

    function animateScroll(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + (end - start) * progress);
      if (progress < 1) requestAnimationFrame(animateScroll);
    }
    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={hasMultiple ? { delay: 12000, disableOnInteraction: false } : false}
        loop={false}
        allowTouchMove={hasMultiple}
        onSwiper={(s) => (swiperRef.current = s)}
        initialSlide={1}
        onSlideChange={onSlideChange}
        onTransitionEnd={handleTransitionEnd}
        className="w-full h-screen"
        observer={false}
        observeParents={false}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-center bg-cover relative"
              style={{ backgroundImage: `url(${src})` }}
              data-carousel-slide={idx}
            >
              {/* Loading indicator */}
              {!loaded[(idx === 0 ? n - 1 : idx === slides.length - 1 ? 0 : idx - 1)] && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              {/* Preload image to detect when loaded */}
              <img
                src={src}
                alt=""
                className="hidden"
                onLoad={() =>
                  setLoaded((l) => {
                    const arr = [...l];
                    if (idx === 0) arr[n - 1] = true; // first clone
                    else if (idx === slides.length - 1) arr[0] = true; // last clone
                    else arr[idx - 1] = true; // real slides
                    return arr;
                  })
                }
                ref={img => {
                  if (
                    img &&
                    img.complete &&
                    !loaded[
                      idx === 0
                        ? n - 1
                        : idx === slides.length - 1
                        ? 0
                        : idx - 1
                    ]
                  ) {
                    setLoaded((l) => {
                      const arr = [...l];
                      if (idx === 0) arr[n - 1] = true;
                      else if (idx === slides.length - 1) arr[0] = true;
                      else arr[idx - 1] = true;
                      return arr;
                    });
                  }
                }}
              />
              {/* ...your caption code... */}
              {captionsPadded &&
                captionsPadded[idx] &&
                loaded[
                  idx === 0
                    ? n - 1
                    : idx === slides.length - 1
                    ? 0
                    : idx - 1
                ] && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000
                      ${activeIndex + 1 === idx && captionVisible ? "opacity-100" : "opacity-0"}`}
                  >
                    <span className="text-white text-4xl md:text-3xl italic text-center text-shadow-md drop-shadow-md">
                      {captionsPadded[idx]}
                    </span>
                  </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Click zones (only if multiple images) */}
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

      {/* Thumbnails (only if multiple images) */}
      {hasMultiple && (
        <div className="absolute bottom-4 w-full left-4 flex gap-2 z-30">
          {images.map((src, idx) => (
            <button
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => handleThumbnailClick(idx)}
              className={`w-8 h-8 rounded-full border-2 overflow-hidden p-0 focus:outline-none ${
                idx === activeIndex
                  ? "border-white scale-110"
                  : "border-gray-500 opacity-60"
              }`}
            >
              <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* Scroll down button */}
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
