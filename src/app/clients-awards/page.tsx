"use client";

import { useRef, useEffect } from "react";
import { Navbar2 } from "@/components/Navbar2";

export default function ClientsAwards() {
  const navColor = "black";
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Clients & Awards - Coco Sato";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 textColor={navColor} carouselRef={carouselRef} blurry/>

      <main className="flex-1">
        <div className="max-w-8xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center gap-8">
            {/* Responsive image */}
            <img
              src="/portfolio/Client-Logos-2023.png"
              alt="Client Logos"
              className="w-full min-h-screen max-w-5xl h-auto object-contain pointer-events-none"
              style={{ minWidth: 200 }}
            />
          </div>
        </div>
      </main>
      <div className="flex-1 bg-gray-50 mb-0">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="pt-12">
            {/* Responsive text section */}
            <div className="w-full flex flex-col gap-12 pt-12">
              <h1 className="text-center text-2xl font-light my-6">Awards, Exhibitions, Appearances & Grants</h1>
              <ul className="w-full text-lg font-light space-y-5 text-gray-800 list-none list-inside dark:text-gray-500">
                <li>
                  <span className="">The Leverhulme Trust</span> — Research Grant in collaboration with Professor Thomas Montenegro-Johnson 2020 — <span className="italic text-black">ongoing</span>
                </li>
                <li>
                  TV Appearance on ITV — Katie Piper Sunday Breakfast Show 2023
                </li>
                <li>
                  <a href="#" className="text-black hover:opacity-60 transition duration-300">
                    <span className="font-medium">Tanabata</span>
                  </a> — Immersive Paper Installation at Westminster Abbey, London 2021
                </li>
                <li>
                  <a href="#" className="text-black hover:opacity-60 transition duration-300">
                    <span className="font-medium">Aen</span>
                  </a> — Immersive Paper Installation at Georg Jensen Gallery, London 2021
                </li>
                <li>
                  Barilla Collezione Tortellini TV Commercial 2020
                </li>
                <li>
                  2019 ADCE Awards Grand Prix for Bodyform/Libresse 'Viva la Vulva' Campaign in collaboration with AMV BBDO
                </li>
                <li>
                  The Koestler Arts — Annual National Awards Exhibition Craft Category Judge 2018 — <span className="italic text-black">ongoing</span>
                </li>
                <li>
                  TV Appearance on Channel 4 — Kirstie Allsopp's Handmade Britain Christmas Special 2016
                </li>
              </ul>

              <div className="pt-8">
                <ul className="w-full text-lg font-light space-y-5 text-gray-800 list-none list-inside dark:text-gray-500">
                  <li>
                    House of Fraser Artist Contributor Christmas 2016
                  </li>
                  <li>
                    Publication — 'Creative Origami and Beyond' featuring Electro Origami [Walter Foster Publishing 2016]
                  </li>
                  <li>
                    Amsterdam Light Festival Commission 2016 — Finalist
                  </li>
                  <li>
                    The Space Commission 2015 (BBC & Arts Council England) — Finalist
                  </li>
                  <li>
                    PANTONE Color Inspires Award 2013 — Winner
                  </li>
                  <li>
                    Secret Garden Party Festival — Art Installation Grant 2011 & 2012
                  </li>
                </ul>
              </div>

              {/* Partners section */}
              <div className="pt-8">
                <h2 className="text-2xl font-light text-gray-600 mb-4">Partners</h2>
                <ul className="w-full text-lg font-light space-y-2 text-gray-800 list-none list-inside dark:text-gray-500">
                  <li className="space-x-6">
                    <span className="text-black">LEXUS</span> Artist Partner 2017 — <span className="italic text-black">ongoing</span>
                  </li>
                  <li className="space-x-6">
                    <span className="text-black">VICTORINOX</span> Global Brand Partner 2017 — <span className="italic text-black">ongoing</span>
                  </li>
                </ul>
              </div>

              <hr className="mt-8 border-t border-gray-200" />

              <div className="pt-8 pb-20">
                <h2 className="text-2xl font-light text-black mb-10 italic">What my clients say...</h2>
                <ul className="w-full text-lg font-light space-y-8 text-gray-800 list-none list-inside dark:text-gray-500">
                <li>
                  <blockquote className="italic text-gray-600">
                    "Coco’s work is *incredible* and I have admired it having seen it shared around the interwebs… I love Coco’s work because of the concept, the construction, the minimalism, and the sophistication that radiates from the simplicity… her choices and placement of color is also superb… the way the hues harmonize in her work is not only due to the paper color, but how the colors actually reflect off each other (due to the structure and light)… the results create ethereal hues…"
                    <footer className="mt-2 text-sm text-gray-500">— Design Seeds</footer>
                  </blockquote>
                </li>
                <li>
                  <blockquote className="italic text-gray-600">
                    "Thank you for being as beautiful and brilliant as ever!"
                    <footer className="mt-2 text-sm text-gray-500">— Maker Club</footer>
                  </blockquote>
                </li>
                <li>
                  <blockquote className="italic text-gray-600">
                    "Thanks again for being part of our Gardens Festival at the Horniman last week. I really loved your installation and so did the audience."
                    <footer className="mt-2 text-sm text-gray-500">— Horniman Museum and Gardens</footer>
                  </blockquote>
                </li>
                <li>
                  <blockquote className="italic text-gray-600">
                    "In a festival program, there is room for many different kinds of events, and sometimes, one does simply not know what to expect. The origami event was one of these. Thank you for everything. People are talking about your origami performance and loved it very much!"
                    <footer className="mt-2 text-sm text-gray-500">— ISFIT 2013</footer>
                  </blockquote>
                </li>
                <li>
                  <blockquote className="italic text-gray-600">
                    "I feel very proud of what we achieved together."
                    <footer className="mt-2 text-sm text-gray-500">— ParkArt & Parkenfestivalen</footer>
                  </blockquote>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}