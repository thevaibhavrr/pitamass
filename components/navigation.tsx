"use client"

import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()

  const handleRouting = (path: string) => {
    if (path === "work") {
      router.push("/")
    } else {
      router.push(`/${path}`)
    }
  }

  const isActive = (path: string) => {
    if (path === "work" && pathname === "/") return true
    return pathname === `/${path}`
  }

  return (
    <>
      <style jsx global>{`
        /* Force navigation button border radius */
        nav[aria-label="Primary"] button {
          border-radius: 9999px !important;
        }
        
        /* Ensure active state maintains border radius */
        nav[aria-label="Primary"] button.bg-white {
          border-radius: 9999px !important;
        }
        
        /* Override any template styles that might affect navigation */
        nav[aria-label="Primary"] button * {
          border-radius: inherit !important;
        }
        
        /* Ensure hover states maintain border radius */
        nav[aria-label="Primary"] button:hover {
          border-radius: 9999px !important;
        }
      `}</style>
      <nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-x-0 bottom-3 sm:bottom-6 z-50 flex items-center justify-center"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-gray-800 bg-gray-900/70 px-1 py-1 backdrop-blur sm:gap-2 sm:px-2 sm:py-2">
          {[
            { label: "Work", path: "work" },
            { label: "Services", path: "services" },
            { label: "Pitmans Lab", path: "lab" },
            { label: "About", path: "about" },
            { label: "Careers", path: "careers" }
          ].map(({ label, path }) => (
            <button
              key={label}
              onClick={() => handleRouting(path)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold",
                "sm:px-5 sm:py-2 sm:text-sm",
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                isActive(path)
                  ? "bg-white text-black"
                  : "text-white/90 hover:bg-gray-800 hover:text-white"
              )}
              style={{ borderRadius: '9999px' }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
