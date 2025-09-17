"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const router = useRouter()

  const handleLetsTalk = () => {
    router.push("/contact")
  }

  return (
    <motion.header
      className="pointer-events-none fixed left-3 top-3 right-3 sm:left-6 sm:top-6 sm:right-6 z-40 flex items-center justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Logo */}
      <Link href="/" className="pointer-events-auto block">
        <motion.img
          src="https://www.pitamaas.com/logo-dark-mobile.png"
          alt="Pitamaas Logo"
          className="h-16 w-auto sm:h-20 md:h-24 lg:h-30"
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      {/* Let's Talk Button */}
      <motion.button
        aria-label="Let's Talk"
        className={cn(
          "pointer-events-auto rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black",
          "sm:px-5 sm:py-2 sm:text-sm",
          "shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
        )}
        onClick={handleLetsTalk}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Let's Talk
      </motion.button>
    </motion.header>
  )
}
