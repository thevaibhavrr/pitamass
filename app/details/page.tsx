// "use client"

// import { motion } from "framer-motion"
// import { Search, User } from "lucide-react"
// import Image from "next/image"

// export default function ProductDetails() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" },
//   }

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const titleAnimation = {
//     initial: { opacity: 0, y: 100, scale: 0.8 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-red-600 text-white">
//       {/* Header */}
//       <motion.header
//         className="flex items-center justify-between p-6 lg:p-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex items-center space-x-8">
//           <motion.div
//             className="text-2xl font-bold"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400 }}
//           >
//             🔥 PHANTOM
//           </motion.div>
//           <nav className="hidden md:flex space-x-6 text-sm">
//             <motion.a href="#" className="hover:opacity-70 transition-opacity" whileHover={{ y: -2 }}>
//               WORK
//             </motion.a>
//             <motion.a href="#" className="hover:opacity-70 transition-opacity" whileHover={{ y: -2 }}>
//               ABOUT
//             </motion.a>
//             <motion.a href="#" className="hover:opacity-70 transition-opacity" whileHover={{ y: -2 }}>
//               CONTACT
//             </motion.a>
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4">
//           <motion.button
//             className="p-2 hover:bg-white/10 rounded-full transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Search size={20} />
//           </motion.button>
//           <motion.button
//             className="p-2 hover:bg-white/10 rounded-full transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <User size={20} />
//           </motion.button>
//           <motion.button
//             className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             LET'S GO
//           </motion.button>
//         </div>
//       </motion.header>

//       {/* Hero Section */}
//       <motion.section
//         className="px-6 lg:px-8 py-12 lg:py-20"
//         variants={staggerContainer}
//         initial="initial"
//         animate="animate"
//       >
//         <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8" variants={titleAnimation}>
//           MONUMENTAL
//           <br />
//           BEANIES
//         </motion.h1>

//         <motion.div className="mb-16" variants={fadeInUp}>
//           <video className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl" autoPlay muted loop playsInline>
//             <source
//               src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-1.webm"
//               type="video/webm"
//             />
//           </video>
//         </motion.div>

//         <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight" variants={fadeInUp}>
//           Iconic landmarks, reimagined with Sundays' signature beanie.
//         </motion.h2>
//       </motion.section>

//       {/* Description Section */}
//       <motion.section
//         className="px-6 lg:px-8 py-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-lg leading-relaxed">
//               A hybrid project of fashion and digital creativity, Monumental Beanies is a collaboration between Phantom
//               and Sundays, creating a unique collection that merges the iconic Sundays branded beanie with some of the
//               world's most famous landmarks through augmented reality.
//             </p>
//             <p className="text-lg leading-relaxed">
//               During Sundays' signature beanie to life in a completely new way, this project showcases how fashion and
//               technology can work together to create something truly special. Each beanie becomes a canvas for iconic
//               landmarks, with AR technology bringing these monuments to life in ways never seen before.
//             </p>
//           </motion.div>
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-lg leading-relaxed">
//               The campaign's unified creative worldwide with Sundays' signature style, creating a collection that
//               celebrates both fashion and travel. Each beanie features a different landmark, from the Sydney Tower to
//               Big Ben, bringing these iconic structures into the world of streetwear fashion.
//             </p>
//             <p className="text-lg leading-relaxed">
//               Highlights include over 12 million Instagram views, widespread social media engagement, and a breakthrough
//               campaign that successfully bridged the gap between fashion and technology, creating a new standard for how
//               brands can engage with their audience through innovative storytelling.
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Product Grid Section */}
//       <motion.section
//         className="px-6 lg:px-8 py-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
//           {/* First Row */}
//           <motion.div
//             className="aspect-square"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
//               <source
//                 src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-2-left.webm"
//                 type="video/webm"
//               />
//             </video>
//           </motion.div>

//           <motion.div
//             className="aspect-square"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <Image
//               src="https://images.prismic.io/phantom-land/Z4eiqJbqstJ99fDL_sundays-beanies-2-right.jpg?auto=format,compress?auto=compress,format"
//               alt="Beanie texture detail"
//               width={600}
//               height={600}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </motion.div>

//           {/* Second Row */}
//           <motion.div
//             className="aspect-square"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <Image
//               src="https://images.prismic.io/phantom-land/Z4ei15bqstJ99fDX_sundays-beanies-3-right.jpg?auto=format,compress?auto=compress,format"
//               alt="Beanie collection"
//               width={600}
//               height={600}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </motion.div>

//           <motion.div
//             className="aspect-square"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
//               <source
//                 src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-3-left.webm"
//                 type="video/webm"
//               />
//             </video>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Additional Image Section */}
//       <motion.section
//         className="px-6 lg:px-8 py-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <motion.div
//           className="max-w-6xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.01 }}
//         >
//           <Image
//             src="https://images.prismic.io/phantom-land/Z4ei2ZbqstJ99fDa_sundays-beanies-4.jpg?auto=format,compress?auto=compress,format"
//             alt="Beanie showcase"
//             width={1200}
//             height={800}
//             className="w-full rounded-lg shadow-2xl"
//           />
//         </motion.div>
//       </motion.section>

//       {/* Related Work Section */}
//       <motion.section
//         className="px-6 lg:px-8 py-16 bg-black"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <motion.h3
//           className="text-2xl font-bold mb-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Related work
//         </motion.h3>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <motion.div
//             className="aspect-video"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
//               <source
//                 src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Aurora/header-aurora-1080p.webm"
//                 type="video/webm"
//               />
//             </video>
//           </motion.div>

