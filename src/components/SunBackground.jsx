import { useMemo } from "react";

export const SunBackground = () => {
  const cloudCount = 8;
  const pollenCount = 20;

  const clouds = useMemo(
    () => [...Array(cloudCount).keys()].map(generateRandomCloudStyle),
    []
  );
  const pollen = useMemo(generatePollenStyle, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-sky-gradient">
      {/* Sun + glow */}
      <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-yellow-300 animate-glow-sun relative">
        <div className="absolute inset-0 rounded-full bg-yellow-100 opacity-40 blur-2xl scale-150" />
        <div className="absolute inset-0 rounded-full bg-white opacity-30 blur-3xl scale-[2.5]" />
      </div>

      {/* Clouds */}
      {clouds.map((style, i) => (
        <div
          key={i}
          className="cloud absolute left-[-300px] animate-cloud"
          style={style}
        />
      ))}

      {/* Pollen */}
      {pollen.map((p) => (
        <div
          key={p.id}
          className="pollen-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );

  /* ---------- Helpers ---------- */
  function generateRandomCloudStyle(i) {
    const top = Math.random() * 30;
    const width = 300 + Math.random() * 200;
    const height = 120 + Math.random() * 80;
    const delay = i * 5;
    const opacity = 0.7 + Math.random() * 0.7;
    const scale = 0.9 + Math.random() * 0.3;
    return {
      top: `${top}vh`,
      width: `${width}px`,
      height: `${height}px`,
      opacity,
      transform: `scale(${scale})`,
      animationDelay: `${delay}s`,
    };
  }

  function generatePollenStyle() {
    return [...Array(pollenCount).keys()].map((i) => ({
      id: i,
      size: 4 + Math.random() * 4,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }
};
