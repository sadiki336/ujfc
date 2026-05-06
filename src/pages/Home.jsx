import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import { Users, BookOpen, Heart, Trophy, Calendar, ArrowRight } from 'lucide-react';
import twese from '../assets/twese.jpeg'

export default function Home() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Users,
      title: language === 'en' ? 'Community' : language === 'fr' ? 'Communauté' : 'Umuryango',
      description: language === 'en' 
        ? 'Join a vibrant community of young people dedicated to making a difference.'
        : language === 'fr'
        ? 'Rejoignez une communauté vibrante de jeunes déterminés à faire la différence.'
        : 'Injira mu muryango w\'urubyiruko rwiyeguriye guhindura ibintu.',
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Education' : language === 'fr' ? 'Éducation' : 'Uburezi',
      description: language === 'en'
        ? 'Access educational resources, scholarships, and mentorship programs.'
        : language === 'fr'
        ? 'Accédez à des ressources éducatives, des bourses et des programmes de mentorat.'
        : 'Fasha ibyiciro by\'amashuri, imfashanyigisho n\'ababonerwa inama.',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Culture' : language === 'fr' ? 'Culture' : 'Umuco',
      description: language === 'en'
        ? 'Celebrate and preserve our rich Kinyarwanda cultural heritage.'
        : language === 'fr'
        ? 'Célébrez et préservez notre riche patrimoine culturel kinyarwanda.'
        : 'Gushimira no kurinda umuco mwiza w\'Abanyarwanda.',
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Excellence' : language === 'fr' ? 'Excellence' : 'Ubushishozi',
      description: language === 'en'
        ? 'Strive for excellence in all our programs and activities.'
        : language === 'fr'
        ? 'Visez l\'excellence dans tous nos programmes et activités.'
        : 'Kwiyegurira kubaho neza mu bigorwa byacu byose.',
    },
  ];

  const upcomingEvents = [
    {
      date: '15',
      month: language === 'en' ? 'Dec' : language === 'fr' ? 'Déc' : 'Uku',
      title: language === 'en' ? 'End of Year Celebration' : language === 'fr' ? 'Célébration de fin d\'année' : 'Ibirori by\'Imperuka y\'Umwaka',
      time: '2:00 PM',
      location: 'Kigali Convention Center',
    },
    {
      date: '20',
      month: language === 'en' ? 'Jan' : language === 'fr' ? 'Jan' : 'Mut',
      title: language === 'en' ? 'Youth Leadership Workshop' : language === 'fr' ? 'Atelier de leadership jeunesse' : 'Amahugurwa y\'Abayobozi b\'Urubyiruko',
      time: '9:00 AM',
      location: 'U.J.F.C Office',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'What We Offer' : language === 'fr' ? 'Ce que nous offrons' : 'Ibyo Dutanga'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Discover how U.J.F.C empowers youth and builds stronger communities.'
                : language === 'fr'
                ? 'Découvrez comment U.J.F.C autonomise les jeunes et construit des communautés plus fortes.'
                : 'Menya uko U.J.F.C gushyigikira urubyiruko no gukora imiryango ikomatana.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={twese}
                  alt="Community" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Active Members' : language === 'fr' ? 'Membres Actifs' : 'Abanyamuryango'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                {language === 'en' ? 'About Us' : language === 'fr' ? 'À propos de nous' : 'Abo Turibo'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                {t.aboutTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.aboutDescription}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    {language === 'en' ? 'Empowering youth through education' : language === 'fr' ? 'Autonomiser les jeunes par l\'éducation' : 'Gushyigikira urubyiruko binyuze mu masomo'}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    {language === 'en' ? 'Preserving cultural heritage' : language === 'fr' ? 'Préserver le patrimoine culturel' : 'Gurinda umuco dusangiye'}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    {language === 'en' ? 'Building strong community bonds' : language === 'fr' ? 'Construire des liens communautaires solides' : 'Gukora imiryango ikomatana'}
                  </span>
                </div>
              </div>
              <a
                href="/about"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                {t.learnMore}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
                {language === 'en' ? 'Upcoming' : language === 'fr' ? 'À venir' : 'Ibigiye Kuba'}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3">
                {language === 'en' ? 'Events & Activities' : language === 'fr' ? 'Événements et Activités' : 'Ibirori n\'Ibikorwa'}
              </h2>
            </div>
            <a
              href="/activities"
              className="mt-4 md:mt-0 inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors"
            >
              {language === 'en' ? 'View All Events' : language === 'fr' ? 'Voir tous les événements' : 'Reba Ibirori Byose'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-xl p-4 text-center min-w-[70px]">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-sm text-primary-200">{event.month}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.time}
                      </span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Ready to Join Our Community?' : 'Witeguye Kwijira mu Muryango Wacu?'}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Be part of something bigger. Together, we can create positive change in our community.'
              : 'Ba igice cy\'ikintu kinini. Hamwe, dushobora guhindura imibereho myiza mu muryango wacu.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t.joinUs}
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-colors border border-primary-500"
            >
              {t.learnMore}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
