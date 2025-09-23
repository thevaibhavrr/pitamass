// "use client"

// import React, { useState, useRef, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { AboutHeader } from "@/components/about-header"
// import { Footer } from "@/components/footer"
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   Play, 
//   Pause, 
//   Volume2, 
//   VolumeX, 
//   SkipBack, 
//   SkipForward,
//   Heart,
//   Share2,
//   Download,
//   Maximize,
//   Minimize,
//   RotateCcw,
//   Shuffle,
//   Repeat,
//   Music,
//   Video,
//   Image as ImageIcon,
//   Sparkles,
//   Zap,
//   Palette,
//   Camera,
//   Mic,
//   Headphones,
//   Film,
//   Layers,
//   Globe,
//   Star,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Grid,
//   List,
//   Search,
//   Filter,
//   Clock,
//   Eye,
//   ThumbsUp,
//   MessageCircle,
//   Users,
//   Lightbulb,
//   X,
//   MapPin,
//   Phone,
//   Mail,
//   Clock as ClockIcon,
//   Plus,
//   Minus
// } from 'lucide-react'
// import '../../styles/globals.css'
// import '../../styles/bootstrap.min.css'
// import '../../styles/nice-select.css'
// import '../../styles/meanmenu.css'
// import '../../styles/swiper-bundle.min.css'
// import '../../styles/animate.min.css'
// import '../../styles/magnific-popup.css'
// import '../../styles/main.css'

// export default function LabPage() {
//   const [activeTab, setActiveTab] = useState('all')
//   const [currentSong, setCurrentSong] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [isMuted, setIsMuted] = useState(false)
//   const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
//   const [selectedImage, setSelectedImage] = useState<number | null>(null)
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [theme, setTheme] = useState<'dark' | 'light' | 'current'>('current')
//   const [mediaPlayerActive, setMediaPlayerActive] = useState(false)
//   const [currentMedia, setCurrentMedia] = useState<any>(null)
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const [openFaq, setOpenFaq] = useState<number | null>(null)

//   const audioRef = useRef<HTMLAudioElement>(null)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const servicesData = [
//     {
//       id: 1,
//       title: "Video Production",
//       icon: Video,
//       description: "From concept to final edit, we create stunning videos that tell your story and engage your audience.",
//       image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Music Production",
//       icon: Music,
//       description: "Original compositions, sound design, and audio post-production to elevate your projects.",
//       image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Photography",
//       icon: Camera,
//       description: "Captivating images that communicate your brand's essence and leave a lasting impression.",
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
//     },
//     {
//       id: 4,
//       title: "Visual Effects",
//       icon: Film,
//       description: "Stunning visual effects that bring your vision to life with cutting-edge technology.",
//       image: "https://images.unsplash.com/photo-1558603666-13c2d9c2c6e7?w=600&h=400&fit=crop"
//     },
//     {
//       id: 5,
//       title: "Audio Post-Production",
//       icon: Headphones,
//       description: "Professional audio editing, mixing, and mastering for your videos and music projects.",
//       image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop"
//     },
//     {
//       id: 6,
//       title: "Motion Graphics",
//       icon: Layers,
//       description: "Dynamic animations and graphics that enhance your visual storytelling.",
//       image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
//     }
//   ]

//   const testimonialsData = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Creative Director",
//       company: "Tech Innovations",
//       content: "Pitamaas Lab transformed our brand story into a visual masterpiece. Their attention to detail and creative vision exceeded all our expectations.",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Marketing Manager",
//       company: "Digital Solutions",
//       content: "The video production quality is outstanding. They delivered exactly what we envisioned and more. Highly recommended for any creative project.",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       rating: 5
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Brand Manager",
//       company: "Creative Agency",
//       content: "Working with Pitamaas Lab was a game-changer. Their innovative approach and technical expertise brought our ideas to life beautifully.",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//       rating: 5
//     }
//   ]

//   const faqData = [
//     {
//       id: 1,
//       question: "What services does Pitamaas Lab offer?",
//       answer: "We offer comprehensive creative production services including video production, music composition, photography, visual effects, audio post-production, and motion graphics. Our team specializes in bringing your creative vision to life with cutting-edge technology and artistic expertise."
//     },
//     {
//       id: 2,
//       question: "How long does a typical project take?",
//       answer: "Project timelines vary depending on complexity and scope. A simple video might take 1-2 weeks, while a comprehensive campaign could take 4-8 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
//     },
//     {
//       id: 3,
//       question: "Do you work with clients remotely?",
//       answer: "Yes! We work with clients worldwide and have streamlined our process to accommodate remote collaboration. We use advanced communication tools and project management systems to ensure seamless collaboration regardless of location."
//     },
//     {
//       id: 4,
//       question: "What file formats do you deliver?",
//       answer: "We deliver projects in all standard formats including MP4, MOV, WAV, MP3, and high-resolution images. We can also provide source files and multiple format options based on your specific needs and distribution channels."
//     },
//     {
//       id: 5,
//       question: "Can you help with concept development?",
//       answer: "Absolutely! Our creative team excels at taking initial ideas and developing them into fully realized concepts. We offer comprehensive pre-production services including storyboarding, script writing, and creative direction to ensure your project starts on the right foot."
//     }
//   ]

//   const handlePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause()
//       } else {
//         audioRef.current.play().catch(error => {
//           console.error('Error playing audio:', error)
//         })
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const handleTimeUpdate = () => {
//     if (audioRef.current) {
//       setCurrentTime(audioRef.current.currentTime)
//     }
//   }

//   const handleLoadedMetadata = () => {
//     if (audioRef.current) {
//       setDuration(audioRef.current.duration)
//     }
//   }

//   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (audioRef.current) {
//       const rect = e.currentTarget.getBoundingClientRect()
//       const clickX = e.clientX - rect.left
//       const width = rect.width
//       const newTime = (clickX / width) * duration
//       audioRef.current.currentTime = newTime
//       setCurrentTime(newTime)
//     }
//   }

//   const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (audioRef.current) {
//       const rect = e.currentTarget.getBoundingClientRect()
//       const clickX = e.clientX - rect.left
//       const width = rect.width
//       const newVolume = clickX / width
//       audioRef.current.volume = newVolume
//       setVolume(newVolume)
//     }
//   }

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60)
//     const seconds = Math.floor(time % 60)
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`
//   }

//   const toggleFaq = (id: number) => {
//     setOpenFaq(openFaq === id ? null : id)
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       <AboutHeader />
//       <style jsx global>{`
//         /* Lab Page Styles */
//         .lab-hero {
//           background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .lab-hero::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: radial-gradient(circle at 30% 20%, rgba(163, 235, 23, 0.1) 0%, transparent 50%),
//                       radial-gradient(circle at 70% 80%, rgba(255, 0, 160, 0.1) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .hero-title-lab {
//           font-size: 4rem;
//           font-weight: 800;
//           color: white;
//           margin-bottom: 1.5rem;
//           line-height: 1.1;
//         }

