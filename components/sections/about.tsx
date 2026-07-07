"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Hook para efecto 3D parallax con mouse
const useParallax3D = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      const image = element.querySelector('#about-image') as HTMLElement;
      if (image) {
        image.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        image.style.transition = 'transform 0.1s ease-out';
      }
    };

    const handleMouseLeave = () => {
      const image = element.querySelector('#about-image') as HTMLElement;
      if (image) {
        image.style.transition = 'transform 0.5s ease-out';
        image.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const { language, t } = useLanguage();
  const resumeHref = language === "es" ? "/tomas-arizu-cv.pdf" : "/tomas-arizu-cv-english.pdf";

  useParallax3D(imageContainerRef);
  useScrollReveal(sectionRef)

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div data-reveal>
            <div className="relative">
              <div
                ref={imageContainerRef}
                className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-muted border border-border"
              >
                <Image
                  src="/fondo-sur.jpg"
                  alt="Tomas Arizu"
                  fill
                  className="object-cover"
                  id="about-image"
                  style={{ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div data-reveal>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t.about.hi}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.content1}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.content2}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {t.about.content3}
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
                {t.about.keypoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-2 rounded-lg p-2.5 bg-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="font-mono text-[11px] uppercase tracking-wide text-background">{point}</span>
                  </div>
                ))}
              </div>

              {/* Download Resume */}
              <div className="flex justify-center mt-12">
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-primary text-primary-foreground text-xs font-medium hover:brightness-110 transition-[filter]"
                  style={{ textDecoration: "none" }}
                >
                  <Download className="w-4 h-4" />
                  {t.about.download}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div data-reveal>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">{t.about.skills}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {t.about.skillGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-faint mb-3">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item: string) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
