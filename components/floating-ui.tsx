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
      {/* Floating CTA Button */}
      <div className="pointer-events-none fixed right-2 top-2 sm:right-4 sm:top-4 z-50">
        <button
          aria-label="Let's Talk"
          className={cn(
            "pointer-events-auto rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900",
            "sm:px-5 sm:py-2 sm:text-sm",
            "shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
          )}
          onClick={() => handleRouting("contact")}
        >
          Let's Talk
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-x-0 bottom-3 sm:bottom-6 z-50 flex items-center justify-center"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/70 px-1 py-1 backdrop-blur sm:gap-2 sm:px-2 sm:py-2">
          {[
            { label: "Work", path: "work" },
            { label: "Services", path: "services" },
            { label: "Pitmans Lab", path: "pitmans-lab" },
            { label: "About", path: "about" },
            { label: "Careers", path: "careers" }
          ].map(({ label, path }) => (
            <button
              key={label}
              onClick={() => handleRouting(path)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold",
                "sm:px-5 sm:py-2 sm:text-sm",
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500",
                isActive(path)
                  ? "bg-white text-neutral-900"
                  : "text-white/90 hover:bg-neutral-800 hover:text-white"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Filter Button */}
      <div className="pointer-events-none fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
        <button
          aria-label="Filter projects"
          className={cn(
            "pointer-events-auto grid h-10 w-10 place-items-center rounded-full",
            "sm:h-14 sm:w-14",
            "border border-neutral-800 bg-neutral-900/70 text-white/90 backdrop-blur",
            "shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500",
          )}
          onClick={() => handleRouting("filter")}
        >
          <span className="text-xs sm:text-sm">Filter</span>
        </button>
      </div>
    </>
  )
}
