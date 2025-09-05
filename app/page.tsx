
"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from "framer-motion"
import { FloatingUI } from "@/components/floating-ui"
import { ProjectCard } from "@/components/project-card"
import { Loader } from "@/components/loader"
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

// Fisher-Yates shuffle algorithm for randomizing array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Utility: make infinite tiling with randomized projects
function makeInfiniteGrid(rows: number, cols: number, projects: Project[]) {
  const grid: Project[] = [];
  const totalItems = rows * cols;
  
  // Create multiple shuffled copies of the projects to ensure randomness
  const shuffledProjects = [];
  const copiesNeeded = Math.ceil(totalItems / projects.length);
  
  for (let i = 0; i < copiesNeeded; i++) {
    shuffledProjects.push(...shuffleArray([...projects]));
  }
  
  // Take only the number of items we need
  for (let i = 0; i < totalItems; i++) {
    grid.push(shuffledProjects[i % shuffledProjects.length]);
  }
  
  return grid;
}

export default function Page() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()

  // Create a much larger grid (50x50 = 2500 items) for a more expansive infinite feel
  const items = React.useMemo(() => makeInfiniteGrid(50, 50, baseProjects), [])

  // Add touch event handling for double-tap on mobile
  React.useEffect(() => {
    let lastTap = 0;
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      const timeSince = now - lastTap;
      if (timeSince < 300 && timeSince > 0) {
        // Convert touch event to a synthetic event for handleDoubleTap
        const syntheticEvent = {
          touches: e.touches,
          clientX: e.changedTouches[0].clientX,
          clientY: e.changedTouches[0].clientY
        } as any;
        handleDoubleTap(syntheticEvent);
      }
      lastTap = now;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchend', handleTouchEnd);
      return () => container.removeEventListener('touchend', handleTouchEnd);
    }
  }, []);

  // Prevent default scroll behavior for smooth dragging
  React.useEffect(() => {
    const preventScroll = (e: Event) => {
      if (containerRef.current?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // Double-tap support with smooth animation
  const handleDoubleTap = (e: React.MouseEvent | React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        clientX = e.clientX
        clientY = e.clientY
      }
      
      const tapX = clientX - rect.left
      const tapY = clientY - rect.top

      // Animate to center the tapped position
      controls.start({
        x: -tapX + rect.width / 2,
        y: -tapY + rect.height / 2,
        // transition: { type: "spring", damping: 30, stiffness: 300 }
      })
      
      // Update motion values to match the new position
      x.set(-tapX + rect.width / 2)
      y.set(-tapY + rect.height / 2)
    }
  }

  // Reset position with animation
  const resetPosition = () => {
    controls.start({ x: 0, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } })
    x.set(0)
    y.set(0)
  }

  return (
    <>
      <Loader />
      <motion.main 
        className="relative min-h-screen bg-neutral-950 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      {/* Website Logo at top-left */}
      <motion.header 
        className="pointer-events-none fixed left-6 top-6 z-40"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Link href="/" className="pointer-events-auto block">
          <motion.img
            src="https://www.pitamaas.com/logo-dark-mobile.png"
            alt="Pitamaas Logo"
            className="h-30 w-auto"
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
      </motion.header>

      <FloatingUI />

      <motion.section
        ref={containerRef}
        aria-label="Infinite project grid"
        className={cn("relative z-10 h-screen w-screen overflow-hidden", "cursor-none md:cursor-grab select-none")}
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={cn(
            "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "min-h-[900vh] min-w-[900vw] select-none"
          )}
          drag
          dragElastic={0}
          dragConstraints={{
            left: -4000,
            right: 4000,
            top: -4000,
            bottom: 4000
          }}
          dragTransition={{ 
            power: 0.8, 
            timeConstant: 400,
            restDelta: 0.01
          }}
          onDoubleClick={handleDoubleTap}
          animate={controls}
          style={{ x, y }}
          whileDrag={{ 
            cursor: "grabbing"
          }}
          dragMomentum={true}
          dragPropagation={false}
          onDragStart={() => {
            // Ensure smooth start
            document.body.style.cursor = "grabbing";
          }}
          onDragEnd={() => {
            // Reset cursor
            document.body.style.cursor = "grab";
          }}
        >
          <motion.div
            className={cn(
              "grid grid-cols-2 px-4 py-6 gap-0",
              "sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-20"
            )}
            style={{
              gridTemplateColumns: 'repeat(50, minmax(0, 1fr))'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {items.map((p, i) => (
              <motion.div
                key={`${p.title}-${i}-${Math.random()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.001, duration: 0.5 }}
                // whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <ProjectCard
                  title={p.title}
                  categories={p.categories}
                  imgSrc={p.imgSrc}
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* subtle frame */}
        <div className="pointer-events-none absolute inset-0 border border-neutral-800" />
      </motion.section>

      {/* bottom separator */}
      <div className="pointer-events-none fixed inset-x-0 bottom-[84px] z-30 h-px bg-neutral-800/60" />
      
   
    </motion.main>
    </>
  )
}