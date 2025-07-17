"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

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
    title: "PayBite – Programa de Fidelización Gastronómica",
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
    title: "Inmobot – Tasador Inteligente de Propiedades",
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
    <section id="projects" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
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
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-black hover:bg-white/90"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
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
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                  <p className="text-muted-foreground mb-4 leading-relaxed">{selectedProject.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Site
                    </Button>
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
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
