"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, select, textarea, [data-hover]'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.documentElement.classList.add("has-custom-cursor")

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }

    let rafId = 0
    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(loop)
    }

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR)) {
        ring.classList.add("hovering")
      }
    }
    const handleOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR)) {
        ring.classList.remove("hovering")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleOver)
    document.addEventListener("mouseout", handleOut)
    rafId = requestAnimationFrame(loop)

    // Magnetic pull for the handful of elements marked data-magnetic (used sparingly).
    const magneticEls = document.querySelectorAll<HTMLElement>("[data-magnetic]")
    const magneticCleanups: Array<() => void> = []
    magneticEls.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        gsap.to(el, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.25,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
          duration: 0.4,
          ease: "power2.out",
        })
      }
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" })
      }
      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      magneticCleanups.push(() => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      })
    })

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleOver)
      document.removeEventListener("mouseout", handleOut)
      cancelAnimationFrame(rafId)
      magneticCleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
