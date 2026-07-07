"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap } from "lucide-react"
import { useTranslation } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Education() {
  const t = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal(sectionRef, { stagger: 0.12 })

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.education.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.education.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.education.items.map((item) => (
            <Card key={item.degree} className="border-border" data-reveal>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">{item.degree}</h3>
                  </div>
                  <div className="flex items-center font-mono text-xs uppercase tracking-wide text-faint mt-1 md:mt-0">
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    {item.period}
                  </div>
                </div>
                <p className="text-muted-foreground">{item.institution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
