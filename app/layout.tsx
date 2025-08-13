import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"
import LoadingProvider from "@/components/loading-provider"

export const metadata: Metadata = {
  title: 'Tomas Arizu - Product & Tech Builder',
  description: 'Portfolio de Tomas Arizu - Desarrollador de productos y tecnología',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen">
        <LoadingProvider>
          <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}
