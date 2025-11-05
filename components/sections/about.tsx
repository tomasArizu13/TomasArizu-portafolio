"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Download, Award, Users, Coffee } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/language-context";

// Hook para efecto 3D parallax con mouse
const useParallax3D = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calcular la rotación basada en la posición del mouse
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      const image = element.querySelector('#about-image') as HTMLElement;
      if (image) {
        image.style.transform = `
          perspective(1000px) 
          rotateX(${-rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(1.05)
          translateZ(30px)
        `;
        image.style.transition = 'transform 0.1s ease-out';
      }
    };

    const handleMouseLeave = () => {
      const image = element.querySelector('#about-image') as HTMLElement;
      if (image) {
        image.style.transition = 'transform 0.5s ease-out';
        image.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05) translateZ(0px)';
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
};

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "Vercel / Deployment", level: 85 },
]

const stats = [
  { icon: Award, label: "Years Experience", value: "1+" },
  { icon: Users, label: "MVPs Developed", value: "5+" },
  { icon: Coffee, label: "Projects Completed", value: "20+" },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const t = useTranslation();
  
  useParallax3D(imageContainerRef);

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
    <section id="about" ref={sectionRef} className="py-20 bg-muted relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 animate-gradient-flow" />
        
        {/* Floating particles - more visible */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#b6d464]/40 rounded-full blur-2xl animate-particle-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-60 h-60 bg-[#ffe066]/40 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-[#b6d464]/35 rounded-full blur-2xl animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-[#ffe066]/35 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '6s' }} />
        
        {/* Glowing orbs - more intense */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#b6d464]/25 to-[#ffe066]/25 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#ffe066]/25 to-[#b6d464]/25 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Additional large orbs */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#b6d464]/30 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-[#ffe066]/30 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '3s' }} />
        
        {/* Animated grid pattern - more visible */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(#b6d464 1px, transparent 1px), linear-gradient(90deg, #b6d464 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'wave 25s ease-in-out infinite'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-2xl animate-gradient-flow opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 50%, #b6d464 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 3s ease infinite'
                  }}
                />
                <div className="absolute inset-[3px] rounded-2xl bg-muted" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#b6d464]/30 via-[#ffe066]/30 to-[#b6d464]/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div 
                ref={imageContainerRef}
                className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-muted cursor-none"
              >
                {/* Image with 3D tilt effect */}
                <div 
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <Image
                    src="/fondo-sur.jpg"
                    alt="Tomas Arizu - Professional Developer"
                    fill
                    className="object-cover"
                    id="about-image"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)',
                    }}
                  />
                </div>
                
                {/* Overlay gradient with animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all duration-300" />
                
                {/* Animated particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-[#b6d464] rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-8 right-8 w-2.5 h-2.5 bg-[#ffe066] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-[#b6d464] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-8 left-8 w-2.5 h-2.5 bg-[#ffe066] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    style={{
                      animation: 'shimmer 2s ease-in-out infinite'
                    }}
                  />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white dark:bg-black rounded-xl p-4 shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
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
