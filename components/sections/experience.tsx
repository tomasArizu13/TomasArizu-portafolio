"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useTranslation } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslation()
  const experiences = t.experience.items

  useScrollReveal(sectionRef, { stagger: 0.15 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const track = section.querySelector<HTMLElement>("[data-exp-track]")
    const fill = section.querySelector<HTMLElement>("[data-exp-fill]")
    if (!track || !fill) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top 75%",
      end: "bottom 55%",
      scrub: 0.6,
      onUpdate: (self) => gsap.set(fill, { scaleY: self.progress }),
    })

    return () => trigger.kill()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto exp-track" data-exp-track>
          <div className="exp-line" aria-hidden="true">
            <div className="exp-line-fill" data-exp-fill />
          </div>
          <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 md:pl-12" data-reveal>
            <span className="exp-dot" aria-hidden="true" />
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end font-mono text-xs uppercase tracking-wide text-faint">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
