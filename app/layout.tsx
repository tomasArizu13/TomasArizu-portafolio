import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from 'next/font/google'
import 'lenis/dist/lenis.css'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"
import LoadingProvider from "@/components/loading-provider"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import CustomCursor from "@/components/custom-cursor"

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tomas Arizu - Product & Tech Builder',
  description: 'Product-minded builder. QA Automation Engineer at Luno. I build and validate products people actually want to use.',
  openGraph: {
    title: 'Tomas Arizu - Product & Tech Builder',
    description: 'Product-minded builder. QA Automation Engineer at Luno. I build and validate products people actually want to use.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-background min-h-screen">
        <SmoothScrollProvider>
          <LoadingProvider>
            <LanguageProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                disableTransitionOnChange={true}
              >
                {children}
                <CustomCursor />
              </ThemeProvider>
            </LanguageProvider>
          </LoadingProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
