"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useTranslation } from "@/components/language-context";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "Digital House",
    location: "Buenos Aires, AR",
    period: "2021 - 2023",
    description:
      "Completed an intensive full stack development program. Built projects using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Acquired strong foundations in frontend and backend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase"],
  },
  {
    title: "Operations Specialist - Disney Project",
    company: "Globant",
    location: "Remote",
    period: "2024 - 2025",
    description:
      "Worked as Operations Specialist on a large-scale Disney project. Supported the delivery team in agile processes, reporting, and project coordination across multiple squads.",
    technologies: ["Jira", "Confluence", "Agile", "Excel", "Smartsheet"],
  },
  {
    title: "Co-Founder & Product Developer",
    company: "OneBite",
    location: "Buenos Aires, AR",
    period: "2024 - Present",
    description:
      "Designed and developed the MVP landing page for a premium gastronomic membership. Validated the product idea with over 40+ leads. Focused on UX/UI, strategy and business validation.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Vercel", "Figma"],
  },
];


export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const t = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  className={`relative transition-all duration-1000 ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <div className="md:ml-20">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <Building className="w-4 h-4 mr-2" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                            <div className="flex items-center mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
