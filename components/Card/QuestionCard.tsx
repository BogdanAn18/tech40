// QuestionCard.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface QuestionCardProps {
  question: string
  answer: React.ReactNode
}

const answerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function QuestionCard({ question, answer }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="pr-4">{question}</h3>
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
            <motion.p
              className="px-5 pb-5 leading-relaxed"
              variants={answerVariants}
              initial="hidden"
              animate="visible"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}