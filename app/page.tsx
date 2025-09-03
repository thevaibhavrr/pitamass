// "use client"

// import * as React from "react"
// import Link from "next/link"
// import { FloatingUI } from "@/components/floating-ui"
// import { ProjectCard } from "@/components/project-card"
// import { useCursorPan } from "@/hooks/use-cursor-pan"
// import { cn } from "@/lib/utils"

// // Define project type
// type Project = { id: number; title: string; categories: string[]; imgSrc: string }

// const baseProjects: Project[] = [
//   { id: 1, title: "Phantom Reference", categories: ["Agency", "Grid"], imgSrc: "/images/phantom-reference.png" },
//   { id: 2, title: "Travel Hacker", categories: ["Campaign", "Product"], imgSrc: "/travel-hacker-campaign-tile.png" },
//   { id: 3, title: "Motion Lab", categories: ["3D", "R&D"], imgSrc: "/3d-motion-lab-frame.png" },
//   { id: 4, title: "Retail OS", categories: ["Platform", "Case Study"], imgSrc: "/retail-dashboard-ui.png" },
//   { id: 5, title: "Neural Keys", categories: ["Brand", "Industrial"], imgSrc: "/industrial-product-shot.png" },
//   { id: 6, title: "Drifting", categories: ["Film", "Experimental"], imgSrc: "/film-still-sunset.png" },
//   { id: 7, title: "Cortex Bank", categories: ["Fintech", "App"], imgSrc: "/fintech-app-ui-screen.png" },
//   { id: 8, title: "Sonic Off", categories: ["Interactive", "WebGL"], imgSrc: "/webgl-interactive-tile.png" },
//   { id: 9, title: "Midnight Drop", categories: ["E-commerce", "Launch"], imgSrc: "/ecommerce-campaign-tile.png" },
//   { id: 10, title: "Studio Suite", categories: ["SaaS", "Design"], imgSrc: "/saas-ui-kit-preview.png" },
// ]

// // Utility: make infinite tiling by repeating items in a grid
// function makeInfiniteGrid(rows: number, cols: number, projects: Project[]) {
//   const grid: Project[] = []
//   for (let i = 0; i < rows * cols; i++) {
//     grid.push(projects[i % projects.length])
//   }
//   return grid
// }

// export default function Page() {
//   const containerRef = React.useRef<HTMLDivElement>(null)
//   const contentRef = React.useRef<HTMLDivElement>(null)

//   useCursorPan(containerRef, contentRef, { intensity: 0.5 })

//   // Double-tap support
//   React.useEffect(() => {
//     let lastTap = 0

//     const handleDoubleTap = (e: TouchEvent) => {
//       const now = Date.now()
//       const timeSince = now - lastTap
//       if (timeSince < 300 && timeSince > 0) {
//         if (contentRef.current && containerRef.current) {
//           const rect = containerRef.current.getBoundingClientRect()
//           const tapX = e.touches[0].clientX - rect.left
//           const tapY = e.touches[0].clientY - rect.top

//           // Move grid so tapped point goes near center
//           contentRef.current.style.transition = "transform 0.4s ease-out"
//           contentRef.current.style.transform = `translate(${-tapX + rect.width / 2}px, ${-tapY + rect.height / 2}px)`

//           setTimeout(() => {
//             if (contentRef.current) {
//               contentRef.current.style.transition = "" // reset after animation
//             }
//           }, 400)
//         }
//       }
//       lastTap = now
//     }

//     const el = containerRef.current
//     el?.addEventListener("touchend", handleDoubleTap)
//     return () => el?.removeEventListener("touchend", handleDoubleTap)
//   }, [])

//   const items = React.useMemo(() => makeInfiniteGrid(20, 20, baseProjects), [])

//   return (
//     <main className="relative min-h-screen bg-neutral-950 text-white">
//       {/* Website Logo at top-left */}
//       <header className="pointer-events-none fixed left-6 top-6 z-40">
//         <Link href="/" className="pointer-events-auto block">
//           <img
//             src="https://www.pitamaas.com/logo-dark-mobile.png"
//             alt="Pitamaas Logo"
//             className="h-10 w-auto"
//           />
//         </Link>
//       </header>

//       <FloatingUI />

//       <section
//         ref={containerRef}
//         aria-label="Infinite project grid"
//         className={cn("relative z-10 h-screen w-screen overflow-hidden", "cursor-none md:cursor-grab select-none")}
//       >
//         <div
//           ref={contentRef}
//           className={cn(
//             "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
//             "min-h-[300vh] min-w-[300vw] select-none"
//           )}
//         >
//           <div
//             className={cn(
//               "grid grid-cols-2 gap-3 px-4 py-6", // mobile: 2 cols
//               "sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-20"
//             )}
//           >
//             {items.map((p, i) => (
//               <ProjectCard
//                 key={`${p.title}-${i}`}
//                 title={p.title}
//                 categories={p.categories}
//                 imgSrc={p.imgSrc}
//               />
//             ))}
//           </div>
//         </div>

//         {/* subtle frame */}
//         <div className="pointer-events-none absolute inset-0 border border-neutral-800" />
//       </section>

//       {/* bottom separator */}
//       <div className="pointer-events-none fixed inset-x-0 bottom-[84px] z-30 h-px bg-neutral-800/60" />
      
