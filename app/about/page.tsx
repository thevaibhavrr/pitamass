"use client"

import type React from "react"
import { useMemo, useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCursorPan } from "@/hooks/use-cursor-pan"

// Color system: bg-neutral-950, white, neutral-800 borders, neutral-400 text, cyan accent

export default function AboutPage() {
  // Cursor parallax on hero headline and media grid
  const heroContainer = useRef<HTMLDivElement>(null)
  const heroContent = useRef<HTMLDivElement>(null)
  useCursorPan(heroContainer, heroContent, { intensity: 0.5 })

  const mediaContainer = useRef<HTMLDivElement>(null)
  const mediaContent = useRef<HTMLDivElement>(null)
  useCursorPan(mediaContainer, mediaContent, { intensity: 0.5 })

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

  const office = useMemo(
    () => [
      { src: "https://cdn.prod.website-files.com/64c924dc8db620cf2833a42d/65141f24cc8e47f406e6d66d_DesignStudio%20New%20York_Studio-min%20(1).jpg", caption: "Design Studio" },
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
      },
      { 
        name: "Maya Chen", 
        role: "Head of Design", 
        bio: "Design systems expert with a passion for human-centered experiences.", 
        img: "/placeholder-user.jpg" 
      },
      { 
        name: "Jonas Patel", 
        role: "Lead Developer", 
        bio: "Full-stack architect specializing in performance and scalability.", 
        img: "/placeholder-user.jpg" 
      },
      { 
        name: "Sofia Lee", 
        role: "Project Manager", 
        bio: "Operations specialist ensuring seamless delivery and client satisfaction.", 
        img: "/placeholder-user.jpg" 
      },
      { 
        name: "Sam Okoye", 
        role: "3D Artist", 
        bio: "Visual storyteller creating immersive experiences through cutting-edge 3D.", 
        img: "/placeholder-user.jpg" 
      },
      { 
        name: "Priya N.", 
        role: "Frontend Engineer", 
        bio: "Accessibility advocate building inclusive and performant user interfaces.", 
        img: "/placeholder-user.jpg" 
      },
    ],
    [],
  )

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Banner Section */}
      <section
        ref={heroContainer}
        className="relative mx-auto w-full max-w-7xl px-6 md:px-8 pt-24 md:pt-32 pb-16 cursor-grab select-none"
      >
        <div ref={heroContent} className="relative select-none" style={{ minWidth: "100%", minHeight: "100%" }}>
          <motion.header 
            className="flex items-end justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-balance font-sans text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight uppercase">
                PITAMAAS
              </h1>
              <p className="mt-4 text-lg md:text-xl text-neutral-300 font-light">
                Creative Technology Agency
              </p>
            </div>
            <Link
              href="/"
              className="hidden md:inline-flex rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm hover:bg-neutral-800 transition"
            >
              View Work
            </Link>
          </motion.header>

          <motion.div 
            className="mt-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-neutral-300 mb-6">
              We are a creative technology agency crafting premium brand, product, and immersive experiences for ambitious
              clients. Strategy-led, prototype-first, engineered for impact.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <span className="px-3 py-1 bg-neutral-800 rounded-full">Est. 2020</span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">Global Team</span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">Award Winning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Who We Are</h2>
            <div className="space-y-6 text-neutral-300">
              <p className="text-lg leading-relaxed">
                Pitamaas is a full-service creative technology agency specializing in digital innovation, 
                brand experiences, and cutting-edge web development. We bridge the gap between creative 
                vision and technical excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-medium mb-2">50+</h3>
                  <p className="text-sm text-neutral-400">Projects Delivered</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">25+</h3>
                  <p className="text-sm text-neutral-400">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">5+</h3>
                  <p className="text-sm text-neutral-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Global</h3>
                  <p className="text-sm text-neutral-400">Remote Team</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/phantom-reference.png"
              alt="Company Overview"
              className="w-full h-80 object-cover rounded-lg border border-neutral-800"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-neutral-900/50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-neutral-300 mb-6">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in the digital landscape.
              </p>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Deliver exceptional user experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Push the boundaries of creative technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Build scalable and sustainable solutions</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed text-neutral-300 mb-6">
                To be the leading creative technology agency that shapes the future of digital 
                experiences, setting new standards for innovation, creativity, and technical excellence.
              </p>
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-white font-medium mb-3">Core Values</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Innovation</div>
                  <div>Quality</div>
                  <div>Collaboration</div>
                  <div>Transparency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Founded in 2020, Pitamaas began as a small team of passionate designers and developers 
            who believed in the power of technology to transform businesses and create meaningful connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-cyan-400">2020</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Founded</h3>
            <p className="text-neutral-300">
              Started as a small team with big dreams of revolutionizing digital experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-cyan-400">2022</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expansion</h3>
            <p className="text-neutral-300">
              Grew our team and expanded services to include 3D, motion graphics, and WebGL.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-cyan-400">2024</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Today</h3>
            <p className="text-neutral-300">
              Leading creative technology agency serving global brands with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section ref={mediaContainer} className="relative cursor-grab select-none py-16 md:py-24">
        <div ref={mediaContent} className={cn("mx-auto w-full max-w-7xl px-6 md:px-8", "min-h-[110%] min-w-[102%] select-none")}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Work</h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Explore some of our recent projects showcasing our expertise in creative technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {showcaseImages.map((m, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-950"
              >
                <img
                  src={m.src || "/placeholder.svg"}
                  alt={m.label}
                  className="h-64 md:h-80 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 text-sm text-neutral-300 bg-black/30 backdrop-blur-sm">
                  <span className="font-medium">{m.label}</span>
                  <span className="opacity-70">View Project</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office – parallax on scroll */}
      <OfficeParallax items={office} />

      {/* Our Team */}
      <section className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <motion.header 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            The creative minds and technical experts behind our innovative solutions.
          </p>
        </motion.header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950"
            >
              <img
                src={t.img || "/placeholder.svg"}
                alt={t.name}
                className="h-80 w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
                <p className="text-sm text-cyan-400 mb-2">{t.role}</p>
                <p className="text-xs text-neutral-300 leading-relaxed">{t.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Pitamaas</h4>
              <p className="text-sm text-neutral-400 mb-4">
                Creative technology agency crafting premium digital experiences for ambitious clients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition">3D & Motion</a></li>
                <li><a href="#" className="hover:text-white transition">Brand Identity</a></li>
                <li><a href="#" className="hover:text-white transition">E-commerce</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4">Get In Touch</h4>
              <div className="space-y-3 text-sm text-neutral-400">
                <p>hello@pitamaas.com</p>
                <p>+1 (555) 123-4567</p>
                <div className="mt-4">
                  <h5 className="text-xs font-medium text-neutral-300 mb-2">Newsletter</h5>
                  <form className="flex items-center gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs outline-none placeholder:text-neutral-500 focus:border-neutral-700"
                    />
                    <button className="rounded-md bg-cyan-400 px-3 py-2 text-xs text-black hover:bg-cyan-300 transition">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} Pitamaas. All rights reserved.</span>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
            <Link href="/" className="hover:text-white transition">
              Back to Work →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}


function OfficeParallax({ items }: { items: { src: string; caption: string }[] }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = container.current
    if (!el) return
    const imgs = Array.from(el.querySelectorAll<HTMLImageElement>("[data-parallax]"))
    let rafId: number | null = null
    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        const vh = window.innerHeight
        imgs.forEach((img) => {
          const r = img.getBoundingClientRect()
          const centerDelta = r.top + r.height / 2 - vh / 2
          const progress = Math.max(-1, Math.min(1, centerDelta / (vh / 2)))
          const offset = progress * 20 // px
          img.style.transform = `translateY(${offset}px) scale(1.02)`
        })
        rafId = null
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section ref={container} className="relative my-16 md:my-24">
      <div className="mx-auto w-full max-w-7xl">
        {items.map((o, i) => (
          <figure key={i} className="relative">
            <img
              data-parallax
              src={o.src || "/placeholder.svg"}
              alt={o.caption}
              className="h-[60vh] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-sm text-neutral-200 bg-gradient-to-t from-black/60 to-transparent">
              {o.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}


// import React from 'react';
// import Head from 'next/head';

// const About = () => {
//   return (
//     <>
//       <Head>
//         <title>About Us - Your Company Name</title>
//         <meta name="description" content="Learn about our company, mission, vision, and team" />
//       </Head>

//       <div className="min-h-screen bg-white text-black">
//         {/* Banner Section */}
//         <section className="relative h-100 w-full">
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ 
//               backgroundImage: "url('https://img.freepik.com/free-vector/gradient-business-horizontal-banner_23-2149695712.jpg')",
//               backgroundColor: "rgba(0,0,0,0.5)",
//               backgroundBlendMode: "overlay"
//             }}
//           >
//             <div className="flex items-center justify-center h-full">
//               <h1 className="text-4xl md:text-5xl font-bold text-white">Pitamaas</h1>
//             </div>
//           </div>
//         </section>

//         {/* Company Details Section */}
//         <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
//             <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//               Packaging is the first look of your product like how you adore your clothes just as how you adore your product as we take the responsibility to design your product with full of uniqueness and creativity because we are the best packaging designing agency in India renowned for designing innovative and impactful brand identities.
//             </p>
//           </div>
//         </section>

//         {/* Mission and Vision Section */}
//         <section className="py-16 bg-gray-100 px-4 md:px-8">
//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//               <p className="text-lg leading-relaxed">
//                 To provide innovative and impactful brand identities through exceptional packaging design that captures the essence of our clients' products and resonates with their target audience.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
//               <p className="text-lg leading-relaxed">
//                 To be the leading creative agency in India, recognized for transforming products into memorable brands through cutting-edge design, digital marketing, and photography services.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Story Section */}
//         <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <p className="text-lg leading-relaxed mb-4">
//                 Established in 2010, we began as a small packaging design studio with a big vision. Over the years, we've expanded our services to become a comprehensive branding and digital marketing agency.
//               </p>
//               <p className="text-lg leading-relaxed">
//                 Today, we're recognized as a trusted partner for businesses looking to enhance their brand presence through innovative packaging design, strategic digital marketing, and professional product photography.
//               </p>
//             </div>
//             <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
//               <span className="text-gray-500">Company Timeline Image</span>
//             </div>
//           </div>
//         </section>

//         {/* Digital Marketing Section */}
//         <section className="py-16 bg-black text-white px-4 md:px-8">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6 text-center">Digital Marketing Excellence</h2>
//             <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center mb-8">
//               Today Digital Marketing is very important because it gives your online presence on sites like facebook, twitter, linkedin, google+.
//             </p>
//             <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
//               We are renowned as the best digital marketing agency in India by offering innovative techniques that drive online success for various businesses. With expertise in SEO, PPC, and social media, we deliver measurable results and elevate brands to new heights in the digital realm.
//             </p>
//           </div>
//         </section>

//         {/* Photography Section */}
//         <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-6">Photography Services</h2>
//             <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//               Photography helps you for your product for the online marketplace to advertise your product. We are recognized by taking attractive images that boost sales conversions and brand appeal. Our expertise in lighting, composition, and digital enhancement ensures that each result displays remarkable quality.
//             </p>
//           </div>
//         </section>

//         {/* One Stop Solution Section */}
//         <section className="py-16 bg-gray-100 px-4 md:px-8">
//           <div className="max-w-6xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6">One Stop Solution</h2>
//             <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//               The agency is focusing on 360-degree advertising solutions. We aim to help the SMEs in availing all the brand services under one roof as we are renowned as the trusted digital marketing agency in India.
//             </p>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="bg-gray-200 h-64 flex items-center justify-center">
//                   <span className="text-gray-500">Team Member {item}</span>
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold mb-1">Team Member Name</h3>
//                   <p className="text-gray-600">Position/Role</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-black text-white py-12 px-4 md:px-8">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Company Name</h3>
//               <p>Providing innovative packaging, digital marketing, and photography solutions since 2010.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//               <p>Email: info@company.com</p>
//               <p>Phone: +91 1234567890</p>
//               <p>Address: Your Company Address</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-gray-400">Facebook</a>
//                 <a href="#" className="hover:text-gray-400">Twitter</a>
//                 <a href="#" className="hover:text-gray-400">Instagram</a>
//                 <a href="#" className="hover:text-gray-400">LinkedIn</a>
//               </div>
//             </div>
//           </div>
//           <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
//             <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default About;