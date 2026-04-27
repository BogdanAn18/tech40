"use client"

import { motion } from "framer-motion"
import Quote from "@/components/Quote"

export default function BlockInfo() {
    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-green-50/20"
            style={{ fontFamily: 'DrukWide, sans-serif' }}
            >
            
            {/* Простые фоновые элементы */}
            <motion.div 
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--main-purple)] opacity-10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--main-green)] opacity-10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-3xl px-6 pt-15 relative z-10 ">
                
                {/* Цитата */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Quote>
                        <span className="text-2xl font-light leading-relaxed">
                            "Мы запускаем проекты для новых возможностей региона"
                        </span>
                    </Quote>
                </motion.div>

                {/* Наша миссия - бомба! */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-12 mb-6"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[var(--main-green)] via-[var(--main-purple)] to-[var(--main-green)] bg-clip-text text-transparent bg-300% animate-gradient">
                        Наша миссия
                    </h2>
                </motion.div>

                {/* Текст */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-700 leading-relaxed text-center text-lg mb-8"
                >
                    Мы создаем решения для развития бизнеса через исследования клиентского опыта, 
                    анализ данных, применяя креативный подход и современные технологии.
                </motion.p>

                {/* Карточка СМИ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ y: -3 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl mb-10 p-6 border border-gray-100 shadow-lg"
                >
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <span className="font-semibold text-[var(--main-purple)]">Подробнее о нас пишут в СМИ:</span>
                        <br />
                        Журнал СОБАКА.RU – декабрь 2024, страница 28-29
                        <br />
                        <motion.a
                            href="https://www.calameo.com/books/0078424579ffe3b17c996"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-[var(--main-green)] hover:text-[var(--main-purple)] transition-colors font-medium"
                            whileHover={{ x: 3 }}
                        >
                            Читать статью →
                        </motion.a>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}