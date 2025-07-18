"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-context";

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
            {/* Nuevo selector de idioma estético */}
            <div className="relative" ref={langMenuRef}>
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-muted-foreground bg-background hover:bg-muted-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-haspopup="listbox"
                aria-expanded={openLang}
                onClick={() => setOpenLang((prev) => !prev)}
              >
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-medium">
                  {language === "en" ? "English" : "Español"}
                </span>
                <svg className={`w-4 h-4 transition-transform ${openLang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openLang && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg shadow-xl bg-background border border-muted-foreground z-50 animate-fade-in">
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm rounded-t-lg hover:bg-primary/10 transition-colors ${language === "en" ? "font-bold text-primary" : ""}`}
                    onClick={() => {
                      setLanguage("en");
                      setOpenLang(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm rounded-b-lg hover:bg-primary/10 transition-colors ${language === "es" ? "font-bold text-primary" : ""}`}
                    onClick={() => {
                      setLanguage("es");
                      setOpenLang(false);
                    }}
                  >
                    Español
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
                  className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              {/* Selector de idioma en mobile */}
              <div className="relative mt-2" ref={langMenuRef}>
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-muted-foreground bg-background hover:bg-muted-foreground/10 transition-colors w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-haspopup="listbox"
                  aria-expanded={openLang}
                  onClick={() => setOpenLang((prev) => !prev)}
                >
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {language === "en" ? "English" : "Español"}
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${openLang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openLang && (
                  <div className="absolute right-0 mt-2 w-32 rounded-lg shadow-xl bg-background border border-muted-foreground z-50 animate-fade-in">
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm rounded-t-lg hover:bg-primary/10 transition-colors ${language === "en" ? "font-bold text-primary" : ""}`}
                      onClick={() => {
                        setLanguage("en");
                        setOpenLang(false);
                      }}
                    >
                      English
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm rounded-b-lg hover:bg-primary/10 transition-colors ${language === "es" ? "font-bold text-primary" : ""}`}
                      onClick={() => {
                        setLanguage("es");
                        setOpenLang(false);
                      }}
                    >
                      Español
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
