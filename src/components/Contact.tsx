import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="bg-light-gray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg font-body text-cool-gray max-w-2xl mx-auto">
            Ready to get started? Contact us for a free consultation and quote. 
            We're here to help with all your service needs across Portugal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-heading text-navy mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Phone</h4>
                    <p className="font-body text-cool-gray">+351 XXX XXX XXX</p>
                    <p className="text-sm font-body text-cool-gray">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Email</h4>
                    <p className="font-body text-cool-gray">info@jjactionservices.pt</p>
                    <p className="text-sm font-body text-cool-gray">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Service Areas</h4>
                    <p className="font-body text-cool-gray">Lisbon, Porto, Braga, Coimbra</p>
                    <p className="text-sm font-body text-cool-gray">Serving all major cities in Portugal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">Business Hours</h4>
                    <p className="font-body text-cool-gray">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="font-body text-cool-gray">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm font-body text-cool-gray">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Guarantee */}
            <div className="bg-white rounded-lg p-6 border border-cool-gray/20">
              <h4 className="font-semibold font-heading text-navy mb-3">Our Service Guarantee</h4>
              <ul className="space-y-2 text-sm font-body text-cool-gray">
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
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-cool-gray/20">
            <h3 className="text-2xl font-semibold font-heading text-navy mb-6">
              Request a Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium font-body text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium font-body text-navy mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cool-gray/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                    placeholder="+351 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium font-body text-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cool-gray/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium font-body text-navy mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-cool-gray/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                >
                  <option value="">Select a service</option>
                  <option value="electrical">Electrical Services</option>
                  <option value="plumbing">Plumbing Services</option>
                  <option value="automotive">Automotive Repair</option>
                  <option value="home-maintenance">Home Maintenance</option>
                  <option value="carpentry">Carpentry Services</option>
                  <option value="painting">Painting Services</option>
                  <option value="general-repairs">General Repairs</option>
                  <option value="emergency">Emergency Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium font-body text-navy mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-cool-gray/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-none"
                  placeholder="Please describe your project or service needs..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-terracotta hover:bg-terracotta-600 text-white font-accent font-medium py-3 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Quote Request
              </Button>

              <p className="text-xs font-body text-cool-gray text-center">
                By submitting this form, you agree to be contacted by JJ Action Services regarding your service request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}