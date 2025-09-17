

"use client"

import type React from "react"
import { useMemo, useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Color system: black primary, white secondary, gray borders and text

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Real images from your public folder
  const showcaseImages = useMemo(
    () => [
      { src: "/3d-motion-lab-frame.png", label: "3D Motion Lab" },
      { src: "/fintech-app-ui-screen.png", label: "Fintech App" },
      { src: "/retail-dashboard-ui.png", label: "Retail Dashboard" },
      { src: "/webgl-interactive-tile.png", label: "WebGL Interactive" },
    ],
    [],
  )

  const team = useMemo(
    () => [
      {
        name: "Alex Rivera",
        role: "Creative Director & Founder",
        bio: "Visionary leader with 12+ years in digital innovation. Former Apple Design Award winner.",
        img: "/placeholder-user.jpg",
        skills: ["Strategy", "Leadership", "Innovation"]
      },
      { 
        name: "Maya Chen", 
        role: "Head of Design", 
        bio: "Design systems expert with a passion for human-centered experiences.", 
        img: "/placeholder-user.jpg",
        skills: ["UI/UX", "Design Systems", "Research"]
      },
      { 
        name: "Jonas Patel", 
        role: "Lead Developer", 
        bio: "Full-stack architect specializing in performance and scalability.", 
        img: "/placeholder-user.jpg",
        skills: ["React", "Node.js", "Architecture"]
      },
      { 
        name: "Sofia Lee", 
        role: "Project Manager", 
        bio: "Operations specialist ensuring seamless delivery and client satisfaction.", 
        img: "/placeholder-user.jpg",
        skills: ["Agile", "Operations", "Client Relations"]
      },
      { 
        name: "Sam Okoye", 
        role: "3D Artist", 
        bio: "Visual storyteller creating immersive experiences through cutting-edge 3D.", 
        img: "/placeholder-user.jpg",
        skills: ["3D Modeling", "Animation", "WebGL"]
      },
      { 
        name: "Priya N.", 
        role: "Frontend Engineer", 
        bio: "Accessibility advocate building inclusive and performant user interfaces.", 
        img: "/placeholder-user.jpg",
        skills: ["Accessibility", "Performance", "Frontend"]
      },
    ],
    [],
  )

  const values = useMemo(
    () => [
      {
        title: "Innovation First",
        description: "We push boundaries and explore new technologies to create cutting-edge solutions.",
        icon: "🚀"
      },
      {
        title: "Quality Excellence",
        description: "Every project is crafted with meticulous attention to detail and uncompromising quality.",
        icon: "✨"
      },
      {
        title: "Collaborative Spirit",
        description: "We believe in the power of teamwork and transparent communication with our clients.",
        icon: "🤝"
      },
      {
        title: "Future Forward",
        description: "We design for tomorrow, building scalable solutions that grow with your business.",
        icon: "🔮"
      }
    ],
    []
  )

  const stats = useMemo(
    () => [
      { number: "50+", label: "Projects Delivered", suffix: "" },
      { number: "25+", label: "Happy Clients", suffix: "" },
      { number: "5+", label: "Years Experience", suffix: "" },
      { number: "100", label: "Success Rate", suffix: "%" }
    ],
    []
  )

  // Create refs for animation triggers
  const statsRef = useRef(null)
  const aboutRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  const showcaseRef = useRef(null)
  const teamRef = useRef(null)
  const ctaRef = useRef(null)
  
  const isStatsInView = useInView(statsRef, { once: true, margin: "-20%" })
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-20%" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-20%" })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-20%" })
  const isShowcaseInView = useInView(showcaseRef, { once: true, margin: "-20%" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-20%" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-20%" })

  // Scroll progress animation
  const { scrollYProgress: globalScrollYProgress } = useScroll()
  const scaleX = useTransform(globalScrollYProgress, [0, 1], [0, 1])

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  // Stagger children variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Floating animation for decorative elements
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
              style={{ y, opacity }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                PITAMAAS
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We are a creative technology agency crafting premium brand, product, and immersive experiences for ambitious clients.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span 
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Est. 2020
              </motion.span>
              <motion.span 
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(55,65,81,0.7)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Global Team
              </motion.span>
              <motion.span 
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(55,65,81,0.7)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Award Winning
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(255, 255, 255, 0.7)",
                    "0 0 0 10px rgba(255, 255, 255, 0)",
                    "0 0 0 0 rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform"
                >
                  View Our Work
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={textVariants}
                className="text-center group"
              >
                <div className="relative">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}{stat.suffix}
                  </motion.div>
                  <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={isAboutInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Who We Are
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Pitamaas is a full-service creative technology agency specializing in digital innovation, 
                brand experiences, and cutting-edge web development. We bridge the gap between creative 
                vision and technical excellence.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Strategy-led, prototype-first, engineered for impact. We believe in the power of 
                technology to transform businesses and create meaningful connections with audiences.
              </motion.p>
              <motion.div 
                whileHover={{ x: 5 }} 
                initial={{ opacity: 0 }}
                animate={isAboutInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/details"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-semibold"
                >
                  Learn More About Our Process
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src="/images/phantom-reference.png"
                  alt="Company Overview"
                  className="w-full h-96 object-cover"
                  initial={{ scale: 1.1 }}
                  animate={isAboutInView ? { scale: 1 } : {}}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Our Studio</h3>
                  <p className="text-sm text-gray-200">Where creativity meets technology</p>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-gradient-to-br from-gray-900/30 to-gray-800/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to creative technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={textVariants}
                className="group"
              >
                <motion.div 
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(255,255,255,0.3)",
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Our Journey */}
      <section ref={timelineRef} className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              From a small team with big dreams to a leading creative technology agency.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-black to-white hidden md:block"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            <div className="space-y-16">
              {[
                {
                  year: "2020",
                  title: "Founded",
                  description: "Started as a small team with big dreams of revolutionizing digital experiences.",
                  side: "left"
                },
                {
                  year: "2022", 
                  title: "Expansion",
                  description: "Grew our team and expanded services to include 3D, motion graphics, and WebGL.",
                  side: "right"
                },
                {
                  year: "2024",
                  title: "Today",
                  description: "Leading creative technology agency serving global brands with innovative solutions.",
                  side: "left"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: milestone.side === "left" ? -100 : 100 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`flex items-center ${milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${milestone.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <motion.div 
                      className="bg-white border-2 border-black rounded-2xl p-8 transition-all duration-300 hover:bg-black hover:text-white"
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)"
                      }}
                    >
                      <div className="text-black font-bold text-lg mb-2 group-hover:text-white transition-colors">{milestone.year}</div>
                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-300 transition-colors">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="hidden md:flex items-center justify-center w-16 h-16 bg-black text-white rounded-full border-4 border-white z-10"
                    initial={{ scale: 0 }}
                    animate={isTimelineInView ? { scale: 1 } : {}}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.3, type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <span className="font-bold text-sm">{milestone.year}</span>
                  </motion.div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button for Journey Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              className="px-8 py-4 bg-black text-white font-semibold rounded-full border-2 border-black transition-all duration-300 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Full Story
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section ref={showcaseRef} className="py-24 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isShowcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore some of our recent projects showcasing our expertise in creative technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isShowcaseInView ? "visible" : "hidden"}
          >
            {showcaseImages.map((project, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-black hover:border-white/30 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.src || "/placeholder.svg"}
                    alt={project.label}
                    className="h-64 md:h-80 w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.label}</h3>
                  <motion.p 
                    className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    View Project →
                  </motion.p>
                </div>
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The creative minds and technical experts behind our innovative solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={textVariants}
                className="group"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={member.img || "/placeholder.svg"}
                      alt={member.name}
                      className="h-64 w-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                    <p className="text-white font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.1 + skillIndex * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-white/10 to-gray-800/30">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's create something extraordinary. Get in touch and let's discuss how we can bring your vision to life.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(255, 255, 255, 0.7)",
                    "0 0 0 10px rgba(255, 255, 255, 0)",
                    "0 0 0 0 rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
                >
                  Start a Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/details"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16">
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Pitamaas</h4>
              <p className="text-sm text-gray-400 mb-4">
                Creative technology agency crafting premium digital experiences for ambitious clients.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </motion.a>
                              <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 00224 4.59z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Web Development", "UI/UX Design", "3D & Motion", "Brand Identity", "E-commerce"].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href="#" className="hover:text-white transition">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {["About Us", "Our Team", "Careers", "Contact", "Blog"].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href="#" className="hover:text-white transition">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4">Get In Touch</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>hello@pitamaas.com</p>
                <p>+1 (555) 123-4567</p>
                <div className="mt-4">
                  <h5 className="text-xs font-medium text-gray-300 mb-2">Newsletter</h5>
                  <form className="flex items-center gap-2">
                    <motion.input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-md border border-gray-800 bg-black px-3 py-2 text-xs outline-none placeholder:text-gray-500 focus:border-gray-700"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button 
                      className="rounded-md bg-white px-3 py-2 text-xs text-black hover:bg-gray-200 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} Pitamaas. All rights reserved.</span>
              <motion.a 
                href="#" 
                className="hover:text-white transition"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
            <motion.div whileHover={{ x: 5 }}>
              <Link href="/" className="hover:text-white transition">
                Back to Work →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}