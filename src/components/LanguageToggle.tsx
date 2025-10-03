import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium"
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-semibold">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  )
}