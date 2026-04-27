"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const projects = [
  { id: 1, title: "Космический сервис", description: "Разработка платформы для управления спутниками", color: "bg-gradient-to-br from-purple-600 to-blue-600" },
  { id: 2, title: "AI Аналитика", description: "Нейросеть для прогнозирования трендов", color: "bg-gradient-to-br from-green-600 to-teal-600" },
  { id: 3, title: "Зелёная энергия", description: "Оптимизация солнечных электростанций", color: "bg-gradient-to-br from-orange-600 to-red-600" },
  { id: 4, title: "Умный город", description: "IoT-решения для мегаполисов", color: "bg-gradient-to-br from-pink-600 to-rose-600" },
  { id: 5, title: "Блокчейн логистика", description: "Прозрачные цепочки поставок", color: "bg-gradient-to-br from-indigo-600 to-purple-600" },
  { id: 6, title: "VR образование", description: "Иммерсивное обучение для школ", color: "bg-gradient-to-br from-cyan-600 to-blue-600" },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Точный расчёт: каждая карточка = ширина экрана
  const totalScrollDistance = screenWidth * (projects.length - 1);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalScrollDistance]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 left-0 h-screen w-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative w-screen h-screen flex-shrink-0 overflow-hidden"
            >
              {/* Большое изображение/блок на весь экран */}
              <div className={`${project.color} absolute inset-0 flex flex-col items-center justify-center text-white`}>
                {/* Место для большой картинки */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Здесь будет ваша большая картинка */}
                  <div className="text-center p-8 z-10">
                    <div className="text-9xl mb-8">
                      {index === 0 && "🚀"}
                      {index === 1 && "🤖"}
                      {index === 2 && "🌱"}
                      {index === 3 && "🏙️"}
                      {index === 4 && "🔗"}
                      {index === 5 && "🥽"}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h2>
                    <p className="text-xl md:text-2xl opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}