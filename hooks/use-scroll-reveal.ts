"use client"

import { useEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Reveals [data-reveal] children of `containerRef` with a fade + translateY
 * stagger the first time the container scrolls into view. No-ops entirely
 * under prefers-reduced-motion, leaving content in its default visible state.
 */
export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options?: { selector?: string; stagger?: number; y?: number },
) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const selector = options?.selector ?? "[data-reveal]"
    const targets = container.querySelectorAll(selector)
    if (!targets.length) return

    gsap.set(targets, { opacity: 0, y: options?.y ?? 24 })

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: options?.stagger ?? 0.08,
        })
      },
    })

    return () => trigger.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef])
}
