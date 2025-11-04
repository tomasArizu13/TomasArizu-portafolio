"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/language-context";

const projects = [
  {
    id: 1,
    title: "OneBite Club – Exclusive Gourmet Experience",
    description:
      "Landing page for OneBite, a private gastronomic club that offers exclusive, multisensory dining events in unique locations.",
    shortDescription: "Private gourmet club experience website",
    image: "/onebiteclub-screenshot.png", // reemplaza con tu propia captura
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.onebiteclub.com/",
    githubUrl: "https://github.com/tomasArizu13/LandingPageOneBite",
    features: [
      "Hero con imagen de alta calidad y llamado a acción ‘Experiencias gastronómicas únicas’",
      "Secciones: ¿Qué es?, ¿Para quién?, Beneficios, Cómo funciona, Equipo",
      "Formulario de suscripción con CTA para unirse al club",
      "Diseño responsive y estilizado tipografía elegante",
      "Contenido SEO optimizado en español para captar foodies y profesionales",
      "Integración de Google Analytics para seguimiento de conversiones",
    ],
  },
  {
    id: 2,
    title: "PayBite – Programa de Fidelización",
    description:
      "Landing page para PayBite, un programa exclusivo de fidelización para amantes de la buena gastronomía. Acumula BITES en cada salida y desbloquea beneficios especiales.",
    shortDescription: "Programa de recompensas gastronómicas",
    image: "/paybite-screenshot.png", // reemplazar con captura real
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://pay-bite-kappa.vercel.app/",
    githubUrl: "https://github.com/tomasArizu13/PayBite",
    features: [
      "Sección hero con descripción del programa y CTA “Empieza a acumular bites”",
      "Explicación clara del funcionamiento: acumular BITES, niveles, beneficios",
      "Módulo de registro o suscripción (email / WhatsApp)",
      "Diseño mobile-first con animaciones suaves al hacer scroll",
      "Optimización SEO para captar usuarios que buscan programas gastronómicos",
      "Despliegue en Vercel para rendimiento y carga rápida",
    ],
  },
  {
    id: 3,
    title: "RealSync – AI Assistant for Real Estate",
    description:
      "Landing page for RealSync, the first AI real estate assistant that understands, responds, and helps close more sales.",
    shortDescription: "Conversational AI assistant for real estate professionals",
    image: "/realsync-screenshot.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://real-sync-phi.vercel.app/",
    githubUrl: "https://github.com/tomasArizu13/RealSync",
    features: [
      "Hero con mensaje claro ‘El asistente inmobiliario que aumenta tus ventas’",
      "Sección de características del asistente AI con íconos y animaciones",
      "Demo interactiva o sección de chatbot simulado",
      "Formulario de contacto para solicitar acceso o probar el asistente",
      "Diseño optimizado para mobile con buena jerarquía visual",
      "SEO básico y tracking de interés para conversiones",
    ],
  },
  {
    id: 4,
    title: "OneBite App – MVP Dining Experience",
    description:
      "Second version of OneBite: a minimal MVP web app offering exclusive access to premium dining experiences and curated recommendations for discerning food enthusiasts.",
    shortDescription: "MVP app for gourmet dining recommendations",
    image: "/onebite-app-screenshot.png", // reemplazá con tu captura real
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://one-bite-app-mvp.vercel.app/",
    githubUrl: "https://github.com/tomasArizu13/OneBiteAppMVP",
    features: [
      "Home con experiencia gastronómica destacada y call‑to‑action",
      "Listado de experiencias con imágenes y descripciones",
      "Sistema de suscripción (email) para acceso exclusivo",
      "Diseño responsivo y refinado estilo gourmet",
      "Buttons y hover interactions enfocados en UX",
      "Implementación de SEO básico y deployment automático en Vercel",
    ],
  },
  {
    id: 5,
    title: "Inmobot – Tasador Inteligente",
    description:
      "Inmobot es un MVP de asistente inmobiliario que estima el valor de una propiedad en segundos. Utiliza inputs del usuario y análisis de mercado para ofrecer tasaciones automáticas con alta precisión.",
    shortDescription: "MVP de IA para tasaciones automáticas de propiedades",
    image: "/inmobot-screenshot.png", // colocá una captura en tu carpeta /public
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://real-sync-phi.vercel.app/", // actualizá si tenés nuevo dominio
    githubUrl: "https://github.com/tomasArizu13/inmobot-frontend/tree/main/OneDrive/Escritorio/InmoBot/inmobot-frontend", // reemplazá si cambió
    features: [
      "Formulario inteligente con validación de inputs",
      "Algoritmo de estimación en base a zonas, m2 y estado del inmueble",
      "Estadísticas en tiempo real: precisión, cantidad de tasaciones y promedio de tiempo",
      "Diseño profesional y responsivo tipo SaaS",
      "Landing con explicación de funcionamiento paso a paso",
      "Despliegue continuo en Vercel",
    ],
  },
  {
    id: 6,
    title: "Hello Three.js – Intro a WebGL 3D",
    description:
      "Proyecto personal de exploración en 3D con Three.js. Utiliza geometrías, materiales, luces y animaciones en un entorno WebGL para lograr un efecto visual inmersivo. Ideal como base para futuras experiencias interactivas 3D.",
    shortDescription: "Animación 3D interactiva con geometrías en Three.js",
    image: "/threejs-hello.png", // subí esta imagen a tu carpeta public
    technologies: ["Three.js", "React Three Fiber", "WebGL", "Vite"],
    liveUrl: "https://webgl-3d-text-xi-blond.vercel.app/",
    githubUrl: "https://github.com/tomasArizu13/threejs/tree/main/lessons", // ajustalo si cambió
    features: [
      "Renderizado 3D interactivo en navegador con WebGL",
      "Texto 3D animado con geometrías personalizadas",
      "Cámara orbital con control de usuario",
      "Simulación visual con materiales realistas",
      "Diseño minimalista con enfoque artístico",
    ],
  }  
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
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
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-gradient-flow" />
        
        {/* Floating colorful orbs - much larger and more visible */}
        <div className="absolute top-24 left-16 w-72 h-72 bg-[#b6d464]/45 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-24 w-88 h-88 bg-[#ffe066]/45 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-28 left-1/3 w-64 h-64 bg-[#b6d464]/40 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#ffe066]/40 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '7.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#b6d464]/30 to-[#ffe066]/30 rounded-full blur-3xl animate-glow-pulse" />
        
        {/* Animated particles - larger */}
        <div className="absolute top-40 left-1/4 w-6 h-6 bg-[#b6d464] rounded-full opacity-80 shadow-lg shadow-[#b6d464]/50 animate-particle-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-[#ffe066] rounded-full opacity-80 shadow-lg shadow-[#ffe066]/50 animate-particle-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-[#b6d464] rounded-full opacity-80 shadow-lg shadow-[#b6d464]/50 animate-particle-float" style={{ animationDelay: '5.5s' }} />
        <div className="absolute bottom-60 right-1/5 w-7 h-7 bg-[#ffe066] rounded-full opacity-80 shadow-lg shadow-[#ffe066]/50 animate-particle-float" style={{ animationDelay: '8s' }} />
        <div className="absolute top-1/3 left-1/5 w-5 h-5 bg-[#b6d464] rounded-full opacity-75 shadow-lg shadow-[#b6d464]/50 animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-[#ffe066] rounded-full opacity-75 shadow-lg shadow-[#ffe066]/50 animate-particle-float" style={{ animationDelay: '6s' }} />
        
        {/* Radial gradient effects - more visible */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#b6d464]/15 rounded-full blur-3xl animate-wave" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffe066]/15 rounded-full blur-3xl animate-wave" style={{ animationDelay: '10s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`transition-all duration-1000 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative group">
                {/* Outer animated gradient border - thick and visible */}
                <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-2xl animate-gradient-flow"
                    style={{
                      background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 50%, #b6d464 100%)',
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 3s ease infinite',
                      opacity: 0.8
                    }}
                  />
                  <div className="absolute inset-[3px] rounded-2xl bg-muted" />
                </div>
                
                {/* Secondary border layer */}
                <div className="absolute -inset-[1px] rounded-2xl border-2 border-transparent group-hover:border-[#b6d464]/40 transition-all duration-300" />
                
                {/* Inner glow effect - more intense */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#b6d464]/30 via-[#ffe066]/30 to-[#b6d464]/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#b6d464] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#ffe066] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }} />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#ffe066] rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.2s' }} />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#b6d464] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.3s' }} />
                
                <Card className="relative border-[3px] border-transparent group-hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 rounded-2xl overflow-hidden bg-card">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Animated border on image */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#b6d464]/50 transition-all duration-300 rounded-t-2xl" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-black hover:bg-white/90 rounded-full px-6"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {t.projects.viewDetails}
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 relative">
                    {/* Corner accent dots */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#b6d464] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 left-2 w-2 h-2 bg-[#ffe066] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }} />
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#b6d464] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.2s' }} />
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#ffe066] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.3s' }} />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="lg" variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.projects.liveDemo}
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="icon" variant="outline" className="w-10 h-10">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={400}
                    height={300}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <p className="mb-4 leading-relaxed text-foreground dark:text-muted-foreground">{selectedProject.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">{t.projects.technologies}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">{t.projects.features}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.projects.viewLive}
                      </Button>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        <Github className="w-4 h-4 mr-2" />
                        {t.projects.sourceCode}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
