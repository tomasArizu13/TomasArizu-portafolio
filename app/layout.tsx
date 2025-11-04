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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background min-h-screen transition-colors duration-300 ease-in-out">
        <LoadingProvider>
          <LanguageProvider>
            <ThemeProvider 
              attribute="class" 
              defaultTheme="light" 
              enableSystem={false}
              disableTransitionOnChange={false}
            >
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}
