"use client"

import Image from "next/image"

export default function BlockInfo() {
    return (
        <div className="min-h-screen relative flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl">
                <p className="
                    mt-2 mb-6 p-3
                    leading-relaxed 
                    border-2 border-gray-300 rounded-xl">
                    Мы запускаем проекты для новых возможностей региона
                </p>
                <h1 className="text-gray-500">
                    Наша миссия
                </h1>
                <p className="mt-6 mb-8">
                    Мы создаем решения для развития бизнеса через исследования клиентского опыта, 
                    анализ данных, применяя креативный подход и современные технологии.
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h2>Подробнее о нас пишут в СМИ:</h2>
                    <p>
                        <br />
                        Журнал СОБАКА.RU – декабрь 2024, страница 28-29
                        <br />
                        <a
                            href="https://www.calameo.com/books/0078424579ffe3b17c996"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-gray-500 hover:text-gray-700 transition-colors font-medium underline"
                        >
                            Читать статью →
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}