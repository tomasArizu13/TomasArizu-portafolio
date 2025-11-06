'use client'

import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Navigation from "@/components/navigation"
import MusicPlayer from "@/components/music-player"
import CardStackSection from "@/components/card-stack-section"

export default function Portfolio() {
  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'about', component: <About /> },
    { id: 'experience', component: <Experience /> },
    { id: 'projects', component: <Projects /> },
    { id: 'contact', component: <Contact /> },
  ]

  const totalSections = sections.length

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background card-stack-perspective overflow-hidden">
        <Navigation />
        <main className="relative">
          {sections.map((section, index) => (
            <CardStackSection
              key={section.id}
              index={index}
              totalSections={totalSections}
            >
              {section.component}
            </CardStackSection>
          ))}
        </main>
        <Footer />
      </div>
      {/* Music Player outside main container to float over all sections */}
      <MusicPlayer />
    </>
  )
}
