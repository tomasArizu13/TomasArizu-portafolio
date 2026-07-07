"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HowIThink() {
  const t = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal(sectionRef)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const ticks = section.querySelectorAll("[data-tick]")
    if (!ticks.length) return
    gsap.set(ticks, { opacity: 0, scale: 0.4 })

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(ticks, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(2.5)",
          stagger: 0.15,
          delay: 0.3,
        })
      },
    })

    return () => trigger.kill()
  }, [])

  return (
    <section id="how-i-think" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howIThink.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.howIThink.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.howIThink.principles.map((principle) => (
            <Card key={principle.title} className="h-full" data-reveal>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                  <span className="text-verified" data-tick>✓</span>
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{principle.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
