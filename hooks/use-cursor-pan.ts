"use client"

import { useEffect, useRef } from "react"

export function useCursorPan(
  containerRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLElement>,
  opts: { intensity?: number } = {}
) {
  const intensity = Math.min(Math.max(opts.intensity ?? 0.08, 0.02), 0.3)

  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number>()
  const isDragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const getBounds = () => {
      const rect = container.getBoundingClientRect()
      const ctW = content.scrollWidth
      const ctH = content.scrollHeight
      const maxX = Math.max(0, (ctW - rect.width) / 2)
      const maxY = Math.max(0, (ctH - rect.height) / 2)
      return { rect, maxX, maxY }
    }

    let bounds = getBounds()

    const clamp = () => {
      const { maxX, maxY } = bounds
      if (target.current.x > maxX) target.current.x = maxX
      if (target.current.x < -maxX) target.current.x = -maxX
      if (target.current.y > maxY) target.current.y = maxY
      if (target.current.y < -maxY) target.current.y = -maxY
    }

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return // only left click
      isDragging.current = true
      last.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseMove = (e: MouseEvent) => {
      // DEEP CHECK: button still held
      if (!isDragging.current || (e.buttons & 1) !== 1) return

      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y

      target.current.x -= dx
      target.current.y -= dy
      clamp()

      // apply immediately (no drift for mouse)
      current.current.x = target.current.x
      current.current.y = target.current.y
      content.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`

      last.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseUp = () => {
      isDragging.current = false
    }

    // Touch support (still smooth)
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return
      const x = e.touches[0].clientX
      const y = e.touches[0].clientY
      const { rect, maxX, maxY } = bounds
      const nx = ((x - rect.left) / rect.width - 0.5) * 2
      const ny = ((y - rect.top) / rect.height - 0.5) * 2
      target.current.x = -nx * maxX
      target.current.y = -ny * maxY
      clamp()
    }

    const onResize = () => {
      bounds = getBounds()
      clamp()
    }

    const tick = () => {
      // smooth only for touch
      current.current.x += (target.current.x - current.current.x) * intensity
      current.current.y += (target.current.y - current.current.y) * intensity
      content.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      raf.current = requestAnimationFrame(tick)
    }

    container.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    container.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("resize", onResize)

    content.style.willChange = "transform"
    raf.current = requestAnimationFrame(tick)

    return () => {
      container.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      container.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("resize", onResize)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [containerRef, contentRef, intensity])
}
