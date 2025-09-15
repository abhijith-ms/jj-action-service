import { ArrowRight, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import fullLogo from '@/assets/jj full.png'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="hero" className="bg-gradient-to-br from-white to-light-gray py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={fullLogo} 
              alt="JJ Action Services - Professional Services" 
              className="h-24 sm:h-32 lg:h-40 w-auto mx-auto mb-6"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm border border-cool-gray/10">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium font-body text-cool-gray">Serving Portugal</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-navy mb-6 leading-tight">
            Professional Services
            <span className="block text-primary">You Can Trust</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-body text-cool-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            From electrical work to carpentry, plumbing to car repairs - JJ Action Services 
            provides reliable, skilled professionals for all your service needs in Portugal.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-body text-cool-gray">
            <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-cool-gray/10">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-cool-gray/10">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span className="font-medium">8 Professional Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-cool-gray/10">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span className="font-medium">Quick Response</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-3 text-lg font-medium font-accent shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-medium font-accent transition-all duration-300"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-cool-gray/20">
            <p className="text-sm font-body text-cool-gray mb-4">Trusted by customers across Portugal</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-cool-gray">
              <div className="text-center">
                <div className="text-2xl font-bold font-heading text-primary">500+</div>
                <div className="text-xs font-body">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-heading text-primary">8</div>
                <div className="text-xs font-body">Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-heading text-primary">24/7</div>
                <div className="text-xs font-body">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}