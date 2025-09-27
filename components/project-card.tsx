
"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  title: string
  categories: string[]
  imgSrc: string
  isVideo?: boolean
  className?: string
}

export function ProjectCard({ title, categories, imgSrc, isVideo, className }: ProjectCardProps) {
  const [hoverGradient, setHoverGradient] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  // Generate random gradient colors
  const generateRandomGradient = () => {
    const colors = [
      "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3",
      "#54a0ff", "#5f27cd", "#00d2d3", "#ff9f43", "#10ac84", "#ee5a24",
      "#0984e3", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e", "#e17055",
      "#00b894", "#00cec9", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e",
      "#ff7675", "#74b9ff", "#a29bfe", "#fd79a8", "#fdcb6e", "#e17055",
      "#00b894", "#00cec9", "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e"
    ]
    
    // Generate 2-3 colors for more complex gradients
    const numColors = Math.random() > 0.5 ? 2 : 3
    const selectedColors = []
    
    for (let i = 0; i < numColors; i++) {
      selectedColors.push(colors[Math.floor(Math.random() * colors.length)])
    }
    
    const angle = Math.floor(Math.random() * 360)
    
    if (selectedColors.length === 2) {
      return `linear-gradient(${angle}deg, ${selectedColors[0]}, ${selectedColors[1]})`
    } else {
      return `linear-gradient(${angle}deg, ${selectedColors[0]}, ${selectedColors[1]}, ${selectedColors[2]})`
    }
  }

  const handleHoverStart = () => {
    setHoverGradient(generateRandomGradient())
  }

  const handleClick = () => {
    // Pass image data via URL params
    const params = new URLSearchParams({
      title: title,
      categories: categories.join(','),
      imgSrc: imgSrc,
      isVideo: isVideo ? 'true' : 'false'
    })
    router.push(`/details?${params.toString()}`)
  }

  // Ensure video plays when component mounts
  useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current
      const playVideo = async () => {
        try {
          await video.play()
          console.log('Video autoplay successful:', imgSrc)
        } catch (error) {
          console.log('Autoplay failed, user interaction required:', error)
        }
      }
      playVideo()
    }
  }, [isVideo, imgSrc])

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-none border border-gray-500 bg-black p-3", // Increased padding for mobile
        "sm:p-4 md:p-6", // Increased padding for larger screens
        "select-none cursor-pointer",
        className,
      )}
      onHoverStart={handleHoverStart}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 z-0"
        whileHover={{ 
          opacity: 0.9,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        style={{
          background: hoverGradient
        }}
      />
      
      {isVideo ? (
        <video
          ref={videoRef}
          src={imgSrc}
          className="relative z-20 w-full h-full object-cover opacity-95 select-none"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ objectFit: "cover" }}
          onError={(e) => {
            console.error('Video failed to load:', imgSrc, e);
          }}
          onLoadStart={() => {
            console.log('Video loading started:', imgSrc);
          }}
          onCanPlay={() => {
            console.log('Video can play:', imgSrc);
          }}
          onLoadedData={() => {
            console.log('Video data loaded:', imgSrc);
          }}
          onPlay={() => {
            console.log('Video is playing:', imgSrc);
          }}
        />
      ) : (
        <img
          src={imgSrc || "/placeholder.svg"}
          alt={title}
          className="relative z-20 w-full h-full object-cover opacity-95 select-none"
          draggable={false}
          crossOrigin="anonymous"
          style={{ objectFit: "cover" }}
        />
      )}

      {/* subtle brutalist dots */}
      {/* <span className="pointer-events-none absolute left-1 top-1 sm:left-2 sm:top-2 md:left-3 md:top-3 z-20 block h-1 w-1 rounded-full bg-cyan-400" /> */}
      {/* <span className="pointer-events-none absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 z-20 block h-1 w-1 rounded-full bg-neutral-600" /> */}
    </motion.div>
  )
}