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

      <div className="max-w-4xl mx-auto grid gap-8 px-4 sm:px-8 pb-16 pt-16 sm:pt-24">
        <div className="font-noto-jp font-light flex flex-col items-center justify-center pb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center leading-snug">
            Hello! I’m <span className="font-normal">Coco</span>, an artist using origami to change the way people see the world.
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            I create unique experiences that leave a lasting memory.
          </h1>
        </div>
        <div className="font-sans text-base sm:text-lg md:text-xl space-y-6">
          <p className="text-gray-500">
            My work fuses traditional Japanese art with modern technology, producing accessible, playful art as well as creative marketing campaigns for high profile global brands.
          </p>
          <p>
            I can help you find beautiful and original ways to connect with new audiences or inspire people to bring about positive change.
          </p>
          <p className="text-gray-500">
            I bring my deep understanding of Japanese wisdom and culture to everything I do, from TV appearances (Katie Piper Sunday Breakfast Show 2023, ITV and Kirstie’s Handmade Christmas 2016, Channel 4) to award-winning marketing campaigns such as Bodyform Viva la Vulva, to writing a book and collaborative STEM projects such as ‘Tanabata’ deployable geometric origami installation exhibited at Westminster Abbey, and ‘Roborigami’ which combines robotics and origami to explore subtle sensory experience to create playful Zen spaces. I also design public engagement projects and educational content for museums and international cultural festivals.
          </p>
        </div>
      </div>
    </>
  );
}