"use client";

import { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import FullPageCarousel from "@/components/FullPageCarousel";

import Gallery from "@/components/Gallery";

export default function SelectedWorks() {
  const [navColor, setNavColor] = useState<"white" | "black">("white");
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastCarouselColor = useRef<"white" | "black">("white");

  const images = ["/portfolio/GEORG-JENSEN-INSTALLATION-0241-PAPEF.jpg"];

  // Update both state and ref when carousel color changes
  const handleCarouselColorChange = (color: "white" | "black") => {
    lastCarouselColor.current = color;
    setNavColor(color);
  };

  // Update title
  useEffect(() => {
    document.title = "Selected Works - Coco Sato";
  }, []);

  // Render components
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        textColor={navColor}
        carouselRef={carouselRef}
        onTextColorChange={(color: "white" | "black" | "reset") => {
          if (color === "black") setNavColor("black");
          else if (color === "reset") setNavColor(lastCarouselColor.current);
          else setNavColor(color);
        }}
        blurry
      />

      <main className="flex-1 flex flex-col">
        <div ref={carouselRef} className="w-full h-screen">
          <FullPageCarousel
            images={images}
            onColorChange={handleCarouselColorChange}
            captions={["Selected Works"]}
          />
        </div>

        <div className="font-sans w-full p-8 pb-20 gap-16 sm:p-20">
          <div className="max-w-8xl mx-auto">
            <Gallery />
          </div>
        </div>
      </main>
    </div>
  );
}