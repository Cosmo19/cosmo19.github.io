"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useRef, RefObject, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

interface NavbarProps {
  textColor: "white" | "black";
  carouselRef: RefObject<HTMLDivElement | null>;
  onTextColorChange?: (color: "white" | "black") => void;
  blurry?: boolean;
}

export function Navbar2({ textColor, carouselRef, onTextColorChange, blurry }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solidBg, setSolidBg] = useState(false);
  const lastSolid = useRef(false);
  const lastTextColor = useRef(textColor);
  const pathname = usePathname();

  // Use next-view-transitions router
  const { push } = useTransitionRouter();

  useEffect(() => {
    function onScroll() {
      if (!carouselRef || !carouselRef.current) {
        setSolidBg(true);
        return;
      }
      const rect = carouselRef.current.getBoundingClientRect();
      const pastCarousel = rect.bottom <= 0;
      setSolidBg(pastCarousel);

      if (pastCarousel && !lastSolid.current) {
        onTextColorChange?.("black");
        lastSolid.current = true;
      } else if (!pastCarousel && lastSolid.current) {
        onTextColorChange?.("reset" as any);
        lastSolid.current = false;
      }
    }
    const throttledScroll = throttle(onScroll, 100);
    window.addEventListener("scroll", throttledScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [carouselRef, onTextColorChange]);

  useEffect(() => {
    if (textColor !== lastTextColor.current) {
      lastTextColor.current = textColor;
    }
  }, [textColor]);

  const navbarHidden = hidden || open;
  const effectiveSolidBg = blurry ? false : solidBg;

  // Slide-in animation classes for view transitions
  const slideClass = "view-transition-slide-in";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform transition-colors duration-500
          ${navbarHidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <nav
          className={`flex items-center justify-between transition-colors duration-500 font-lexend
            ${effectiveSolidBg ? "bg-white" : "bg-white/10 backdrop-blur-md"}
            ${textColor === "white" ? "text-white" : "text-black"}
            ${effectiveSolidBg ? "shadow-xs" : ""}
          `}
        >
          <div className="w-full flex justify-between items-center p-4 px-8">
            <Link href="/" onClick={e => { e.preventDefault(); push("/"); }}>
              <Logo
                className="w-12 h-12 transition-colors duration-500 shake-hover"
                color1={textColor === "white" ? "#a8d8ea" : "#000"}
                color2={textColor === "white" ? "#ffb3ba" : "#000"}
                color3={textColor === "white" ? "#bae1bc" : "#000"}
                color4={textColor === "white" ? "#d4b5d4" : "#000"}
              />
            </Link>

            {/* Hamburger */}
            <button
              className={`md:hidden text-3xl cursor-pointer transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? "" : "☰"}
            </button>

            {/* Desktop menu */}
            <div
              className={`hidden md:flex space-x-6 tracking-wide transition-colors duration-500 
                ${textColor === "white" ? "text-white" : "text-black"} 
                ${open ? "hidden" : ""}
              `}
            >
              <Link
                href="/selected-works"
                onClick={e => { e.preventDefault(); push("/selected-works"); }}
                className={pathname === "/selected-works" ? "glow-nav" : ""}
              >Selected Works</Link>
              <Link
                href="/about"
                onClick={e => { e.preventDefault(); push("/about"); }}
                className={pathname === "/about" ? "glow-nav" : ""}
              >About</Link>
              <Link
                href="/clients-awards"
                onClick={e => { e.preventDefault(); push("/clients-awards"); }}
                className={pathname === "/clients-awards" ? "glow-nav" : ""}
              >Clients & Awards</Link>
              <Link
                href="/contact"
                onClick={e => { e.preventDefault(); push("/contact"); }}
                className={pathname === "/contact" ? "glow-nav" : ""}
              >Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center space-y-8
          bg-black/80 backdrop-blur transform-gpu transition-all duration-700 ease-in-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-0 pointer-events-none"}
        `}
      >
        <button
          className={`absolute top-6 right-9 text-2xl text-white cursor-pointer transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: open ? "300ms" : "0ms" }}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <Link href="/selected-works" className={`text-white text-2xl font-semibold ${pathname === "/selected-works" ? "glow-nav" : ""}`} onClick={e => { e.preventDefault(); setOpen(false); push("/selected-works"); }}>Selected Works</Link>
        <Link href="/about" className={`text-white text-2xl font-semibold ${pathname === "/about" ? "glow-nav" : ""}`} onClick={e => { e.preventDefault(); setOpen(false); push("/about"); }}>About</Link>
        <Link href="/clients-awards" className={`text-white text-2xl font-semibold ${pathname === "/clients-awards" ? "glow-nav" : ""}`} onClick={e => { e.preventDefault(); setOpen(false); push("/clients-awards"); }}>Clients & Awards</Link>
        <Link href="/contact" className={`text-white text-2xl font-semibold ${pathname === "/contact" ? "glow-nav" : ""}`} onClick={e => { e.preventDefault(); setOpen(false); push("/contact"); }}>Contact</Link>
      </div>

      {/* Add glow-nav style and slide-in animation */}
      <style>{`
        .glow-nav {
        }
        .view-transition-slide-in {
          animation: slide-in 0.5s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(40px);}
          to { opacity: 1; transform: translateX(0);}
        }
      `}</style>
    </>
  );
}

// Simple throttle function
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}
