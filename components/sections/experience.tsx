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
    title: "Project Developer",
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
    <section id="experience" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/18 via-transparent to-primary/18 animate-gradient-flow" />
        
        {/* Floating geometric shapes - larger and more visible */}
        <div className="absolute top-16 right-16 w-48 h-48 bg-[#b6d464]/35 rounded-lg blur-2xl rotate-45 animate-particle-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 left-12 w-36 h-36 bg-[#ffe066]/35 rounded-lg blur-xl rotate-12 animate-particle-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-24 right-1/4 w-44 h-44 bg-[#b6d464]/30 rounded-lg blur-2xl -rotate-45 animate-particle-float" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-16 left-1/3 w-56 h-56 bg-[#ffe066]/30 rounded-lg blur-3xl rotate-12 animate-particle-float" style={{ animationDelay: '7s' }} />
        
        {/* Pulsing glow effects - more intense */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#b6d464]/20 to-transparent rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#ffe066]/20 to-transparent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Additional large orbs */}
        <div className="absolute top-0 left-1/2 w-80 h-80 bg-[#b6d464]/25 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/2 w-88 h-88 bg-[#ffe066]/25 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '4s' }} />
        
        {/* Animated lines - thicker and more visible */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#b6d464]/25 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#ffe066]/25 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - animated */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b6d464]/30 via-[#ffe066]/30 to-[#b6d464]/30 hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block animate-pulse" />
            
            {/* Animated dots along timeline */}
            <div className="absolute left-[31px] top-1/4 w-2 h-2 bg-[#b6d464] rounded-full hidden md:block animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute left-[31px] top-1/2 w-2 h-2 bg-[#ffe066] rounded-full hidden md:block animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute left-[31px] top-3/4 w-2 h-2 bg-[#b6d464] rounded-full hidden md:block animate-pulse" style={{ animationDelay: '2s' }} />

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
                  {/* Timeline dot - animated */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10 group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute left-6 w-8 h-8 bg-primary/20 rounded-full border-2 border-primary/30 hidden md:block animate-pulse" />
                  <div className="absolute left-6 w-12 h-12 bg-primary/10 rounded-full hidden md:block animate-glow-pulse" />

                  <div className="md:ml-20 group">
                    {/* Animated gradient border */}
                    <div className="absolute -inset-1 md:-inset-2 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div 
                        className="absolute inset-0 rounded-2xl animate-gradient-flow"
                        style={{
                          background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 50%, #b6d464 100%)',
                          backgroundSize: '200% 200%',
                          animation: 'gradientShift 3s ease infinite',
                          opacity: 0.7
                        }}
                      />
                      <div className="absolute inset-[3px] rounded-2xl bg-background" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#b6d464]/20 via-[#ffe066]/20 to-[#b6d464]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Corner accents */}
                    <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-[#b6d464] rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-[#ffe066] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }} />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-[#ffe066] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.2s' }} />
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-[#b6d464] rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.3s' }} />
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#b6d464] rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#ffe066] rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    
                    <Card className="relative border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl overflow-hidden bg-card">
                      <CardContent className="p-6 relative">
                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
                            style={{
                              animation: 'shimmer 2s ease-in-out infinite'
                            }}
                          />
                        </div>
                        
                        {/* Content with z-index */}
                        <div className="relative z-10">
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
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/30"
                              style={{
                                transitionDelay: `${techIndex * 50}ms`
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
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