//         .gradient-text-lab {
//           background: linear-gradient(135deg, #A3EB17 0%, #FF00A0 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-description-lab {
//           font-size: 1.3rem;
//           color: rgba(255, 255, 255, 0.8);
//           margin-bottom: 2rem;
//           line-height: 1.6;
//           max-width: 600px;
//         }

//         .hero-badge-lab {
//           display: inline-flex;
//           align-items: center;
//           background: rgba(163, 235, 23, 0.1);
//           border: 1px solid rgba(163, 235, 23, 0.3);
//           padding: 0.5rem 1rem;
//           border-radius: 50px;
//           color: #A3EB17;
//           font-size: 0.9rem;
//           font-weight: 600;
//           margin-bottom: 2rem;
//         }

//         .services-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 2rem;
//           margin-top: 3rem;
//         }

//         .service-card {
//           background: rgba(0, 0, 0, 0.4);
//           border-radius: 15px;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//         }

//         .service-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           border-color: rgba(163, 235, 23, 0.3);
//         }

//         .service-image {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//         }

//         .service-content {
//           padding: 1.5rem;
//         }

//         .service-icon {
//           width: 50px;
//           height: 50px;
//           border-radius: 12px;
//           background: linear-gradient(135deg, #A3EB17 0%, #FF00A0 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           margin-bottom: 1rem;
//         }

//         .service-title {
//           font-size: 1.3rem;
//           font-weight: 700;
//           color: white;
//           margin-bottom: 0.5rem;
//         }

//         .service-description {
//           color: rgba(255, 255, 255, 0.8);
//           line-height: 1.6;
//         }

//         .testimonial-card {
//           background: rgba(0, 0, 0, 0.4);
//           border-radius: 15px;
//           padding: 2rem;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           text-align: center;
//         }

//         .testimonial-avatar {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 0 auto 1rem;
//           border: 3px solid rgba(163, 235, 23, 0.3);
//         }

//         .testimonial-content {
//           color: rgba(255, 255, 255, 0.9);
//           font-style: italic;
//           margin-bottom: 1.5rem;
//           line-height: 1.6;
//         }

//         .testimonial-name {
//           color: white;
//           font-weight: 700;
//           margin-bottom: 0.25rem;
//         }

//         .testimonial-role {
//           color: rgba(255, 255, 255, 0.7);
//           font-size: 0.9rem;
//         }

//         .faq-item {
//           background: rgba(0, 0, 0, 0.4);
//           border-radius: 15px;
//           margin-bottom: 1rem;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           overflow: hidden;
//         }

//         .faq-question {
//           padding: 1.5rem;
//           background: transparent;
//           border: none;
//           color: white;
//           font-size: 1.1rem;
//           font-weight: 600;
//           width: 100%;
//           text-align: left;
//           cursor: pointer;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           transition: all 0.3s ease;
//         }

//         .faq-question:hover {
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .faq-answer {
//           padding: 0 1.5rem 1.5rem;
//           color: rgba(255, 255, 255, 0.8);
//           line-height: 1.6;
//         }

//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 800;
//           color: white;
//           text-align: center;
//           margin-bottom: 1rem;
//         }

//         .section-description {
//           font-size: 1.1rem;
//           color: rgba(255, 255, 255, 0.8);
//           text-align: center;
//           max-width: 600px;
//           margin: 0 auto 3rem;
//           line-height: 1.6;
//         }

//         .contact-info {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 2rem;
//           margin-top: 3rem;
//         }

//         .contact-item {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem;
//           background: rgba(0, 0, 0, 0.4);
//           border-radius: 15px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//         }

//         .contact-icon {
//           width: 50px;
//           height: 50px;
//           border-radius: 12px;
//           background: linear-gradient(135deg, #A3EB17 0%, #FF00A0 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           flex-shrink: 0;
//         }

//         .contact-details h4 {
//           color: white;
//           font-size: 1.1rem;
//           font-weight: 700;
//           margin-bottom: 0.25rem;
//         }

//         .contact-details p {
//           color: rgba(255, 255, 255, 0.8);
//           margin: 0;
//         }

//         .floating-elements {
//           position: relative;
//           width: 100%;
//           height: 400px;
//         }

//         .floating-element {
//           position: absolute;
//           width: 80px;
//           height: 80px;
//           border-radius: 20px;
//           background: linear-gradient(135deg, rgba(163, 235, 23, 0.2) 0%, rgba(255, 0, 160, 0.2) 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #A3EB17;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(163, 235, 23, 0.3);
//         }

//         .element-1 {
//           top: 20%;
//           left: 10%;
//         }

//         .element-2 {
//           top: 60%;
//           right: 20%;
//         }

//         .element-3 {
//           bottom: 20%;
//           left: 30%;
//         }

//         @media (max-width: 768px) {
//           .hero-title-lab {
//             font-size: 2.5rem;
//           }
          
//           .hero-description-lab {
//             font-size: 1.1rem;
//           }
          
//           .services-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .contact-info {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>

//       <div className={`has-smooth theme-${theme}`} id="has_smooth">
//         <div id="smooth-wrapper">
//           <div id="smooth-content">
//             <div className="body-wrapper">
//               {/* Hero Section */}
//               <section className="lab-hero">
//                 <div className="container">
//                   <div className="row align-items-center min-vh-100">
//                     <div className="col-lg-8">
//                       <motion.div 
//                         className="hero-content-lab"
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                       >
//                         <motion.div 
//                           className="hero-badge-lab"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ duration: 0.6, delay: 0.2 }}
//                         >
//                           <Film size={16} className="me-2" />
//                           <span>Creative Production Studio</span>
//                         </motion.div>
                        
//                         <motion.h1 
//                           className="hero-title-lab"
//                           initial={{ opacity: 0, y: 30 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.8, delay: 0.3 }}
//                         >
//                           PITAMAAS <span className="gradient-text-lab">LAB</span>
//                         </motion.h1>
                        
//                         <motion.p 
//                           className="hero-description-lab"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                           Where creativity meets technology. We're a full-service creative production studio 
//                           specializing in video production, music composition, photography, and visual effects. 
//                           Our state-of-the-art facilities and talented team bring your vision to life with 
//                           cutting-edge technology and artistic excellence.
//                         </motion.p>
                        
//                         <motion.div 
//                           className="hero-actions"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.8, delay: 0.5 }}
//                         >
//                           <Link href="/contact" className="btn btn-primary me-3">
//                             Start Your Project
//                             <ArrowRight size={16} className="ms-2" />
//                           </Link>
//                           <Link href="/portfolio" className="btn btn-outline-light">
//                             View Our Work
//                           </Link>
//                         </motion.div>
//                       </motion.div>
//                     </div>
                    
//                     <div className="col-lg-4">
//                       <motion.div 
//                         className="hero-image-lab"
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, delay: 0.3 }}
//                       >
//                         <div className="floating-elements">
//                           <motion.div 
//                             className="floating-element element-1"
//                             animate={{ 
//                               y: [0, -20, 0],
//                               rotate: [0, 5, 0]
//                             }}
//                             transition={{ 
//                               duration: 4,
//                               repeat: Infinity,
//                               ease: "easeInOut"
//                             }}
//                           >
//                             <Video size={40} />
//                           </motion.div>
//                           <motion.div 
//                             className="floating-element element-2"
//                             animate={{ 
//                               y: [0, 15, 0],
//                               rotate: [0, -3, 0]
//                             }}
//                             transition={{ 
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 1
//                             }}
//                           >
//                             <Music size={35} />
//                           </motion.div>
//                           <motion.div 
//                             className="floating-element element-3"
//                             animate={{ 
//                               y: [0, -10, 0],
//                               rotate: [0, 4, 0]
//                             }}
//                             transition={{ 
//                               duration: 5,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 2
//                             }}
//                           >
//                             <Camera size={30} />
//                           </motion.div>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Services Section */}
//               <section className="py-5" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
//                 <div className="container">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     <h2 className="section-title">Our Services</h2>
//                     <p className="section-description">
//                       Comprehensive creative production services to bring your vision to life
//                     </p>
//                   </motion.div>
                  
