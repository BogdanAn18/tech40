"use client"

import Image from "next/image"

export default function BlockMedia() {
    return (
        <div className="relative flex flex-col novice-section-bg">
            {/* Текстовая часть сверху */}
            <div className="flex-1 flex items-center justify-center px-6 mt-5">
                <div className="text-center max-w-3xl">
                    <h2 className="text-2xl text-slate-900 mb-4">Подробнее о нас пишут в СМИ</h2>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                        Журнал СОБАКА.RU – декабрь 2024, страница 28-29
                    </p>
                    <a
                        href="https://www.calameo.com/books/0078424579ffe3b17c996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 hover:text-blue-800 transition-colors font-medium underline"
                    >
                        Читать статью →
                    </a>
                </div>
            </div>
            {/* Картинка на всю ширину снизу */}
            <div className="w-full h-130 relative mt-10 md:hidden">
                <Image
                    src="/img/images/AI_1.png"
                    alt="Style image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}