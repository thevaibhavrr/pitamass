// "use client"

// import { motion } from "framer-motion"
// import { ArrowLeft, Play, ExternalLink, Calendar, Tag, Users } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function ProductDetails() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" as const },
//   }

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const scaleIn = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.6, ease: "easeOut" as const }
//   }

//   const slideInFromLeft = {
//     initial: { opacity: 0, x: -100 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: "easeOut" as const }
//   }

//   const slideInFromRight = {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: "easeOut" as const }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
//       {/* Navigation */}
//       <motion.nav 
//         className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <motion.div
//               className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ArrowLeft size={20} />
//             </motion.div>
//             <span className="text-sm font-medium">Back to Work</span>
//           </Link>
          
//           <div className="flex items-center space-x-4">
//             <motion.button
//               className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Live Site
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Hero Section */}
//       <motion.section
//         className="pt-24 pb-16 px-6"
//         variants={staggerContainer}
//         initial="initial"
//         animate="animate"
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* Project Meta */}
//           <motion.div 
//             className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-300"
//             variants={fadeInUp}
//           >
//             <div className="flex items-center space-x-2">
//               <Calendar size={16} />
//               <span>2024</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Tag size={16} />
//               <span>Fashion & AR</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users size={16} />
//               <span>Phantom × Sundays</span>
//             </div>
//           </motion.div>

//           {/* Main Title */}
//           <motion.h1 
//             className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
//             variants={fadeInUp}
//           >
//             MONUMENTAL
//             <br />
//             <span className="text-red-500">BEANIES</span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12"
//             variants={fadeInUp}
//           >
//             Iconic landmarks reimagined through Sundays' signature beanie collection, 
//             brought to life with cutting-edge augmented reality technology.
//           </motion.p>

//           {/* Hero Video */}
//           <motion.div 
//             className="relative group cursor-pointer"
//             variants={fadeInUp}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
//               <video 
//                 className="w-full h-full object-cover" 
//                 autoPlay 
//                 muted 
//                 loop 
//                 playsInline
//               >
//                 <source
//                   src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-1.webm"
//                   type="video/webm"
//                 />
//               </video>
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <Play size={24} className="ml-1" />
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Project Overview */}
//       <motion.section
//         className="py-20 px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {/* Main Description */}
//             <motion.div 
//               className="lg:col-span-2 space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="space-y-6">
//                 <h2 className="text-3xl font-bold">Project Overview</h2>
//                 <div className="space-y-4 text-gray-300 leading-relaxed">
//                   <p>
//                     A groundbreaking collaboration between Phantom and Sundays that merges 
//                     fashion with digital innovation. This project transforms Sundays' iconic 
//                     beanie into an interactive canvas featuring the world's most famous landmarks.
//                   </p>
//                   <p>
//                     Through cutting-edge augmented reality technology, each beanie becomes a 
//                     portal to iconic destinations, creating an unprecedented fusion of streetwear 
//                     and digital storytelling that captivated audiences worldwide.
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold">Impact & Results</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
//                     <div className="text-3xl font-bold text-red-500 mb-2">12M+</div>
//                     <div className="text-gray-300">Instagram Views</div>
//                   </div>
//                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
//                     <div className="text-3xl font-bold text-red-500 mb-2">Global</div>
//                     <div className="text-gray-300">Campaign Reach</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Project Details */}
//             <motion.div 
//               className="space-y-8"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//                 <h3 className="text-xl font-bold mb-6">Project Details</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">Client</div>
//                     <div className="font-medium">Sundays</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">Services</div>
//                     <div className="font-medium">AR Development, Creative Direction</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">Timeline</div>
//                     <div className="font-medium">6 Months</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">Team</div>
//                     <div className="font-medium">8 Specialists</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
//                 <h3 className="text-xl font-bold mb-4">Key Features</h3>
//                 <ul className="space-y-3 text-gray-300">
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
//                     <span>AR-powered landmark visualization</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
//                     <span>Interactive beanie collection</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
//                     <span>Social media integration</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
//                     <span>Global campaign rollout</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Gallery Section */}
//       <motion.section
//         className="py-20 px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             className="text-4xl font-bold text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Project Gallery
//           </motion.h2>

//           {/* Masonry-style Gallery */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Large Video */}
//             <motion.div 
//               className="md:col-span-2 lg:col-span-2 aspect-video group cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
//                 <video 
//                   className="w-full h-full object-cover" 
//                   autoPlay 
//                   muted 
//                   loop 
//                   playsInline
//                 >
//                   <source
//                     src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-2-left.webm"
//                     type="video/webm"
//                   />
//                 </video>
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <motion.div
//                     className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Play size={20} className="ml-1" />
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Image 1 */}
//             <motion.div 
//               className="aspect-square group cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
//                 <Image
//                   src="https://images.prismic.io/phantom-land/Z4eiqJbqstJ99fDL_sundays-beanies-2-right.jpg?auto=format,compress?auto=compress,format"
//                   alt="Beanie texture detail"
//                   width={600}
//                   height={600}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//               </div>
//             </motion.div>

//             {/* Image 2 */}
//             <motion.div 
//               className="aspect-square group cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
//                 <Image
//                   src="https://images.prismic.io/phantom-land/Z4ei15bqstJ99fDX_sundays-beanies-3-right.jpg?auto=format,compress?auto=compress,format"
//                   alt="Beanie collection"
//                   width={600}
//                   height={600}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//               </div>
//             </motion.div>