//                   <div className="services-grid">
//                     {servicesData.map((service, index) => (
//                       <motion.div
//                         key={service.id}
//                         className="service-card"
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                       >
//                         <Image
//                           src={service.image}
//                           alt={service.title}
//                           width={600}
//                           height={400}
//                           className="service-image"
//                         />
//                         <div className="service-content">
//                           <div className="service-icon">
//                             <service.icon size={24} />
//                           </div>
//                           <h3 className="service-title">{service.title}</h3>
//                           <p className="service-description">{service.description}</p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </section>

//               {/* Testimonials Section */}
//               <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
//                 <div className="container">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     <h2 className="section-title">What Our Clients Say</h2>
//                     <p className="section-description">
//                       Hear from the brands we've helped transform through creative excellence
//                     </p>
//                   </motion.div>
                  
//                   <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                       <motion.div
//                         className="testimonial-card"
//                         key={activeTestimonial}
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <Image
//                           src={testimonialsData[activeTestimonial].avatar}
//                           alt={testimonialsData[activeTestimonial].name}
//                           width={80}
//                           height={80}
//                           className="testimonial-avatar"
//                         />
//                         <p className="testimonial-content">
//                           "{testimonialsData[activeTestimonial].content}"
//                         </p>
//                         <h4 className="testimonial-name">
//                           {testimonialsData[activeTestimonial].name}
//                         </h4>
//                         <p className="testimonial-role">
//                           {testimonialsData[activeTestimonial].role} at {testimonialsData[activeTestimonial].company}
//                         </p>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* FAQ Section */}
//               <section className="py-5" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
//                 <div className="container">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     <h2 className="section-title">Frequently Asked Questions</h2>
//                     <p className="section-description">
//                       Everything you need to know about working with Pitamaas Lab
//                     </p>
//                   </motion.div>
                  
//                   <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                       {faqData.map((faq, index) => (
//                         <motion.div
//                           key={faq.id}
//                           className="faq-item"
//                           initial={{ opacity: 0, y: 20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.5, delay: index * 0.1 }}
//                           viewport={{ once: true }}
//                         >
//                           <button
//                             className="faq-question"
//                             onClick={() => toggleFaq(faq.id)}
//                           >
//                             {faq.question}
//                             {openFaq === faq.id ? <Minus size={20} /> : <Plus size={20} />}
//                           </button>
//                           <AnimatePresence>
//                             {openFaq === faq.id && (
//                               <motion.div
//                                 className="faq-answer"
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.3 }}
//                               >
//                                 {faq.answer}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Contact Section */}
//               <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
//                 <div className="container">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     <h2 className="section-title">Get In Touch</h2>
//                     <p className="section-description">
//                       Ready to bring your creative vision to life? Let's start the conversation.
//                     </p>
//                   </motion.div>
                  
//                   <div className="contact-info">
//                     <motion.div
//                       className="contact-item"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="contact-icon">
//                         <Mail size={24} />
//                       </div>
//                       <div className="contact-details">
//                         <h4>Email Us</h4>
//                         <p>hello@pitamaas.com</p>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div
//                       className="contact-item"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="contact-icon">
//                         <Phone size={24} />
//                       </div>
//                       <div className="contact-details">
//                         <h4>Call Us</h4>
//                         <p>+91 98765 43210</p>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div
//                       className="contact-item"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.3 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="contact-icon">
//                         <MapPin size={24} />
//                       </div>
//                       <div className="contact-details">
//                         <h4>Visit Us</h4>
//                         <p>Mumbai, India</p>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </section>

//               <Footer />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { AboutHeader } from "@/components/about-header";
import { Footer } from "@/components/footer";
import '../../styles/globals.css';
import '../../styles/bootstrap.min.css';
import '../../styles/nice-select.css';
import '../../styles/meanmenu.css';
import '../../styles/swiper-bundle.min.css';
import '../../styles/animate.min.css';
import '../../styles/magnific-popup.css';
import '../../styles/main.css';

