// // "use client"

// // import { motion } from "framer-motion"
// // import { ArrowLeft, Play, ExternalLink, Calendar, Tag, Users } from "lucide-react"
// // import Image from "next/image"
// // import Link from "next/link"

// // export default function ProductDetails() {
// //   const fadeInUp = {
// //     initial: { opacity: 0, y: 60 },
// //     animate: { opacity: 1, y: 0 },
// //     transition: { duration: 0.8, ease: "easeOut" as const },
// //   }

// //   const staggerContainer = {
// //     animate: {
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   }

// //   const scaleIn = {
// //     initial: { opacity: 0, scale: 0.8 },
// //     animate: { opacity: 1, scale: 1 },
// //     transition: { duration: 0.6, ease: "easeOut" as const }
// //   }

// //   const slideInFromLeft = {
// //     initial: { opacity: 0, x: -100 },
// //     animate: { opacity: 1, x: 0 },
// //     transition: { duration: 0.8, ease: "easeOut" as const }
// //   }

// //   const slideInFromRight = {
// //     initial: { opacity: 0, x: 100 },
// //     animate: { opacity: 1, x: 0 },
// //     transition: { duration: 0.8, ease: "easeOut" as const }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
// //       {/* Navigation */}
// //       <motion.nav 
// //         className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
// //         initial={{ opacity: 0, y: -50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //       >
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// //           <Link href="/" className="flex items-center space-x-2 group">
// //             <motion.div
// //               className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               <ArrowLeft size={20} />
// //             </motion.div>
// //             <span className="text-sm font-medium">Back to Work</span>
// //           </Link>
          
// //           <div className="flex items-center space-x-4">
// //             <motion.button
// //               className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               View Live Site
// //             </motion.button>
// //           </div>
// //         </div>
// //       </motion.nav>

// //       {/* Hero Section */}
// //       <motion.section
// //         className="pt-24 pb-16 px-6"
// //         variants={staggerContainer}
// //         initial="initial"
// //         animate="animate"
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           {/* Project Meta */}
// //           <motion.div 
// //             className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-300"
// //             variants={fadeInUp}
// //           >
// //             <div className="flex items-center space-x-2">
// //               <Calendar size={16} />
// //               <span>2024</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <Tag size={16} />
// //               <span>Fashion & AR</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <Users size={16} />
// //               <span>Phantom × Sundays</span>
// //             </div>
// //           </motion.div>

// //           {/* Main Title */}
// //           <motion.h1 
// //             className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
// //             variants={fadeInUp}
// //           >
// //             MONUMENTAL
// //             <br />
// //             <span className="text-red-500">BEANIES</span>
// //           </motion.h1>

// //           {/* Subtitle */}
// //           <motion.p 
// //             className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12"
// //             variants={fadeInUp}
// //           >
// //             Iconic landmarks reimagined through Sundays' signature beanie collection, 
// //             brought to life with cutting-edge augmented reality technology.
// //           </motion.p>

// //           {/* Hero Video */}
// //           <motion.div 
// //             className="relative group cursor-pointer"
// //             variants={fadeInUp}
// //             whileHover={{ scale: 1.02 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
// //               <video 
// //                 className="w-full h-full object-cover" 
// //                 autoPlay 
// //                 muted 
// //                 loop 
// //                 playsInline
// //               >
// //                 <source
// //                   src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-1.webm"
// //                   type="video/webm"
// //                 />
// //               </video>
// //               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <motion.div
// //                   className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
// //                   whileHover={{ scale: 1.1 }}
// //                 >
// //                   <Play size={24} className="ml-1" />
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </motion.section>

