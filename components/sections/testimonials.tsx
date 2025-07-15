"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Digital Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with John was a game-changer for our business. He transformed our ideas into a beautiful, functional web application that our users love.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "John's expertise in both frontend and backend development allowed us to create a comprehensive solution. His communication throughout the project was excellent.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Startup Founder",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The quality of work and professionalism John brings to every project is outstanding. He helped us launch our MVP ahead of schedule.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from satisfied clients who trusted me with their projects
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <Card className="min-h-[300px]">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={goToNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
