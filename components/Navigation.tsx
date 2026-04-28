"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "#mission", label: "Наша миссия" },
  { href: "#loyalty", label: "Программа лояльности" },
  { href: "#coworking", label: "Коворкинг" },
  { href: "#contacts", label: "Контакты" },
  { href: "#faq", label: "FAQ" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Кнопка-бургер */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm"
        aria-label="Меню"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-[1.5px] bg-gray-600 block"
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          className="w-5 h-[1.5px] bg-gray-600 block"
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-[1.5px] bg-gray-600 block"
        />
      </button>

      {/* Боковая панель */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Оверлей */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />

            {/* Меню */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-40 h-full w-72 bg-white border-l border-gray-200 flex flex-col"
            >
              <div className="p-6 pb-4 mt-10 border-b border-gray-100">
                <h3 className="text-gray-400 text-sm">Навигация</h3>
              </div>

              <div className="flex flex-col space-y-1 p-6 pt-4 flex-1 overflow-y-auto">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors px-3 py-2 rounded-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="p-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  Центр исследований и разработки Сбера
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}