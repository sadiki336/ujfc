import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import logo from '../assets/ujfc.jpg';
import eventPhoto from '../assets/dd.png';
import event from '../assets/bgf.png';
import sadd from '../assets/capture.png';
import conn from '../assets/SAD.png';
import sad from '../assets/captureee.png';
import kenta from '../assets/capturee.png';
import heav from '../assets/fgcd.png';
import capture from '../assets/captur.png';
import jimmy from '../assets/ddddd.jpg.png';
import sayo from '../assets/cap.png';
import froms from '../assets/captures.png';
import galleryHero from '../assets/abana.jpeg';
import rdc from '../assets/rdc.png';
import rwanda from '../assets/rwanda.png';

export default function Gallery() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'en' ? 'All Photos' : 'Amashusho Yose' },
    { id: 'events', name: language === 'en' ? 'Events' : 'Ibirori' },
    { id: 'activities', name: language === 'en' ? 'Activities' : 'Ibikorwa' },
    { id: 'community', name: language === 'en' ? 'Community' : 'Umuryango' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: event,
      title: language === 'en' ? 'Community Gathering' : 'Guhurira hamwe',
      category: 'community',
    },
    {
      id: 2,
      src: eventPhoto,
      title: language === 'en' ? 'Cultural Celebration' : 'Ibirori by\'Umuco',
      category: 'events',
    },
    {
      id: 3,
      src: sad,
      title: language === 'en' ? 'Youth Workshop' : 'Amahugurwa y\'Urubyiruko',
      category: 'activities',
    },
    {
      id: 4,
      src: conn,
      title: language === 'en' ? 'Team Building' : 'Kubaka Itsinda',
      category: 'events',
    },
    {
      id: 5,
      src: sad,
      title: language === 'en' ? 'Annual Festival' : 'Ihuriro Buri Mwaka',
      category: 'events',
    },
    {
      id: 6,
      src: kenta,
      title: language === 'en' ? 'Community Service' : 'Ubukorerabushake',
      category: 'community',
    },
    {
      id: 7,
      src: heav,
      title: language === 'en' ? 'Leadership Training' : 'Amahugurwa y\'Ubuyobozi',
      category: 'activities',
    },
    {
      id: 8,
      src: capture,
      title: language === 'en' ? 'Clean-up Day' : 'Umunsi wo Gusukura',
      category: 'events',
    },
    {
      id: 9,
      src: jimmy,
      title: language === 'en' ? 'Group Photo' : 'Ifoto y\'Itsinda',
      category: 'events',
    },
     {
      id: 10,
      src: sayo,
      title: language === 'en' ? 'Group Photo' : 'Ifoto y\'Itsinda',
      category: 'events',
    },
     {
      id: 11,
      src: froms,
      title: language === 'en' ? 'Group Photo' : 'Ifoto y\'Itsinda',
      category: 'community',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: `url(${galleryHero})`}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={rdc} alt="RDC Flag" className="w-16 h-auto rounded-lg shadow-lg" />
            <img src={logo} alt="U.J.F.C logo" className="w-24 h-24 object-contain" />
            <img src={rwanda} alt="Rwanda Flag" className="w-16 h-auto rounded-lg shadow-lg" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.galleryTitle}</h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.galleryDescription}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <div className="flex items-center mt-2 text-white/80">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {language === 'en' ? 'Click to view' : 'Kanda urebe'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {language === 'en' ? 'No images found in this category.' : 'Nta mashusho yabone muri iki cyiciro.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-5xl max-h-[85vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      {/* More Photos CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Want to see more?' : 'Urashaka kubona byinshi?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'en'
              ? 'Follow us on social media for the latest photos and updates from our events.'
              : 'Dukurikire ku mbuga nkoranyambaga kugirango uhabwe amashusho mashya n\'amakuru agezweho.'}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
            >
              {language === 'en' ? 'Follow on Facebook' : 'Dukurikire kuri Facebook'}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-colors"
            >
              {language === 'en' ? 'Follow on Instagram' : 'Dukurikire kuri Instagram'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
