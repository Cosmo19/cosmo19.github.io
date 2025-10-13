"use client";
import { useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ClientsAwards() {
  const navColor = "black";
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Clients & Awards - Coco Sato";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar textColor={navColor} carouselRef={carouselRef} blurry/>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            {/* Responsive image */}
            <img
              src="/portfolio/Client-Logos-2023.png"
              alt="Client Logos"
              className="w-full min-h-screen max-w-5xl h-auto object-contain pointer-events-none"
              style={{ minWidth: 200 }}
            />
          </div>
          <div className="pt-12">
            {/* Responsive text section */}
            <div className="w-full flex flex-col gap-12 pt-12">
              <h1 className="text-center text-2xl font-light my-6">Awards, Exhibitions, Appearance & Grants</h1>
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

              <div className="pt-8 pb-20">
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}