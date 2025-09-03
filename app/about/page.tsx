"use client"

import type React from "react"
import { useMemo, useRef, useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCursorPan } from "@/hooks/use-cursor-pan"

// Color system: bg-neutral-950, white, neutral-800 borders, neutral-400 text, cyan accent

type TabKey = "agency" | "approach"

export default function AboutPage() {
  // Tabs with swipe on mobile
  const [tab, setTab] = useState<TabKey>("agency")
  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0]?.clientX ?? null)
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current
    if (start == null) return
    const delta = e.changedTouches[0].clientX - start
    if (Math.abs(delta) > 50) setTab((prev) => (prev === "agency" ? "approach" : "agency"))
    touchStartX.current = null
  }

  // Cursor parallax on hero headline and media grid
  const heroContainer = useRef<HTMLDivElement>(null)
  const heroContent = useRef<HTMLDivElement>(null)
  useCursorPan(heroContainer, heroContent, { intensity: 0.5 })

  const mediaContainer = useRef<HTMLDivElement>(null)
  const mediaContent = useRef<HTMLDivElement>(null)
  useCursorPan(mediaContainer, mediaContent, { intensity: 0.5 })

  // Demo media (images stand-in for autoplay visuals)
  const media = useMemo(
    () => [
      { src: "/motion-reel.png", label: "Motion Reel" },
      { src: "/brand-launch.png", label: "Brand Launch" },
      { src: "/product-explainer.png", label: "Product Explainer" },
      { src: "/web-experience.png", label: "Web Experience" },
    ],
    [],
  )

  const office = useMemo(
    () => [
      { src: "/studio-lounge.png", caption: "Studio Lounge" },
      { src: "/edit-suite.png", caption: "Edit Suite" },
      { src: "/workshop.png", caption: "Workshop" },
    ],
    [],
  )

  const team = useMemo(
    () => [
      {
        name: "Alex Rivera",
        role: "Creative Director",
        bio: "Brand, motion, interactive.",
        img: "/portrait-alex.png",
      },
      { name: "Maya Chen", role: "Design Lead", bio: "Tech-forward aesthetics.", img: "/maya.png" },
      { name: "Jonas Patel", role: "Tech Lead", bio: "Performance and tooling.", img: "/jonas-contemplative-portrait.png" },
      { name: "Sofia Lee", role: "Producer", bio: "Ops and delivery.", img: "/portrait-of-sofia.png" },
      { name: "Sam Okoye", role: "3D Artist", bio: "Look-dev, rendering.", img: "/sam-portrait.png" },
      { name: "Priya N.", role: "Engineer", bio: "Reliable, accessible UIs.", img: "/portrait-priya.png" },
    ],
    [],
  )

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero with pill tabs */}
      <section
        ref={heroContainer}
        className="relative mx-auto w-full max-w-7xl px-6 md:px-8 pt-24 md:pt-32 pb-12 cursor-grab select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div ref={heroContent} className="relative select-none" style={{ minWidth: "100%", minHeight: "100%" }}>
          <header className="flex items-end justify-between gap-6">
            <h1 className="text-balance font-sans text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight uppercase">
              TECHNOLOGY FOCUSED AND CREATIVELY DRIVEN®
            </h1>
            <Link
              href="/"
              className="hidden md:inline-flex rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm hover:bg-neutral-800 transition"
            >
              Work
            </Link>
          </header>

          <p className="mt-6 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-300">
            We are a creative technology agency crafting premium brand, product, and immersive experiences for ambitious
            clients. Strategy-led, prototype-first, engineered for impact.
          </p>

          <nav className="mt-8 flex items-center gap-2">
            <Tab label="Agency" active={tab === "agency"} onClick={() => setTab("agency")} />
            <Tab label="Approach" active={tab === "approach"} onClick={() => setTab("approach")} />
          </nav>

          <div className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-300">
            {tab === "agency" ? (
              <p>
                We partner long-term with global brands to invent, launch, and scale digital experiences across
                platforms and channels. Our teams operate where brand, product, and content meet.
              </p>
            ) : (
              <p>
                We validate early and iterate quickly—balancing bold creative with technical rigor. We ship with
                precision, measure outcomes, and evolve continuously.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Media Mosaic (cursor-pan on desktop) */}
      <section ref={mediaContainer} className="relative cursor-grab select-none">
        <div ref={mediaContent} className={cn("mx-auto w-full max-w-7xl px-6 md:px-8", "min-h-[110%] min-w-[102%] select-none")}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {media.map((m, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-950"
              >
                <img
                  src={m.src || "/placeholder.svg"}
                  alt={m.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between p-3 text-xs text-neutral-300 bg-black/30 backdrop-blur-sm">
                  <span>{m.label}</span>
                  <span className="opacity-70">Case Study</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office – parallax on scroll */}
      <OfficeParallax items={office} />

      {/* Our Team */}
      <section className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <header className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Team</h2>
          <span className="text-xs text-neutral-400">Hover to reveal roles</span>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {team.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-950"
            >
              <img
                src={t.img || "/placeholder.svg"}
                alt={t.name}
                className="h-64 md:h-72 lg:h-80 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-sm font-medium">{t.name}</h3>
                <p className="text-xs text-neutral-300">{t.role}</p>
                <p className="mt-1 text-xs text-neutral-400">{t.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-medium text-neutral-200">Offices</h4>
              <ul className="mt-3 space-y-1 text-sm text-neutral-400">
                <li>London</li>
                <li>New York</li>
                <li>Berlin</li>
                <li>Remote</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200">Social</h4>
              <ul className="mt-3 space-y-1 text-sm text-neutral-400">
                <li>
                  <a className="hover:text-white transition" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-medium text-neutral-200">Newsletter</h4>
              <form className="mt-3 flex items-center gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-700"
                />
                <button className="rounded-md bg-white px-4 py-2 text-sm text-black hover:bg-neutral-200 transition">
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-neutral-500">We send occasional updates. Unsubscribe anytime.</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between text-xs text-neutral-500">
            <span>© {new Date().getFullYear()} Phantom-style Agency</span>
            <Link href="/" className="hover:text-white transition">
              Back to Work
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm border",
        active
          ? "bg-white text-black border-white"
          : "bg-neutral-900/50 text-white border-neutral-800 hover:bg-neutral-800",
      )}
      aria-pressed={active}
    >
      {label}
    </button>
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
