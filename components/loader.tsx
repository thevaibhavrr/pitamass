// "use client"

// import { useEffect, useState } from "react"

// export function Loader() {
//   const [isVisible, setIsVisible] = useState(true)
//   const [currentWordIndex, setCurrentWordIndex] = useState(0)
//   const [opacity, setOpacity] = useState(1)

//   const fontFamilies = [
//     "Arial, sans-serif",
//     "Courier New, monospace",
//     "Verdana, sans-serif",
//     "Trebuchet MS, sans-serif",
//     "Arial Black, sans-serif",
//     "Impact, sans-serif",
//     "Comic Sans MS, cursive",
//     "Lucida Console, monospace",
//     "Palatino, serif",
//     "Garamond, serif",
//     "Bookman, serif",
//     "Avant Garde, sans-serif",
//     "Helvetica Neue, sans-serif",
//     "Futura, sans-serif",
//     "Optima, sans-serif",
//     "Brush Script MT, cursive",
//     "Chalkduster, fantasy",
//     "Copperplate, fantasy",
//     "Didot, serif",
//     "Geneva, sans-serif",
//     "Gill Sans, sans-serif",
//     "Hoefler Text, serif",
//     "Luminari, fantasy",
//     "Marker Felt, fantasy",
//     "Menlo, monospace",
//     "Monaco, monospace",
//     "Papyrus, fantasy",
//     "Phosphate, fantasy",
//     "Skia, sans-serif",
//     "Snell Roundhand, cursive",
//     "Tahoma, sans-serif",
//     "Techno, fantasy",
//     "Zapfino, cursive",
//     "American Typewriter, serif",
//     "Apple Chancery, cursive",
//     "Baskerville, serif",
//     "Big Caslon, serif",
//     "Bodoni 72, serif",
//     "Bradley Hand, cursive",
//     "Chalkboard, sans-serif",
//     "Charter, serif",
//     "Didot, serif",
//     "Farah, sans-serif",
//     "Geeza Pro, serif",
//     "Gujarati Sangam MN, serif",
//     "Gurmukhi MN, serif",
//     "Herculanum, fantasy",
//     "Hiragino Kaku Gothic Pro, sans-serif",
//     "Hiragino Mincho Pro, serif",
//     "Hoefler Text Ornaments, fantasy",
//     "Kailasa, serif",
//     "Kannada Sangam MN, serif",
//     "Kefa, sans-serif",
//     "Lao Sangam MN, serif",
//     "Malayalam Sangam MN, serif",
//     "Marion, serif",
//     "Mishafi, cursive",
//     "Mishafi Gold, cursive",
//     "Mukta Mahee, serif",
//     "Mukta Vaani, sans-serif",
//     "Myanmar Sangam MN, serif",
//     "Noteworthy, serif",
//     "Noto Nastaliq Urdu, serif",
//     "Oriya Sangam MN, serif",
//     "Party LET, fantasy",
//     "PingFang TC, sans-serif",
//     "Savoye LET, cursive",
//     "Sinhala Sangam MN, serif",
//     "STHeiti, sans-serif",
//     "STKaiti, serif",
//     "STSong, serif",
//     "Superclarendon, serif",
//     "Tamil Sangam MN, serif",
//     "Telugu Sangam MN, serif",
//     "Thonburi, sans-serif",
//     "Times, serif",
//     "Trattatello, fantasy",
//     "Verdana, sans-serif",
//     "Waseem, cursive",
//     "Zapf Dingbats, fantasy"
//   ]

//   useEffect(() => {
//     // Change font every 300ms
//     const fontInterval = setInterval(() => {
//       setOpacity(0)
//       setTimeout(() => {
//         setCurrentWordIndex((prev) => (prev + 1) % fontFamilies.length)
//         setOpacity(1)
//       }, 150)
//     }, 300)

//     // Hide loader after 6 seconds
//     const hideTimeout = setTimeout(() => {
//       clearInterval(fontInterval)
//       setIsVisible(false)
//     }, 6000)

//     return () => {
//       clearInterval(fontInterval)
//       clearTimeout(hideTimeout)
//     }
//   }, [fontFamilies.length])

//   if (!isVisible) return null

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out"
//       style={{ opacity: isVisible ? 1 : 0 }}
//     >
//       <span
//         className="text-white font-bold whitespace-nowrap transition-opacity duration-200 ease-in-out"
//         style={{
//           fontSize: "clamp(1.5rem, 8vw, 4rem)",
//           opacity: opacity,
//           fontFamily: fontFamilies[currentWordIndex]
//         }}
//       >
//         Pitamaas
//       </span>
//     </div>
//   )
// }

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