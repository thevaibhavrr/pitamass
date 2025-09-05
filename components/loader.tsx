
"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentFontIndex, setCurrentFontIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  // Unique and interesting font families only
  const fontFamilies = [
    "'Arial Rounded MT Bold', Arial, sans-serif",
    "'Bernard MT Condensed', serif",
    "'Blackadder ITC', cursive",
    "'Bodoni MT', Didot, 'Didot LT STD', 'Hoefler Text', Garamond, 'Times New Roman', serif",
    "'Bradley Hand', cursive",
    "'Brush Script MT', cursive",
    "'Chalkduster', fantasy",
    "'Copperplate', 'Copperplate Gothic Light', fantasy",
    "'Courier New', Courier, monospace",
    "'Didot', serif",
    "'Futura', sans-serif",
    "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
    "'Goudy Old Style', Garamond, 'Big Caslon', 'Times New Roman', serif",
    "'Harrington', fantasy",
    "'Impact', Charcoal, sans-serif",
    "'Jazz LET', fantasy",
    "'Jokerman', fantasy",
    "'Kristen ITC', cursive",
    "'Lucida Calligraphy', cursive",
    "'Lucida Console', Monaco, monospace",
    "'Lucida Handwriting', cursive",
    "'Magneto', fantasy",
    "'Matura MT Script Capitals', fantasy",
    "'Mistral', cursive",
    "'Monotype Corsiva', cursive",
    "'Old English Text MT', serif",
    "'Onyx', serif",
    "'Palace Script MT', cursive",
    "'Papyrus', fantasy",
    "'Pristina', cursive",
    "'Rage Italic', cursive",
    "'Ravie', fantasy",
    "'Script MT Bold', cursive",
    "'Segoe Print', sans-serif",
    "'Segoe Script', sans-serif",
    "'Showcard Gothic', fantasy",
    "'Snell Roundhand', cursive",
    "'Stencil', fantasy",
    "'Viner Hand ITC', cursive",
    "'Vivaldi', cursive",
    "'Zapfino', cursive"
  ]

  useEffect(() => {
    // Change font every 300ms
    const fontInterval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setCurrentFontIndex((prev) => (prev + 1) % fontFamilies.length)
        setOpacity(1)
      }, 150)
    }, 300)

    // Hide loader after 6 seconds
    const hideTimeout = setTimeout(() => {
      clearInterval(fontInterval)
      setIsVisible(false)
    }, 4000)

    return () => {
      clearInterval(fontInterval)
      clearTimeout(hideTimeout)
    }
  }, [fontFamilies.length])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <span
        className="text-white font-bold whitespace-nowrap transition-opacity duration-200 ease-in-out"
        style={{
          fontSize: "clamp(1.5rem, 8vw, 4rem)",
          opacity: opacity,
          fontFamily: fontFamilies[currentFontIndex]
        }}
      >
        Pitamaas
      </span>
    </div>
  )
}