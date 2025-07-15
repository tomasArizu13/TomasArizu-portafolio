import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Tomas Arizu</h3>
            <p className="text-muted-foreground">Full Stack Developer & Designer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/tomasArizu13" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/tomas-arizu-47ba1521a/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:tomasarizu13@gmail.com" className="hover:scale-110 transition-transform">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">© {currentYear} Tomas Arizu. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">
              Designed by{" "}
              <a
                href="https://tuportafolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                tuportafolio.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
