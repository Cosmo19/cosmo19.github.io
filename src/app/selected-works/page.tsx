"use client";
import { useRef, useState } from "react";
import FullPageCarousel from "@/components/FullPageCarousel";
import { Navbar } from "@/components/Navbar";

export default function SelectedWorks() {
  const [navColor, setNavColor] = useState<"white" | "black">("white");
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastCarouselColor = useRef<"white" | "black">("white");

  const images = [
    "/portfolio/GEORG-JENSEN-INSTALLATION-0269.jpg",
  ];

  // Update both state and ref when carousel color changes
  const handleCarouselColorChange = (color: "white" | "black") => {
    lastCarouselColor.current = color;
    setNavColor(color);
  };

  return (
    <>
      <Navbar
        textColor={navColor}
        carouselRef={carouselRef}
        onTextColorChange={(color: "white" | "black" | "reset") => {
          if (color === "black") setNavColor("black");
          else if (color === "reset") setNavColor(lastCarouselColor.current);
          else setNavColor(color);
        }}
      />

      <div ref={carouselRef} className="w-full h-screen">
        <FullPageCarousel images={images} onColorChange={handleCarouselColorChange} />
      </div>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1>Selected Works</h1>
        <div className="row-span-1 w-full h-full"></div>
      </div>
    </>
  );
}