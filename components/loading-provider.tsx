"use client"

import { createContext, useContext, useState } from "react"
import LoadingScreen from "@/components/loading-screen"

// Crear contexto para el estado de loading
const LoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}>({
  isLoading: true,
  setIsLoading: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <LoadingScreen />
      {children}
    </LoadingContext.Provider>
  )
}
