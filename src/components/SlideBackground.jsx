import { useEffect, useState } from "react";

export const SlideBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  /* ---------- Generate once & on resize ---------- */
  useEffect(() => {
    generateStars();
    generateMeteors();
    const onResize = () => generateStars();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------- JSX ---------- */
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ⭐ Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="star animate-pulse-subtle animate-glow-star"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            animationDuration: `${s.animationDuration}s`,
          }}
        />
      ))}

      {/* 🌠 Meteors */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor animate-meteor"
          style={{
            width: m.size * 30,
            height: m.size,
            left: `${m.x}%`,
            top: `${m.y}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );

  /* ---------- Helpers ---------- */
  function generateStars() {
    const total = 100;
    setStars(
      [...Array(total).keys()].map((i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      }))
    );
  }

  function generateMeteors() {
    const total = 4;
    setMeteors(
      [...Array(total).keys()].map((i) => ({
        id: i,
        size: Math.random() * 1 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 0,
        animationDuration: Math.random() * 3 + 3,
      }))
    );
  }
};
