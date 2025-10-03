import { useState, useEffect } from 'react'

export type Language = 'en' | 'pt'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('pt') // Default to Portuguese

  useEffect(() => {
    // Check if user has a saved preference
    const savedLang = localStorage.getItem('preferred-language') as Language
    if (savedLang) {
      setLanguage(savedLang)
    } else {
      // Default to Portuguese for Portugal-based business
      // Keep English for international browsers if needed
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('en')) {
        setLanguage('en')
      } else {
        setLanguage('pt') // Default to Portuguese
      }
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'pt' : 'en'
    setLanguage(newLang)
    localStorage.setItem('preferred-language', newLang)
    
    // Auto-refresh page to ensure all content updates
    window.location.reload()
  }

  return { language, toggleLanguage }
}