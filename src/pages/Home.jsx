import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import {
  Users, BookOpen, Heart, Trophy, Calendar, ArrowRight,
  Target, Clock, Award, Globe, MapPin, AlertTriangle,
  Lightbulb, Shield, Sparkles, HandHeart, Quote
} from 'lucide-react';
import twese from '../assets/twese.jpeg';
import { useState, useEffect, useRef } from 'react';

// ---------- Animated Counter ----------
function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const { t, language } = useLanguage();

  // ---- Features (scholarship removed) ----
  const features = [
    {
      icon: Users,
      title: language === 'en' ? 'Community' : language === 'fr' ? 'Communauté' : 'Umuryango',
      description: language === 'en'
        ? 'Join a vibrant family of Congolese youth dedicated to mutual support.'
        : language === 'fr'
        ? 'Rejoignez une famille dynamique de jeunes Congolais dédiés à l\'entraide.'
        : 'Injira mu muryango w\'urubyiruko rw\'Abanyekongo rwiyeguriye gufashanya.',
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Education' : language === 'fr' ? 'Éducation' : 'Uburezi',
      description: language === 'en'
        ? 'Access educational resources, mentorship, and shared knowledge within our community.'
        : language === 'fr'
        ? 'Accédez à des ressources éducatives, au mentorat et au partage de connaissances au sein de notre communauté.'
        : 'Fasha ibyiciro by\'amashuri, ubujyanama, no gusangira ubumenyi mu muryango wacu.',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Culture' : language === 'fr' ? 'Culture' : 'Umuco',
      description: language === 'en'
        ? 'Celebrate and preserve our rich Congolese heritage and Kinyarwanda traditions.'
        : language === 'fr'
        ? 'Célébrez et préservez notre riche patrimoine congolais et les traditions rwandaises.'
        : 'Gushimira no kurinda umuco wacu w\'Abanyekongo n\'imigenzo gakondo.',
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Excellence' : language === 'fr' ? 'Excellence' : 'Ubushishozi',
      description: language === 'en'
        ? 'Strive for excellence through unity, love, and brotherhood.'
        : language === 'fr'
        ? 'Visez l\'excellence par l\'unité, l\'amour et la fraternité.'
        : 'Kwiyegurira kubaho neza binyuze mu bumwe, urukundo n\'ubuvandimwe.',
    },
  ];

  // ---- Upcoming Events ----
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

  // ---- Animated Stats ----
  const stats = [
    { icon: Users, end: 500, suffix: '+', label: t.activeMembers },
    { icon: Sparkles, end: 25, suffix: '+', label: t.programs },
    { icon: Calendar, end: 12, suffix: '', label: t.events },
    { icon: Clock, end: 7, suffix: '', label: t.years },
  ];

  // ---- Family Pillars ----
  const pillars = [
    { title: t.family1Title, desc: t.family1Desc, icon: Shield },
    { title: t.family2Title, desc: t.family2Desc, icon: Lightbulb },
    { title: t.family3Title, desc: t.family3Desc, icon: HandHeart },
  ];

  // ---- Challenges & Solutions (no scholarships) ----
  const challengesData = [
    {
      challenge: t.economicHardship,
      solution: t.family3Desc, // Duhozanye – mutual aid
      icon: AlertTriangle
    },
    {
      challenge: t.culturalPreservation,
      solution: t.culturalEvents,
      icon: Globe
    },
    {
      challenge: t.mentalHealth,
      solution: t.communitySupport,
      icon: Heart
    },
    {
      challenge: t.socialIntegration,
      solution: t.networking,
      icon: MapPin
    },
  ];

  // ---- Journey from RDC to Rwanda ----
  const journeySteps = [
    { label: t.rdcBackground, desc: t.rdcBackgroundDesc },
    { label: t.whyRwanda, desc: t.whyRwandaDesc },
    { label: t.birthUJFC, desc: t.birthUJFCDesc },
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
              {t.heroDescription}
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

      {/* Impact Statistics */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <stat.icon className="w-10 h-10 text-primary-200 mb-3" />
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-primary-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview (with Core Values) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={twese}
                  alt="Community"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">{t.activeMembers}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                {t.aboutTitle}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                {t.aboutDescription}
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { label: t.valuesUnity, desc: t.valuesUnityDesc },
                  { label: t.valuesLove, desc: t.valuesLoveDesc },
                  { label: t.valuesBrotherhood, desc: t.valuesBrotherhoodDesc },
                  { label: t.valuesService, desc: t.valuesServiceDesc },
                ].map((value, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>{value.label}</strong> – {value.desc}
                    </span>
                  </div>
                ))}
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

      {/* Our Journey: From RDC to Rwanda */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold uppercase tracking-wider">
              {t.journeyTitle}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              {t.journeySubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-primary-100"
              >
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.label}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="w-7 h-7 text-primary-600" />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700 italic mb-4">“{t.ujfcBridge}”</p>
                <p className="text-gray-600">{t.missionActionDesc}</p>
                <p className="text-gray-600 mt-4 font-medium">{t.powerBelief}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold uppercase tracking-wider">
              {t.familyTitle}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              {t.familySubtitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all text-center border border-gray-100"
              >
                <pillar.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.challengesSolutions}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.challengesDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challengesData.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">{t.challengesFaced}:</h4>
                  <p className="text-gray-700 mb-4">{item.challenge}</p>
                  <h4 className="font-semibold text-primary-700 mb-2">{t.ujfcSolutions}:</h4>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.commitment}</h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-12">
            {t.commitmentDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: 'remember', desc: t.rememberDesc, icon: Shield },
              { key: 'connect', desc: t.connectDesc, icon: Globe },
              { key: 'empower', desc: t.empowerDesc, icon: Users },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <item.icon className="w-10 h-10 text-primary-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t[item.key]}</h3>
                <p className="text-primary-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
            {language === 'en' ? 'Ready to Join Our Family?' : 'Witeguye Kwinjira mu Muryango Wacu?'}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.heroDescription}
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