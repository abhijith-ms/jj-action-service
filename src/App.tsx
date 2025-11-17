import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Maintenance from "@/components/Maintenance"
import WhatsAppButton from "@/components/WhatsAppButton"

// Toggle maintenance mode here
const MAINTENANCE_MODE = false // Set to true to enable maintenance mode

function App() {
  // Show maintenance page if enabled
  if (MAINTENANCE_MODE) {
    return <Maintenance />
  }

  // Normal website
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
