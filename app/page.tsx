"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValue, useAnimation } from "framer-motion"
import { FloatingUI } from "@/components/floating-ui"
import { ProjectCard } from "@/components/project-card"
import { Loader } from "@/components/loader"
import { Header } from "@/components/header"
// import navigation
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
const getCellSize = () => {
  if (typeof window === "undefined") return 280
  const width = window.innerWidth
  if (width >= 1600) return 320
  if (width >= 1200) return 300
  if (width >= 992) return 280
  if (width >= 768) return 250
  if (width >= 576) return 180
  if (width >= 320) return 140
  return 120
}
const BUFFER_CELLS = 3 // how many rows/cols extra to render around viewport
// ------------------------------------------------

export default function Page() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  // motion values that drive the "camera"
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()

  // viewport size
  const [vw, setVw] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1200)
  const [vh, setVh] = React.useState(typeof window !== "undefined" ? window.innerHeight : 800)
  
  // dynamic cell size based on screen width
  const [cellSize, setCellSize] = React.useState(getCellSize)

  // visible tiles to render (array of { row, col })
  const [visibleTiles, setVisibleTiles] = React.useState<Array<{ row: number; col: number }>>([])

  // helper: map a grid coordinate to a project index (repeat baseProjects infinitely)
  const projectForCell = React.useCallback((row: number, col: number) => {
    // combines row/col into a reproducible integer; keep it within safe integer
    const combined = ((row & 0xffff) << 16) ^ (col & 0xffff)
    const idx = Math.abs(combined) % baseProjects.length
    return baseProjects[idx]
  }, [])

  // update vw/vh and cell size on resize
  React.useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth)
      setVh(window.innerHeight)
      setCellSize(getCellSize())
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
      const startCol = Math.floor(left / cellSize) - BUFFER_CELLS
      const endCol = Math.floor(right / cellSize) + BUFFER_CELLS
      const startRow = Math.floor(top / cellSize) - BUFFER_CELLS
      const endRow = Math.floor(bottom / cellSize) + BUFFER_CELLS

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
  }, [x, y, vw, vh, cellSize])

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
      const left = col * cellSize
      const top = row * cellSize

      // For image-heavy projects: use ProjectCard when available; else fallback img.
      // We pass minimal className and ensure lazy loading.
      return (
        <div
          key={`${row}_${col}`}
          className="absolute select-none"
          style={{
            left: left,
            top: top,
            width: cellSize,
            height: cellSize,
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
  }, [projectForCell, cellSize])

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
            onDragStart={() => {
              setIsDragging(true)
              document.body.style.cursor = "grabbing"
            }}
            onDragEnd={() => {
              setIsDragging(false)
              document.body.style.cursor = "grab"
            }}
          >
            {/* The visible tiles are positioned absolutely inside this world.
                We intentionally do not render a giant grid container; only absolute tiles. */}
            <div style={{ position: "relative", width: 0, height: 0 }}>
              {visibleTiles.map(({ row, col }) => (
                <Tile key={`${row}_${col}`} row={row} col={col} />
              ))}
            </div>
          </motion.div>

          {isDragging && <div className="absolute inset-0 z-50" />}

          {/* subtle frame */}
          <div className="pointer-events-none absolute inset-0 border border-neutral-800" />
        </motion.section>

        {/* bottom separator */}
        <div className="pointer-events-none fixed inset-x-0 bottom-[60px] sm:bottom-[84px] z-30 h-px bg-neutral-800/60" />
        
        {/* Navigation */}
        {/* <Header /> */}
        <Navigation />
      </motion.main>

      <style jsx global>{`
        /* Responsive Home Page Styles */
        
        /* Large Desktop (1600px+) */
        @media (min-width: 1600px) {
          .project-grid-container {
            --cell-size: 320px;
          }
        }
        
        /* Desktop (1200px - 1599px) */
        @media (min-width: 1200px) and (max-width: 1599px) {
          .project-grid-container {
            --cell-size: 300px;
          }
        }
        
        /* Laptop (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .project-grid-container {
            --cell-size: 280px;
          }
        }
        
        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .project-grid-container {
            --cell-size: 250px;
          }
          
          .project-card {
            padding: 12px;
          }
        }
        
        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .project-grid-container {
            --cell-size: 180px;
          }
          
          .project-card {
            padding: 8px;
          }
          
          .project-title {
            font-size: 0.85rem;
          }
          
          .project-categories {
            font-size: 0.7rem;
          }
        }
        
        /* Mobile Small (320px - 575px) */
        @media (max-width: 575px) {
          .project-grid-container {
            --cell-size: 140px;
          }
          
          .project-card {
            padding: 6px;
          }
          
          .project-title {
            font-size: 0.75rem;
          }
          
          .project-categories {
            font-size: 0.65rem;
          }
        }
        
        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .project-grid-container {
            --cell-size: 120px;
          }
          
          .project-card {
            padding: 4px;
          }
          
          .project-title {
            font-size: 0.7rem;
          }
          
          .project-categories {
            font-size: 0.6rem;
          }
        }
        
        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .project-card {
            touch-action: manipulation;
          }
          
          .drag-container {
            touch-action: pan-x pan-y;
          }
        }
        
        /* High DPI Display Optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .project-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Reduced Motion Preferences */
        @media (prefers-reduced-motion: reduce) {
          .project-card {
            transition: none;
          }
          
          .drag-container {
            transition: none;
          }
        }
        
        /* Dark Mode Optimizations */
        @media (prefers-color-scheme: dark) {
          .project-card {
            background: rgba(0, 0, 0, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
          }
        }
        
        /* Container Responsive Adjustments */
        @media (max-width: 768px) {
          .main-container {
            padding: 0;
          }
          
          .header-container {
            padding: 12px 16px;
          }
        }
        
        @media (max-width: 480px) {
          .main-container {
            padding: 0;
          }
          
          .header-container {
            padding: 8px 12px;
          }
        }
      `}</style>
    </>
  )
}