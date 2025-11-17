import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import fullLogo from "@/assets/jj full.png";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import image1 from "@/assets/jj images/1.webp";
import image2 from "@/assets/jj images/2.webp";
import image3 from "@/assets/jj images/3.webp";
import image4 from "@/assets/jj images/4.webp";
import image5 from "@/assets/jj images/5.webp";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-white to-light-gray py-12 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="mb-6 animate-scale-in">
              <img
                src={fullLogo}
                alt="JJ Action Services - Recruitment Services"
                className="h-20 sm:h-24 lg:h-28 w-auto mx-auto lg:mx-0 mb-4 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-cool-gray/10 animate-fade-in hover:shadow-md transition-shadow">
              <MapPin className="w-4 h-4 text-primary animate-pulse-slow" />
              <span className="text-sm font-medium font-body text-cool-gray">
                {t.servingPortugal}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-navy mb-4 leading-tight animate-slide-in-left">
              {t.heroTitle}
              <span className="block text-primary animate-slide-in-right">{t.heroSubtitle}</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-body text-cool-gray mb-6 leading-relaxed animate-fade-in">
              {t.heroDescription}
            </p>

            {/* Service Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm font-body text-cool-gray">
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-cool-gray/10 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                <span className="font-medium">{t.verifiedTalent}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-cool-gray/10 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                <span className="font-medium">{t.companiesServed}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-cool-gray/10 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                <span className="font-medium">{t.quickPlacement}</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-3 text-lg font-medium font-accent shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                {t.viewServices}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-medium font-accent transition-all duration-300 w-full sm:w-auto"
              >
                {t.contactUs}
              </Button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large featured image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                <img
                  src={image1}
                  alt="Professional recruitment services"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Grid of smaller images */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={image2}
                  alt="Skilled professionals"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={image3}
                  alt="Workplace diversity"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={image4}
                  alt="Team collaboration"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={image5}
                  alt="Business growth"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
