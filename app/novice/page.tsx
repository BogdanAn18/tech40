"use client"

import { motion } from "motion/react"

export default function NovicePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-4"
      >
        <h1 className="text-2xl font-bold mb-4">Добро пожаловать, новичок!</h1>
        <p className="text-gray-600 mb-6">
          Здесь вы можете ознакомиться с возможностями коворкинга без регистрации.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Узнать больше
        </motion.button>
      </motion.div>
    </div>
  )
}