import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200 text-primary hover:text-primary-600 text-sm font-medium border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md"
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-bold tracking-wide">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  )
}