import { 
  Users, 
  UserCheck, 
  Briefcase, 
  TrendingUp, 
  Shield,
  Heart,
  FileCheck,
  Settings,
  Headphones
} from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

const getServices = (t: any) => [
  {
    icon: Users,
    title: t.talentSourcing,
    description: t.talentSourcingDesc,
    features: ["Pre-screened Candidates", "Skills Assessment", "Background Verification", "Cultural Fit Analysis"]
  },
  {
    icon: UserCheck,
    title: t.candidatePlacement,
    description: t.candidatePlacementDesc,
    features: ["Fast Placement", "Legal Compliance", "Contract Support", "Onboarding Coordination"]
  },
  {
    icon: Briefcase,
    title: t.industrySpecialists,
    description: t.industrySpecialistsDesc,
    features: ["Construction", "Hospitality", "Logistics", "Technology"]
  },
  {
    icon: TrendingUp,
    title: t.onboardingSupport,
    description: t.onboardingSupportDesc,
    features: ["Integration Planning", "Cultural Training", "Workplace Adaptation", "Performance Tracking"]
  },
  {
    icon: Heart,
    title: t.retentionPlans,
    description: t.retentionPlansDesc,
    features: ["Follow-up Services", "Satisfaction Surveys", "Retention Strategies", "Long-term Support"]
  },
  {
    icon: Shield,
    title: t.diversityInclusion,
    description: t.diversityInclusionDesc,
    features: ["Cultural Diversity", "Inclusive Hiring", "Workplace Integration", "Diversity Training"]
  },
  {
    icon: FileCheck,
    title: t.legalCompliance,
    description: t.legalComplianceDesc,
    features: ["Work Authorization", "Legal Documentation", "Compliance Verification", "Regulatory Support"]
  },
  {
    icon: Settings,
    title: t.customSolutions,
    description: t.customSolutionsDesc,
    features: ["Tailored Strategies", "Industry-specific", "Company Culture Fit", "Flexible Approach"]
  },
  {
    icon: Headphones,
    title: t.ongoingSupport,
    description: t.ongoingSupportDesc,
    features: ["Continuous Support", "Consultation Services", "Issue Resolution", "Partnership Management"]
  }
]

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const services = getServices(t);
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-light-gray/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            {t.ourServices}
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-light-gray/50 rounded-lg shadow-sm border border-cool-gray/20 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-cool-gray text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-xs font-body text-cool-gray space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-light-gray rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold font-heading text-navy mb-4">
              {t.whyChoose}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-emerald" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">{t.verifiedTalent}</h4>
                <p className="text-sm font-body text-cool-gray">
                  {t.licensedInsuredDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">{t.quickPlacement}</h4>
                <p className="text-sm font-body text-cool-gray">
                  {t.quickResponseDesc}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-terracotta" />
                </div>
                <h4 className="font-semibold font-heading text-navy mb-2">{t.localExpertise}</h4>
                <p className="text-sm font-body text-cool-gray">
                  {t.localExpertiseDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}