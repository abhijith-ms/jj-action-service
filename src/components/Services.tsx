import { 
  Wrench, 
  Zap, 
  Droplets, 
  Car, 
  Home, 
  Paintbrush, 
  Hammer, 
  Shield 
} from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Professional electrical installations, repairs, and maintenance for homes and businesses.",
    features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Emergency Repairs"]
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Complete plumbing solutions from leak repairs to full system installations.",
    features: ["Leak Detection", "Pipe Installation", "Drain Cleaning", "Water Heater Service"]
  },
  {
    icon: Car,
    title: "Automotive Repair",
    description: "Expert car maintenance and repair services to keep your vehicle running smoothly.",
    features: ["Engine Diagnostics", "Brake Service", "Oil Changes", "Tire Installation"]
  },
  {
    icon: Home,
    title: "Home Maintenance",
    description: "Comprehensive home maintenance services to keep your property in perfect condition.",
    features: ["Regular Inspections", "Preventive Care", "Seasonal Maintenance", "Emergency Fixes"]
  },
  {
    icon: Hammer,
    title: "Carpentry Services",
    description: "Custom carpentry work including furniture, cabinets, and structural repairs.",
    features: ["Custom Furniture", "Cabinet Installation", "Deck Building", "Trim Work"]
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Interior and exterior painting services with premium materials and finishes.",
    features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Surface Preparation"]
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Versatile repair services for various household and commercial needs.",
    features: ["Appliance Repair", "Fixture Installation", "Door & Window Repair", "General Maintenance"]
  },
  {
    icon: Shield,
    title: "Emergency Services",
    description: "24/7 emergency response for urgent repair and maintenance situations.",
    features: ["24/7 Availability", "Rapid Response", "Emergency Repairs", "Damage Assessment"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-light-gray/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg font-body text-cool-gray max-w-2xl mx-auto">
            From electrical work to carpentry, plumbing to car repairs - JJ Action Services 
            provides reliable, skilled professionals for all your service needs in Portugal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-light-gray/50 rounded-lg shadow-sm border border-cool-gray/20 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-cool-gray text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-xs font-body text-cool-gray space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-light-gray rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold font-heading text-navy mb-4">
              Why Choose JJ Action Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-emerald" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">Licensed & Insured</h4>
                <p className="text-sm font-body text-cool-gray">
                  Fully licensed professionals with comprehensive insurance coverage
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">Quick Response</h4>
                <p className="text-sm font-body text-cool-gray">
                  Fast response times and efficient service delivery
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-terracotta" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">Local Expertise</h4>
                <p className="text-sm font-body text-cool-gray">
                  Deep understanding of Portuguese homes and regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}