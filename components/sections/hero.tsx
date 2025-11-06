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

      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern with dots */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #b6d464 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'wave 20s ease-in-out infinite'
          }}
        />
        
        {/* Floating animated dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#b6d464] rounded-full opacity-60 animate-particle-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#ffe066] rounded-full opacity-70 animate-particle-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-[#b6d464] rounded-full opacity-65 animate-particle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-[#ffe066] rounded-full opacity-60 animate-particle-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-32 left-1/2 w-3.5 h-3.5 bg-[#b6d464] rounded-full opacity-70 animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-52 right-1/4 w-2 h-2 bg-[#ffe066] rounded-full opacity-65 animate-particle-float" style={{ animationDelay: '5s' }} />
        
        {/* Bottom section dots */}
        <div className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-[#b6d464] rounded-full opacity-60 animate-particle-float" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#ffe066] rounded-full opacity-70 animate-particle-float" style={{ animationDelay: '7s' }} />
        <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-[#b6d464] rounded-full opacity-65 animate-particle-float" style={{ animationDelay: '8s' }} />
        <div className="absolute bottom-80 right-1/4 w-2.5 h-2.5 bg-[#ffe066] rounded-full opacity-60 animate-particle-float" style={{ animationDelay: '9s' }} />
        <div className="absolute bottom-32 left-1/2 w-3 h-3 bg-[#b6d464] rounded-full opacity-70 animate-particle-float" style={{ animationDelay: '10s' }} />
        <div className="absolute bottom-52 right-1/3 w-2 h-2 bg-[#ffe066] rounded-full opacity-65 animate-particle-float" style={{ animationDelay: '11s' }} />
        
        {/* Middle section dots */}
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-[#b6d464] rounded-full opacity-70 animate-particle-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 right-20 w-2.5 h-2.5 bg-[#ffe066] rounded-full opacity-65 animate-particle-float" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#b6d464] rounded-full opacity-60 animate-particle-float" style={{ animationDelay: '4.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#ffe066] rounded-full opacity-70 animate-particle-float" style={{ animationDelay: '5.5s' }} />
        
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#b6d464]/40 rounded-full blur-sm animate-glow-pulse" />
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-[#ffe066]/40 rounded-full blur-sm animate-glow-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#b6d464]/40 rounded-full blur-sm animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#ffe066]/40 rounded-full blur-sm animate-glow-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Animated connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b6d464" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffe066" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#b6d464" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0s' }} />
          <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="70%" x2="40%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <line x1="60%" y1="80%" x2="80%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-left max-w-2xl">
            {/* Animated headline */}
            <div
              className={`hero-text transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight hero-text" style={{
                overflow: 'visible',
                color: 'hsl(var(--foreground))',
              }}>
                <span
                  className="hero-text"
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
                <span className="hero-text" style={{ 
                  color: 'hsl(var(--foreground))',
                }}>
                  & TECH BUILDER
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl" style={{
                willChange: 'auto',
                transition: 'color 0.2s ease-in-out'
              }}>
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
                className="text-lg px-8 py-6 border-0 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
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
                className="text-lg px-8 py-6 bg-transparent rounded-full border-2 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:border-primary/50"
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
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              {/* Rotating animated border */}
              <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-2xl animate-border-rotate"
                  style={{
                    background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 50%, #b6d464 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'borderRotate 8s linear infinite, gradientShift 3s ease infinite'
                  }}
                />
                <div className="absolute inset-[2px] rounded-2xl bg-background" />
              </div>
              
              {/* Pulsing glow effect */}
              <div 
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#b6d464]/40 via-[#ffe066]/40 to-[#b6d464]/40 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                style={{
                  animation: 'float 6s ease-in-out infinite, gradientShift 3s ease infinite',
                  backgroundSize: '200% 200%'
                }}
              />
              
              {/* Image container with inner glow */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background p-1 z-10">
                <div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#b6d464]/30 via-transparent to-[#ffe066]/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  style={{
                    animation: 'pulse 3s ease-in-out infinite'
                  }}
                />
                <Image
                  src="/profile-tomas-arizu.jpg"
                  alt="Tomas Arizu"
                  fill
                  className="rounded-xl object-cover relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-3 -right-3 w-3 h-3 bg-[#b6d464] rounded-full opacity-70 shadow-lg shadow-[#b6d464]/50" style={{ animationDelay: '0s', animation: 'float 4s ease-in-out infinite' }} />
              <div className="absolute -bottom-3 -left-3 w-2.5 h-2.5 bg-[#ffe066] rounded-full opacity-70 shadow-lg shadow-[#ffe066]/50" style={{ animationDelay: '1s', animation: 'float 5s ease-in-out infinite' }} />
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-[#b6d464] rounded-full opacity-60 shadow-lg shadow-[#b6d464]/50" style={{ animationDelay: '2s', animation: 'float 6s ease-in-out infinite' }} />
              <div className="absolute top-1/4 -right-4 w-2.5 h-2.5 bg-[#ffe066] rounded-full opacity-60 shadow-lg shadow-[#ffe066]/50" style={{ animationDelay: '1.5s', animation: 'float 5.5s ease-in-out infinite' }} />
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
