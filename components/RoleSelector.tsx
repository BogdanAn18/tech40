"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function RoleSelector() {
  return (
    <div className="max-w-4xl mx-auto text-center">
    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8 text-gray-800"
    >
        Выберите вашу роль
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg"
        >
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Новый сотрудник</h2>
        <p className="text-gray-600 mb-4">
            Добро пожаловать в команду! Здесь вы найдете всю информацию для адаптации.
        </p>
        <Link href="/novice" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Выбрать
        </Link>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg"
        >
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Пользователь коворкинга</h2>
        <p className="text-gray-600 mb-4">
            Доступ к ресурсам коворкинга для сотрудников компании.
        </p>
        <Link href="/employee" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Выбрать
        </Link>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg"
        >
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Партнер</h2>
        <p className="text-gray-600 mb-4">
            Специальные возможности для предпринимателей и партнеров.
        </p>
        <Link href="/entrepreneur" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            Выбрать
        </Link>
        </motion.div>
    </div>
    </div>
  )
}