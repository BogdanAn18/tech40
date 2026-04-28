"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Task {
    id: number;
    title: string;
    helper: string;
}

const tasks: Task[] = [
    { id: 1, title: "Анкета новичка", helper: "Иванова Светлана — куратор по адаптации" },
    { id: 2, title: "Закрепление ноутбука", helper: "Иванова Светлана" },
    { id: 3, title: "Экскурсия по офису", helper: "Иванова Светлана" },
    { id: 4, title: "Встреча с бутемп-мастером", helper: "очно или онлайн" },
    { id: 5, title: "Агент Кибербезопасность", helper: "самостоятельно АС ПУЛЬС" },
    { id: 6, title: "Вводный инструктаж по ГО и ЧС", helper: "самостоятельно АС ПУЛЬС" },
    { id: 7, title: "Вводный инструктаж по охране труда", helper: "самостоятельно АС ПУЛЬС" },
    { id: 8, title: "Очный инструктаж по пожарной безопасности", helper: "Иванова Светлана" },
    { id: 9, title: "Вводный инструктаж по пожарной безопасности", helper: "самостоятельно АС ПУЛЬС" },
    { id: 10, title: "Инструктаж по действиям в чрезвычайных ситуациях", helper: "самостоятельно АС ПУЛЬС" },
    { id: 11, title: "Инструктаж на рабочем месте по пожарной безопасности", helper: "Иванова Светлана" },
    { id: 12, title: "Конфиденциальная информация", helper: "самостоятельно АС ПУЛЬС" },
    { id: 13, title: "Вводный курс по управлению компаний-рисками в банке", helper: "самостоятельно АС ПУЛЬС" },
    { id: 14, title: "Заполнение профиля в Пульс", helper: "самостоятельно АС ПУЛЬС" },
    { id: 15, title: "Введение в ИИ-агенты", helper: "самостоятельно АС ПУЛЬС" },
    { id: 16, title: "Разработка мультиагентных систем для ИТ-архитекторов", helper: "самостоятельно АС ПУЛЬС" },
    { id: 17, title: "Работа с LLM GigaChat", helper: "самостоятельно АС ПУЛЬС" },
    { id: 18, title: "Знакомство с бадди", helper: "Иванова Светлана" },
    { id: 19, title: "Дополнительные материалы", helper: "самостоятельно АС ПУЛЬС" },
]

const taskGroups = [
    { title: "Первые шаги", tasks: tasks.slice(0, 5) },
    { title: "Инструктажи", tasks: tasks.slice(5, 11) },
    { title: "Обучение и развитие", tasks: tasks.slice(11, 19) },
]

export default function BlockNovice() {
    const [activeId, setActiveId] = useState<number | null>(null)

    const toggleTask = (id: number) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <div className="min-h-screen relative flex items-center justify-center py-12">
            {/* Фон и оверлей */}
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/img/center_photo/IMG_0232.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Контент */}
            <div className="relative z-20 w-full max-w-6xl px-6 text-center">
                <h3 className="text-white mb-2">Новичкам</h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Программа адаптации нового сотрудника
                </p>

                {/* Три колонки с задачами */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {taskGroups.map((group, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-gray-200 text-left">
                            <h2 className="mb-4 pb-2 border-b border-gray-300">{group.title}</h2>
                            <div className="space-y-3">
                                {group.tasks.map((task) => {
                                    const isOpen = activeId === task.id
                                    return (
                                        <div key={task.id} className="border border-gray-200 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => toggleTask(task.id)}
                                                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors bg-white"
                                            >
                                                <span className="text-gray-800 text-sm pr-2 font-medium">
                                                    {task.title}
                                                </span>
                                                <motion.span
                                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-gray-400 text-lg flex-shrink-0"
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
                                                        <div className="px-4 pb-4 pt-1 text-sm text-gray-700 border-t border-gray-100">
                                                            <span className="font-medium">Кто поможет: </span>
                                                            {task.helper}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}