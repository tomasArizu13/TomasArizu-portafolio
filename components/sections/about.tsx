"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Download, Award, Users, Coffee } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/language-context";

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "Vercel / Deployment", level: 85 },
]

const stats = [
  { icon: Award, label: "Years Experience", value: "4+" },
  { icon: Users, label: "MVPs Developed", value: "5+" },
  { icon: Coffee, label: "Projects Completed", value: "30+" },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills after a delay
          setTimeout(() => {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills((prev) => {
                  const newSkills = [...prev]
                  newSkills[index] = skill.level
                  return newSkills
                })
              }, index * 200)
            })
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header - Always visible */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Large Image Section */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-70 -translate-x-5"}`}
          >
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/fondo-sur.jpg"
                  alt="Tomas Arizu - Professional Developer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10" />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-70 translate-x-5"}`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t.about.hi}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.content1}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.content2}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {t.about.content3}
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {t.about.keypoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-2 rounded-2xl p-2 bg-black dark:bg-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs text-white dark:text-black">{point}</span>
                  </div>
                ))}
              </div>

              {/* Download Resume centrado */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2 rounded-2xl p-3" style={{ background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%)' }}>
                  <a
                    href="/resume-tomas-arizu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0 h-auto text-xs text-black flex items-center font-medium"
                    style={{ textDecoration: "none" }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.about.download}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-70 translate-y-5"}`}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-70 translate-y-5"}`}
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">{t.about.skills}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{animatedSkills[index]}%</span>
                    </div>
                    <Progress value={animatedSkills[index]} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
