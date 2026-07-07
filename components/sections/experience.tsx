"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useTranslation } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslation()
  const experiences = t.experience.items

  useScrollReveal(sectionRef, { stagger: 0.15 })

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border" data-reveal>
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
          ))}
        </div>
      </div>
    </section>
  )
}