// //       {/* Project Overview */}
// //       <motion.section
// //         className="py-20 px-6"
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid lg:grid-cols-3 gap-12">
// //             {/* Main Description */}
// //             <motion.div 
// //               className="lg:col-span-2 space-y-8"
// //               initial={{ opacity: 0, x: -50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="space-y-6">
// //                 <h2 className="text-3xl font-bold">Project Overview</h2>
// //                 <div className="space-y-4 text-gray-300 leading-relaxed">
// //                   <p>
// //                     A groundbreaking collaboration between Phantom and Sundays that merges 
// //                     fashion with digital innovation. This project transforms Sundays' iconic 
// //                     beanie into an interactive canvas featuring the world's most famous landmarks.
// //                   </p>
// //                   <p>
// //                     Through cutting-edge augmented reality technology, each beanie becomes a 
// //                     portal to iconic destinations, creating an unprecedented fusion of streetwear 
// //                     and digital storytelling that captivated audiences worldwide.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="space-y-6">
// //                 <h3 className="text-2xl font-bold">Impact & Results</h3>
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
// //                     <div className="text-3xl font-bold text-red-500 mb-2">12M+</div>
// //                     <div className="text-gray-300">Instagram Views</div>
// //                   </div>
// //                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
// //                     <div className="text-3xl font-bold text-red-500 mb-2">Global</div>
// //                     <div className="text-gray-300">Campaign Reach</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Project Details */}
// //             <motion.div 
// //               className="space-y-8"
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
// //                 <h3 className="text-xl font-bold mb-6">Project Details</h3>
// //                 <div className="space-y-4">
// //                   <div>
// //                     <div className="text-sm text-gray-400 mb-1">Client</div>
// //                     <div className="font-medium">Sundays</div>
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-gray-400 mb-1">Services</div>
// //                     <div className="font-medium">AR Development, Creative Direction</div>
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-gray-400 mb-1">Timeline</div>
// //                     <div className="font-medium">6 Months</div>
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-gray-400 mb-1">Team</div>
// //                     <div className="font-medium">8 Specialists</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
// //                 <h3 className="text-xl font-bold mb-4">Key Features</h3>
// //                 <ul className="space-y-3 text-gray-300">
// //                   <li className="flex items-start space-x-3">
// //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
// //                     <span>AR-powered landmark visualization</span>
// //                   </li>
// //                   <li className="flex items-start space-x-3">
// //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
// //                     <span>Interactive beanie collection</span>
// //                   </li>
// //                   <li className="flex items-start space-x-3">
// //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
// //                     <span>Social media integration</span>
// //                   </li>
// //                   <li className="flex items-start space-x-3">
// //                     <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
// //                     <span>Global campaign rollout</span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* Gallery Section */}
// //       <motion.section
// //         className="py-20 px-6"
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 
// //             className="text-4xl font-bold text-center mb-16"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             Project Gallery
// //           </motion.h2>

// //           {/* Masonry-style Gallery */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {/* Large Video */}
// //             <motion.div 
// //               className="md:col-span-2 lg:col-span-2 aspect-video group cursor-pointer"
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6, delay: 0.1 }}
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
// //                 <video 
// //                   className="w-full h-full object-cover" 
// //                   autoPlay 
// //                   muted 
// //                   loop 
// //                   playsInline
// //                 >
// //                   <source
// //                     src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-2-left.webm"
// //                     type="video/webm"
// //                   />
// //                 </video>
// //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <motion.div
// //                     className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
// //                     whileHover={{ scale: 1.1 }}
// //                   >
// //                     <Play size={20} className="ml-1" />
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Image 1 */}
// //             <motion.div 
// //               className="aspect-square group cursor-pointer"
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
// //                 <Image
// //                   src="https://images.prismic.io/phantom-land/Z4eiqJbqstJ99fDL_sundays-beanies-2-right.jpg?auto=format,compress?auto=compress,format"
// //                   alt="Beanie texture detail"
// //                   width={600}
// //                   height={600}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //               </div>
// //             </motion.div>

// //             {/* Image 2 */}
// //             <motion.div 
// //               className="aspect-square group cursor-pointer"
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
// //                 <Image
// //                   src="https://images.prismic.io/phantom-land/Z4ei15bqstJ99fDX_sundays-beanies-3-right.jpg?auto=format,compress?auto=compress,format"
// //                   alt="Beanie collection"
// //                   width={600}
// //                   height={600}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //               </div>
// //             </motion.div>

