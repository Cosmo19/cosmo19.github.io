"use client";
import { useRef, useState, useEffect } from "react";
import FullPageCarousel from "@/components/FullPageCarousel";
import { Navbar } from "@/components/Navbar";

export default function About() {
  const [navColor, setNavColor] = useState<"white" | "black">("white");
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastCarouselColor = useRef<"white" | "black">("white");

  const images = [
    "/portfolio/Portait-2019-Web-Small-2000x1333.jpg",
  ];

  // Update both state and ref when carousel color changes
  const handleCarouselColorChange = (color: "white" | "black") => {
    lastCarouselColor.current = color;
    setNavColor(color);
  };

  useEffect(() => {
    document.title = "About - Coco Sato";
  }, []);

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
        <FullPageCarousel 
          images={images}
          onColorChange={handleCarouselColorChange}
          captions={[""]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8">
        <div className="font-noto-jp font-light items-center justify-items-center min-h-screen pt-20">
          <h1 className="text-3xl text-gray-800 text-center">Hello! I’m <span className="font-normal">Coco</span>, an artist using origami to change the way people see the world. <br/><br/> I create unique experiences that leave a lasting memory.</h1>
        </div>
      </div>
    </>
  );
}