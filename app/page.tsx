

"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValue, useAnimation } from "framer-motion"
import { FloatingUI } from "@/components/floating-ui"
import { ProjectCard } from "@/components/project-card"
import { Loader } from "@/components/loader"
import { Navigation } from "@/components/navigation"
import { cn } from "@/lib/utils"

type Project = { id: number; title: string; categories: string[]; imgSrc: string; isVideo?: boolean }

const baseProjects: Project[] = [
  { id: 1, title: "Phantom Reference", categories: ["Agency", "Grid"], imgSrc: "https://www.pitamaas.com/ludh.jpg" },
  { id: 2, title: "Travel Hacker", categories: ["Campaign", "Product"], imgSrc: "https://www.pitamaas.com/Home/packaging.jpg" },
  { id: 3, title: "Motion Lab", categories: ["3D", "R&D"], imgSrc: "https://www.pitamaas.com/Home/digital.jpg" },
  { id: 4, title: "Retail OS", categories: ["Platform", "Case Study"], imgSrc: "https://www.pitamaas.com/Home/product-photography.jpg" },
  { id: 5, title: "Neural Keys", categories: ["Brand", "Industrial"], imgSrc: "https://www.pitamaas.com/Home/website.jpg" },
  { id: 6, title: "Drifting", categories: ["Film", "Experimental"], imgSrc: "https://www.pitamaas.com/ludh.jpg" },
  { id: 7, title: "Cortex Bank", categories: ["Fintech", "App"], imgSrc: "https://www.pitamaas.com/Home/packaging.jpg" },
  { id: 8, title: "Sonic Off", categories: ["Interactive", "WebGL"], imgSrc: "https://www.pitamaas.com/digital.jpg"   },
  { id: 9, title: "Midnight Drop", categories: ["E-commerce", "Launch"], imgSrc: "https://www.pitamaas.com/Home/packaging.jpg" },
  { id: 10, title: "Studio Suite", categories: ["SaaS", "Design"], imgSrc: "https://www.pitamaas.com/ludh.jpg" },
  { id: 11, title: "Sample Video", categories: ["Video", "Demo"], imgSrc: "/sam.mp4", isVideo: true },
]

// --- CONFIG: tweak these for size / perf ---
const CELL_SIZE = 280 // px (card size). increase for larger images, decrease for perf.
const BUFFER_CELLS = 3 // how many rows/cols extra to render around viewport
// ------------------------------------------------

