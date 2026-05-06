import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/ujfc.jpg';
import contactHero from '../assets/abana.jpeg';
import rdc from '../assets/rdc.png';
import rwanda from '../assets/rwanda.png';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.address,
      content: 'KN 5 Rd, Kirehe, Rwanda',
      subContent: language === 'en' ? 'Near Kigali Convention Centre' : language === 'fr' ? 'Près du Centre de Convention de Kigali' : 'Hafi ya Kigali Convention Centre',
    },
    {
      icon: Phone,
      title: t.phone,
      content: '0795 885 283',
      subContent: '0799 380 043',
    },
    {
      icon: Mail,
      title: t.email,
      content: 'info@ujfc.rw',
      subContent: 'support@ujfc.rw',
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Working Hours' : language === 'fr' ? 'Heures de travail' : 'Amasaha y\'Akazi',
      content: language === 'en' ? 'Mon - Fri: 8:00 AM - 5:00 PM' : language === 'fr' ? 'Lun - Ven: 8h00 - 17h00' : 'Kuwa 1 - Kuwa 5: 8:00 - 17:00',
      subContent: language === 'en' ? 'Saturday: 9:00 AM - 1:00 PM' : language === 'fr' ? 'Samedi: 9h00 - 13h00' : 'Kuwa 6: 9:00 - 13:00',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/ujfc2005', label: 'Facebook', color: 'bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/UJFC2005', label: 'Twitter', color: 'bg-sky-500' },
    { icon: Instagram, href: 'https://www.instagram.com/u_j_f_c_2005', label: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { icon: Youtube, href: 'https://www.youtube.com/@UJFC-j6f', label: 'YouTube', color: 'bg-red-600' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: `url(${contactHero})`}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={rdc} alt="RDC Flag" className="w-16 h-auto rounded-lg shadow-lg" />
            <img src={logo} alt="U.J.F.C logo" className="w-24 h-24 object-contain" />
            <img src={rwanda} alt="Rwanda Flag" className="w-16 h-auto rounded-lg shadow-lg" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.contactTitle}</h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.contactDescription}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Get in Touch' : language === 'fr' ? 'Contactez-nous' : 'Twandikire'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'en'
                  ? 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
                  : language === 'fr'
                  ? 'Des questions? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous répondrons dès que possible.'
                  : 'Ufite ibibazo? Twakwumva. Ohereza ubutumwa maze tubwire vuba.'}
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                      <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                    <p className="text-sm text-gray-500">{info.subContent}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">{t.followUs}</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Message Sent!' : 'Ubutumwa Bwoherejwe!'}
                  </h3>
                  <p className="text-gray-600">{t.formSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder={language === 'en' ? 'Your full name' : 'Amazina yawe yose'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder="+250 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                      placeholder={language === 'en' ? 'Write your message here...' : 'Andika ubutumwa bwawe hano...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors shadow-lg disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        {language === 'en' ? 'Sending...' : 'Kohereza...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t.sendMessage}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Visit Our Office' : 'Tubure Aho dukorera'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Come visit us at our headquarters. We\'d be happy to meet you in person.'
                : 'Ngwino utubure ku biro byacu. Turanezerwa kubana namwe.'}
            </p>
          </div>

          {/* Embedded Map Placeholder */}
          <div className="relative h-[400px] bg-gray-200 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15946.72182676513!2d30.672664989426092!3d-2.2725140224973526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMTYnMjEuMSJTIDMwwrA0MCc1OC42IkU!5e0!3m2!1sen!2srw!4v1777989453881!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="U.J.F.C Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'Ibibazo Benshi Babaza'}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: language === 'en' ? 'How can I join U.J.F.C?' : 'Nigute nshobora kwijira muri U.J.F.C?',
                a: language === 'en'
                  ? 'You can join U.J.F.C by filling out the contact form above, visiting our office, or attending any of our public events. Membership is open to all youth who share our values.'
                  : 'Wabasha kwijira muri U.J.F.C ukuzuza ifishi y\'aho twandikira hejuru, utubure ku biro byacu, cyangwa witabire ibirori byacu. Abanyamuryango barakira urubyiruko rwese rufite indangagaciro zacu.',
              },
            
              {
                q: language === 'en' ? 'Can I volunteer with U.J.F.C?' : 'Nshobora gukorera imirimo y\'ubuntu muri U.J.F.C?',
                a: language === 'en'
                  ? 'Yes! We always welcome volunteers. Fill out the contact form and mention your interest in volunteering, and we\'ll get back to you with opportunities.'
                  : 'Yego! Twita ku bakorerabushake bose. Uzuza ifishi y\'aho twandikira maze uvuge ko ushaka kuba umukorerabushake, maze tuguhe amahirwe.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
