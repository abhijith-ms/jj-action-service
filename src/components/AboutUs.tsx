import { Target, Users, TrendingUp, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutUs() {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: "About JJ Action Services",
      subtitle: "Bridging Talent, Building Futures",
      intro: "JJ Action Services is a Portuguese startup dedicated to connecting skilled professionals legally residing in Portugal with Portuguese companies seeking qualified talent.",
      
      missionTitle: "Our Mission",
      missionText: "To create fair and diverse job opportunities within the Portuguese labor market, promoting both skills recognition and inclusion while addressing the critical labor shortage facing Portuguese businesses.",
      
      problemTitle: "The Challenge",
      problemText: "Portuguese companies face significant labor shortages in key sectors, especially technical and operational areas. Meanwhile, hundreds of skilled international professionals living legally in Portugal are eager to work but encounter barriers to access.",
      
      solutionTitle: "Our Solution",
      solutionText: "We act as an efficient and human bridge between companies and professionals. We identify business needs, select suitable candidates, and facilitate their smooth integration into the workplace.",
      
      marketTitle: "Market Opportunity",
      marketText: "Portugal is experiencing growing demand for foreign workers, particularly since 2020. The country will require over 300,000 foreign workers by 2030. JJ Action Services is strategically positioned to address this gap efficiently.",
      
      stats: [
        { number: "300K+", label: "Workers Needed by 2030" },
        { number: "100%", label: "Legal Compliance" },
        { number: "Fast", label: "Placement Process" },
        { number: "B2B", label: "Recruitment Model" }
      ]
    },
    pt: {
      title: "Sobre a JJ Action Services",
      subtitle: "Conectando Talentos, Construindo Futuros",
      intro: "A JJ Action Services é uma startup portuguesa dedicada a conectar profissionais internacionais qualificados que residem legalmente em Portugal com empresas portuguesas que procuram talento qualificado.",
      
      missionTitle: "Nossa Missão",
      missionText: "Criar oportunidades de emprego justas e diversas no mercado de trabalho português, promovendo o reconhecimento de competências e a inclusão, ao mesmo tempo que abordamos a escassez crítica de mão de obra que as empresas portuguesas enfrentam.",
      
      problemTitle: "O Desafio",
      problemText: "As empresas portuguesas enfrentam escassez significativa de mão de obra em setores-chave, especialmente em áreas técnicas e operacionais. Enquanto isso, centenas de profissionais internacionais qualificados que vivem legalmente em Portugal estão ansiosos para trabalhar, mas encontram barreiras de acesso.",
      
      solutionTitle: "Nossa Solução",
      solutionText: "Atuamos como uma ponte eficiente e humana entre empresas e profissionais. Identificamos necessidades empresariais, selecionamos candidatos adequados e facilitamos sua integração suave no local de trabalho.",
      
      marketTitle: "Oportunidade de Mercado",
      marketText: "Portugal está experimentando uma demanda crescente por trabalhadores estrangeiros, particularmente desde 2020. O país precisará de mais de 300.000 trabalhadores estrangeiros até 2030. A JJ Action Services está estrategicamente posicionada para abordar essa lacuna de forma eficiente.",
      
      stats: [
        { number: "300K+", label: "Trabalhadores Necessários até 2030" },
        { number: "100%", label: "Conformidade Legal" },
        { number: "Rápido", label: "Processo de Colocação" },
        { number: "B2B", label: "Modelo de Recrutamento" }
      ]
    }
  };
  
  const t = content[language];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-primary font-semibold mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-cool-gray max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {t.stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-cool-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full border border-primary/20 hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">
                {t.missionTitle}
              </h3>
              <p className="text-cool-gray leading-relaxed">
                {t.missionText}
              </p>
            </div>
          </div>

          {/* Problem */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-terracotta/10 to-terracotta/5 rounded-2xl p-8 h-full border border-terracotta/20 hover:border-terracotta/40 transition-colors">
              <div className="w-16 h-16 bg-terracotta rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">
                {t.problemTitle}
              </h3>
              <p className="text-cool-gray leading-relaxed">
                {t.problemText}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-emerald/10 to-emerald/5 rounded-2xl p-8 h-full border border-emerald/20 hover:border-emerald/40 transition-colors">
              <div className="w-16 h-16 bg-emerald rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">
                {t.solutionTitle}
              </h3>
              <p className="text-cool-gray leading-relaxed">
                {t.solutionText}
              </p>
            </div>
          </div>

          {/* Market */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-navy/10 to-navy/5 rounded-2xl p-8 h-full border border-navy/20 hover:border-navy/40 transition-colors">
              <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">
                {t.marketTitle}
              </h3>
              <p className="text-cool-gray leading-relaxed">
                {t.marketText}
              </p>
            </div>
          </div>
        </div>

        {/* Business Model Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold font-heading mb-4">
            {language === 'en' ? 'Our Business Model' : 'Nosso Modelo de Negócio'}
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto opacity-90">
            {language === 'en' 
              ? 'B2B recruitment service: Portuguese companies pay a recruitment fee only when a successful hire is made. We also offer follow-up and retention plans to ensure long-term satisfaction and workforce stability.'
              : 'Serviço de recrutamento B2B: As empresas portuguesas pagam uma taxa de recrutamento apenas quando uma contratação bem-sucedida é feita. Também oferecemos planos de acompanhamento e retenção para garantir satisfação a longo prazo e estabilidade da força de trabalho.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              {language === 'en' ? '✓ Success-based Fees' : '✓ Taxas Baseadas em Sucesso'}
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              {language === 'en' ? '✓ Retention Support' : '✓ Suporte de Retenção'}
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              {language === 'en' ? '✓ Long-term Partnership' : '✓ Parceria de Longo Prazo'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}