import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">JJ Action Services</h3>
            <p className="font-body text-cool-gray mb-4 text-sm leading-relaxed">
              Professional services you can trust. From electrical work to carpentry, 
              we provide reliable solutions across Portugal.
            </p>
            <div className="flex items-center space-x-2 text-sm font-body text-cool-gray">
              <MapPin className="w-4 h-4" />
              <span>Serving all of Portugal</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm font-body text-cool-gray">
              <li>Electrical Services</li>
              <li>Plumbing Services</li>
              <li>Automotive Repair</li>
              <li>Home Maintenance</li>
              <li>Carpentry Services</li>
              <li>Painting Services</li>
              <li>General Repairs</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body text-cool-gray">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm font-body text-cool-gray">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+351 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald" />
                <span>info@jjactionservices.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-terracotta mt-0.5" />
                <div>
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat: 9AM-4PM</div>
                  <div className="text-xs text-primary">24/7 Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm font-body text-cool-gray">
              &copy; 2024 JJ Action Services. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm font-body text-cool-gray">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-emerald rounded-full mr-2"></div>
                Licensed & Insured
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-terracotta rounded-full mr-2"></div>
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}