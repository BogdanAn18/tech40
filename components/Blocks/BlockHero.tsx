"use client"

import Image from "next/image"

export default function BlockHero() {
  return (
    <div
      className="min-h-screen relative flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-0 overflow-hidden novice-section-bg"
      id="mission"
    >
      {/* Декоративная иконка */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
        <Image
          src="/img/images/200.png"
          alt="Style image"
          width={80}
          height={80}
          className="md:w-[120px] md:h-[120px]"
          priority
        />
      </div>

      {/* Текстовая часть */}
      <div className="relative z-10 text-center md:text-left max-w-2xl md:mr-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-900 mb-4 leading-tight">
          Центр исследований и разработки Сбера
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-2 font-light">
          Мы запускаем проекты для новых возможностей региона
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-900 mt-2 md:mt-8">
          Наша миссия
        </h2>
        <p className="mt-2 lg:mt-4 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-xl">
          Мы создаем решения для развития бизнеса через исследования клиентского
          опыта, анализ данных, применяя креативный подход и современные
          технологии.
        </p>
      </div>

      {/* Изображение справа (десктоп) или снизу (мобильные) */}
      <div className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/img/images/21.png"
          alt="Style image"
          width={400}
          height={400}
          className="w-3/4 md:w-full max-w-md h-auto"
          priority
        />
      </div>
    </div>
  )
}