//             {/* Video 2 */}
//             <motion.div 
//               className="aspect-square group cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
//                 <video 
//                   className="w-full h-full object-cover" 
//                   autoPlay 
//                   muted 
//                   loop 
//                   playsInline
//                 >
//                   <source
//                     src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-3-left.webm"
//                     type="video/webm"
//                   />
//                 </video>
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <motion.div
//                     className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Play size={20} className="ml-1" />
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Large Image */}
//             <motion.div 
//               className="md:col-span-2 lg:col-span-3 aspect-[16/9] group cursor-pointer"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
//                 <Image
//                   src="https://images.prismic.io/phantom-land/Z4ei2ZbqstJ99fDa_sundays-beanies-4.jpg?auto=format,compress?auto=compress,format"
//                   alt="Beanie showcase"
//                   width={1400}
//                   height={787}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Related Projects */}
//       <motion.section
//         className="py-20 px-6 bg-black/50"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             className="text-4xl font-bold text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Related Projects
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Aurora Collection",
//                 video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Aurora/header-aurora-1080p.webm"
//               },
//               {
//                 title: "Superdry AW23",
//                 video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Superdry%20AW23/o-superdry-1_1-q4.webm"
//               },
//               {
//                 title: "Travel Hacker",
//                 video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Ultimate%20Travel%20Hacker%20/ultimate-travel-hacker-1.webm"
//               }
//             ].map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 className="group cursor-pointer"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 mb-4">
//                   <video 
//                     className="w-full h-full object-cover" 
//                     autoPlay 
//                     muted 
//                     loop 
//                     playsInline
//                   >
//                     <source src={project.video} type="video/webm" />
//                   </video>
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <motion.div
//                       className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <Play size={16} className="ml-1" />
//                     </motion.div>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">
//                   {project.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         className="py-20 px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2 
//             className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Ready to Create Something Amazing?
//           </motion.h2>
          
//           <motion.p 
//             className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             Let's collaborate on your next groundbreaking project that pushes the boundaries 
//             of creativity and technology.
//           </motion.p>

//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <motion.button
//               className="px-8 py-4 bg-red-500 hover:bg-red-600 rounded-full font-semibold transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Start Your Project
//             </motion.button>
//             <motion.button
//               className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors backdrop-blur-sm"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View All Work
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Play, ExternalLink, Calendar, Tag, Users, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductDetails() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  }

  const slideUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={14} />
              <span>Fashion & AR</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={14} />
              <span>Phantom × Sundays</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Monumental <span className="text-red-500">Beanies</span>
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Iconic landmarks reimagined through Sundays' signature beanie collection, 
            brought to life with cutting-edge augmented reality technology.
          </motion.p>

          <motion.div 
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="aspect-video bg-gray-900">
              <video 
                className="w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source
                  src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-1.webm"
                  type="video/webm"
                />
              </video>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play size={24} className="ml-1 text-gray-950" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.h2 
                className="text-2xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Project Overview
              </motion.h2>
              
              <motion.div 
                className="space-y-6 text-gray-300"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p variants={slideUp}>
                  A groundbreaking collaboration between Phantom and Sundays that merges 
                  fashion with digital innovation. This project transforms Sundays' iconic 
                  beanie into an interactive canvas featuring the world's most famous landmarks.
                </motion.p>
                
                <motion.p variants={slideUp}>
                  Through cutting-edge augmented reality technology, each beanie becomes a 
                  portal to iconic destinations, creating an unprecedented fusion of streetwear 
                  and digital storytelling that captivated audiences worldwide.
                </motion.p>
              </motion.div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">Impact & Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-2xl font-bold text-red-500 mb-2">12M+</div>
                    <div className="text-gray-300">Instagram Views</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-2xl font-bold text-red-500 mb-2">Global</div>
                    <div className="text-gray-300">Campaign Reach</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="bg-gray-800 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                <div className="space-y-5">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Client</div>
                    <div className="font-medium">Sundays</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Services</div>
                    <div className="font-medium">AR Development, Creative Direction</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Timeline</div>
                    <div className="font-medium">6 Months</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Team</div>
                    <div className="font-medium">8 Specialists</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-red-500/10 border border-red-500/20 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>AR-powered landmark visualization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Interactive beanie collection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Social media integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Global campaign rollout</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Project Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="group cursor-pointer rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-gray-900">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source
                    src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-2-left.webm"
                    type="video/webm"
                  />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play size={20} className="ml-1 text-gray-950" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group cursor-pointer rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-gray-900">
                <Image
                  src="https://images.prismic.io/phantom-land/Z4eiqJbqstJ99fDL_sundays-beanies-2-right.jpg?auto=format,compress?auto=compress,format"
                  alt="Beanie texture detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            </motion.div>

            <motion.div 
              className="group cursor-pointer rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-gray-900">
                <Image
                  src="https://images.prismic.io/phantom-land/Z4ei15bqstJ99fDX_sundays-beanies-3-right.jpg?auto=format,compress?auto=compress,format"
                  alt="Beanie collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            </motion.div>

            <motion.div 
              className="group cursor-pointer rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-gray-900">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source
                    src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-3-left.webm"
                    type="video/webm"
                  />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play size={20} className="ml-1 text-gray-950" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Related Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aurora Collection",
                video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Aurora/header-aurora-1080p.webm"
              },
              {
                title: "Superdry AW23",
                video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Superdry%20AW23/o-superdry-1_1-q4.webm"
              },
              {
                title: "Travel Hacker",
                video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Ultimate%20Travel%20Hacker%20/ultimate-travel-hacker-1.webm"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 mb-4">
                  <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={project.video} type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play size={16} className="ml-1 text-gray-950" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Create Something Amazing?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's collaborate on your next groundbreaking project that pushes the boundaries 
            of creativity and technology.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold transition-colors">
              View All Work
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}