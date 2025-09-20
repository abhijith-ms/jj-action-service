import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {

  return (
    <section id="contact" className="bg-light-gray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            Contact Us
          </h2>
          <p className="text-lg font-body text-cool-gray max-w-2xl mx-auto">
            Get in touch with us for all your service needs across Portugal. 
            We're here to help and provide professional solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-cool-gray/20">
            <h3 className="text-2xl font-semibold font-heading text-navy mb-8 text-center">
              Get In Touch
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Phone</h4>
                    <a 
                      href="tel:+351912628050" 
                      className="font-body text-cool-gray hover:text-primary transition-colors cursor-pointer"
                    >
                      +351 912 628 050
                    </a>
                    <p className="text-sm font-body text-cool-gray">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Email</h4>
                    <a 
                      href="mailto:info@jjactionservices.com" 
                      className="font-body text-cool-gray hover:text-primary transition-colors cursor-pointer"
                    >
                      info@jjactionservices.com
                    </a>
                    <p className="text-sm font-body text-cool-gray">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Address</h4>
                    <p className="font-body text-cool-gray">Rua da Sofia, 1 ESQ</p>
                    <p className="font-body text-cool-gray">4705-453 Celeiros</p>
                    <p className="text-sm font-body text-cool-gray">Serving all of Portugal</p>
                  </div>
                </div>

                
              </div>

              <div className="bg-light-gray/30 rounded-lg p-6">
                <h4 className="font-semibold font-heading text-navy mb-4">Our Service Guarantee</h4>
                <ul className="space-y-3 text-sm font-body text-cool-gray">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    Free quotes and consultations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    Quick response times
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    Professional and reliable service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}