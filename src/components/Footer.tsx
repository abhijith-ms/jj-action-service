import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">
              JJ Action Services
            </h3>
            <p className="font-body text-cool-gray mb-4 text-sm leading-relaxed">
              {t.companyDescription}
            </p>
            <div className="space-y-1 text-sm font-body text-cool-gray">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rua da Sofia, 1 ESQ</span>
              </div>
              <div className="ml-6">4705-453 Celeiros</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">
              {t.services}
            </h4>
            <ul className="space-y-2 text-sm font-body text-cool-gray">
              <li>{t.electricalServices}</li>
              <li>{t.plumbingServices}</li>
              <li>{t.automotiveRepair}</li>
              <li>{t.homeMaintenance}</li>
              <li>{t.carpentryServices}</li>
              <li>{t.paintingServices}</li>
              <li>{t.houseCleaning}</li>
              <li>{t.generalRepairs}</li>
              <li>{t.emergencyServices}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm font-body text-cool-gray">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-primary transition-colors"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors"
                >
                  {t.contact}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">
              {t.contactInfo}
            </h4>
            <div className="space-y-3 text-sm font-body text-cool-gray">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+351912628050"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  +351 912 628 050
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald" />
                <a
                  href="mailto:info@jjactionservices.com"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  info@jjactionservices.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm font-body text-cool-gray">
              &copy; 2024 JJ Action Services. {t.allRightsReserved}.
            </div>
            <div className="flex items-center space-x-6 text-sm font-body text-cool-gray">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-emerald rounded-full mr-2"></div>
                {t.licensedInsured}
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-terracotta rounded-full mr-2"></div>
                {t.emergencyService}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
