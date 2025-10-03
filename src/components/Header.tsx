import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/JJ logo.png";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t.home, id: "hero" },
    { label: t.services, id: "services" },
    { label: t.contact, id: "contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-cool-gray/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                alt="JJ Action Services Logo"
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-extrabold font-heading bg-gradient-to-r from-primary via-navy to-primary bg-clip-text text-transparent tracking-tight">
                  JJ Action
                </span>
                <span className="text-xl font-bold font-heading text-navy ml-1">
                  Services
                </span>
              </div>
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

          {/* Language Toggle and CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-600 font-accent font-medium"
            >
              {t.contactUs}
            </Button>
          </div>

          {/* Mobile Language Toggle, CTA Button and Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-primary hover:bg-primary-600 font-accent font-medium text-sm px-3 py-2"
            >
              {t.contactUs}
            </Button>
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
