"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useTranslation } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Contact() {
  const t = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal(sectionRef)

  const handleEmailClick = () => {
    window.location.href = "mailto:tomasarizu13@gmail.com"
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8" data-reveal>
            <div>
              <div className="hero-pill inline-flex mb-6" data-magnetic data-hover>
                <span className="live" />
                {t.hero.pill}
              </div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.letsConnect}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.contact.letsConnectDesc}
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:tomasarizu13@gmail.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.emailLabel}</div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">{t.contact.emailValue}</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/tomas-arizu-47ba1521a/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.linkedinLabel}</div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">{t.contact.linkedinValue}</div>
                </div>
              </a>

              <a href="https://github.com/tomasArizu13" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.githubLabel}</div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">{t.contact.githubValue}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Let's Talk Card */}
          <Card data-reveal>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">{t.contact.ctaTitle}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.contact.ctaDesc}
              </p>

              <Button
                onClick={handleEmailClick}
                size="lg"
                className="text-lg px-8 py-6"
                data-magnetic
              >
                <Send className="w-5 h-5 mr-2" />
                {t.contact.ctaButton}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
