import { useState, useEffect } from 'react'

export type Language = 'en' | 'pt'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check if user has a saved preference
    const savedLang = localStorage.getItem('preferred-language') as Language
    if (savedLang) {
      setLanguage(savedLang)
    } else {
      // Auto-detect Portuguese if browser language is Portuguese
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('pt')) {
        setLanguage('pt')
      }
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'pt' : 'en'
    setLanguage(newLang)
    localStorage.setItem('preferred-language', newLang)
  }

  return { language, toggleLanguage }
}