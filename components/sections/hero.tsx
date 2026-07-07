"use client"

import { useLayoutEffect, useRef } from "react"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { useTranslation } from "@/components/language-context"

const SonarField = dynamic(() => import("@/components/hero/sonar-field"), { ssr: false })

export default function Hero() {
  const t = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const pill = root.querySelectorAll("[data-hero-pill]")
    const eyebrow = root.querySelectorAll("[data-hero-eyebrow]")
    const words = root.querySelectorAll("[data-hero-word]")
    const underline = root.querySelector("[data-hero-underline]")
    const sub = root.querySelectorAll("[data-hero-sub]")
    const specCells = root.querySelectorAll("[data-hero-spec-cell]")
    const assertRun = root.querySelectorAll("[data-hero-assert-run]")
    const labels = root.querySelectorAll("[data-hero-label]")
    const ticks = root.querySelectorAll("[data-hero-tick]")

    gsap.set(pill, { opacity: 0, y: 14 })
    gsap.set(eyebrow, { opacity: 0, y: 14 })
    gsap.set(words, { yPercent: 112 })
    if (underline) gsap.set(underline, { scaleX: 0 })
    gsap.set(sub, { opacity: 0, y: 14 })
    gsap.set(specCells, { opacity: 0, y: 14 })
    gsap.set(assertRun, { opacity: 0, y: 14 })
    gsap.set(labels, { opacity: 0.35 })
    gsap.set(ticks, { opacity: 0, scale: 0.4 })

    let waveTl: gsap.core.Timeline | null = null
    function startWaveLoop() {
      const letters = root!.querySelectorAll("[data-wave-letter]")
      if (!letters.length) return
      waveTl = gsap.timeline({ repeat: -1, repeatDelay: 3 })
      waveTl.to(letters, {
        y: -20,
        scale: 1.15,
        duration: 0.42,
        ease: "power2.out",
        stagger: { each: 0.06, from: "start" },
        yoyo: true,
        repeat: 1,
      })
    }

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } })
    tl.to(pill, { opacity: 1, y: 0, duration: 0.9 }, 0)
      .to(eyebrow, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
      .to(words, { yPercent: 0, duration: 1.05, stagger: 0.055 }, 0.18)
      .to(underline, { scaleX: 1, duration: 0.7, ease: "expo.out" }, "-=0.35")
      .to(sub, { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
      .to(specCells, { opacity: 1, y: 0, duration: 0.7, stagger: 0.07 }, "-=0.6")
      .to(assertRun, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(labels, { opacity: 1, duration: 0.35, stagger: 0.28 }, "-=0.15")
      .to(ticks, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.28, ease: "back.out(2.5)" }, "<")
      .call(startWaveLoop)

    return () => {
      tl.kill()
      waveTl?.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-28 pb-20"
    >
      <div className="absolute inset-0 z-0">
        <SonarField />
      </div>
      <div className="hero-veil z-[1]" />

      <div className="relative z-10 container mx-auto px-4 max-w-[1120px]">
        <div className="hero-pill inline-flex mb-8" data-hero-pill data-magnetic data-hover>
          <span className="live" />
          {t.hero.pill}
        </div>

        <div className="hero-eyebrow mb-6" data-hero-eyebrow>
          {t.hero.eyebrow}
        </div>

        <h1 className="hero-headline mb-8">
          {t.hero.headlineWords.map((word: string, i: number) => {
            const isUnderlined = i === t.hero.headlineUnderlineIndex
            return (
              <span key={i}>
                <span className="hero-word-wrap">
                  <span
                    className={`hero-word ${isUnderlined ? "hero-word-underlined" : ""}`}
                    data-hero-word
                  >
                    {isUnderlined ? (
                      <>
                        <span className="sr-only">{word}</span>
                        <span aria-hidden="true">
                          {word.split("").map((char, ci) => (
                            <span key={ci} className="hero-wave-letter" data-wave-letter>
                              {char}
                            </span>
                          ))}
                        </span>
                        <i className="hero-underline" data-hero-underline />
                      </>
                    ) : (
                      word
                    )}
                  </span>
                </span>
                {i < t.hero.headlineWords.length - 1 && " "}
              </span>
            )
          })}
        </h1>

        <p className="hero-sub mb-11" data-hero-sub>
          {t.hero.description}
        </p>

        <div className="hero-spec mb-9">
          {t.hero.spec.map((cell: { k: string; v: string }) => (
            <div key={cell.k} className="hero-spec-cell" data-hero-spec-cell>
              <div className="hero-spec-k">{cell.k}</div>
              <div className="hero-spec-v">{cell.v}</div>
            </div>
          ))}
        </div>

        <div className="hero-assert">
          <span className="hero-assert-run" data-hero-assert-run>{t.hero.assertionsLabel}</span>
          {t.hero.assertions.map((label: string, i: number) => (
            <span key={i} className="hero-assert-item">
              <span className="hero-assert-tick" data-hero-tick>✓</span>
              <span data-hero-label>{label}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="hero-cue absolute bottom-8 left-5 md:left-16 z-10">
        <span className="hero-cue-track" />
        {t.hero.scrollCue}
      </div>
      <div className="hero-hint absolute bottom-8 right-5 md:right-16 z-10">
        {t.hero.scrollHint}
      </div>
    </section>
  )
}
