import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '@/assets/JJ logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-cool-gray/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <img 
                src={logo} 
                alt="JJ Action Services Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold font-heading text-navy hidden sm:block">
                JJ Action Services
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-cool-gray hover:text-primary font-medium font-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary-600 font-accent font-medium"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cool-gray hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cool-gray/20 bg-white">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-cool-gray hover:text-primary font-medium font-accent transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary hover:bg-primary-600 font-accent font-medium"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}