// //             {/* Video 2 */}
// //             <motion.div 
// //               className="aspect-square group cursor-pointer"
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
// //                 <video 
// //                   className="w-full h-full object-cover" 
// //                   autoPlay 
// //                   muted 
// //                   loop 
// //                   playsInline
// //                 >
// //                   <source
// //                     src="https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Sundays%20Beanies%20/sundays-beanies-3-left.webm"
// //                     type="video/webm"
// //                   />
// //                 </video>
// //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <motion.div
// //                     className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
// //                     whileHover={{ scale: 1.1 }}
// //                   >
// //                     <Play size={20} className="ml-1" />
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Large Image */}
// //             <motion.div 
// //               className="md:col-span-2 lg:col-span-3 aspect-[16/9] group cursor-pointer"
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6, delay: 0.5 }}
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900">
// //                 <Image
// //                   src="https://images.prismic.io/phantom-land/Z4ei2ZbqstJ99fDa_sundays-beanies-4.jpg?auto=format,compress?auto=compress,format"
// //                   alt="Beanie showcase"
// //                   width={1400}
// //                   height={787}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* Related Projects */}
// //       <motion.section
// //         className="py-20 px-6 bg-black/50"
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2 
// //             className="text-4xl font-bold text-center mb-16"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             Related Projects
// //           </motion.h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 title: "Aurora Collection",
// //                 video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Aurora/header-aurora-1080p.webm"
// //               },
// //               {
// //                 title: "Superdry AW23",
// //                 video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Superdry%20AW23/o-superdry-1_1-q4.webm"
// //               },
// //               {
// //                 title: "Travel Hacker",
// //                 video: "https://phantom-ldn-website-videos.storage.googleapis.com/caseStudiesVideos/Ultimate%20Travel%20Hacker%20/ultimate-travel-hacker-1.webm"
// //               }
// //             ].map((project, index) => (
// //               <motion.div
// //                 key={project.title}
// //                 className="group cursor-pointer"
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 viewport={{ once: true }}
// //                 whileHover={{ scale: 1.05 }}
// //               >
// //                 <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 mb-4">
// //                   <video 
// //                     className="w-full h-full object-cover" 
// //                     autoPlay 
// //                     muted 
// //                     loop 
// //                     playsInline
// //                   >
// //                     <source src={project.video} type="video/webm" />
// //                   </video>
// //                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
// //                   <div className="absolute inset-0 flex items-center justify-center">
// //                     <motion.div
// //                       className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
// //                       whileHover={{ scale: 1.1 }}
// //                     >
// //                       <Play size={16} className="ml-1" />
// //                     </motion.div>
// //                   </div>
// //                 </div>
// //                 <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">
// //                   {project.title}
// //                 </h3>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* CTA Section */}
// //       <motion.section
// //         className="py-20 px-6"
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="max-w-4xl mx-auto text-center">
// //           <motion.h2 
// //             className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             Ready to Create Something Amazing?
// //           </motion.h2>
          
// //           <motion.p 
// //             className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             viewport={{ once: true }}
// //           >
// //             Let's collaborate on your next groundbreaking project that pushes the boundaries 
// //             of creativity and technology.
// //           </motion.p>

// //           <motion.div 
// //             className="flex flex-col sm:flex-row gap-4 justify-center"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <motion.button
// //               className="px-8 py-4 bg-red-500 hover:bg-red-600 rounded-full font-semibold transition-colors"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               Start Your Project
// //             </motion.button>
// //             <motion.button
// //               className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors backdrop-blur-sm"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               View All Work
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </motion.section>
// //     </div>
// //   )
// // }


// "use client"

// import { motion } from "framer-motion"
// import { ArrowLeft, Play, ExternalLink, Calendar, Tag, Users, ChevronRight } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function ProductDetails() {
//   const fadeIn = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     transition: { duration: 0.6 }
//   }

//   const slideUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.7 }
//   }

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gray-950 text-white">

//       {/* Hero Section */}
//       <section className="pt-24 pb-16 px-6">
//         <div className="max-w-4xl mx-auto">
//           <motion.div 
//             className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             <div className="flex items-center space-x-2">
//               <Calendar size={14} />
//               <span>2024</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Tag size={14} />
//               <span>Fashion & AR</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users size={14} />
//               <span>Phantom × Sundays</span>
//             </div>
//           </motion.div>

//           <motion.h1 
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             Monumental <span className="text-red-500">Beanies</span>
//           </motion.h1>

//           <motion.p 
//             className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.7 }}
//           >
//             Iconic landmarks reimagined through Sundays' signature beanie collection, 
//             brought to life with cutting-edge augmented reality technology.
//           </motion.p>

//           <motion.div 
//             className="relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//           >
//             <div className="aspect-video bg-gray-900">
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
//               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <Play size={24} className="ml-1 text-gray-950" />
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Project Overview */}
//       <section className="py-16 px-6 bg-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-10">
//             <div className="lg:col-span-2">
//               <motion.h2 
//                 className="text-2xl font-bold mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 Project Overview
//               </motion.h2>
              
//               <motion.div 
//                 className="space-y-6 text-gray-300"
//                 variants={staggerContainer}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//               >
//                 <motion.p variants={slideUp}>
//                   A groundbreaking collaboration between Phantom and Sundays that merges 
//                   fashion with digital innovation. This project transforms Sundays' iconic 
//                   beanie into an interactive canvas featuring the world's most famous landmarks.
//                 </motion.p>
                
