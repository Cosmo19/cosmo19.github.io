export default function Logo({ 
  color1 = "#a8d8ea", 
  color2 = "#ffb3ba", 
  color3 = "#bae1bc", 
  color4 = "#d4b5d4",
  className = "w-12 h-12 transition-colors duration-500"
}) {
  const colorPalettes = [
      ['#00d4ff', '#ff006e', '#8338ec', '#ffbe0b'], // Neon vibrant
      ['#06ffa5', '#ff6b9d', '#c471f5', '#feca57'], // Electric bright
      ['#4facfe', '#00f2fe', '#43e97b', '#38f9d7'], // Cyan-aqua gradient
      ['#fa709a', '#fee140', '#30cfd0', '#a8edea'], // Warm sunset glow
      ['#f093fb', '#f5576c', '#4facfe', '#00f2fe'], // Purple-pink neon
      ['#ff0844', '#ffb199', '#7b4fff', '#05ffa1'], // Bold contrast
      ['#36d1dc', '#5b86e5', '#f857a6', '#ff5858'], // Cool-warm split
      ['#00c9ff', '#92fe9d', '#ff006e', '#ffd700']  // Digital pop
  ];

  const transitionStyle = { transition: "fill 0.5s" };

  return (
    <svg 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="0,0 97,97 0,97" fill={color1} style={transitionStyle} />
      <polygon points="200,0 200,97 103,97" fill={color2} style={transitionStyle} />
      <polygon points="0,103 97,103 97,200" fill={color3} style={transitionStyle} />
      <polygon points="103,103 200,103 103,200" fill={color4} style={transitionStyle} />
    </svg>
  );
}