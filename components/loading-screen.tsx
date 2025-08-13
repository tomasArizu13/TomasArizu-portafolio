"use client"

import { useState, useEffect } from "react"
import { useLoading } from "@/components/loading-provider"

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = useLoading()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
          }, 500) // Esperar 500ms más para mostrar la animación completa
          return 100
        }
        return prev + 2
      })
    }, 30) // Actualizar cada 30ms para una carga suave

    return () => clearInterval(interval)
  }, [setIsLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="relative">
        {/* Logo TA */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Círculo gris claro */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
          
          {/* Arco superior con gradiente verde */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b6d464" />
                <stop offset="100%" stopColor="#ffe066" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="3"
              strokeDasharray={`${(progress / 100) * 283} 283`}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          {/* Letras TA */}
          <div className="relative z-10">
            <span className="text-3xl font-serif font-bold text-black dark:text-white">TA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
