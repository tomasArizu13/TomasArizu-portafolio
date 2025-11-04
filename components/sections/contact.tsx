"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTranslation } from "@/components/language-context";

export default function Contact() {
  const t = useTranslation();

  const handleEmailClick = () => {
    window.location.href = "mailto:tomasarizu13@gmail.com";
  }

  return (
    <section id="contact" className="py-20 bg-muted relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/18 via-secondary/18 to-primary/18 animate-gradient-flow" />
        
        {/* Interactive floating elements - much larger */}
        <div className="absolute top-16 left-12 w-64 h-64 bg-[#b6d464]/45 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-24 right-16 w-80 h-80 bg-[#ffe066]/45 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-28 left-1/4 w-72 h-72 bg-[#b6d464]/40 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-1/3 w-88 h-88 bg-[#ffe066]/40 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#b6d464]/30 to-[#ffe066]/30 rounded-full blur-3xl animate-glow-pulse" />
        
        {/* Additional large orbs */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#b6d464]/35 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/3 w-88 h-88 bg-[#ffe066]/35 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '3s' }} />
        
        {/* Animated connection lines - thicker and more visible */}
        <div className="absolute top-1/4 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-[#b6d464]/40 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1 bg-gradient-to-l from-transparent via-[#ffe066]/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Small particles - larger and more visible */}
        <div className="absolute top-32 left-1/3 w-5 h-5 bg-[#b6d464] rounded-full opacity-85 shadow-lg shadow-[#b6d464]/60 animate-particle-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-[#ffe066] rounded-full opacity-85 shadow-lg shadow-[#ffe066]/60 animate-particle-float" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-1/2 left-1/5 w-6 h-6 bg-[#b6d464] rounded-full opacity-80 shadow-lg shadow-[#b6d464]/60 animate-particle-float" style={{ animationDelay: '5.5s' }} />
        <div className="absolute top-1/4 right-1/5 w-5 h-5 bg-[#ffe066] rounded-full opacity-80 shadow-lg shadow-[#ffe066]/60 animate-particle-float" style={{ animationDelay: '7.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.letsConnect}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.contact.letsConnectDesc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.emailLabel}</div>
                  <div className="text-muted-foreground">{t.contact.emailValue}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.phoneLabel}</div>
                  <div className="text-muted-foreground">{t.contact.phoneValue}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.locationLabel}</div>
                  <div className="text-muted-foreground">{t.contact.locationValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Let's Talk Card */}
          <Card style={{ border: '2px solid', borderImage: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%) 1' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Let's Talk</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                ¿Tienes un proyecto en mente? ¿Quieres colaborar? 
                <br />
                ¡Me encantaría escuchar sobre tu idea!
              </p>
              
              <Button
                onClick={handleEmailClick}
                size="lg"
                className="text-lg px-8 py-6 border-0 transition-transform duration-200 hover:scale-105 hover:brightness-110"
                style={{ background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%)', color: '#222' }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
