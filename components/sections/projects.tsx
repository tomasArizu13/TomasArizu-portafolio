"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type Project = {
  id: number
  title: string
  problem: string
  action: string
  outcome: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslation()
  const projects: Project[] = t.projects.items

  useScrollReveal(sectionRef, { stagger: 0.12 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const images = section.querySelectorAll<HTMLElement>("[data-project-image]")
    const triggers = Array.from(images).map((img) =>
      ScrollTrigger.create({
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.7,
        onUpdate: (self) => gsap.set(img, { y: (self.progress - 0.5) * 32 }),
      }),
    )

    return () => triggers.forEach((trigger) => trigger.kill())
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} data-reveal>
              <Card className="group h-full border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute -inset-y-4 inset-x-0" data-project-image>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/70 transition-colors duration-300 flex items-end justify-center pb-4">
                    <Button
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-paper text-ink hover:bg-paper/90"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t.projects.viewDetails}
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 line-clamp-3">{project.problem} {project.action}</p>
                  <p className="text-sm mb-4 flex items-start gap-1.5">
                    <span className="text-verified font-medium shrink-0">✓ {t.projects.outcomeLabel}:</span>
                    <span className="text-foreground/90 line-clamp-2">{project.outcome}</span>
                  </p>
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
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="lg" variant="outline" className="w-full bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.projects.liveDemo}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="lg" variant="outline" className="w-full bg-transparent">
                          <Github className="w-4 h-4 mr-2" />
                          {t.projects.github}
                        </Button>
                      </a>
                    )}
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
                  <div className="space-y-3 mb-4">
                    <p>
                      <span className="font-mono text-xs uppercase tracking-wide text-faint">{t.projects.problemLabel}: </span>
                      <span className="text-foreground">{selectedProject.problem}</span>
                    </p>
                    <p>
                      <span className="font-mono text-xs uppercase tracking-wide text-faint">{t.projects.actionLabel}: </span>
                      <span className="text-foreground">{selectedProject.action}</span>
                    </p>
                    <p>
                      <span className="font-mono text-xs uppercase tracking-wide text-verified">✓ {t.projects.outcomeLabel}: </span>
                      <span className="text-foreground">{selectedProject.outcome}</span>
                    </p>
                  </div>
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
                  <div className="flex space-x-2 mt-4">
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.projects.viewLive}
                        </Button>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          <Github className="w-4 h-4 mr-2" />
                          {t.projects.sourceCode}
                        </Button>
                      </a>
                    )}
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
