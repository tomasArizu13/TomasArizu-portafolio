"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects from conception to deployment. Collaborated with design teams to implement pixel-perfect UIs.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Developed responsive websites and web applications for various clients. Focused on performance optimization and accessibility.",
    technologies: ["JavaScript", "SASS", "Webpack", "PHP"],
  },
  {
    title: "Junior Developer",
    company: "Local Tech Company",
    location: "Boston, MA",
    period: "2018 - 2019",
    description:
      "Started my professional journey building internal tools and learning best practices in software development.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
]

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my expertise
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
