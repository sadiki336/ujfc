import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, BookOpen, Heart } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '500+', label: t.language === 'en' ? 'Members' : t.language === 'fr' ? 'Membres' : 'Abanyamuryango' },
    { icon: BookOpen, value: '50+', label: t.language === 'en' ? 'Programs' : t.language === 'fr' ? 'Programmes' : 'Gahunda' },
    { icon: Heart, value: '20+', label: t.language === 'en' ? 'Years' : t.language === 'fr' ? 'Années' : 'Imyaka' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-primary-900/90"></div>
        <div className="absolute inset-0 bg-[url('../assets/abana.jpeg')] bg-cover bg-center opacity-40"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {t.language === 'en' ? 'Welcome to U.J.F.C' : t.language === 'fr' ? 'Bienvenue à U.J.F.C' : 'Mwaramutse muri U.J.F.C'}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
            {t.heroTitle}
            <span className="block text-primary-400">{t.heroSubtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{animationDelay: '0.1s'}}>
            {t.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
            >
              {t.joinUs}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20"
            >
              {t.learnMore}
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-24 grid grid-cols-3 gap-4 lg:gap-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
