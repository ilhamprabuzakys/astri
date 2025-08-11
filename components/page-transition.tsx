"use client"

import type React from "react"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Heart } from "lucide-react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {/* Romantic Loading Hearts */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fixed inset-0 bg-gradient-to-br from-rose-50 to-pink-100 z-50 flex items-center justify-center pointer-events-none"
        >
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <Heart className="w-8 h-8 text-rose-400 fill-current" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
