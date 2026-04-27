"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

const items = [
  { id: 1, label: "Пункт 1" },
  { id: 2, label: "Пункт 2" },
  { id: 3, label: "Пункт 3" },
  { id: 4, label: "Пункт 4" },
  { id: 5, label: "Пункт 5" },
];

const GAP = 20;

export default function ScrollHorizontal() {
  const containerRef = useRef(null);
  const [ITEM_WIDTH, setITEM_WIDTH] = useState(300);

  useEffect(() => {
    const updateWidth = () => {
      setITEM_WIDTH(Math.min(window.innerWidth, 600));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const startOffset = (ITEM_WIDTH + GAP) * 2;
  const x = useTransform(scrollYProgress, [0, 1], [startOffset, startOffset - totalDistance]);

  return (
    <div>
      <div style={{ height: "50vh", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "40px" }}>
        <h1>Горизонтальный скролл</h1>
      </div>

      <div ref={containerRef} style={{ height: "300vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <motion.div style={{ x, display: "flex", gap: `${GAP}px` }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  width: `${ITEM_WIDTH}px`,
                  height: "400px",
                  background: "#1e3a8a",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <h2>{item.label}</h2>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>Конец</p>
      </div>
    </div>
  );
}