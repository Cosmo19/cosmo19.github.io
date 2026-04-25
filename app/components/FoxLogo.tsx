import React, { useState, useEffect } from "react";

export default function FoxLogo({
  className = "w-12 h-12 transition-colors shake-hover",
  speed = 3000,
  palettes = [
    // Neutral palettes with contrast
    ['#d4c5b9', '#3b3b3b', '#e8ddd2', '#ffb347'], // Warm Beige, Charcoal, Cream, Orange
    ['#b8c5d6', '#222f3e', '#d1dae3', '#ff6f61'], // Cool Gray, Navy, Pale Blue, Coral
    ['#b8c9b8', '#ff6347', '#cdd9cd', '#1e3799'], // Sage Green, Tomato Red, Mint, Royal Blue
    ['#c4b5ad', '#ffb7b2', '#d6cac2', '#3b3b98'], // Soft Taupe, Pink, Taupe, Deep Blue
    ['#c2c2c2', '#ff6f00', '#d6d6d6', '#222f3e'], // Monochrome, Orange, Light Gray, Navy
    ['#d4b896', '#ee5253', '#e8d4b8', '#38ada9'], // Warm Stone, Red, Cream, Teal
  ]
}) {
  const [currentPalette, setCurrentPalette] = useState(0);
  const [colors, setColors] = useState(palettes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPalette((prev) => (prev + 1) % palettes.length);
    }, speed);

    return () => clearInterval(interval);
  }, [speed, palettes.length]);

  useEffect(() => {
    setColors(palettes[currentPalette]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPalette]);

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>{`
        .tri-animate {
          transition: fill 2s ease-in-out;
        }
      `}</style>
      <polygon
        className="tri-animate"
        points="0,0 97,97 0,97"
        fill={colors[0]}
      />
      <polygon
        className="tri-animate"
        points="200,0 200,97 103,97"
        fill={colors[1]}
      />
      <polygon
        className="tri-animate"
        points="0,103 97,103 97,200"
        fill={colors[2]}
      />
      <polygon
        className="tri-animate"
        points="103,103 200,103 103,200"
        fill={colors[3]}
      />
    </svg>
  );
}