//                 <motion.p variants={slideUp}>
//                   Through cutting-edge augmented reality technology, each beanie becomes a 
//                   portal to iconic destinations, creating an unprecedented fusion of streetwear 
//                   and digital storytelling that captivated audiences worldwide.
//                 </motion.p>
//               </motion.div>

//               <motion.div 
//                 className="mt-12"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-bold mb-6">Impact & Results</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-gray-800 rounded-lg p-6">
//                     <div className="text-2xl font-bold text-red-500 mb-2">12M+</div>
//                     <div className="text-gray-300">Instagram Views</div>
//                   </div>
//                   <div className="bg-gray-800 rounded-lg p-6">
//                     <div className="text-2xl font-bold text-red-500 mb-2">Global</div>
//                     <div className="text-gray-300">Campaign Reach</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="space-y-8">
//               <motion.div 
//                 className="bg-gray-800 rounded-xl p-6"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-bold mb-6">Project Details</h3>
//                 <div className="space-y-5">
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
//               </motion.div>

//               <motion.div 
//                 className="bg-red-500/10 border border-red-500/20 rounded-xl p-6"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-xl font-bold mb-4">Key Features</h3>
//                 <ul className="space-y-3 text-gray-300">
//                   <li className="flex items-start space-x-3">
//                     <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
//                     <span>AR-powered landmark visualization</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
//                     <span>Interactive beanie collection</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
//                     <span>Social media integration</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <ChevronRight size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
//                     <span>Global campaign rollout</span>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Project Gallery
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <motion.div 
//               className="group cursor-pointer rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative aspect-video bg-gray-900">
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
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
//                     <Play size={20} className="ml-1 text-gray-950" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="group cursor-pointer rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative aspect-video bg-gray-900">
//                 <Image
//                   src="https://images.prismic.io/phantom-land/Z4eiqJbqstJ99fDL_sundays-beanies-2-right.jpg?auto=format,compress?auto=compress,format"
//                   alt="Beanie texture detail"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//               </div>
//             </motion.div>

//             <motion.div 
//               className="group cursor-pointer rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative aspect-video bg-gray-900">
//                 <Image
//                   src="https://images.prismic.io/phantom-land/Z4ei15bqstJ99fDX_sundays-beanies-3-right.jpg?auto=format,compress?auto=compress,format"
//                   alt="Beanie collection"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//               </div>
//             </motion.div>

//             <motion.div 
//               className="group cursor-pointer rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative aspect-video bg-gray-900">
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
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
//                     <Play size={20} className="ml-1 text-gray-950" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Related Projects */}
//       <section className="py-16 px-6 bg-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
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
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 mb-4">
//                   <video 
//                     className="w-full h-full object-cover" 
//                     autoPlay 
//                     muted 
//                     loop 
//                     playsInline
//                   >
//                     <source src={project.video} type="video/webm" />
//                   </video>
//                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
//                       <Play size={16} className="ml-1 text-gray-950" />
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold group-hover:text-red-500 transition-colors">
//                   {project.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Ready to Create Something Amazing?
//           </motion.h2>
          
//           <motion.p 
//             className="text-lg text-gray-300 mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Let's collaborate on your next groundbreaking project that pushes the boundaries 
//             of creativity and technology.
//           </motion.p>

