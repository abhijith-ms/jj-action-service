import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Maintenance from "@/components/Maintenance"

// Toggle maintenance mode here
const MAINTENANCE_MODE = true // Set to true to enable maintenance mode

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
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
