"use client";

import React, { FC, useMemo, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FastAverageColor } from "fast-average-color";

interface FullPageCarouselProps {
  images: string[];
  onColorChange?: (color: "white" | "black") => void;
}

const FullPageCarousel: FC<FullPageCarouselProps> = ({ images, onColorChange }) => {
  const n = images.length;
  const slides = useMemo(() => [images[n - 1], ...images, images[0]], [images, n]);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastColorRef = useRef<"white" | "black" | null>(null);
  const skipTransitionRef = useRef(false);

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

  // Only track slide change, not transition end
  const onSlideChange = (swiper: any) => {
    let realIndex = swiper.activeIndex - 1;
    if (realIndex < 0) realIndex = n - 1;
    if (realIndex >= n) realIndex = 0;
    setActiveIndex(realIndex);

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

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        loop={false}
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
              className="w-full h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${src})` }}
              data-carousel-slide={idx}
            />
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
              <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FullPageCarousel;