//           <motion.div
//             className="aspect-video"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
//               <source
//                 src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Superdry%20AW23/o-superdry-1_1-q4.webm"
//                 type="video/webm"
//               />
//             </video>
//           </motion.div>

//           <motion.div
//             className="aspect-video"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
//               <source
//                 src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Ultimate%20Travel%20Hacker%20/ultimate-travel-hacker-1.webm"
//                 type="video/webm"
//               />
//             </video>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* See All Work Section */}
//       <motion.section
//         className="px-6 lg:px-8 py-20 bg-black"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="text-center">
//           <motion.h2
//             className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 mb-8"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             See all work
//           </motion.h2>

//           <div className="flex justify-center space-x-4">
//             <motion.button
//               className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "#dc2626",
//                 color: "#ffffff",
//                 boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Work
//             </motion.button>
//             <motion.button
//               className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "#ffffff",
//                 color: "#000000",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               About
//             </motion.button>
//             <motion.button
//               className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "#ffffff",
//                 color: "#000000",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Contact
//             </motion.button>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Search, User } from "lucide-react"
import Image from "next/image"

export default function ProductDetails() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const titleAnimation = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const slideInFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const slideInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const scaleUp = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  return (
    <div className="min-h-screen bg-red-600 text-white">

      {/* Hero Section */}
      <motion.section
        className="px-6 lg:px-8 py-12 lg:py-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* 1. Centered and increased font size for "MONUMENTAL BEANIES" */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 text-center" 
          variants={titleAnimation}
          style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
        >
          MONUMENTAL
          <br />
          BEANIES
        </motion.h1>

        {/* 4. Increased video width */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <video className="w-full max-w-8xl mx-auto rounded-lg shadow-2xl" autoPlay muted loop playsInline>
            <source
              src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-1.webm"
              type="video/webm"
            />
          </video>
        </motion.div>

        {/* 3. Increased font size for the subtitle */}
        <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-6xl mx-auto text-center leading-tight" variants={fadeInUp}>
          Iconic landmarks, reimagined with Sundays' signature beanie.
        </motion.h2>
      </motion.section>

      {/* Description Section */}
      {/* 2. Increased width for the second section */}
      <motion.section
        className="px-6 lg:px-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              A hybrid project of fashion and digital creativity, Monumental Beanies is a collaboration between Phantom
              and Sundays, creating a unique collection that merges the iconic Sundays branded beanie with some of the
              world's most famous landmarks through augmented reality.
            </p>
            <p className="text-lg leading-relaxed">
              During Sundays' signature beanie to life in a completely new way, this project showcases how fashion and
              technology can work together to create something truly special. Each beanie becomes a canvas for iconic
              landmarks, with AR technology bringing these monuments to life in ways never seen before.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              The campaign's unified creative worldwide with Sundays' signature style, creating a collection that
              celebrates both fashion and travel. Each beanie features a different landmark, from the Sydney Tower to
              Big Ben, bringing these iconic structures into the world of streetwear fashion.
            </p>
            <p className="text-lg leading-relaxed">
              Highlights include over 12 million Instagram views, widespread social media engagement, and a breakthrough
              campaign that successfully bridged the gap between fashion and technology, creating a new standard for how
              brands can engage with their audience through innovative storytelling.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Grid Section */}
      <motion.section
        className="px-6 lg:px-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 5. Increased image/video width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-8xl mx-auto">
          {/* First Row */}
          <motion.div
            className="aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
              <source
                src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-2-left.webm"
                type="video/webm"
              />
            </video>
          </motion.div>

          <motion.div
            className="aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://images.prismic.io/phantom-land/Z4eiqJbqstJ99fDL_sundays-beanies-2-right.jpg?auto=format,compress?auto=compress,format"
              alt="Beanie texture detail"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://images.prismic.io/phantom-land/Z4ei15bqstJ99fDX_sundays-beanies-3-right.jpg?auto=format,compress?auto=compress,format"
              alt="Beanie collection"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            className="aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
              <source
                src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-3-left.webm"
                type="video/webm"
              />
            </video>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Image Section */}
      <motion.section
        className="px-6 lg:px-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
        >
          <Image
            src="https://images.prismic.io/phantom-land/Z4ei2ZbqstJ99fDa_sundays-beanies-4.jpg?auto=format,compress?auto=compress,format"
            alt="Beanie showcase"
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.section>

      {/* Related Work Section */}
      <motion.section
        className="px-6 lg:px-8 py-16 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Related work
        </motion.h3>

        {/* 6. Fixed video overflow and increased size in related section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <motion.div
            className="h-80 overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source
                src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Aurora/header-aurora-1080p.webm"
                type="video/webm"
              />
            </video>
          </motion.div>

          <motion.div
            className="h-80 overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source
                src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Superdry%20AW23/o-superdry-1_1-q4.webm"
                type="video/webm"
              />
            </video>
          </motion.div>

          <motion.div
            className="h-80 overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source
                src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Ultimate%20Travel%20Hacker%20/ultimate-travel-hacker-1.webm"
                type="video/webm"
              />
            </video>
          </motion.div>
        </div>
      </motion.section>

      {/* See All Work Section */}
      <motion.section
        className="px-6 lg:px-8 py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            See all work
          </motion.h2>

          <div className="flex justify-center space-x-4">
            {/* 7. Changed hover color to cream and increased font size */}
            <motion.button
              className="bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FEF3C7",
                color: "#000000",
                boxShadow: "0 10px 25px rgba(254, 243, 199, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Work
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FEF3C7",
                color: "#000000",
                borderColor: "#FEF3C7"
              }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FEF3C7",
                color: "#000000",
                borderColor: "#FEF3C7"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}