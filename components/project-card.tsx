// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { cn } from "@/lib/utils"

// type ProjectCardProps = {
//   title: string
//   categories: string[]
//   imgSrc: string
//   className?: string
// }

// export function ProjectCard({ title, categories, imgSrc, className }: ProjectCardProps) {
//   const [hoverGradient, setHoverGradient] = useState("")

//   // Generate random gradient colors
//   const generateRandomGradient = () => {
//     const colors = [
//       "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3",
//       "#54a0ff", "#5f27cd", "#00d2d3", "#ff9f43", "#10ac84", "#ee5a24",
//       "#0984e3", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e", "#e17055",
//       "#00b894", "#00cec9", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e"
//     ]
    
//     const color1 = colors[Math.floor(Math.random() * colors.length)]
//     const color2 = colors[Math.floor(Math.random() * colors.length)]
//     const angle = Math.floor(Math.random() * 360)
    
//     return `linear-gradient(${angle}deg, ${color1}, ${color2})`
//   }

//   const handleHoverStart = () => {
//     setHoverGradient(generateRandomGradient())
//   }

//   return (
//     <motion.div
//       className={cn(
//         "group relative overflow-hidden rounded-none border border-gray-500 bg-black p-6",
//         "sm:p-6 md:p-9",
//         "select-none cursor-pointer",
//         className,
//       )}
//       onHoverStart={handleHoverStart}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <motion.div
//         className="absolute inset-0 opacity-0"
//         whileHover={{ 
//           opacity: 0.8,
//           background: hoverGradient,
//           transition: { duration: 0.3 }
//         }}
//         style={{
//           background: hoverGradient
//         }}
//       />
      
//       <img
//         src={imgSrc || "/placeholder.svg"}
//         alt={title}
//         className="relative z-10 h-full w-full object-cover opacity-95 select-none"
//         draggable={false}
//         crossOrigin="anonymous"
//       />

//       {/* subtle brutalist dots */}
//       <span className="pointer-events-none absolute left-3 top-3 sm:left-3 sm:top-3 md:left-5 md:top-5 z-20 block h-1 w-1 rounded-full bg-cyan-400" />
//       <span className="pointer-events-none absolute bottom-3 right-3 sm:bottom-3 sm:right-3 md:bottom-5 md:right-5 z-20 block h-1 w-1 rounded-full bg-neutral-600" />
//     </motion.div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  title: string
  categories: string[]
  imgSrc: string
  className?: string
}

export function ProjectCard({ title, categories, imgSrc, className }: ProjectCardProps) {
  const [hoverGradient, setHoverGradient] = useState("")

  // Generate random gradient colors
  const generateRandomGradient = () => {
    const colors = [
      "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3",
      "#54a0ff", "#5f27cd", "#00d2d3", "#ff9f43", "#10ac84", "#ee5a24",
      "#0984e3", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e", "#e17055",
      "#00b894", "#00cec9", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e"
    ]
    
    const color1 = colors[Math.floor(Math.random() * colors.length)]
    const color2 = colors[Math.floor(Math.random() * colors.length)]
    const angle = Math.floor(Math.random() * 360)
    
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`
  }

  const handleHoverStart = () => {
    setHoverGradient(generateRandomGradient())
  }

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-none border border-gray-500 bg-black p-1", // Reduced padding for mobile
        "sm:p-2 md:p-4", // Increased padding for larger screens
        "select-none cursor-pointer",
        className,
      )}
      onHoverStart={handleHoverStart}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{ 
          opacity: 0.8,
          background: hoverGradient,
          transition: { duration: 0.3 }
        }}
        style={{
          background: hoverGradient
        }}
      />
      
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={title}
        className="relative z-10 w-full h-full object-cover opacity-95 select-none"
        draggable={false}
        crossOrigin="anonymous"
        style={{ objectFit: "cover" }}
      />

      {/* subtle brutalist dots */}
      {/* <span className="pointer-events-none absolute left-1 top-1 sm:left-2 sm:top-2 md:left-3 md:top-3 z-20 block h-1 w-1 rounded-full bg-cyan-400" /> */}
      {/* <span className="pointer-events-none absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 z-20 block h-1 w-1 rounded-full bg-neutral-600" /> */}
    </motion.div>
  )
}