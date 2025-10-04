import { 
  Wrench, 
  Zap, 
  Droplets, 
  Car, 
  Home, 
  Paintbrush, 
  Hammer, 
  Shield,
  Sparkles
} from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

const getServices = (t: any) => [
  {
    icon: Zap,
    title: t.electricalServices,
    description: t.electricalDesc,
    features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Emergency Repairs"]
  },
  {
    icon: Droplets,
    title: t.plumbingServices,
    description: t.plumbingDesc,
    features: ["Leak Detection", "Pipe Installation", "Drain Cleaning", "Water Heater Service"]
  },
  {
    icon: Car,
    title: t.automotiveRepair,
    description: t.automotiveDesc,
    features: ["Engine Diagnostics", "Brake Service", "Oil Changes", "Tire Installation"]
  },
  {
    icon: Home,
    title: t.homeMaintenance,
    description: t.homeMaintenanceDesc,
    features: ["Regular Inspections", "Preventive Care", "Seasonal Maintenance", "Emergency Fixes"]
  },
  {
    icon: Hammer,
    title: t.carpentryServices,
    description: t.carpentryDesc,
    features: ["Custom Furniture", "Cabinet Installation", "Deck Building", "Trim Work"]
  },
  {
    icon: Paintbrush,
    title: t.paintingServices,
    description: t.paintingDesc,
    features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Surface Preparation"]
  },
  {
    icon: Wrench,
    title: t.generalRepairs,
    description: t.generalRepairsDesc,
    features: ["Appliance Repair", "Fixture Installation", "Door & Window Repair", "General Maintenance"]
  },
  {
    icon: Sparkles,
    title: t.houseCleaning,
    description: t.houseCleaningDesc,
    features: ["Deep Cleaning", "Regular Maintenance", "Office Cleaning", "Move-in/Move-out"]
  },
  {
    icon: Shield,
    title: t.emergencyServices,
    description: t.emergencyDesc,
    features: ["24/7 Availability", "Rapid Response", "Emergency Repairs", "Damage Assessment"]
  }
]

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const services = getServices(t);
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-light-gray/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            {t.ourServices}
          </h2>
          
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
              {t.whyChoose}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-emerald" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">{t.licensedInsured}</h4>
                <p className="text-sm font-body text-cool-gray">
                  {t.licensedInsuredDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">{t.quickResponse}</h4>
                <p className="text-sm font-body text-cool-gray">
                  {t.quickResponseDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-terracotta" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">{t.localExpertise}</h4>
                <p className="text-sm font-body text-cool-gray">
                  {t.localExpertiseDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}