"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BlockMedia() {
    return (
        <div className="relative flex flex-col novice-section-bg">
            {/* Call to Action кнопочка */}
            {/* <div className="flex justify-center mb-8 px-6">
                <motion.a
                    href="#coworking"
                    className="inline-block text-center py-3 px-8 rounded-xl border-2 border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    Забронировать коворкинг →
                </motion.a>
            </div> */}
            {/* Текстовая часть сверху */}
            <div className="flex-1 flex items-center justify-center px-6">
                <div className="text-center max-w-3xl">
                    <h2 className="text-2xl text-slate-900 mb-4">О нас пишут в СМИ</h2>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                        Журнал СОБАКА.RU – декабрь 2024, страница 28-29
                    </p>
                    <a
                        href="https://www.calameo.com/books/0078424579ffe3b17c996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-gray-600 hover:text-gray-800 transition-colors font-medium underline"
                    >
                        Читать статью →
                    </a>
                </div>
            </div>
            {/* Картинка на всю ширину снизу */}
            <div className = "w-screen">
                <div className="max-w-70 h-120 relative mt-10 md:hidden mx-auto">
                    <Image
                        src="/img/images/AI_1.png"
                        alt="Style image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}