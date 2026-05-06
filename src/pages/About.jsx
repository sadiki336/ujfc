import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Users, 
  Heart, 
  HandHeart, 
  BookOpen, 
  Calendar, 
  Lightbulb, 
  HeartHandshake, 
  UsersRound,
  ShieldCheck,
  Globe,
  MapPin,
  AlertCircle,
  CheckCircle,
  Zap,
  Award
} from 'lucide-react';
import logo from '../assets/ujfc.jpg';
import sad from '../assets/capture.png';
import nadia from '../assets/nadia.jpg';
import angel from '../assets/angel.jpg'; 
import gapas from '../assets/gapas.jpg';
import group1 from '../assets/ghad.jpeg';
import group2 from '../assets/twese.jpeg';
import abana from '../assets/abana.jpeg';
import rdcFlag from '../assets/rdc.png';
import rwandaFlag from '../assets/rwanda.png';

export default function About() {
  const { t } = useLanguage();

  // Mapping the 4 Core Values
  const coreValues = [
    { icon: Users, title: t.valuesUnity, description: t.valuesUnityDesc },
    { icon: Heart, title: t.valuesLove, description: t.valuesLoveDesc },
    { icon: HandHeart, title: t.valuesBrotherhood, description: t.valuesBrotherhoodDesc },
    { icon: ShieldCheck, title: t.valuesService, description: t.valuesServiceDesc },
  ];

  // Mapping the 3 Family Pillars (Ubumwe, Urumuri, Duhozanye)
  const familyPillars = [
    { 
      icon: UsersRound, 
      title: t.family1Title, 
      description: t.family1Desc, 
      color: 'from-blue-500 to-blue-700' 
    },
    { 
      icon: Lightbulb, 
      title: t.family2Title, 
      description: t.family2Desc, 
      color: 'from-amber-400 to-orange-500' 
    },
    { 
      icon: HeartHandshake, 
      title: t.family3Title, 
      description: t.family3Desc, 
      color: 'from-emerald-500 to-teal-600' 
    },
  ];

  // Leadership Team Data
  const teamMembers = [
    {
      name: 'Twayigize Sadick',
      role: t.daddy,
      image: sad,
    },
    {
      name: 'Mushimiyimana Nadia',
      role: t.mamy,
      image: nadia,
    },
    {
      name: 'Gapasi(np)',
      role: `${t.president} (${t.foundersRole})`,
      image: gapas,
    },
    {
      name: 'mukobwajana angelique',
      role: `${t.vicePresident} (${t.foundersRole})`,
      image: angel,
    },
  
  ];

  const stats = [
    { label: t.activeMembers, value: '500+' },
    { label: t.programs, value: '50+' },
    { label: t.events, value: '100+' },
    { label: t.years, value: '20+' },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: `url(${abana})`}}></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={rdcFlag} alt="RDC Flag" className="w-16 h-auto rounded-lg shadow-lg" />
            <img src={logo} alt="U.J.F.C logo" className="w-24 h-24 object-contain" />
            <img src={rwandaFlag} alt="Rwanda Flag" className="w-16 h-auto rounded-lg shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.aboutTitle}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.aboutDescription}
          </p>
        </div>
      </section>

      {/* --- HISTORY & ARRIVAL SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full -z-10 animate-pulse" />
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">
                {t.historyTitle}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t.historyDescription}
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.historyContent}
              </p>
              <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-red-600">
                <Calendar className="w-10 h-10 text-red-600" />
                <div>
                  <p className="font-bold text-slate-900">{t.arrivalDate}</p>
                  <p className="text-slate-600">{t.arrivalTitle}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={group1} className="rounded-2xl shadow-lg mt-8" alt="Group" />
              <img src={group2} className="rounded-2xl shadow-lg" alt="Community 2" />
            </div>
          </div>
        </div>
      </section>

      {/* --- REFUGEE CONTEXT & UJFC STORY --- */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-4">
              <img src={rdcFlag} alt="RDC Flag" className="w-24 h-auto rounded-lg shadow-lg" />
              <span className="text-4xl font-bold">→</span>
              <img src={rwandaFlag} alt="Rwanda Flag" className="w-24 h-auto rounded-lg shadow-lg" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t.journeyTitle}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.journeySubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.rdcBackground}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.rdcBackgroundDesc}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.conflictsDesc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.whyRwanda}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.whyRwandaDesc}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.gratefulDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.birthUJFC}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.birthUJFCDesc}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.ujfcBridge}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.missionAction}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.missionActionDesc}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.powerBelief}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                <div className="inline-flex p-3 rounded-xl bg-red-50 text-red-600 mb-4">
                  <val.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-slate-600 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* --- FAMILY PILLARS (Three Structures) --- */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">Our three families</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900" style={{fontFamily: "'Playfair Display', serif"}}>
        The Pillars of U.J.F.C
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">{t.familySubtitle}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Ubumwe */}
      <div className="rounded-2xl border border-slate-100 overflow-hidden bg-white border-t-[3px] border-t-blue-600">
        <div className="p-6 relative">
          <span className="absolute top-2 right-3 text-[60px] font-black text-blue-600 opacity-[0.07] leading-none select-none">01</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-4">
            <Users size={10} /> Family One
          </span>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Ubumwe</h3>
              <p className="text-xs text-slate-400 tracking-wide">Unity · Together as one</p>
            </div>
          </div>
        </div>
        <div className="h-px bg-slate-100 mx-5" />
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{t.family1Desc}</p>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">Slogans</p>
          <div className="space-y-2.5">
            <div className="flex gap-2 text-sm italic text-blue-900">
              <span className="text-blue-600 font-semibold text-xs mt-0.5 min-w-[16px]">1.</span>
              "Bububwacu buturange ibihe byose"
            </div>
            <div className="flex gap-2 text-sm italic text-blue-900">
              <span className="text-blue-600 font-semibold text-xs mt-0.5 min-w-[16px]">2.</span>
              "Love and secret"
            </div>
          </div>
        </div>
      </div>

      {/* Urumuri */}
      <div className="rounded-2xl border border-slate-100 overflow-hidden bg-white border-t-[3px] border-t-amber-400">
        <div className="p-6 relative">
          <span className="absolute top-2 right-3 text-[60px] font-black text-amber-400 opacity-[0.07] leading-none select-none">02</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-amber-50 text-amber-700 mb-4">
            <Users size={10} /> Family Two
          </span>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
              <Lightbulb size={18} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Urumuri</h3>
              <p className="text-xs text-slate-400 tracking-wide">Light · Illuminating the path</p>
            </div>
          </div>
        </div>
        <div className="h-px bg-slate-100 mx-5" />
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{t.family2Desc}</p>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">Slogans</p>
          <div className="space-y-2.5">
            <div className="flex gap-2 text-sm italic text-amber-900">
              <span className="text-amber-600 font-semibold text-xs mt-0.5 min-w-[16px]">1.</span>
              "Turiho, turiho kandi tuzahora"
            </div>
            <div className="flex gap-2 text-sm italic text-amber-900">
              <span className="text-amber-600 font-semibold text-xs mt-0.5 min-w-[16px]">2.</span>
              "Hard working times commitment equal success"
            </div>
          </div>
        </div>
      </div>

      {/* Duhozanye */}
      <div className="rounded-2xl border border-slate-100 overflow-hidden bg-white border-t-[3px] border-t-emerald-500">
        <div className="p-6 relative">
          <span className="absolute top-2 right-3 text-[60px] font-black text-emerald-500 opacity-[0.07] leading-none select-none">03</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-4">
            <Users size={10} /> Family Three
          </span>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <HeartHandshake size={18} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Duhozanye</h3>
              <p className="text-xs text-slate-400 tracking-wide">Comfort one another</p>
            </div>
          </div>
        </div>
        <div className="h-px bg-slate-100 mx-5" />
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{t.family3Desc}</p>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 mb-2">Slogans</p>
          <div className="space-y-2.5">
            <div className="flex gap-2 text-sm italic text-emerald-900">
              <span className="text-emerald-600 font-semibold text-xs mt-0.5 min-w-[16px]">1.</span>
              "Mpoza nguhoze — tube ijwi ryabacu tutazi aho barikugwa"
            </div>
            <div className="flex gap-2 text-sm italic text-emerald-900">
              <span className="text-emerald-600 font-semibold text-xs mt-0.5 min-w-[16px]">2.</span>
              "Always on the top"
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- STATS BAR --- */}
      <section className="py-12 bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="text-white">
                <div className="text-4xl font-black mb-1">{s.value}</div>
                <div className="text-red-100 text-sm uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP TEAM --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.leadershipTeam}</h2>
            <p className="text-slate-600">{t.leadershipDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-red-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Mission & Vision</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Building bridges between communities and empowering the next generation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.mission}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.missionText}
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through our programs and initiatives, we aim to strengthen bonds of brotherhood and sisterhood while making meaningful contributions to society.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.vision}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.visionText}
              </p>
              <p className="text-slate-600 leading-relaxed">
                We envision a future where our members thrive professionally, contribute meaningfully to society, and pass down our rich heritage to future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT & ACHIEVEMENTS SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t.challengesSolutions}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.challengesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.challengesFaced}</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{t.economicHardship}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{t.educationAccess}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{t.culturalPreservation}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{t.mentalHealth}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{t.socialIntegration}</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.ujfcSolutions}</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t.scholarships}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t.leadershipTraining}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t.culturalEvents}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t.communitySupport}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t.networking}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      

      {/* --- OUR COMMITMENT TO THE COMMUNITY --- */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src={rdcFlag} alt="RDC Flag" className="w-16 h-auto rounded-lg shadow-lg" />
              <h2 className="text-4xl md:text-5xl font-bold">UJFC</h2>
              <img src={rwandaFlag} alt="Rwanda Flag" className="w-16 h-auto rounded-lg shadow-lg" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.commitment}</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              {t.commitmentDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-pink-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.remember}</h3>
                <p>{t.rememberDesc}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.connect}</h3>
                <p>{t.connectDesc}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-orange-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.empower}</h3>
                <p>{t.empowerDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* --- LOCATION SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 text-red-500 mb-6">
                <Globe size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">{t.locationTitle}</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">{t.locationDesc}</h2>
              <ul className="space-y-4">
                {[t.location1, t.location2, t.location3].map((loc, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15946.72182676513!2d30.672664989426092!3d-2.2725140224973526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMTYnMjEuMSJTIDMwwrA0MCc1OC42IkU!5e0!3m2!1sen!2srw!4v1777989453881!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="U.J.F.C Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}