export default function Page() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  // motion values that drive the "camera"
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()

  // viewport size
  const [vw, setVw] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1200)
  const [vh, setVh] = React.useState(typeof window !== "undefined" ? window.innerHeight : 800)

  // visible tiles to render (array of { row, col })
  const [visibleTiles, setVisibleTiles] = React.useState<Array<{ row: number; col: number }>>([])

  // helper: map a grid coordinate to a project index (repeat baseProjects infinitely)
  const projectForCell = React.useCallback((row: number, col: number) => {
    // combines row/col into a reproducible integer; keep it within safe integer
    const combined = ((row & 0xffff) << 16) ^ (col & 0xffff)
    const idx = Math.abs(combined) % baseProjects.length
    return baseProjects[idx]
  }, [])

  // update vw/vh on resize
  React.useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth)
      setVh(window.innerHeight)
    }
    window.addEventListener("resize", onResize)
    onResize()
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Throttled updater: compute visible range when x or y changes.
  React.useEffect(() => {
    let rafId: number | null = null

    const updateVisible = () => {
      // current camera translation (x,y). The motion.div that moves the grid will be centered at 0,0
      const camX = x.get() // pixels moved horizontally
      const camY = y.get()

      // The container is centered (left:50% top:50% translate -50% -50%), so the screen rectangle
      // in grid coordinates is:
      const left = -camX - vw / 2
      const top = -camY - vh / 2
      const right = left + vw
      const bottom = top + vh

      // convert to cell indices
      const startCol = Math.floor(left / CELL_SIZE) - BUFFER_CELLS
      const endCol = Math.floor(right / CELL_SIZE) + BUFFER_CELLS
      const startRow = Math.floor(top / CELL_SIZE) - BUFFER_CELLS
      const endRow = Math.floor(bottom / CELL_SIZE) + BUFFER_CELLS

      const newTiles: Array<{ row: number; col: number }> = []
      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          newTiles.push({ row: r, col: c })
        }
      }

      // Very small optimization: only set state when tile count or first tile differs
      setVisibleTiles(newTiles)
      rafId = null
    }

    const unsubX = x.onChange(() => {
      if (rafId == null) {
        rafId = requestAnimationFrame(updateVisible)
      }
    })
    const unsubY = y.onChange(() => {
      if (rafId == null) {
        rafId = requestAnimationFrame(updateVisible)
      }
    })

    // initial compute
    updateVisible()

    return () => {
      unsubX()
      unsubY()
      if (rafId != null) cancelAnimationFrame(rafId)
    }
  }, [x, y, vw, vh])

  // touch double-tap support (kept from your earlier code)
  React.useEffect(() => {
    let lastTap = 0
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now()
      const timeSince = now - lastTap
      if (timeSince < 400 && timeSince > 0) {
        const syntheticEvent = {
          touches: e.touches,
          clientX: e.changedTouches[0].clientX,
          clientY: e.changedTouches[0].clientY,
        } as any
        handleDoubleTap(syntheticEvent)
      }
      lastTap = now
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
      return () => container.removeEventListener("touchend", handleTouchEnd)
    }
    return
  }, [])

  const handleDoubleTap = (e: React.MouseEvent | { touches?: TouchList; clientX: number; clientY: number }) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    let clientX = e.clientX
    let clientY = e.clientY
    if ("touches" in e && e.touches && e.touches.length) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    }

    const tapX = clientX - rect.left
    const tapY = clientY - rect.top

    // animate to center the tapped position
    controls.start({
      x: -tapX + rect.width / 2,
      y: -tapY + rect.height / 2,
      transition: { type: "spring", damping: 30, stiffness: 200 },
    })
    x.set(-tapX + rect.width / 2)
    y.set(-tapY + rect.height / 2)
  }

  // quick reset
  const resetPosition = () => {
    controls.start({ x: 0, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } })
    x.set(0)
    y.set(0)
  }

  // Rendered tile component (memoized to avoid extra renders)
  const Tile = React.useMemo(() => {
    return function _Tile({ row, col }: { row: number; col: number }) {
      const proj = projectForCell(row, col)
      // position in px relative to centered origin
      const left = col * CELL_SIZE
      const top = row * CELL_SIZE

      // For image-heavy projects: use ProjectCard when available; else fallback img.
      // We pass minimal className and ensure lazy loading.
      return (
        <div
          key={`${row}_${col}`}
          className="absolute select-none"
          style={{
            left: left,
            top: top,
            width: CELL_SIZE,
            height: CELL_SIZE,
            willChange: "transform, opacity",
            boxSizing: "border-box",
          }}
        >
          {/* Use your ProjectCard (assumed to support className and imgSrc) */}
          <ProjectCard
            title={proj.title}
            categories={proj.categories}
            imgSrc={proj.imgSrc}
            isVideo={proj.isVideo}
            className="w-full h-full"
            // You can pass additional props or style via className; ProjectCard should use loading="lazy" internally
          />
        </div>
      )
    }
  }, [projectForCell])

  return (
    <>
      <Loader />
      <motion.main
        ref={containerRef}
        className="relative min-h-screen bg-neutral-950 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >


        <motion.section
          aria-label="Infinite virtualized project grid"
          className={cn(
            "relative z-10 h-screen w-screen overflow-hidden",
            "cursor-none md:cursor-grab select-none touch-pan-x touch-pan-y"
          )}
          style={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {/* This div is the "world". It is centered at 50%/50% and we move it with x/y */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            drag
            dragMomentum={true}
            dragElastic={0.001}
            dragTransition={{ power: 0.6, timeConstant: 400, restDelta: 0.05 }}
            animate={controls}
            style={{ x, y }}
            whileDrag={{ cursor: "grabbing" }}
            onDoubleClick={(e) => {
              // mouse double click -> center
              handleDoubleTap(e as any)
            }}
            onDragStart={() => (document.body.style.cursor = "grabbing")}
            onDragEnd={() => (document.body.style.cursor = "grab")}
          >
            {/* The visible tiles are positioned absolutely inside this world.
                We intentionally do not render a giant grid container; only absolute tiles. */}
            <div style={{ position: "relative", width: 0, height: 0 }}>
              {visibleTiles.map(({ row, col }) => {
                // key must be stable
                const key = `${row}_${col}`
                const proj = projectForCell(row, col)
                const left = col * CELL_SIZE
                const top = row * CELL_SIZE

                return (
                  <div
                    key={key}
                    className="absolute select-none"
                    style={{
                      left,
                      top,
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      boxSizing: "border-box",
                    }}
                  >
                    {/* If ProjectCard internally uses <img/>, ensure it sets loading="lazy".
                        If it doesn't, you can replace below with a simple <img> for speed. */}
                    <ProjectCard
                      title={proj.title}
                      categories={proj.categories}
                      imgSrc={proj.imgSrc}
                      isVideo={proj.isVideo}
                      className="w-full h-full"
                    />
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* subtle frame */}
          <div className="pointer-events-none absolute inset-0 border border-neutral-800" />
        </motion.section>

        {/* bottom separator */}
        <div className="pointer-events-none fixed inset-x-0 bottom-[60px] sm:bottom-[84px] z-30 h-px bg-neutral-800/60" />
        
        {/* Navigation */}
        <Navigation />
      </motion.main>
    </>
  )
}
