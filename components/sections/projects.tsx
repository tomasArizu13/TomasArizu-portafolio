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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    shortDescription: "Modern e-commerce solution with advanced features",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management system",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
    shortDescription: "Collaborative productivity tool for teams",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "Real-time collaboration",
      "Project and task organization",
      "Team member management",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Mobile-responsive design",
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with forecasts, maps, and historical data visualization.",
    shortDescription: "Beautiful weather app with detailed forecasts",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "Weather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather maps",
      "Historical weather data",
      "Location-based services",
      "Responsive design",
    ],
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking with data visualization and reporting.",
    shortDescription: "Comprehensive social media analytics platform",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "Multi-platform integration",
      "Real-time analytics",
      "Custom reporting",
      "Data visualization",
      "Performance insights",
      "Export capabilities",
    ],
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "A complete LMS with course creation, student progress tracking, and interactive learning tools.",
    shortDescription: "Modern learning platform for educators",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Prisma", "MySQL", "AWS S3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "Course creation and management",
      "Student enrollment system",
      "Progress tracking",
      "Interactive quizzes",
      "Video streaming",
      "Certificate generation",
    ],
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, virtual tours, and agent management system.",
    shortDescription: "Comprehensive real estate marketplace",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "Property listings with photos",
      "Advanced search and filters",
      "Interactive maps",
      "Virtual tour integration",
      "Agent profiles and contact",
      "Mortgage calculator",
    ],
  },
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
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
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
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
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
