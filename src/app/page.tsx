"use client";

import ReactGA from "react-ga4";

import { useEffect, useRef, useState } from "react";
import FullPageCarousel from "@/components/FullPageCarousel";
import { Navbar2 } from "@/components/Navbar2";

export default function Home() {
  // Google Analytics Tracking
  // Google Analytics Tracking
  // Google Analytics Tracking
  useEffect(() => {
    ReactGA.initialize("GA_ID");
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  }, []);

  const [navColor, setNavColor] = useState<"white" | "black">("white");
  const [, _setForceBlack] = useState(false);
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
      <Navbar2
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
        <FullPageCarousel
          images={images}
          onColorChange={handleCarouselColorChange}
          captions={["Reinventing Origami in Uniquely Modern Ways", null, null, null, null]}
        />
      </div>

      <div className="font-sans w-full p-8 pb-20 gap-16 sm:p-20 pt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="font-sans grid items-center justify-items-center gap-4">

              {/* Content */}
              <div className="mx-auto mb-30">
                <h1 className="text-base xs:text-xl md:text-2xl lg:text-3xl font-light mb-20 text-center">
                  Coco's Philosophy
                </h1>
                <div className="flex flex-col [@media(min-width:945px)]:flex-row items-center [@media(min-width:945px)]:items-start gap-8">
                  {/* Image on the left */}
                  <img
                    src="/portfolio/coco-index.jpeg"
                    alt="Coco Sato Portrait"
                    width={415}
                    height={415}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[415px] aspect-square object-cover object-center shadow-lg flex-shrink-0 flex-grow-0"
                  />
                  {/* Blockquote on the right */}
                  <blockquote className="text-xs sm:text-sm md:text-lg font-light border-l-2 pl-4 sm:pl-6 italic text-gray-500 [@media(min-width:945px)]:ml-8">
                    "When I face a piece of smooth pristine paper, I think about the future and faraway lands and what can I do to bring positive change.<br/><br/>
                    Can I inspire interest in different cultures? Will the work still resonate in decades to come? Could it even be transported into space? What legacy can I leave...<br/><br/>
                    Creating something beautiful yet timeless is my mission. I translate the wisdom of Japanese tradition for a new generation.<br/><br/>
                    Above all, my art form is about people, play and adventure. Art for the child at heart.<br/><br/>
                    I genuinely love learning and to share the journey with others."
                    <br />
                    <span className="block mt-2 text-base font-normal text-gray-500">— Coco Sato</span>
                  </blockquote>
                </div>
              </div>

              {/* Client logos section */}
              <div className="mx-auto mb-20">
                <div className="row-span-1 w-full h-full flex flex-col items-center">
                  <img
                    src="/portfolio/Client-Logos-2023.png"
                    alt="Client Logos"
                    className="h-auto object-contain mx-auto pointer-events-none"
                    style={{ minWidth: 200 }}
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}