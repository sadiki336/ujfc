import { useLanguage } from '../context/LanguageContext';
import { Music, GraduationCap, Heart, Trophy, Users, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/ujfc.jpg';
import sayo from '../assets/cap.png';
import edu from '../assets/alphat.jpeg';
import comm from '../assets/abana.jpeg';
import sports from '../assets/gf.jpg';
import festival from '../assets/twese.jpeg';
import summit from '../assets/ghad.jpeg';
import cleanup from '../assets/bgf.png';
import heroImg from '../assets/abana.jpeg';
import rdc from '../assets/rdc.png';
import rwanda from '../assets/rwanda.png';
export default function Activities() {
  const { t, language } = useLanguage();

  const activities = [
    {
      id: 'cultural',
      icon: Music,
      title: t.culturalEvents,
      description: t.culturalEventsDesc,
      image: sayo,
      color: 'from-rose-500 to-rose-600',
      schedule: language === 'en' ? 'Monthly' : language === 'fr' ? 'Mensuel' : 'Buri kwezi',
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: t.education,
      description: t.educationDesc,
      image: edu,
      color: 'from-blue-500 to-blue-600',
      schedule: language === 'en' ? 'Weekly' : language === 'fr' ? 'Hebdomadaire' : 'Buri cyumweru',
    },
    {
      id: 'community',
      icon: Heart,
      title: t.communityService,
      description: t.communityServiceDesc,
      image: comm,
      color: 'from-green-500 to-green-600',
      schedule: language === 'en' ? 'Bi-weekly' : language === 'fr' ? 'Bimensuel' : 'Kabiri mu cyumweru',
    },
    {
      id: 'sports',
      icon: Trophy,
      title: t.sports,
      description: t.sportsDesc,
      image: sports,
      color: 'from-orange-500 to-orange-600',
      schedule: language === 'en' ? 'Weekends' : language === 'fr' ? 'Week-ends' : 'Imperuka z\'icyumweru',
    },
  ];

  const upcomingEvents = [
    {
      title: language === 'en' ? 'Annual Cultural Festival' : language === 'fr' ? 'Festival Culturel Annuel' : 'Ihuriro ry\'Umuco Buri Mwaka',
      date: 'December 20, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'Kigali Cultural Center',
      description: language === 'en'
        ? 'A celebration of our rich cultural heritage featuring traditional music, dance, and cuisine.'
        : language === 'fr'
        ? 'Une célébration de notre riche patrimoine culturel avec musique, danse et cuisine traditionnelles.'
        : 'Ibirori by\'umuco nyarwanda bifite indirimbo, imbyino n\'ibiryo by\'inkiko.',
      image: festival,
    },
    {
      title: language === 'en' ? 'Youth Leadership Summit' : language === 'fr' ? 'Sommet de Leadership des Jeunes' : 'Inama y\'Abayobozi b\'Urubyiruko',
      date: 'January 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'U.J.F.C Headquarters',
      description: language === 'en'
        ? 'A day of workshops and networking for aspiring young leaders.'
        : language === 'fr'
        ? 'Une journée d\'ateliers et de réseautage pour les jeunes leaders ambitieux.'
        : 'Umunsi w\'amahugurwa no guhuzana ku bayobozi b\'ejo hazaza.',
      image: summit,
    },
    {
      title: language === 'en' ? 'Community Clean-Up Day' : language === 'fr' ? 'Journée de Nettoyage Communautaire' : 'Umunsi wo Gusukura',
      date: 'February 1, 2025',
      time: '8:00 AM - 12:00 PM',
      location: 'Nyamirambo Community',
      description: language === 'en'
        ? 'Join us in making our community cleaner and greener together.'
        : language === 'fr'
        ? 'Rejoignez-nous pour rendre notre communauté plus propre et plus verte ensemble.'
        : 'Tuhurire hamwe turinde isuku mu muryango wacu.',
      image: cleanup,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: `url(${heroImg})`}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={rdc} alt="RDC Flag" className="w-16 h-auto rounded-lg shadow-lg" />
            <img src={logo} alt="U.J.F.C logo" className="w-24 h-24 object-contain" />
            <img src={rwanda} alt="Rwanda Flag" className="w-16 h-auto rounded-lg shadow-lg" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.activitiesTitle}</h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.activitiesDescription}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                id={activity.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${activity.color} text-white text-sm font-medium rounded-full`}>
                    {activity.schedule}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <activity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{activity.description}</p>
                  <a
                    href="#events"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    {language === 'en' ? 'Learn More' : 'Menya Byinshi'}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              {language === 'en' ? 'Upcoming' : 'Ibigiye Kuba'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {language === 'en' ? 'Upcoming Events' : 'Ibirori Bigiye Kuba'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Mark your calendar and join us at these exciting upcoming events.'
                : 'Shyira mu kigega cyawe maze uduhurire mu birori bitandukanye.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-primary-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                      {event.location}
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
                    {language === 'en' ? 'Register Now' : 'Iyandikishe Nonaha'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 lg:py-28 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Get Involved Today' : 'Ifatanye Natwe Uyu Munsi'}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Whether you want to volunteer, participate in events, or support our programs, there are many ways to get involved with U.J.F.C.'
              : 'Niba ushaka gukorera imirimo y\'ubuntu, kwitabira ibirori, cyangwa gushyigikira gahunda zacu, hari inzira nyinsha zo kwifatanya n\'U.J.F.C.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t.joinUs}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-colors border border-primary-500"
            >
              {language === 'en' ? 'Volunteer' : 'Korera Imirimo y\'Ubuntu'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
