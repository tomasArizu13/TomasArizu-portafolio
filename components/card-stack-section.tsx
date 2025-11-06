'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface CardStackSectionProps {
  children: ReactNode
  index: number
  totalSections: number
}

export default function CardStackSection({ children, index, totalSections }: CardStackSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const lastActiveState = useRef(false)

  // Optimized IntersectionObserver - less aggressive thresholds
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const newActive = entry.isIntersecting && entry.intersectionRatio > 0.3
          if (newActive !== lastActiveState.current) {
            lastActiveState.current = newActive
            setIsActive(newActive)
          }
        })
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1],
        rootMargin: '-8% 0px -8% 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Calculate depth based on position in stack
  const depth = totalSections - index - 1
  const scale = isActive ? 1 : 0.95 + (depth * 0.01)
  const translateY = isActive ? 0 : depth * 15
  const rotateX = isActive ? 0 : depth * 1.5
  const zIndex = isActive ? totalSections + 10 : totalSections - depth
  const opacity = isActive ? 1 : 0.6 - (depth * 0.12)

  return (
    <div
      ref={sectionRef}
      className="scroll-snap-section card-3d relative min-h-screen w-full"
      style={{
        zIndex,
        position: 'relative',
      }}
    >
      {/* Card container with shadow and depth */}
      <div
        className="relative w-full min-h-screen bg-background rounded-3xl overflow-hidden"
        style={{
          transform: `perspective(2000px) translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
          transformStyle: 'preserve-3d',
          opacity: Math.max(opacity, 0.3),
          boxShadow: isActive
            ? '0 40px 120px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(182, 212, 100, 0.2), inset 0 0 60px rgba(182, 212, 100, 0.05)'
            : `0 ${15 + depth * 8}px ${40 + depth * 15}px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(182, 212, 100, 0.08)`,
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-out, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: isActive ? 'transform, opacity' : 'auto',
        }}
      >
        {/* Animated border glow effect when active */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(182, 212, 100, 0.1) 0%, rgba(255, 224, 102, 0.1) 50%, rgba(182, 212, 100, 0.1) 100%)',
              animation: 'gradientShift 3s ease infinite',
              backgroundSize: '200% 200%',
              zIndex: -1,
            }}
          />
        )}

        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Subtle shine effect on card surface */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)',
            transform: isActive ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.6s ease-out, opacity 0.2s ease-out',
            opacity: isActive ? 1 : 0,
          }}
        />

        {/* Floating particles effect when active */}
        {isActive && (
          <>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                  background: `rgba(182, 212, 100, ${0.3 + Math.random() * 0.4})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `particleFloat ${10 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  boxShadow: `0 0 ${10 + Math.random() * 10}px rgba(182, 212, 100, 0.5)`,
                }}
              />
            ))}
          </>
        )}

        {/* Glow effect on edges when active */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(182, 212, 100, 0.1) 50%, transparent 100%)',
              animation: 'glowPulse 3s ease-in-out infinite',
            }}
          />
        )}
      </div>
    </div>
  )
}

