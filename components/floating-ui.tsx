"use client"

import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"

export function FloatingUI() {
  const router = useRouter()
  const pathname = usePathname()

  const handleRouting = (path: string) => {
    // Example: Navigate to "/work", "/about", "/careers"
    router.push(`/${path}`)
  }

  const isActive = (path: string) => {
    if (path === "work" && pathname === "/") return true
    return pathname === `/${path}`
  }

  return (
    <>
      {/* Filter Button */}
      <div className="pointer-events-none fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
        <button
          aria-label="Filter projects"
          className={cn(
            "pointer-events-auto grid h-10 w-10 place-items-center rounded-full",
            "sm:h-14 sm:w-14",
            "border border-gray-800 bg-gray-900/70 text-white/90 backdrop-blur",
            "shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
          )}
          onClick={() => handleRouting("filter")}
        >
          <span className="text-xs sm:text-sm">Filter</span>
        </button>
      </div>
    </>
  )
}
