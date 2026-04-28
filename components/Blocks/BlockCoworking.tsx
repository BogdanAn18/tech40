"use client"

import Image from "next/image"

export default function BlockCoworking() {
    return (
        <div className="min-h-screen relative flex items-center justify-center bg-white overflow-hidden" id="coworking">
            {/* Вращающийся фон через CSS-анимацию */}
            <div
                className="absolute pointer-events-none"
                style={{
                    left: "-10%",
                    top: "30%",
                    backgroundImage: "url('/img/images/35.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    animation: "spin 30s linear infinite",
                    transformOrigin: "center center",
                    width: "600px",
                    height: "600px",
                    opacity: 0.2
                }}
            />

            <div className="text-center px-6 py-20 max-w-2xl w-full relative z-10">
                <h2>Бронирование коворкинга</h2>
                <p className="mt-2 mb-8">
                    Для резидентов Центра исследований и разработки Сбера
                </p>

                <div className="border border-gray-200 rounded-xl bg-white text-left p-5 shadow-sm">
                    <div className="mb-4">
                        <span className="text-gray-800 font-medium block">
                            Забронировать место
                        </span>
                        <span className="text-gray-500 text-sm">
                            Переговорная или рабочее место в коворкинге
                        </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                        <p className="text-sm">
                            Свободно: 12 мест
                        </p>
                    </div>

                    <div className="space-y-2 mb-4">
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

                    <p className="text-xs text-gray-400 text-center mt-2">
                        Сервис бронирования переговорных и коворкинга
                    </p>
                </div>
            </div>
        </div>
    )
}