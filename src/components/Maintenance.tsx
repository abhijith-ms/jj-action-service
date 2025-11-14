import { Wrench, Phone, Mail } from "lucide-react"

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-primary flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Wrench className="w-10 h-10 text-primary animate-pulse" />
          </div>
        </div>

        {/* Portuguese Content */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">
            Site em Manutenção
          </h1>
          <p className="text-lg font-body text-cool-gray mb-6">
            Estamos a melhorar o nosso website para melhor o servir. 
            Voltaremos em breve!
          </p>
        </div>

        {/* English Content */}
        <div className="mb-8 pb-8 border-b border-cool-gray/20">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-navy mb-4">
            Site Under Maintenance
          </h2>
          <p className="text-lg font-body text-cool-gray">
            We're improving our website to serve you better. 
            We'll be back soon!
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <p className="text-sm font-semibold font-heading text-navy mb-4">
            Para emergências / For emergencies:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Phone */}
            <a 
              href="tel:+351912628050"
              className="flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+351 912 628 050</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@jjactionservices.com"
              className="flex items-center justify-center gap-2 bg-emerald/10 hover:bg-emerald/20 text-emerald px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@jjactionservices.com</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-cool-gray/20">
          <p className="text-sm font-body text-cool-gray">
            JJ Action Services - Braga, Portugal
          </p>
          <p className="text-xs font-body text-cool-gray mt-2">
            Disponível 24/7 para emergências • Available 24/7 for emergencies
          </p>
        </div>
      </div>
    </div>
  )
}
