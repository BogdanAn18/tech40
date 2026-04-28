"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function BlockCoworking() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative flex items-center justify-center bg-white overflow-hidden">
            {/* Фоновое изображение с медленным вращением */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 opacity-20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center center" }}
            >
                <Image
                    src="/img/images/35.png"
                    alt="Background"
                    width={600}
                    height={600}
                    priority
                />
            </motion.div>

            <div className="text-center px-6 py-20 max-w-2xl w-full relative z-10">
                <h3>Бронирование коворкинга</h3>
                <p className="mt-2 mb-8">
                    Для резидентов Центра исследований и разработки Сбера
                </p>

                <div className="border border-gray-200 rounded-xl bg-white text-left">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                    >
                        <div>
                            <span className="text-gray-800 font-medium block">
                                Забронировать место
                            </span>
                            <span className="text-gray-500 text-sm">
                                Переговорная или рабочее место в коворкинге
                            </span>
                        </div>
                        <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gray-400 text-xl flex-shrink-0"
                        >
                            +
                        </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-5 pb-5 border-t border-gray-100 space-y-4 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                                        <p className="text-sm">
                                            Свободно: 12 мест
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-800">
                                            Доступные слоты на сегодня:
                                        </p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {["10:00", "12:00", "14:00", "16:00"].map((time) => (
                                                <button
                                                    key={time}
                                                    className="border border-gray-200 rounded-lg py-2 px-3 text-sm text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href="#"
                                        className="block w-full text-center py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                                    >
                                        Перейти к бронированию
                                    </a>

                                    <p className="text-xs text-gray-400 text-center">
                                        Сервис бронирования переговорных и коворкинга
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Блок "Нужна помощь" с белым фоном */}
                <div className="mt-8 border border-gray-200 rounded-xl p-5 bg-white">
                    <p className="text-sm">
                        <span className="font-medium text-gray-800">Нужна помощь?</span>
                    </p>
                    <p className="text-sm mt-1">
                        Кузнецова Ирина — менеджер по бронированию коворкинга
                    </p>
                    <a
                        href="https://t.me/user"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-gray-500 hover:text-gray-700 transition-colors font-medium underline text-sm"
                    >
                        @user
                    </a>
                </div>
            </div>
        </div>
    )
}