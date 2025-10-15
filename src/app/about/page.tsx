"use client";

import { useRef, useState, useEffect } from "react";
import FullPageCarousel from "@/components/FullPageCarousel";
import { Navbar2 } from "@/components/Navbar2";

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
      <Navbar2
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

      <div className="max-w-5xl mx-auto grid gap-8 px-6 sm:px-8 mb-30 pt-30 sm:pt-24">
        <div className="font-noto-jp font-light flex flex-col items-center justify-center mb-10">
          <h1 className="text-3xl text-gray-800 text-center leading-snug">
            Hello! I’m <span className="font-gray-100">Coco</span>. An artist using origami to change the way people see the world.
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            I create unique experiences that leave a lasting memory.
          </h1>
        </div>

        <hr className="mb-8 border-t border-gray-200" />

        <div className="font-sans font-light text-base sm:text-lg md:text-lg space-y-8">
          <p className="text-gray-500">
            My work fuses traditional Japanese art with modern technology, producing accessible, playful art as well as creative marketing campaigns for high profile global brands.
          </p>
          <p>
            I can help you find beautiful and original ways to connect with new audiences or inspire people to bring about positive change.
          </p>
          <p className="text-gray-500">
            I bring my deep understanding of Japanese wisdom and culture to everything I do, from TV appearances (Katie Piper Sunday Breakfast Show 2023, ITV and Kirstie's Handmade Christmas 2016, Channel 4) to award-winning marketing campaigns such as Bodyform Viva la Vulva, to writing a book and collaborative STEM projects such as 'Tanabata' deployable geometric origami installation exhibited at Westminster Abbey, and 'Roborigami' which combines robotics and origami to explore subtle sensory experience to create playful Zen spaces. I also design public engagement projects and educational content for museums and international cultural festivals.
          </p>
          <p>
            Origami starts with one small fold in a piece of paper — where it ends is up to you! Let's work together to create something extraordinary.
          </p>
          <p className="text-gray-500">
            If you like what I do, please connect with me on social media or reach out to me through my contact page with any commission, sponsorship, media appearance, corporate entertainment and other enquiries. Click <a className="text-blue-300 font-medium hover:text-blue-400 duration-500 transition-colors" href="/selected-works">here</a> to browse my portfolio to see examples of my work for previous clients and personal projects.
          </p>
        </div>

        <img className="my-10 shadow-md" src="/portfolio/cocosato_detail03__007.jpg" alt="Performance Art" />

        <img className="my-10 shadow-md" src="/portfolio/PerformanforCamera_rociochaconphoto_COLLAGE01.jpg" alt="Performance Art" />

        <hr className="mb-8 border-t border-gray-200" />

        <div className="font-sans font-light text-base sm:text-lg md:text-lg space-y-8">
          <h1 className="text-3xl text-gray-800 text-center font-light">
            Why <span className="font-medium">(Giant)</span> Origami?
          </h1>
          <p>I have practised origami all my life. In Japan, origami is something everyone does with family and friends; it's a creative play that is deeply rooted in Japanese culture.</p>
          <p className="text-gray-500">
            The most iconic example of this may be an ancient Japanese legend promising that anyone who folds 1000 origami cranes will be granted eternal good luck, such as long life or recovery from illness or injury.
          </p>
          <p>I love the way it creates something from nothing; I don't need any special tools in order to practice it.  I also love colour so colourful paper is the perfect medium for me — and it can inspire anyone to be creative.</p>
          <p className="text-gray-500">
            I started making Giant Origami while teaching a children's art class in 2009. Traditionally, origami are made very small so you need to get very close to appreciate what they are and how they are made. During the art class, what I demonstrated needed to be easily seen from a distance, and I realised that the giant origami had a great visual impact.
          </p>
          <p>
            Since then, 'Giant Origami' has grown organically. I had often felt that Japanese culture was showcased in an extremely biased, and stereotypical way, with clichés such as geishas and sumo wrestlers, manga and anime and the hi-tech neon image of modern Tokyo.
          </p>
          <p className="text-gray-500">
            For me, this is far from what true Japanese culture is about. I wanted to introduce people to something more real and tangible; something that is part of everyday life in Japan and that I enjoyed as a child.
          </p>
          <p>
            I believe Giant Origami enables my audience to make an emotional connection with a Japanese ritual that might otherwise seem detached or alien.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                src="/portfolio/Coco-Sato-South-West-Fest-Preparations.jpg"
                alt="Giant Origami 1"
                className="aspect-square w-full max-w h-auto max-h-[900px] shadow-md object-cover object-center"
              />
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                src="/portfolio/giantorigami-about.jpg"
                alt="Giant Origami 2"
                className="aspect-square w-full max-w h-auto shadow-md object-cover object-center"
              />
            </div>
          </div>

          <hr className="mt-20 border-t border-gray-200" />

          <div className="font-sans font-light text-base sm:text-lg md:text-lg space-y-8 mt-15">
            <h1 className="text-3xl text-gray-800 text-left font-light">
              Official Bio.
            </h1>

            <p className="text-xl">Born in Tokyo, Japan. <br /><br />Lives and works in Brighton, UK.</p>

            <p className="text-gray-500">Coco Sato is an award-winning contemporary artist.  Sato's practice, which encompasses sculpture, performance, psychology and geometry is engaged with shifting perspectives through explorations in origami.</p>

            <p>Raised in Tokyo, and graduating with a Bachelor of Fine Art from Central Saint Martins, her work fosters a dialogue between cultures. Combining traditional Japanese aesthetics with contemporary leanings, Sato’s paper sculptures and installations invite us outside of our everyday experience to re-encounter our relationships to the world we inhabit.</p>
          
            <p className="text-gray-500">
              Collaborating with experts across STEM sectors, Sato has created a number of signature forms and experiments including; the Origami Sacred Geometry series, ‘Roborigami’ – large interactive robotic origami, ‘Resogami’ – resonant meditative light sculpture, ‘Electro Origami’ – wearable electronic paper art, ‘Zenogami’ – a playful mindfulness origami app, and ‘Portagami’ – deployable origami structures allowing for practical solutions in various real-world applications.
            </p>

            <p>
              Sato shares her skills through video tutorials and workshops encouraging hands-on creativity. Driven by a belief in the power of collective action for positive change, Sato encourages shared play, exploration and collaboration.
            </p>

            <p className="text-gray-500">
              Sato’s artwork has been exhibited and published internationally. She has been awarded the prestigious Leverhulme Trust Research Grant in connection to her work with Thomas Montenegro-Johnson, Professor of Applied Mathematics at Birmingham University and Warwick University (2020 – 2026). Recently, her works have been presented at Westminster Abbey, and she has designed public engagement events and created educational content for the Victoria & Albert Museum. In commercial sectors she has created original, high impact artworks and experiential events for global brands including Lexus, Victorinox, Barilla, Georg Jensen and Bodyform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}