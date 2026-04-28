"use client"

import Image from "next/image"

export default function BlockStars() {
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-10 novice-section-bg">
            <h2 className="text-slate-900">Что пишут о нас?</h2>
            <h4 className="text-slate-700">Из пяти звёздочек нам всегда ставят пять</h4>
            <Image
                src="/img/images/stars-nobg.png"
                alt="Stars"
                width={350}
                height={100}
            />
            <div className="max-w-2xl mx-auto space-y-6 text-left">
                <p className="
                    m-6 p-6
                    sm:text-sm
                    leading-relaxed 
                    border-2 border-gray-300 rounded-xl text-slate-700">
                    «Центр исследований и разработки Сбера в Нижнем Новгороде — 
                    это место, где технологии встречаются с человеческим подходом. 
                    Здесь ценят инициативу, поддерживают развитие и создают 
                    комфортную среду для роста. Я рад быть частью команды, 
                    которая меняет будущее уже сегодня»
                    <br />
                    <span className="font-semibold text-slate-900 mt-2 inline-block">
                        — Алексей, партнёр Сбера
                    </span>
                </p>

                <p className="
                    m-6 p-6
                    leading-relaxed 
                    border-2 border-gray-300 rounded-xl text-slate-700">
                    «Программа адаптации и поддержки сотрудников уникальна 
                    в своём роде. За неделю я полностью погрузился в процессы 
                    и почувствовал себя частью большой и дружной команды. 
                    Отдельное спасибо за современный коворкинг и спортзал — 
                    work-life balance здесь не просто слова»
                    <br />
                    <span className="font-semibold text-slate-900 mt-2 inline-block">
                        — Мария, разработчик
                    </span>
                </p>
            </div>
        </div>
    )
}