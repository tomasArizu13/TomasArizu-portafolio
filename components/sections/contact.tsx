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
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
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
