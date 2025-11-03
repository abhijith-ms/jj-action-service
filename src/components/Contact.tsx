import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="bg-light-gray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-lg font-body text-cool-gray max-w-2xl mx-auto">
            {t.contactDescription}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-cool-gray/20">
            <h3 className="text-2xl font-semibold font-heading text-navy mb-8 text-center">
              {t.getInTouch}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">{t.phone}</h4>
                    <a 
                      href="tel:+351912628050" 
                      className="font-body text-cool-gray hover:text-primary transition-colors cursor-pointer"
                    >
                      +351 912 628 050
                    </a>
                    <p className="text-sm font-body text-cool-gray">{t.available24_7}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">{t.email}</h4>
                    <a 
                      href="mailto:info@jjactionservices.com" 
                      className="block font-body text-cool-gray hover:text-primary transition-colors cursor-pointer"
                    >
                      info@jjactionservices.com
                    </a>
                    <p className="text-sm font-body text-cool-gray mt-2">{t.respondWithin2Hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-navy mb-1">{t.address}</h4>
                    <p className="font-body text-cool-gray">Avenida da Liberdade 615, 1º Piso</p>
                    <p className="font-body text-cool-gray">4710-251 Braga</p>
                    <p className="text-sm font-body text-cool-gray">{t.servingAllPortugal}</p>
                  </div>
                </div>

                
              </div>

              <div className="bg-light-gray/30 rounded-lg p-6">
                <h4 className="font-semibold font-heading text-navy mb-4">{t.serviceGuarantee}</h4>
                <ul className="space-y-3 text-sm font-body text-cool-gray">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    {t.freeQuotes}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    {t.licensedProfessionals}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    {t.satisfactionGuarantee}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    {t.transparentPricing}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    {t.quickResponseTimes}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                    {t.professionalService}
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