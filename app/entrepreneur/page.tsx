"use client"

import { motion } from "motion/react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function EntrepreneurPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return // Still loading
    if (!session || session.user.role !== "ENTREPRENEUR") {
      router.push("/auth/signin")
    }
  }, [session, status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session || session.user.role !== "ENTREPRENEUR") {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">
          Добро пожаловать, предприниматель!
        </h1>
        <p className="text-lg text-center mb-8 text-gray-700">
          Откройте для себя возможности для роста вашего бизнеса в нашем коворкинге.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold mb-3 text-purple-700">Премиум услуги</h2>
            <p className="text-gray-600">Доступ к эксклюзивным сервисам для предпринимателей.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">Нетворкинг</h2>
            <p className="text-gray-600">Свяжитесь с другими предпринимателями и инвесторами.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500"
          >
            <h2 className="text-2xl font-semibold mb-3 text-green-700">Менторство</h2>
            <p className="text-gray-600">Получите советы от опытных бизнес-экспертов.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
          >
            <h2 className="text-2xl font-semibold mb-3 text-orange-700">Инвестиции</h2>
            <p className="text-gray-600">Возможности для привлечения инвестиций.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}