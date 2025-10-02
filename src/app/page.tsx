"use client";

import { useRef, useState } from "react";
import FullPageCarousel from "@/components/FullPageCarousel";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [navColor, setNavColor] = useState<"white" | "black">("white");
  const [forceBlack, _setForceBlack] = useState(false);
  const forceBlackRef = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastCarouselColor = useRef<"white" | "black">("white");

  // Helper to keep ref and state in sync
  const setForceBlack = (val: boolean) => {
    forceBlackRef.current = val;
    _setForceBlack(val);
  };

  const images = [
    "/portfolio/SH_1L.jpg",
    "/portfolio/GEORG-JENSEN-INSTALLATION-0269.jpg",
    "/portfolio/Brighton-Festival2-home-scaled.jpg",
    "/portfolio/LSDesignWorkshop_Aug14-9957-scaled.jpg",
    "/portfolio/CocoSatoPrint_WhiteLilacPink-scaled.jpg",
  ];

  // Update both state and ref when carousel color changes
  const handleCarouselColorChange = (color: "white" | "black") => {
    // Only update navColor if not forcing black (not scrolled past)
    if (!forceBlackRef.current) {
      lastCarouselColor.current = color;
      setNavColor(color);
    }
  };

  return (
    <>
      <Navbar
        textColor={navColor}
        carouselRef={carouselRef}
        onTextColorChange={(color: "white" | "black" | "reset") => {
          if (color === "black") {
            setForceBlack(true);
            setNavColor("black");
          } else if (color === "reset") {
            setForceBlack(false);
            setNavColor(lastCarouselColor.current);
          }
        }}
      />

      <div ref={carouselRef} className="w-full h-screen">
        <FullPageCarousel images={images} onColorChange={handleCarouselColorChange} />
      </div>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1>Coco Sato</h1>
        <div className="row-span-1 w-full h-full"></div>
      </div>
    </>
  );
}