//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <button className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full font-semibold transition-colors">
//               Start Your Project
//             </button>
//             <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold transition-colors">
//               View All Work
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const ProductDetails: NextPage = () => {
  useEffect(() => {
    // Any client-side scripts if needed, but for this page, perhaps none
    window.addEventListener('scroll', () => {
      // Simple scroll effect if needed
    });
  }, []);

  return (
    <>
      <Head>
        <title>Product Details | Pitamaas Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --primary: #8AF135;
            --secondary: #2A4741;
            --dark: #000;
            --light: #fff;
            --background: var(--secondary);
            --text: var(--light);
            --card-bg: rgba(42, 71, 65, 0.8);
            --gradient: linear-gradient(135deg, rgba(138, 241, 53, 0.1) 0%, rgba(42, 71, 65, 0.9) 100%);
          }

          body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--background);
            color: var(--text);
            overflow-x: hidden;
            line-height: 1.6;
          }

          h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
          }

          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
          }

          .btn {
            display: inline-block;
            padding: 12px 30px;
            background: var(--primary);
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            border-radius: 30px;
            transition: all 0.3s ease;
            border: 2px solid var(--primary);
          }

          .btn:hover {
            background: transparent;
            color: var(--primary);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px var(--primary);
          }

          .product-hero {
            height: 60vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background: var(--gradient);
          }

          .product-hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
            opacity: 0.5;
          }

          .product-content {
            max-width: 800px;
          }

          .product-content h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--primary);
          }

          .product-content p {
            font-size: 1.2rem;
            margin-bottom: 30px;
          }

          .product-details {
            padding: 80px 0;
            background: var(--background);
          }

          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .product-image {
            border-radius: 10px;
            overflow: hidden;
          }

          .product-image img {
            width: 100%;
            display: block;
          }

          .product-info h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--primary);
          }

          .price {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 20px;
          }

          .features {
            list-style: none;
            margin-bottom: 30px;
          }

          .features li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          .features i {
            color: var(--primary);
            margin-right: 10px;
          }

          .product-description {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .product-process {
            padding: 80px 0;
            background: var(--background);
          }

          .process-steps {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .process-step {
            width: 30%;
            text-align: center;
            margin-bottom: 30px;
          }

          .step-number {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 10px;
          }

          .product-why-choose {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .why-item {
            text-align: center;
          }

          .why-item i {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
          }

          .product-case-studies {
            padding: 80px 0;
            background: var(--background);
          }

          .case-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .case-card {
            background: var(--card-bg);
            border-radius: 10px;
            padding: 20px;
          }

          .case-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .product-testimonials {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .testimonial-card {
            background: var(--background);
            border-radius: 10px;
            padding: 30px;
            margin-bottom: 30px;
          }

          .testimonial-text {
            font-style: italic;
            margin-bottom: 20px;
          }

          .testimonial-author {
            font-weight: bold;
            color: var(--primary);
          }

          .product-faq {
            padding: 80px 0;
            background: var(--background);
          }

          .faq-item {
            margin-bottom: 20px;
          }

          .faq-question {
            cursor: pointer;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .faq-answer {
            display: none;
          }

          .faq-item.active .faq-answer {
            display: block;
          }

          .product-related {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .related-card {
            background: var(--background);
            border-radius: 10px;
            padding: 20px;
            text-align: center;
          }

          .related-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          @media (max-width: 768px) {
            .details-grid {
              grid-template-columns: 1fr;
            }

            .product-content h1 {
              font-size: 2rem;
            }

            .process-step {
              width: 100%;
            }

            .why-grid, .case-grid, .related-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <section className="product-hero">
          <div className="product-hero-bg"></div>
          <div className="container product-content">
            <h1>Video Production Service</h1>
            <p>Professional video production tailored to your needs, from concept to final delivery.</p>
            <a href="#contact" className="btn">Get a Quote</a>
          </div>
        </section>

        <section className="product-details">
          <div className="container">
            <div className="details-grid">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Video Production" />
              </div>
              <div className="product-info">
                <h2>Video Production</h2>
                <p>Create stunning videos that captivate your audience and tell your story effectively.</p>
                <ul className="features">
                  <li><i className="fas fa-check"></i>Full HD/4K Resolution</li>
                  <li><i className="fas fa-check"></i>Professional Editing</li>
                  <li><i className="fas fa-check"></i>Custom Sound Design</li>
                  <li><i className="fas fa-check"></i>Motion Graphics</li>
                  <li><i className="fas fa-check"></i>Unlimited Revisions</li>
                </ul>
                <a href="#contact" className="btn">Book Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="product-description">
          <div className="container">
            <h2>Detailed Description</h2>
            <p>Our video production service includes everything from pre-production planning to post-production polishing. We work closely with you to understand your vision and deliver a product that exceeds expectations.</p>
            <p>Whether it's a corporate video, music video, or promotional content, our team of experts uses state-of-the-art equipment and creative techniques to bring your ideas to life.</p>
          </div>
        </section>



        <section className="product-case-studies">
          <div className="container">
            <h2>Case Studies</h2>
            <div className="case-grid">
              <div className="case-card">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800" alt="Case Study 1" />
                <h3>Music Video for Artist X</h3>
                <p>Increased views by 200% on YouTube.</p>
              </div>
              <div className="case-card">
                <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800" alt="Case Study 2" />
                <h3>Corporate Promo for Company Y</h3>
                <p>Boosted sales by 150% after launch.</p>
              </div>
              <div className="case-card">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800" alt="Case Study 3" />
                <h3>Event Coverage for Festival Z</h3>
                <p>Reached 1M+ impressions on social media.</p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default ProductDetails;