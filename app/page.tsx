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

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        <Navigation />
        <main className="relative">
          <Hero />
          <hr className="border-t border-muted-foreground/50" />
          <About />
          <hr className="border-t border-muted-foreground/50" />
          <Experience />
          <hr className="border-t border-muted-foreground/50" />
          <Projects />
          <hr className="border-t border-muted-foreground/50" />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* Music Player positioned outside to float over all sections */}
      <MusicPlayer />
    </>
  )
}
