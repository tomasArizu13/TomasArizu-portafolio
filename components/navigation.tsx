"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-context"
import { useLoading } from "@/components/loading-provider"

// Flag components using SVG - Real flags
const SpanishFlag = () => (
  <svg className="w-5 h-4 mr-2 inline-block" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="640" height="160" fill="#AA151B"/>
    <rect width="640" height="160" y="160" fill="#F1BF00"/>
    <rect width="640" height="160" y="320" fill="#AA151B"/>
  </svg>
);

const USFlag = () => (
  <svg className="w-5 h-4 mr-2 inline-block" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    {/* Red stripes */}
    <rect width="640" height="480" fill="#b22234"/>
    <rect width="640" height="37" y="37" fill="#fff"/>
    <rect width="640" height="37" y="111" fill="#fff"/>
    <rect width="640" height="37" y="185" fill="#fff"/>
    <rect width="640" height="37" y="259" fill="#fff"/>
    <rect width="640" height="37" y="333" fill="#fff"/>
    <rect width="640" height="37" y="407" fill="#fff"/>
    {/* Blue canton */}
    <rect width="256" height="259" fill="#3c3b6e"/>
    {/* White stars represented as small circles in a pattern */}
    <g fill="#fff">
      {/* Row 1 - 9 stars */}
      <circle cx="20" cy="20" r="2.5"/>
      <circle cx="40" cy="20" r="2.5"/>
      <circle cx="60" cy="20" r="2.5"/>
      <circle cx="80" cy="20" r="2.5"/>
      <circle cx="100" cy="20" r="2.5"/>
      <circle cx="120" cy="20" r="2.5"/>
      <circle cx="140" cy="20" r="2.5"/>
      <circle cx="160" cy="20" r="2.5"/>
      <circle cx="180" cy="20" r="2.5"/>
      {/* Row 2 - 8 stars */}
      <circle cx="30" cy="40" r="2.5"/>
      <circle cx="50" cy="40" r="2.5"/>
      <circle cx="70" cy="40" r="2.5"/>
      <circle cx="90" cy="40" r="2.5"/>
      <circle cx="110" cy="40" r="2.5"/>
      <circle cx="130" cy="40" r="2.5"/>
      <circle cx="150" cy="40" r="2.5"/>
      <circle cx="170" cy="40" r="2.5"/>
      {/* Row 3 - 9 stars */}
      <circle cx="20" cy="60" r="2.5"/>
      <circle cx="40" cy="60" r="2.5"/>
      <circle cx="60" cy="60" r="2.5"/>
      <circle cx="80" cy="60" r="2.5"/>
      <circle cx="100" cy="60" r="2.5"/>
      <circle cx="120" cy="60" r="2.5"/>
      <circle cx="140" cy="60" r="2.5"/>
      <circle cx="160" cy="60" r="2.5"/>
      <circle cx="180" cy="60" r="2.5"/>
      {/* Row 4 - 8 stars */}
      <circle cx="30" cy="80" r="2.5"/>
      <circle cx="50" cy="80" r="2.5"/>
      <circle cx="70" cy="80" r="2.5"/>
      <circle cx="90" cy="80" r="2.5"/>
      <circle cx="110" cy="80" r="2.5"/>
      <circle cx="130" cy="80" r="2.5"/>
      <circle cx="150" cy="80" r="2.5"/>
      <circle cx="170" cy="80" r="2.5"/>
      {/* Row 5 - 9 stars */}
      <circle cx="20" cy="100" r="2.5"/>
      <circle cx="40" cy="100" r="2.5"/>
      <circle cx="60" cy="100" r="2.5"/>
      <circle cx="80" cy="100" r="2.5"/>
      <circle cx="100" cy="100" r="2.5"/>
      <circle cx="120" cy="100" r="2.5"/>
      <circle cx="140" cy="100" r="2.5"/>
      <circle cx="160" cy="100" r="2.5"/>
      <circle cx="180" cy="100" r="2.5"/>
    </g>
  </svg>
);

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage();
  const [openLang, setOpenLang] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setOpenLang(false);
      }
    }
    if (openLang) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openLang]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  // No mostrar el navigation mientras está cargando
  if (isLoading) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            className="font-bold text-xl hover:text-primary transition-colors"
            onClick={() => scrollToSection('#hero')}
            aria-label="Go to Hero section"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            Tomas Arizu
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            {/* Nuevo selector de idioma estético - Píldora redondeada */}
            <div className="relative" ref={langMenuRef}>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-muted-foreground/30 bg-background hover:bg-muted/50 hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-haspopup="listbox"
                aria-expanded={openLang}
                onClick={() => setOpenLang((prev) => !prev)}
              >
                <Globe className="w-4 h-4 text-primary" />
                <span className="font-medium flex items-center text-sm">
                  {language === "en" ? (
                    <>
                      <USFlag />
                      English
                    </>
                  ) : (
                    <>
                      <SpanishFlag />
                      Español
                    </>
                  )}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${openLang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openLang && (
                <div className="absolute right-0 mt-2 w-40 rounded-2xl shadow-xl bg-background border-2 border-muted-foreground/30 z-50 animate-fade-in overflow-hidden">
                  <button
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-foreground ${language === "en" ? "font-bold text-primary bg-primary/5" : ""}`}
                    onClick={() => {
                      setLanguage("en");
                      setOpenLang(false);
                    }}
                  >
                    <span className="flex items-center">
                      <USFlag />
                      English
                    </span>
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-foreground ${language === "es" ? "font-bold text-primary bg-primary/5" : ""}`}
                    onClick={() => {
                      setLanguage("es");
                      setOpenLang(false);
                    }}
                  >
                    <span className="flex items-center">
                      <SpanishFlag />
                      Español
                    </span>
                  </button>
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-center"
                >
                  {item.name}
                </button>
              ))}
              {/* Selector de idioma en mobile - Píldora redondeada */}
              <div className="relative mt-2" ref={langMenuRef}>
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-muted-foreground/30 bg-background hover:bg-muted/50 hover:border-primary/50 transition-all duration-300 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-haspopup="listbox"
                  aria-expanded={openLang}
                  onClick={() => setOpenLang((prev) => !prev)}
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="font-medium flex items-center text-sm">
                    {language === "en" ? (
                      <>
                        <USFlag />
                        English
                      </>
                    ) : (
                      <>
                        <SpanishFlag />
                        Español
                      </>
                    )}
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openLang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openLang && (
                  <div className="absolute right-0 mt-2 w-40 rounded-2xl shadow-xl bg-background border-2 border-muted-foreground/30 z-50 animate-fade-in overflow-hidden">
                    <button
                      className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-foreground ${language === "en" ? "font-bold text-primary bg-primary/5" : ""}`}
                      onClick={() => {
                        setLanguage("en");
                        setOpenLang(false);
                      }}
                    >
                      <span className="flex items-center">
                        <USFlag />
                        English
                      </span>
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-foreground ${language === "es" ? "font-bold text-primary bg-primary/5" : ""}`}
                      onClick={() => {
                        setLanguage("es");
                        setOpenLang(false);
                      }}
                    >
                      <span className="flex items-center">
                        <SpanishFlag />
                        Español
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
