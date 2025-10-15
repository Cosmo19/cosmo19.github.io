// React Component with Animated Gradients
import { useEffect, useState } from 'react';

export default function AnimatedLogo({ 
  className = "w-10 h-10",
  speed = 3000, // milliseconds between color changes
  palettes = [
    // NATURE & ORGANIC
    ['#56ab2f', '#a8e063', '#2193b0', '#6dd5ed'], // Fresh nature
    ['#134e5e', '#71b280', '#aa4b6b', '#6b6b83'], // Forest depths
    ['#ffa751', '#ffe259', '#56ccf2', '#2f80ed'], // Tropical sunset
    ['#ed4264', '#ffedbc', '#16bffd', '#cb3066'], // Coral reef
    ['#43cea2', '#185a9d', '#f12711', '#f5af19'], // Fire & ice
    
    // COSMIC & SPACE
    ['#8e2de2', '#4a00e0', '#ff0099', '#493240'], // Deep space
    ['#360033', '#0b8793', '#ee0979', '#ff6a00'], // Nebula
    ['#000428', '#004e92', '#f857a6', '#ff5858'], // Midnight galaxy
    ['#141e30', '#243b55', '#a8edea', '#fed6e3'], // Starlight
    ['#1c92d2', '#f2fcfe', '#ee0979', '#ff6a00'], // Aurora borealis
    
    // RETRO & VINTAGE
    ['#f46b45', '#eea849', '#26d0ce', '#1a2980'], // 80s synthwave
    ['#ff6e7f', '#bfe9ff', '#ffa07a', '#fa8bff'], // Retro pastel
    ['#ff512f', '#dd2476', '#009ffd', '#2a2a72'], // Vintage neon
    ['#fc4a1a', '#f7b733', '#4facfe', '#00f2fe'], // Sunset boulevard
    ['#833ab4', '#fd1d1d', '#fcb045', '#00d2ff'], // Vaporwave
    
    // OCEAN & WATER
    ['#0083b0', '#00b4db', '#09203f', '#537895'], // Deep ocean
    ['#1e3c72', '#2a5298', '#16a085', '#f4d03f'], // Tropical waters
    ['#2c3e50', '#3498db', '#00b09b', '#96deda'], // Caribbean blue
    ['#667eea', '#764ba2', '#209cff', '#68e0cf'], // Mystic waters
    ['#1fa2ff', '#12d8fa', '#a6ffcb', '#a8edea'], // Crystal lagoon
    
    // FIRE & ENERGY
    ['#ff0000', '#ff7300', '#ffb700', '#ffd000'], // Flame gradient
    ['#f83600', '#f9d423', '#ff512f', '#dd2476'], // Hot magma
    ['#ff6b6b', '#feca57', '#ee5a6f', '#f7797d'], // Warm ember
    ['#fd746c', '#ff9068', '#ff6e7f', '#ff5e62'], // Summer heat
    ['#e53935', '#e35d5b', '#ff6f00', '#ffa726'], // Solar flare
    
    // COOL & ICY
    ['#396afc', '#2948ff', '#00d2ff', '#3a7bd5'], // Arctic frost
    ['#89f7fe', '#66a6ff', '#a8edea', '#fed6e3'], // Frozen tundra
    ['#d299c2', '#fef9d7', '#30cfd0', '#330867'], // Winter wonderland
    ['#4facfe', '#00f2fe', '#667eea', '#764ba2'], // Ice crystal
    ['#e0c3fc', '#8ec5fc', '#a8edea', '#fed6e3'], // Glacier blue
    
    // EARTH TONES (Vibrant)
    ['#d4a574', '#c98e5e', '#7fb069', '#548c2f'], // Autumn harvest
    ['#bc4e9c', '#f80759', '#f5af19', '#f12711'], // Sunset canyon
    ['#8e44ad', '#c0392b', '#f39c12', '#27ae60'], // Desert blooms
    ['#d4a373', '#8b7355', '#9caf88', '#697268'], // Warm earth
    ['#cc2b5e', '#753a88', '#f2994a', '#f2c94c'], // Clay & terracotta
    
    // MONOCHROMATIC GRADIENTS
    ['#667eea', '#764ba2', '#8e44ad', '#a55eea'], // Purple mono
    ['#ff6b6b', '#ee5a6f', '#d63031', '#c0392b'], // Red mono
    ['#20bf6b', '#26de81', '#2ecc71', '#27ae60'], // Green mono
    ['#0abde3', '#00a8ff', '#3498db', '#2980b9'], // Blue mono
    ['#feca57', '#ff9ff3', '#ff6348', '#ff4757'], // Warm mono
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

// Usage examples:
// <AnimatedLogo className="w-10 h-10" />
// <AnimatedLogo className="w-20 h-20" speed={5000} />

// Custom palettes:
// <AnimatedLogo 
//   palettes={[
//     ['#d4c5b9', '#b8a99a', '#e8ddd2', '#c9b8a7'], // Warm Beige
//     ['#b8c5d6', '#9aa8b8', '#d1dae3', '#a8b4c2'], // Cool Gray
//   ]}
// />


// ============================================
// VANILLA JAVASCRIPT VERSION (for HTML/JS)
// ============================================

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Logo</title>
  <style>
    body {
      margin: 0;
      padding: 40px;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    
    .logo {
      width: 300px;
      height: 300px;
    }
    
    .tri-animate {
      transition: fill 2s ease-in-out;
    }
  </style>
</head>
<body>
  <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon class="tri-animate" id="tri1" points="0,0 97,97 0,97" fill="#00d4ff"/>
    <polygon class="tri-animate" id="tri2" points="200,0 200,97 103,97" fill="#ff006e"/>
    <polygon class="tri-animate" id="tri3" points="0,103 97,103 97,200" fill="#8338ec"/>
    <polygon class="tri-animate" id="tri4" points="103,103 200,103 103,200" fill="#ffbe0b"/>
  </svg>

  <script>
    const palettes = [
      ['#00d4ff', '#ff006e', '#8338ec', '#ffbe0b'], // Neon vibrant
      ['#06ffa5', '#ff6b9d', '#c471f5', '#feca57'], // Electric bright
      ['#4facfe', '#00f2fe', '#43e97b', '#38f9d7'], // Cyan-aqua
      ['#fa709a', '#fee140', '#30cfd0', '#a8edea'], // Warm sunset
      ['#f093fb', '#f5576c', '#4facfe', '#00f2fe'], // Purple-pink neon
      ['#ff0844', '#ffb199', '#7b4fff', '#05ffa1'], // Bold contrast
      ['#36d1dc', '#5b86e5', '#f857a6', '#ff5858'], // Cool-warm split
      ['#00c9ff', '#92fe9d', '#ff006e', '#ffd700']  // Digital pop
    ];

    const triangles = [
      document.getElementById('tri1'),
      document.getElementById('tri2'),
      document.getElementById('tri3'),
      document.getElementById('tri4')
    ];

    let currentPalette = 0;

    function changeColors() {
      currentPalette = (currentPalette + 1) % palettes.length;
      const colors = palettes[currentPalette];
      
      triangles.forEach((triangle, index) => {
        triangle.setAttribute('fill', colors[index]);
      });
    }

    // Change colors every 3 seconds
    setInterval(changeColors, 3000);
  </script>
</body>
</html>
*/


// ============================================
// NEUTRAL TONE PALETTES VERSION
// ============================================

/*
// For React - just replace the palettes prop:
<AnimatedLogo 
  className="w-10 h-10"
  palettes={[
    ['#d4c5b9', '#b8a99a', '#e8ddd2', '#c9b8a7'], // Warm Beige
    ['#b8c5d6', '#9aa8b8', '#d1dae3', '#a8b4c2'], // Cool Gray
    ['#b8c9b8', '#a3b5a3', '#cdd9cd', '#b0c2b0'], // Sage Green
    ['#c4b5ad', '#b0a199', '#d6cac2', '#b8aca4'], // Soft Taupe
    ['#c2c2c2', '#a8a8a8', '#d6d6d6', '#b5b5b5'], // Monochrome
    ['#d4b896', '#c4a882', '#e8d4b8', '#d0ba96'], // Warm Stone
  ]}
/>
*/