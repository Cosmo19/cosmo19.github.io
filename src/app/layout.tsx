import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";

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

// Google Analytics
import ReactGA from "react-ga4";
ReactGA.initialize("GA_ID");

// Metadata for SEO
export const metadata: Metadata = {
  title: "Coco Sato – Artist, Author & Performer. Reinventing Origami in Uniquely Modern Ways.",
  description: "Portfolio website of Coco Sato. Reinventing Origami in Uniquely Modern Ways",
  keywords: ['Coco', 'Coco Sato', 'Artist', 'Author', 'Performer', 'Origami', 'Paper Art', 'Installation Art', 'Creative Workshops', 'Art Exhibitions', 'Interactive Art', 'Public Art', 'Sculpture', 'Contemporary Art', 'Japanese Artist'],

  openGraph: {
    title: 'Coco Sato - Artist, Author & Performer',
    description: 'Your page description',
    url: "https://cocosato.co.uk",
    siteName: 'Coco Sato',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <Head>
        <link rel="icon" href="images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Coco Sato – Artist, Author & Performer. Reinventing Origami in Uniquely Modern Ways." />
        <meta name="description" content="Portfolio website of Coco Sato. Reinventing Origami in Uniquely Modern Ways" />
        <meta name="keywords" content="Coco, Coco Sato, Artist, Author, Performer, Origami, Paper Art, Installation Art, Creative Workshops, Art Exhibitions, Interactive Art, Public Art, Sculpture, Contemporary Art, Japanese Artist" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cocosato.co.uk" />
        <meta property="og:title" content="Coco Sato - Artist, Author & Performer" />
        <meta property="og:description" content="Portfolio website of Coco Sato. Reinventing Origami in Uniquely Modern Ways" />
        <meta property="og:site_name" content="Coco Sato" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cocosato.co.uk" />
        <meta property="twitter:title" content="Coco Sato - Artist, Author & Performer" />
        <meta property="twitter:description" content="Portfolio website of Coco Sato. Reinventing Origami in Uniquely Modern Ways" />
        
        <link rel="canonical" href="https://cocosato.co.uk" />
        <script src="https://kit.fontawesome.com/9df4892153.js" crossOrigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lexend:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <body className="bg-white" style={{ background: "#fff" }}>
        <main className="mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    </ViewTransitions>
  );
}