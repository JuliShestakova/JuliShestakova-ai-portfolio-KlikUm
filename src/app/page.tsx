'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Database, 
  Cpu, 
  Cloud, 
  Globe, 
  Languages, 
  Sparkles, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import NeuronOrb from '@/components/NeuronOrb';
import NeuralChatUI from '@/components/NeuralChatUI';
import ProjectMap from '@/components/ProjectMap';

/**
 * Portfolio Home Page (Visual Polish & Layout Adjustment)
 * - Text placed under the Orb.
 * - Orb and Text shifted more to the right.
 * - Colors adjusted to avoid blending (deeper charcoal with more glows).
 */

const TRANSLATIONS = {
  en: {
    nav: ['About', 'Projects', 'Expertise', 'Contact'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Architect",
    heroBadge: "Architectural Evolution",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI ARCHITECT",
    heroDesc: "Architecting the future through multi-model AI orchestration, generative media ecosystems, and AI-native engineering methodologies.",
    cta: "Open Project Console",
    expertise: "EXPERTISE",
    projectMap: "PROJECT_MAP",
    footerCopyright: "© 2026 AI ARCHITECT // SYSTEM_STABLE",
    skills: [
      { label: "AI Orchestration (GPT-4o/Claude 3.5)" },
      { label: "RU Ecosystem (GigaChat/YandexGPT)" },
      { label: "Generative Video (Runway/Sora)" },
      { label: "AI-Native Dev (Antigravity/Cursor)" },
      { label: "Real-time Systems (Messenger Engine)" },
      { label: "Scalable Infra (Supabase/Redis)" },
      { label: "Next.js 16 & React 18" },
      { label: "Python & Python-AI Integration" },
      { label: "Creative AI (Nano Banana)" },
      { label: "Mobile Native (Capacitor)" }
    ]
  },
  ru: {
    nav: ['Обо мне', 'Проекты', 'Навыки', 'Контакты'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Архитектор",
    heroBadge: "Architectural Evolution",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI АРХИТЕКТОР",
    heroDesc: "Проектирование будущего через оркестрацию мультимодальных нейросетей, генеративные медиа-экосистемы и AI-native методологии разработки.",
    cta: "Открыть консоль проектов",
    expertise: "НАВЫКИ",
    projectMap: "КАРТА_ПРОЕКТОВ",
    footerCopyright: "© 2026 AI АРХИТЕКТ // SYSTEM_STABLE",
    skills: [
      { label: "AI Оркестрация (GPT-4o/Claude)" },
      { label: "RU Экосистемы (GigaChat/Yandex)" },
      { label: "Генеративное Видео (Runway/Sora)" },
      { label: "AI-Native Разработка (Antigravity)" },
      { label: "Real-time Системы (Messenger)" },
      { label: "Масштабируемая Infra (Supabase)" },
      { label: "Next.js 16 & React 18" },
      { label: "Python & AI Интеграция" },
      { label: "Креативный AI (Nano Banana)" },
      { label: "Mobile Native (Capacitor)" }
    ]
  }
};

export default function PortfolioPage() {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [mounted, setMounted] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ru' : 'en');

  if (!mounted) return <div className="min-h-screen bg-[#020203]" />;

  return (
    <main className="min-h-screen bg-[#08080a] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. STICKY HEADER */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.03] bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">{t.title}</span>
                <span className="text-[8px] uppercase tracking-widest text-cyan-500/50 font-black">{t.subtitle}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <button key={item} className="text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer">
                // {item}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-white/10" />
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO AREA (Adjusted Layout) */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Deep Enhanced Background Visuals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/[0.03] blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-transparent to-[#08080a] opacity-50" />
        </div>

        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Chat Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-5 2xl:col-span-4 flex justify-center xl:justify-start"
          >
            <div className="relative group w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-3xl blur opacity-20" />
                <div className="relative border border-white/5 rounded-3xl bg-[#0a0a0d]/80 backdrop-blur-md shadow-2xl">
                    <NeuralChatUI lang={lang} />
                </div>
            </div>
          </motion.div>

          {/* RIGHT (Shifted Right): Orb + Text Under It */}
          <div className="lg:col-span-12 xl:col-span-7 2xl:col-span-8 flex flex-col items-center xl:items-end justify-center py-10 xl:pr-20">
            
            {/* The Orb (CORE) - Shifted Right */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, type: "spring" }}
               className="mb-12"
            >
              <div className="relative">
                  <NeuronOrb size="lg" className="z-10" />
                  <div className="absolute inset-0 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
              </div>
            </motion.div>

            {/* Content Group (UNDER SHAR) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center xl:text-right max-w-xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                 {t.heroBadge}
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8 text-glow-white">
                {t.heroTitle}
              </h1>
              <p className="text-sm md:text-lg text-white/50 leading-relaxed font-medium mb-10">
                {t.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-end">
                  <button className="px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3">
                     {t.cta} <ArrowRight size={14} />
                  </button>
              </div>
            </motion.div>

          </div>

        </div>
        
        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0c0c10] to-transparent pointer-events-none" />
      </section>

      {/* 3. EXPERTISE GRID */}
      <section className="py-24 bg-[#0a0a0d] border-y border-white/[0.03] relative">
        <div className="container mx-auto px-6">
          <header className="flex items-center gap-4 mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{t.expertise}</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
             {t.skills.map((skill, idx) => (
                 <div key={idx} className="bg-[#08080a] p-8 group hover:bg-white/[0.02] transition-all border-r border-b border-white/5">
                    <div className="flex flex-col gap-4">
                        <Sparkles size={16} className="text-cyan-500/40 group-hover:text-cyan-400 transition-colors" />
                        <h3 className="text-[10px] font-black uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">{skill.label}</h3>
                    </div>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC PROJECTS */}
      <section className="py-24 bg-[#08080a] relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.02] blur-[150px] pointer-events-none" />
         <ProjectMap lang={lang} />
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 border-t border-white/[0.03] bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 uppercase">
              {t.title}
            </span>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">{t.footerCopyright}</span>
          </div>

          <div className="flex gap-10">
            <FooterLink label="GitHub" href="https://github.com/JuliShestakova" />
            <FooterLink label="LinkedIn" href="#" />
            <FooterLink label="Connect" href="#" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterLink({ label, href }: { label: string, href: string }) {
  return (
    <a href={href} 
       target="_blank" 
       rel="noreferrer" 
       className="group flex flex-col items-center gap-1"
    >
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-cyan-400 transition-colors uppercase">{label}</span>
      <div className="w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
