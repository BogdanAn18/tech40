"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Космический сервис", description: "Разработка платформы для управления спутниками", image: "/images/space.jpg" },
  { id: 2, title: "AI Аналитика", description: "Нейросеть для прогнозирования трендов", image: "/images/ai.jpg" },
  { id: 3, title: "Зелёная энергия", description: "Оптимизация солнечных электростанций", image: "/images/energy.jpg" },
  { id: 4, title: "Умный город", description: "IoT-решения для мегаполисов", image: "/images/smartcity.jpg" },
  { id: 5, title: "Блокчейн логистика", description: "Прозрачные цепочки поставок", image: "/images/blockchain.jpg" },
  { id: 6, title: "VR образование", description: "Иммерсивное обучение для школ", image: "/images/vr.jpg" },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Прогресс вертикальной прокрутки внутри контейнера (300vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Параметры карточек
  const cardWidth = 320;
  const gap = 24;
  const totalWidth = projects.length * (cardWidth + gap) - gap;
  const startX = (typeof window !== "undefined" ? window.innerWidth / 2 - cardWidth / 2 : 0);
  const x = useTransform(scrollYProgress, [0, 1], [startX, startX - totalWidth + (typeof window !== "undefined" ? window.innerWidth / 2 - cardWidth / 2 : 0)]);

  return (
    <div className="bg-white">
      {/* Шапка с заголовком */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[var(--main-green)] to-[var(--main-purple)] bg-clip-text text-transparent">
          Наши проекты
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-md">Скролльте вниз, чтобы увидеть все кейсы →</p>
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Контейнер для горизонтальной прокрутки */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full items-center"
            style={{ gap: `${gap}px`, paddingLeft: `calc(50% - ${cardWidth / 2}px)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ width: cardWidth }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: "DrukWide, sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm" style={{ fontFamily: "DrukWide, sans-serif", fontWeight: 300 }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Футер */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-400">Готовы начать проект?</p>
      </div>
    </div>
  );
}