const Home: NextPage = () => {
  useEffect(() => {
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
        const particlesCount = 30;
        for (let i = 0; i < particlesCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          const size = Math.random() * 10 + 2;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 10 + 5;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.top = `${posY}%`;
          particle.style.animationDelay = `${delay}s`;
          particle.style.animationDuration = `${duration}s`;
          particle.style.background = getComputedStyle(document.documentElement).getPropertyValue('--primary');
          particlesContainer.appendChild(particle);
        }
      }
    }
    createParticles();

    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');
        
      });
    });

    const mediaPlayer = document.getElementById('mediaPlayer');
    const playerContent = document.getElementById('playerContent');
    const playerTitle = document.getElementById('playerTitle');
    const nowPlaying = document.getElementById('nowPlaying');
    const closePlayer = document.getElementById('closePlayer');
    const playButtons = document.querySelectorAll('.play-btn');
    const heroPlayBtn = document.getElementById('heroPlayBtn');
    const visualizer = document.getElementById('visualizer');

    if (heroPlayBtn) {
      heroPlayBtn.addEventListener('click', () => {
        if (playerTitle) playerTitle.textContent = "Pitamaas Lab Showreel";
        if (nowPlaying) nowPlaying.textContent = "Now Playing: Pitamaas Lab Showreel";
        if (playerContent) {
          playerContent.innerHTML = `
            <div class="video-player">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jfKfPfyJRdk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          `;
        }
        if (mediaPlayer) mediaPlayer.classList.add('active');
        if (visualizer) visualizer.style.display = 'none';
      });
    }

    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        const src = button.getAttribute('data-src');
        const title = button.parentElement?.querySelector('h3')?.textContent || '';
        if (playerTitle) playerTitle.textContent = title;
        if (nowPlaying) nowPlaying.textContent = `Now Playing: ${title}`;
        if (playerContent) {
          if (type === 'video') {
            playerContent.innerHTML = `
              <div class="video-player">
                <iframe width="100%" height="100%" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            `;
            if (visualizer) visualizer.style.display = 'none';
          } else if (type === 'audio') {
            playerContent.innerHTML = `
              <div class="audio-player">
                <audio controls style="width: 100%" id="audioElement">
                  <source src="${src}" type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            `;
            if (visualizer) visualizer.style.display = 'flex';
            setTimeout(() => {
              const audioElement = document.getElementById('audioElement') as HTMLAudioElement;
              if (audioElement) {
                audioElement.addEventListener('play', () => {
                  if (visualizer) visualizer.style.display = 'flex';
                });
                audioElement.addEventListener('pause', () => {
                  if (visualizer) visualizer.style.display = 'none';
                });
              }
            }, 100);
          }
        }
        if (mediaPlayer) mediaPlayer.classList.add('active');
      });
    });

    if (closePlayer) {
      closePlayer.addEventListener('click', () => {
        if (mediaPlayer) mediaPlayer.classList.remove('active');
        if (playerContent) {
          const audioElements = playerContent.querySelectorAll('audio, video, iframe');
          audioElements.forEach(element => {
            if (element.tagName === 'IFRAME') {
              const src = (element as HTMLIFrameElement).src;
              (element as HTMLIFrameElement).src = '';
              (element as HTMLIFrameElement).src = src;
            } else {
              (element as HTMLMediaElement).pause();
            }
          });
        }
        if (visualizer) visualizer.style.display = 'none';
      });
    }

    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    function showTestimonial(index: number) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      testimonials[index].classList.add('active');
    }
    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }
    setInterval(nextTestimonial, 5000);

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      }
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    function animateStats() {
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count') || '0');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            stat.textContent = target.toString();
            clearInterval(timer);
          } else {
            stat.textContent = Math.round(current).toString();
          }
        }, 16);
      });
    }

    function checkScroll() {
      const serviceCards = document.querySelectorAll('.service-card');
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      const aboutImg = document.querySelector('.about-img');
      const aboutText = document.querySelector('.about-text');
      const teamMembers = document.querySelectorAll('.team-member');
      const statItems = document.querySelectorAll('.stat-item');
      const processSteps = document.querySelectorAll('.process-step');
      const blogPosts = document.querySelectorAll('.blog-post');
      const triggerBottom = window.innerHeight * 0.8;
      serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('show');
        }
      });
      portfolioItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
          item.classList.add('show');
        }
      });
      if (aboutImg) {
        const aboutImgTop = aboutImg.getBoundingClientRect().top;
        if (aboutImgTop < triggerBottom) {
          aboutImg.classList.add('show');
          if (aboutText) aboutText.classList.add('show');
        }
      }
      teamMembers.forEach(member => {
        const memberTop = member.getBoundingClientRect().top;
        if (memberTop < triggerBottom) {
          member.classList.add('show');
        }
      })
      statItems.forEach(stat => {
        const statTop = stat.getBoundingClientRect().top;
        if (statTop < triggerBottom) {
          stat.classList.add('show');
        }
      });
      processSteps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;
        if (stepTop < triggerBottom) {
          step.classList.add('show');
        }
      });
      blogPosts.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        if (postTop < triggerBottom) {
          post.classList.add('show');
        }
      });
      const statsSection = document.querySelector('.stats');
      if (statsSection) {
        const statsTop = statsSection.getBoundingClientRect().top;
        if (statsTop < triggerBottom) {
          animateStats();
        }
      }
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href === '#' || !href) return;
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Pitamaas Lab | Product Photography Studio - We Make Your Product Shine</title>
        <meta name="description" content="High-quality product photography services in India. We capture stunning images that enhance brand appeal and drive sales conversions. Expert lighting, composition, and digital enhancement." />
        <meta name="keywords" content="product photography, photography studio, product photos, e-commerce photography, brand photography, India photography, product shots, commercial photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Pitamaas Lab | Product Photography Studio - We Make Your Product Shine" />
        <meta property="og:description" content="High-quality product photography services in India. We capture stunning images that enhance brand appeal and drive sales conversions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pitamaas Lab | Product Photography Studio" />
        <meta name="twitter:description" content="High-quality product photography services in India. We capture stunning images that enhance brand appeal and drive sales conversions." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <AboutHeader showIcon={false} />
      <div className="particles" id="particles"></div>
      <div className="layout-1">
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --primary: #A3EB17;
            --secondary: #FF00A0;
            --dark: #000;
            --light: #fff;
            --gray: #1a1a1a;
            --dark-gray: #121212;
            --accent: #00D4FF;
            --background: var(--dark);
            --text: var(--light);
            --card-bg: rgba(0, 0, 0, 0.4);
            --header-bg: rgba(0, 0, 0, 0.95);
            --gradient: linear-gradient(135deg, rgba(163, 235, 23, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
            --layout: 1;
          }

          body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--background);
            color: var(--text);
            overflow-x: hidden;
          line-height: 1.6;
            transition: background-color 0.5s ease, color 0.5s ease;
          }

          /* Header and Footer Styles */
          .zq_header-area {
            position: relative;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .zq_footer-area {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            color: white;
            position: relative;
            z-index: 9999;
          }

          .zq_footer-area .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .zq_footer-widget-title {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .zq_footer-widget-text {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .zq_footer-widget-mail a {
            color: var(--primary);
            text-decoration: none;
          }

          .zq_footer-widget-mail a:hover {
            color: var(--secondary);
          }

          /* Header Navigation Styles */
          .zq_header-logo img {
            max-height: 50px;
            width: auto;
          }

          .zq_header-menu ul {
            list-style: none;
            margin: 0;
            padding: 0;
          display: flex;
          align-items: center;
            gap: 2rem;
          }

          .zq_header-menu ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .zq_header-menu ul li a:hover {
            color: var(--primary);
          }

          .zq_header-btn .btn {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            text-decoration: none;
          font-weight: 600;
            transition: all 0.3s ease;
          }

          .zq_header-btn .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(163, 235, 23, 0.3);
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
            color: var(--dark);
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

          .btn-outline {
            background: transparent;
            color: var(--primary);
            margin-left: 15px;
          }

          .btn-outline:hover {
            background: var(--primary);
            color: var(--dark);
          }

          .hero {
            height: 100vh;
          display: flex;
          align-items: center;
            position: relative;
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient);
            z-index: -1;
          }

          .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80') no-repeat center center/cover;
          }

          .hero-content {
            max-width: 650px;
            animation: fadeUp 1s ease forwards;
            opacity: 0;
            transform: translateY(50px);
          }

          .hero h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .hero h1 span {
            color: var(--primary);
          }

          .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            max-width: 500px;
          }

          .hero-play-btn {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: var(--primary);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10;
            animation: pulse 2s infinite;
          }

          .hero-play-btn i {
            color: var(--dark);
            font-size: 24px;
          }

          .services {
            padding: 100px 0;
            background: var(--gray);
          }

          .section-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
          }

          .section-title h2 {
            font-size: 2.5rem;
            display: inline-block;
            position: relative;
          }

          .section-title h2:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--primary);
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .service-card {
            background: var(--card-bg);
            border-radius: 10px;
            padding: 30px;
            text-align: center;
          transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(50px);
            position: relative;
            overflow: hidden;
          }

          .service-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
          height: 100%;
            background: linear-gradient(90deg, transparent, rgba(163, 235, 23, 0.2), transparent);
            transition: 0.5s;
          }

          .service-card:hover:before {
            left: 100%;
          }

          .service-card.show {
            opacity: 1;
            transform: translateY(0);
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }

          .service-icon {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
          }

          .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .portfolio {
            padding: 100px 0;
            background: var(--dark-gray);
          }

          .filter-buttons {
          display: flex;
          justify-content: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
          }

          .filter-btn {
            padding: 10px 20px;
            margin: 5px 10px;
            background: transparent;
            color: var(--text);
            border: 2px solid var(--primary);
            border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
            font-weight: 500;
          }

          .filter-btn.active, .filter-btn:hover {
            background: var(--primary);
            color: var(--dark);
          }

          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .portfolio-item {
            height: 250px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.5s ease;
          }

          .portfolio-item.show {
            opacity: 1;
            transform: scale(1);
          }

          .portfolio-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .portfolio-item:hover .portfolio-img {
            transform: scale(1.1);
          }

          .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .portfolio-item:hover .portfolio-overlay {
            opacity: 1;
          }

          .portfolio-overlay h3 {
            color: var(--primary);
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .portfolio-overlay p {
          text-align: center;
            padding: 0 20px;
          }

          .portfolio-play-icon {
          position: absolute;
            top: 50%;
          left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            background: var(--primary);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
            opacity: 0;
          transition: all 0.3s ease;
        }

          .portfolio-item:hover .portfolio-play-icon {
            opacity: 1;
          }

          .portfolio-play-icon i {
            color: var(--dark);
            font-size: 20px;
          }

          .media-player {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 10px;
            padding: 15px;
            z-index: 100;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.5s ease;
          }

          .media-player.active {
            transform: translateY(0);
            opacity: 1;
          }

          .player-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
          }

          .player-header h3 {
            color: var(--primary);
            font-size: 1.2rem;
          }

          .close-player {
            background: none;
            border: none;
            color: var(--text);
            font-size: 1.2rem;
            cursor: pointer;
          }

          .audio-player, .video-player {
            width: 100%;
          }

          .video-player {
            height: 170px;
            background: #000;
            margin-bottom: 10px;
          }

          .now-playing {
            margin-top: 10px;
            font-size: 0.9rem;
            color: var(--primary);
          }

          .visualizer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            height: 40px;
            margin-top: 10px;
          }

          .bar {
            width: 4px;
            background: var(--primary);
            border-radius: 2px;
            animation-duration: 1.3s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          opacity: 0.7;
          }

          @keyframes visualizer {
            0% { height: 5px; }
            100% { height: 100%; }
          }

          .about {
            padding: 100px 0;
            background: var(--gray);
          }

          .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
          }

          .about-img {
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s ease;
          }

          .about-img.show {
            opacity: 1;
            transform: translateX(0);
          }

          .about-img img {
            width: 100%;
            display: block;
          }

          .about-text {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s ease;
          }

          .about-text.show {
            opacity: 1;
            transform: translateX(0);
          }

          .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .about-text p {
            margin-bottom: 20px;
          }

          .stats {
            padding: 80px 0;
            background: var(--dark-gray);
            text-align: center;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
          }

          .stat-item {
            padding: 30px;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease;
          }

          .stat-item.show {
            opacity: 1;
            transform: translateY(0);
          }

          .stat-number {
          font-size: 3rem;
          font-weight: 800;
            color: var(--primary);
            margin-bottom: 10px;
        }

          .stat-text {
          font-size: 1.2rem;
          }

          .process {
            padding: 100px 0;
            background: var(--gray);
          }

          .process-steps {
          display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 50px;
          }

          .process-step {
            width: 22%;
            text-align: center;
            position: relative;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease;
          }

          .process-step.show {
            opacity: 1;
            transform: translateY(0);
          }

          .process-step:not(:last-child):after {
            content: '';
            position: absolute;
            top: 40px;
            right: -40%;
            width: 80%;
            height: 2px;
            background: var(--primary);
          }

          .step-number {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--primary);
            color: var(--dark);
          display: flex;
          justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-weight: 800;
            margin: 0 auto 20px;
          }

          .step-title {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--primary);
          }

          .clients {
            padding: 80px 0;
            background: var(--dark-gray);
            text-align: center;
          }

          .clients-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 40px;
          align-items: center;
          }

          .client-logo {
            opacity: 0.7;
            transition: all 0.3s ease;
            filter: grayscale(100%);
            max-width: 150px;
            margin: 0 auto;
          }

          .client-logo:hover {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.1);
          }

          .testimonials {
            padding: 100px 0;
            background: var(--gray);
          }

          .testimonial-slider {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            height: 300px;
          }

          .testimonial {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease;
          display: flex;
          flex-direction: column;
            justify-content: center;
          align-items: center;
            text-align: center;
            padding: 0 20px;
          }

          .testimonial.active {
            opacity: 1;
          }

          .testimonial-text {
            font-size: 1.2rem;
            margin-bottom: 20px;
            position: relative;
          }

          .testimonial-text:before, .testimonial-text:after {
            content: '"';
            font-size: 3rem;
            color: var(--primary);
            position: absolute;
            opacity: 0.3;
          }

          .testimonial-text:before {
            top: -30px;
            left: -20px;
          }

          .testimonial-text:after {
            bottom: -50px;
            right: -20px;
          }

          .testimonial-author {
          font-weight: 600;
            color: var(--primary);
          }

          .testimonial-role {
            font-size: 0.9rem;
            color: #ccc;
          }

          .testimonial-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 20px;
            border: 3px solid var(--primary);
          }

          .testimonial-avatar img {
          width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .team {
            padding: 100px 0;
            background: var(--dark-gray);
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .team-member {
            text-align: center;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease;
          }

          .team-member.show {
            opacity: 1;
            transform: translateY(0);
          }

          .member-img {
            width: 200px;
            height: 200px;
          border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px;
            border: 3px solid var(--primary);
            position: relative;
          }

          .member-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .team-member:hover .member-img img {
            transform: scale(1.1);
          }

          .member-info h3 {
            font-size: 1.5rem;
            margin-bottom: 5px;
            color: var(--primary);
          }

          .member-info p {
            color: #ccc;
          }

          .faq {
            padding: 100px 0;
            background: var(--gray);
          }

          .faq-container {
            max-width: 800px;
            margin: 0 auto;
          }

          .faq-item {
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            background: var(--card-bg);
          }

          .faq-question {
            padding: 20px;
            cursor: pointer;
          display: flex;
            justify-content: space-between;
          align-items: center;
            font-weight: 600;
          }

          .faq-answer {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }

          .faq-item.active .faq-answer {
            max-height: 200px;
            padding: 0 20px 20px;
          }

          .blog {
            padding: 100px 0;
            background: var(--dark-gray);
          }

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .blog-post {
            background: var(--card-bg);
            border-radius: 10px;
            overflow: hidden;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease;
          }

          .blog-post.show {
            opacity: 1;
            transform: translateY(0);
          }

          .blog-img {
            height: 200px;
            overflow: hidden;
          }

          .blog-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .blog-post:hover .blog-img img {
            transform: scale(1.1);
          }

          .blog-content {
            padding: 20px;
          }

          .blog-date {
            color: var(--primary);
            font-size: 0.9rem;
            margin-bottom: 10px;
          }

          .blog-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .blog-excerpt {
            margin-bottom: 15px;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 var(--primary);
            }
            70% {
              transform: scale(1.05);
              box-shadow: 0 0 0 15px rgba(163, 235, 23, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(163, 235, 23, 0);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .pulse {
            animation: pulse 2s infinite;
          }

          .float {
            animation: float 3s ease-in-out infinite;
          }

          .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }

          .particle {
            position: absolute;
            background: var(--primary);
            border-radius: 50%;
            opacity: 0.3;
            animation: float 8s infinite linear;
          }

          @media (max-width: 992px) {
            .about-content {
              grid-template-columns: 1fr;
            }
            
            .about-img, .about-text {
              transform: none !important;
            }
            
            .hero h1 {
              font-size: 3rem;
            }
            
            .media-player {
              width: 250px;
              right: 10px;
              bottom: 10px;
            }
            
            .process-step {
              width: 48%;
              margin-bottom: 40px;
            }
            
            .process-step:not(:last-child):after {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 2.5rem;
            }
            
            .btn {
              display: block;
              margin-bottom: 15px;
              text-align: center;
            }
            
            .btn-outline {
              margin-left: 0;
            }
            
            .media-player {
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              border-radius: 0;
              transform: translateY(100%);
            }
            
            .media-player.active {
              transform: translateY(0);
            }
            
            .process-step {
              width: 100%;
          }
        }
      `}</style>

        <section className="hero" id="home">
          <div className="hero-bg"></div>
                <div className="container">
            <div className="hero-content">
              <h1>WE MAKE YOUR <span>PRODUCT</span> <span>SHINE</span></h1>
              <p>High-quality photography is key to showcasing your product in the online marketplace. Recognized as one of the leading product photography agencies in India, we capture stunning images that enhance brand appeal and drive sales conversions. Our expertise in lighting, composition, and digital enhancement ensures every shot reflects exceptional quality and leaves a lasting impression.</p>
              <a href="#portfolio" className="btn btn-outline">View Our Work</a>
                    </div>
                        </div>
          <div className="hero-play-btn pulse" id="heroPlayBtn">
            <i className="fas fa-play"></i>
                </div>
              </section>

        <section className="services" id="services">
                <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
                        </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-video"></i>
                    </div>
                <h3>Video Production</h3>
                <p>From concept to final edit, we create stunning videos that tell your story and engage your audience.</p>
                  </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h3>Music Production</h3>
                <p>Original compositions, sound design, and audio post-production to elevate your projects.</p>
                          </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-camera"></i>
                        </div>
                <h3>Photography</h3>
                <p>Captivating images that communicate your brand's essence and leave a lasting impression.</p>
                    </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                          </div>
                <h3>Visual Effects</h3>
                <p>Stunning visual effects that bring your vision to life with cutting-edge technology.</p>
                        </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-podcast"></i>
                    </div>
                <h3>Audio Post-Production</h3>
                <p>Professional audio editing, mixing, and mastering for your videos and music projects.</p>
                          </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-desktop"></i>
                        </div>
                <h3>Motion Graphics</h3>
                <p>Dynamic animations and graphics that enhance your visual storytelling.</p>
                    </div>
                  </div>
                </div>
              </section>

        <section className="portfolio" id="portfolio">
                <div className="container">
            <div className="section-title">
              <h2>Our Portfolio</h2>
                            </div>
            <div className="filter-buttons">
              <button className="filter-btn active" data-filter="all">All</button>
              <button className="filter-btn" data-filter="video">Videos</button>
              <button className="filter-btn" data-filter="music">Music</button>
              <button className="filter-btn" data-filter="image">Images</button>
              <button className="filter-btn" data-filter="vfx">VFX</button>
                          </div>
            <div className="portfolio-grid">
              <div className="portfolio-item" data-category="video">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Music Video" className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Music Video</h3>
                  <p>High-energy music video for emerging artist</p>
                  <button className="btn play-btn" data-type="video" data-src="https://www.youtube.com/embed/jfKfPfyJRdk">Play Video</button>
                        </div>
                <div className="portfolio-play-icon">
                  <i className="fas fa-play"></i>
                          </div>
                        </div>
              <div className="portfolio-item" data-category="music">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Music Production" className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Album Production</h3>
                  <p>Full album production for indie band</p>
                  <button className="btn play-btn" data-type="audio" data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">Play Audio</button>
                    </div>
                <div className="portfolio-play-icon">
                  <i className="fas fa-play"></i>
                            </div>
                          </div>
              <div className="portfolio-item" data-category="image">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Event Photography" className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Festival Coverage</h3>
                  <p>Complete visual coverage of major music festival</p>
                        </div>
                          </div>
              <div className="portfolio-item" data-category="video">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Commercial Video" className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Commercial Ad</h3>
                  <p>30-second commercial for lifestyle brand</p>
                  <button className="btn play-btn" data-type="video" data-src="https://www.youtube.com/embed/jfKfPfyJRdk">Play Video</button>
                        </div>
                <div className="portfolio-play-icon">
                  <i className="fas fa-play"></i>
                    </div>
                            </div>
              <div className="portfolio-item" data-category="music">
                <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Music Production" className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Soundtrack</h3>
                  <p>Original soundtrack for independent film</p>
                  <button className="btn play-btn" data-type="audio" data-src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3">Play Audio</button>
                          </div>
                <div className="portfolio-play-icon">
                  <i className="fas fa-play"></i>
                        </div>
                          </div>
              <div className="portfolio-item" data-category="vfx">
                <img src="https://images.unsplash.com/photo-1558603666-13c2d9c2c6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="VFX Work" className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>Visual Effects</h3>
                  <p>CGI and visual effects for sci-fi short film</p>
                  <button className="btn play-btn" data-type="video" data-src="https://www.youtube.com/embed/jfKfPfyJRdk">Play Video</button>
                        </div>
                <div className="portfolio-play-icon">
                  <i className="fas fa-play"></i>
                </div>
                    </div>
                  </div>
                </div>
              </section>

        <div className="media-player" id="mediaPlayer">
          <div className="player-header">
            <h3 id="playerTitle">Now Playing</h3>
            <button className="close-player" id="closePlayer"><i className="fas fa-times"></i></button>
                            </div>
          <div id="playerContent">
            {/* Content will be added dynamically */}
                            </div>
          <div className="now-playing" id="nowPlaying"></div>
          <div className="visualizer" id="visualizer">
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.1s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.2s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.3s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.4s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.5s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.6s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.7s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.8s'}}></div>
            <div className="bar" style={{animationName: 'visualizer', animationDelay: '0.9s'}}></div>
                          </div>
                            </div>

        <section className="about" id="about">
          <div className="container">
            <div className="section-title">
              <h2>About Our Photography Studio</h2>
                            </div>
            <div className="about-content">
              <div className="about-img">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80" alt="Pitamaas Lab Photography Studio" />
                          </div>
              <div className="about-text">
                <h2>We Make Your Product Shine</h2>
                <p>High-quality photography is key to showcasing your product in the online marketplace. Recognized as one of the leading product photography agencies in India, we capture stunning images that enhance brand appeal and drive sales conversions.</p>
                <p>Our expertise in lighting, composition, and digital enhancement ensures every shot reflects exceptional quality and leaves a lasting impression. We understand that product photography is more than just taking pictures - it's about creating visual stories that connect with your customers.</p>
                <p>Our state-of-the-art studio is equipped with professional lighting, high-end cameras, and advanced post-production capabilities. We've worked with major e-commerce brands, startups, and businesses of all sizes to create compelling product imagery that drives results.</p>
                <div className="stats">
                  <div className="stat">
                    <h3>1000+</h3>
                    <p>Products Photographed</p>
                            </div>
                  <div className="stat">
                    <h3>150+</h3>
                    <p>E-commerce Brands</p>
                            </div>
                  <div className="stat">
                    <h3>95%</h3>
                    <p>Client Satisfaction</p>
                          </div>
                  <div className="stat">
                    <h3>5+</h3>
                    <p>Years Experience</p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </section>

        <section className="stats">
                <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number" data-count="250">0</div>
                <div className="stat-text">Projects Completed</div>
                      </div>
              <div className="stat-item">
                <div className="stat-number" data-count="50">0</div>
                <div className="stat-text">Happy Clients</div>
                    </div>
              <div className="stat-item">
                <div className="stat-number" data-count="15">0</div>
                <div className="stat-text">Awards Won</div>
                        </div>
              <div className="stat-item">
                <div className="stat-number" data-count="10">0</div>
                <div className="stat-text">Years Experience</div>
                      </div>
                    </div>
                  </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <div className="section-title">
              <h2>Our Process</h2>
                            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3 className="step-title">Concept</h3>
                <p>We brainstorm ideas and develop a creative concept that aligns with your vision.</p>
                          </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3 className="step-title">Planning</h3>
                <p>We create a detailed plan including storyboards, shot lists, and production schedules.</p>
                        </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3 className="step-title">Production</h3>
                <p>Our team executes the plan with professional equipment and expert techniques.</p>
                                </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3 className="step-title">Delivery</h3>
                <p>We deliver the final product that exceeds your expectations and achieves your goals.</p>
                                </div>
                                </div>
                                </div>
        </section>

        <section className="clients">
          <div className="container">
            <div className="section-title">
              <h2>Our Clients</h2>
                                </div>
            <div className="clients-grid">
              <img src="https://via.placeholder.com/150x80/333/ffffff?text=Client+1" alt="Client 1" className="client-logo" />
              <img src="https://via.placeholder.com/150x80/333/ffffff?text=Client+2" alt="Client 2" className="client-logo" />
              <img src="https://via.placeholder.com/150x80/333/ffffff?text=Client+3" alt="Client 3" className="client-logo" />
              <img src="https://via.placeholder.com/150x80/333/ffffff?text=Client+4" alt="Client 4" className="client-logo" />
              <img src="https://via.placeholder.com/150x80/333/ffffff?text=Client+5" alt="Client 5" className="client-logo" />
              <img src="https://via.placeholder.com/150x80/333/ffffff?text=Client+6" alt="Client 6" className="client-logo" />
                                </div>
                                </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Client Testimonials</h2>
                                </div>
            <div className="testimonial-slider">
              <div className="testimonial active">
                <div className="testimonial-avatar">
                  <img src="/placeholder-user.jpg" alt="James Wilson" />
                          </div>
                <p className="testimonial-text">Pitamaas Lab transformed our product photography completely. Their attention to lighting and composition made our products look absolutely stunning. Our online sales increased by 40% after using their photos.</p>
                <p className="testimonial-author">James Wilson</p>
                <p className="testimonial-role">E-commerce Manager, TechGear India</p>
                        </div>
              <div className="testimonial">
                <div className="testimonial-avatar">
                  <img src="/placeholder-user.jpg" alt="Emily Roberts" />
                </div>
                <p className="testimonial-text">The product photography quality was exceptional. They perfectly captured the essence of our brand and created images that truly showcase our products. Our conversion rates improved significantly.</p>
                <p className="testimonial-author">Emily Roberts</p>
                <p className="testimonial-role">Founder, StyleHub Fashion</p>
                        </div>
              <div className="testimonial">
                <div className="testimonial-avatar">
                  <img src="/placeholder-user.jpg" alt="David Kim" />
                </div>
                <p className="testimonial-text">Working with Pitamaas Lab was a game-changer for our e-commerce business. Their product photography skills helped us stand out from competitors and significantly increased our brand appeal.</p>
                <p className="testimonial-author">David Kim</p>
                <p className="testimonial-role">CEO, HomeDecor Plus</p>
              </div>
                  </div>
                </div>
              </section>

        <section className="team" id="team">
                <div className="container">
            <div className="section-title">
              <h2>Our Creative Team</h2>
                              </div>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-img">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Creative Director" />
                            </div>
                <div className="member-info">
                  <h3>Alex Johnson</h3>
                  <p>Creative Director</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                          </div>
                              </div>
                              </div>
              <div className="team-member">
                <div className="member-img">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Head of Production" />
                            </div>
                <div className="member-info">
                  <h3>Sarah Williams</h3>
                  <p>Head of Production</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              <div className="team-member">
                <div className="member-img">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Sound Engineer" />
                </div>
                <div className="member-info">
                  <h3>Michael Chen</h3>
                  <p>Sound Engineer</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                  </div>
              <div className="team-member">
                <div className="member-img">
                  <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Visual Artist" />
                </div>
                <div className="member-info">
                  <h3>Jessica Martinez</h3>
                  <p>Visual Artist</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                          </div>
                            </div>
                          </div>
                  </div>
                </div>
              </section>

        <section className="faq">
                <div className="container">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
                          </div>
            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">
                  <span>How long does a typical project take?</span>
                  <i className="fas fa-chevron-down"></i>
                          </div>
                <div className="faq-answer">
                  <p>The timeline varies depending on the scope and complexity of the project. A simple video production might take 2-3 weeks, while a more complex project with visual effects could take 2-3 months. We'll provide a detailed timeline during our initial consultation.</p>
                          </div>
                        </div>
              <div className="faq-item">
                <div className="faq-question">
                  <span>What is your pricing structure?</span>
                  <i className="fas fa-chevron-down"></i>
                      </div>
                <div className="faq-answer">
                  <p>We offer customized pricing based on the specific requirements of each project. Factors that influence cost include project complexity, equipment needed, crew size, and post-production requirements. We provide detailed quotes after understanding your needs.</p>
                            </div>
                        </div>
              <div className="faq-item">
                <div className="faq-question">
                  <span>Do you work with remote clients?</span>
                  <i className="fas fa-chevron-down"></i>
                      </div>
                <div className="faq-answer">
                  <p>Yes, we frequently work with clients from around the world. We use modern collaboration tools to ensure smooth communication throughout the project, regardless of your location.</p>
                    </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <span>What file formats do you deliver?</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>We deliver in all standard formats suitable for your intended use (web, broadcast, social media, etc.). Common formats include MP4, MOV, ProRes, and DNxHD for video, and WAV, MP3, and AIFF for audio.</p>
                </div>
              </div>
            </div>
                </div>
              </section>

        <section className="blog">
                <div className="container">
            <div className="section-title">
              <h2>Latest from Our Blog</h2>
                    </div>
            <div className="blog-grid">
              <div className="blog-post">
                <div className="blog-img">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Blog Post" />
                </div>
                <div className="blog-content">
                  <div className="blog-date">June 15, 2023</div>
                  <h3 className="blog-title">The Future of Video Production in 2023</h3>
                  <p className="blog-excerpt">Explore the latest trends and technologies shaping the video production industry this year.</p>
                  <a href="#" className="btn">Read More</a>
            </div>
          </div>
              <div className="blog-post">
                <div className="blog-img">
                  <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Blog Post" />
        </div>
                <div className="blog-content">
                  <div className="blog-date">May 28, 2023</div>
                  <h3 className="blog-title">How Music Enhances Visual Storytelling</h3>
                  <p className="blog-excerpt">Discover the psychological impact of music in video content and how to choose the right soundtrack.</p>
                  <a href="#" className="btn">Read More</a>
      </div>
            </div>
              <div className="blog-post">
                <div className="blog-img">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Blog Post" />
          </div>
                <div className="blog-content">
                  <div className="blog-date">April 12, 2023</div>
                  <h3 className="blog-title">Essential Photography Tips for Beginners</h3>
                  <p className="blog-excerpt">Learn fundamental techniques to improve your photography skills, from composition to lighting.</p>
                  <a href="#" className="btn">Read More</a>
          </div>
            </div>
          </div>
            </div>
        </section>
          </div>
      <Footer />
    </>
  );
};

export default Home;