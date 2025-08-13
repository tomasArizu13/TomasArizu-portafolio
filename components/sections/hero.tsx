"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/language-context";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslation();

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-left max-w-2xl">
            {/* Animated headline */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground dark:text-white leading-tight" style={{overflow: 'visible'}}>
                <span
                  style={{
                    background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    paddingBottom: '0.2em',
                    lineHeight: 1.2,
                    overflow: 'visible',
                  }}
                >
                  PRODUCT
                </span>
                <br />
                & TECH BUILDER
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                {t.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 border-0 transition-transform duration-200 hover:scale-105 hover:brightness-110"
                style={{ background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%)', color: '#222' }}
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.hero.viewWork}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent transition-transform duration-200 hover:scale-105 hover:brightness-110"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.hero.getInTouch}
              </Button>
            </div>

            {/* Social Links - hidden on all devices */}
            {/**
             * <div
             *   className={`lg:justify-start space-x-8 mt-8 transition-all duration-1000 delay-900 ${
             *     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
             *   }`}
             * >
             *   <a href="https://github.com/tomasArizu13" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
             *     <Button variant="ghost" size="icon">
             *       <Github className="h-5 w-5" />
             *     </Button>
             *   </a>
             *   <a href="https://www.linkedin.com/in/tomas-arizu-47ba1521a/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
             *     <Button variant="ghost" size="icon">
             *       <Linkedin className="h-5 w-5" />
             *     </Button>
             *   </a>
             *   <a href="mailto:tomasarizu13@gmail.com" className="hover:scale-110 transition-transform">
             *     <Button variant="ghost" size="icon">
             *       <Mail className="h-5 w-5" />
             *     </Button>
             *   </a>
             * </div>
             */}
          </div>

          {/* Mobile: Image first, Desktop: Right side - Profile Image */}
          <div
            className={`order-1 lg:order-2 flex-1 flex justify-center lg:justify-end items-center lg:items-start lg:-mt-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/profile-tomas-arizu.jpg"
                alt="Tomas Arizu"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator - centered at bottom */}
        <div
          className={`flex justify-center mt-12 transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce hover:animate-none">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
