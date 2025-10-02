"use client";
import { useRef, useState } from "react";
import FullPageCarousel from "@/components/FullPageCarousel";
import { Navbar } from "@/components/Navbar";

export default function ClientsAwards() {
  const navColor = "black";
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar textColor={navColor} carouselRef={carouselRef} />

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1>Coco Sato</h1>
        <div className="row-span-1 w-full h-full"></div>
      </div>
    </>
  );
}