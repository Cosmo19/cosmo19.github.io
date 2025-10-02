import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coco Sato – Artist, Author & Performer. Reinventing Origami in Uniquely Modern Ways.",
  description: "Portfolio website of Coco Sato. Reinventing Origami in Uniquely Modern Ways",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/logo.png" />
        <script src="https://kit.fontawesome.com/9df4892153.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <main className="mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}