//       {/* Left-click drag hint */}
//       <div className="pointer-events-none fixed bottom-6 right-6 z-30 text-xs text-neutral-400 bg-neutral-900/80 px-3 py-2 rounded-md backdrop-blur-sm">
//         Left-click + drag to pan (fast like Google Maps)
//       </div>
//     </main>
//   )
// }



"use client"

import * as React from "react"
import Link from "next/link"
import { FloatingUI } from "@/components/floating-ui"
import { ProjectCard } from "@/components/project-card"
import { useCursorPan } from "@/hooks/use-cursor-pan"
import { cn } from "@/lib/utils"

// Define project type
type Project = { id: number; title: string; categories: string[]; imgSrc: string }

const baseProjects: Project[] = [
  { id: 1, title: "Phantom Reference", categories: ["Agency", "Grid"], imgSrc: "/images/phantom-reference.png" },
  { id: 2, title: "Travel Hacker", categories: ["Campaign", "Product"], imgSrc: "/travel-hacker-campaign-tile.png" },
  { id: 3, title: "Motion Lab", categories: ["3D", "R&D"], imgSrc: "/3d-motion-lab-frame.png" },
  { id: 4, title: "Retail OS", categories: ["Platform", "Case Study"], imgSrc: "/retail-dashboard-ui.png" },
  { id: 5, title: "Neural Keys", categories: ["Brand", "Industrial"], imgSrc: "/industrial-product-shot.png" },
  { id: 6, title: "Drifting", categories: ["Film", "Experimental"], imgSrc: "/film-still-sunset.png" },
  { id: 7, title: "Cortex Bank", categories: ["Fintech", "App"], imgSrc: "/fintech-app-ui-screen.png" },
  { id: 8, title: "Sonic Off", categories: ["Interactive", "WebGL"], imgSrc: "/webgl-interactive-tile.png" },
  { id: 9, title: "Midnight Drop", categories: ["E-commerce", "Launch"], imgSrc: "/ecommerce-campaign-tile.png" },
  { id: 10, title: "Studio Suite", categories: ["SaaS", "Design"], imgSrc: "/saas-ui-kit-preview.png" },
]

// Utility: make infinite tiling by repeating items in a grid
function makeInfiniteGrid(rows: number, cols: number, projects: Project[]) {
  const grid: Project[] = []
  for (let i = 0; i < rows * cols; i++) {
    grid.push(projects[i % projects.length])
  }
  return grid
}

export default function Page() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  useCursorPan(containerRef, contentRef, { intensity: 0.5 })

  // Double-tap support
  React.useEffect(() => {
    let lastTap = 0

    const handleDoubleTap = (e: TouchEvent) => {
      const now = Date.now()
      const timeSince = now - lastTap
      if (timeSince < 300 && timeSince > 0) {
        if (contentRef.current && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const tapX = e.touches[0].clientX - rect.left
          const tapY = e.touches[0].clientY - rect.top

          // Move grid so tapped point goes near center
          contentRef.current.style.transition = "transform 0.4s ease-out"
          contentRef.current.style.transform = `translate(${-tapX + rect.width / 2}px, ${-tapY + rect.height / 2}px)`

          setTimeout(() => {
            if (contentRef.current) {
              contentRef.current.style.transition = "" // reset after animation
            }
          }, 400)
        }
      }
      lastTap = now
    }

    const el = containerRef.current
    el?.addEventListener("touchend", handleDoubleTap)
    return () => el?.removeEventListener("touchend", handleDoubleTap)
  }, [])

  // Create a very large grid (100x100 = 10,000 items) for infinite feel
  const items = React.useMemo(() => makeInfiniteGrid(20, 20, baseProjects), [])

  return (
    <main className="relative min-h-screen bg-neutral-950 text-white">
      {/* Website Logo at top-left */}
      <header className="pointer-events-none fixed left-6 top-6 z-40">
        <Link href="/" className="pointer-events-auto block">
          <img
            src="https://www.pitamaas.com/logo-dark-mobile.png"
            alt="Pitamaas Logo"
            className="h-10 w-auto"
          />
        </Link>
      </header>

      <FloatingUI />

      <section
        ref={containerRef}
        aria-label="Infinite project grid"
        className={cn("relative z-10 h-screen w-screen overflow-hidden", "cursor-none md:cursor-grab select-none")}
      >
        <div
          ref={contentRef}
          className={cn(
            "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "min-h-[300vh] min-w-[300vw] select-none"
          )}
        >
          <div
            className={cn(
              "grid grid-cols-2 gap-3 px-4 py-6", // mobile: 2 cols
              "sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-20"
            )}
          >
            {items.map((p, i) => (
              <ProjectCard
                key={`${p.title}-${i}`}
                title={p.title}
                categories={p.categories}
                imgSrc={p.imgSrc}
              />
            ))}
          </div>
        </div>

        {/* subtle frame */}
        <div className="pointer-events-none absolute inset-0 border border-neutral-800" />
      </section>

      {/* bottom separator */}
      <div className="pointer-events-none fixed inset-x-0 bottom-[84px] z-30 h-px bg-neutral-800/60" />
      
      {/* Left-click drag hint */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-30 text-xs text-neutral-400 bg-neutral-900/80 px-3 py-2 rounded-md backdrop-blur-sm">
        Left-click + drag to pan (fast like Google Maps)
      </div>
    </main>
  )
}