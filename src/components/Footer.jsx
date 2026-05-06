import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '../assets/ujfc.jpg';

export default function Footer() {
  const { t, language } = useLanguage();

  const footerLinks = {
    about: [
      { name: language === 'en' ? 'Our Story' : language === 'fr' ? 'Notre Histoire' : 'Inkuru Yacu', href: '/about' },
      { name: language === 'en' ? 'Leadership' : language === 'fr' ? 'Direction' : 'Abayobozi', href: '/about#leadership' },
      { name: language === 'en' ? 'Mission & Vision' : language === 'fr' ? 'Mission & Vision' : 'Intego n\'Icerekezo', href: '/about#mission' },
    ],
    activities: [
      { name: t.culturalEvents, href: '/activities#cultural' },
      { name: t.education, href: '/activities#education' },
      { name: t.communityService, href: '/activities#community' },
      { name: t.sports, href: '/activities#sports' },
    ],
    connect: [
      { name: t.contact, href: '/contact' },
      { name: t.gallery, href: '/gallery' },
      { name: language === 'en' ? 'News' : language === 'fr' ? 'Actualités' : 'Amakuru', href: '/#news' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/UJFC.2005', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/UJFC2005', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/u_j_f_c_2005', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@UJFC-j6f', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="U.J.F.C logo" className="w-12 h-12 object-contain rounded-xl shadow-lg" />
              <span className="font-bold text-2xl text-white">U.J.F.C</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {language === 'en' 
                ? 'Union de Jeunesse Famille Congolaise - Empowering youth and strengthening community bonds through culture, education, and service.'
                : language === 'fr'
                ? "Union de Jeunesse Famille Congolaise - Autonomiser les jeunes et renforcer les liens communautaires à travers la culture, l'éducation et le service."
                : 'Union de Jeunesse Famille Congolaise - Gushyigikira urubyiruko no gukomeza imiryango binyuze mu muco, uburezi n\'ubukorerabushake.'}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.activities}</h3>
            <ul className="space-y-3">
              {footerLinks.activities.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  {language === 'en' 
                    ? 'Kigali, Rwanda'
                    : language === 'fr'
                    ? 'Kigali, Rwanda'
                    : 'Kigali, Rwanda'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+250795885283" className="text-gray-400 hover:text-white transition-colors">
                  0795 885 283 / 0799 380 043
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@ujfc.rw" className="text-gray-400 hover:text-white transition-colors">
                  info@ujfc.rw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} U.J.F.C. {t.allRightsReserved}
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              {language === 'en' ? 'Made with' : language === 'fr' ? 'Fait avec' : 'Yakozwe na'} 
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> 
              {language === 'en' ? 'for our community' : language === 'fr' ? 'pour notre communauté' : 'ku bw\'umuryango wacu'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
