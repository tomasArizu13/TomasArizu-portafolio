import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Tomas Arizu - Product & Tech Builder",
  description:
    "Professional portfolio of Tomas Arizu, a full stack developer and designer specializing in modern web applications and user experiences.",
  keywords: ["developer", "designer", "portfolio", "react", "nextjs", "typescript"],
  authors: [{ name: "Tomas Arizu" }],
  openGraph: {
    title: "Tomas Arizu - Product & Tech Builder",
    description: "Professional portfolio showcasing modern web development and design work.",
    url: "https://tomasarizu.com",
    siteName: "Tomas Arizu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tomas Arizu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomas Arizu - Product & Tech Builder",
    description: "Professional portfolio showcasing modern web development and design work.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <hr className="border-t border-muted-foreground my-0 opacity-40" />
        <About />
        <hr className="border-t border-muted-foreground my-0 opacity-40" />
        <Experience />
        <hr className="border-t border-muted-foreground my-0 opacity-40" />
        <Projects />
        <hr className="border-t border-muted-foreground my-0 opacity-40" />
        {/* <Testimonials />
        <hr className="border-t border-muted-foreground my-0 opacity-40" /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
