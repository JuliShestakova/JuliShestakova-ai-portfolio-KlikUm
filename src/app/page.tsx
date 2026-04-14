'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, 
  Cpu, 
  Code2, 
  MessageSquare, 
  BrainCircuit, 
  ChevronRight, 
  Sparkles,
  Search,
  Zap,
  ShieldCheck,
  Smartphone,
  Server
} from 'lucide-react';
import ProjectMap from '@/components/ProjectMap';
import NeuralChatUI from '@/components/NeuralChatUI';

const TRANSLATIONS = {
  en: {
    nav: ['About', 'Projects', 'Expertise', 'Contact'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Architect",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI ARCHITECT",
    heroDesc: "Architecting the future through multi-model AI orchestration, generative media ecosystems, and AI-native engineering methodologies.",
    expertise: "EXPERTISE",
    projectMap: "PROJECT_MAP",
    touch: "GET IN TOUCH",
    footerCopyright: "© 2024 AI ARCHITECT PORTFOLIO // ALL RIGHTS RESERVED",
    viewBlueprint: "View Technical Blueprint",
    skills: [
      { label: "Multi-Model Orchestration (GPT-4o, Claude 3.5, Gemini)" },
      { label: "RU-Market AI Integration (GigaChat Pro, YandexGPT 3)" },
      { label: "Generative Video Pipeline (Runway Gen-3, Sora, Kling AI)" },
      { label: "AI-Native Development (Antigravity & Cursor Expert)" },
      { label: "Python & Python-AI Integration" },
      { label: "Frontend Performance (Next.js 16, Tailwind 4, TS)" }
    ]
  },
  ru: {
    nav: ['Обо мне', 'Проекты', 'Навыки', 'Контакты'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Архитектор",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI АРХИТЕКТОР",
    heroDesc: "Проектирование будущего через оркестрацию мультимодальных нейросетей, генеративные медиа-экосистемы и AI-native методологии разработки.",
    expertise: "НАВЫКИ",
    projectMap: "КАРТА_ПРОЕКТОВ",
    touch: "СВЯЗАТЬСЯ",
    footerCopyright: "© 2024 AI ARCHITECT PORTFOLIO // ВСЕ ПРАВА ЗАЩИЩЕНЫ",
    viewBlueprint: "Посмотреть тех-схему",
    skills: [
      { label: "Оркестрация моделей (GPT-4o, Claude 3.5, Gemini)" },
      { label: "Интеграция RU-решений (GigaChat Pro, YandexGPT 3)" },
      { label: "Generative Video (Runway Gen-3, Sora, Kling AI)" },
      { label: "AI-Native разработка (Antigravity & Cursor)" },
      { label: "Python и интеграция Python-AI" },
      { label: "Performance-инжиниринг (Next.js 16, Tailwind 4, TS)" }
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

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-cyan-500/30 font-sans tracking-tight">
      
      {/* 1. PROGRESSIVE HUD HEADER */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.03] bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">{t.title}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <button key={item} className="text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer">
                // {item}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-white/10" />
            <button 
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="text-[9px] font-black uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              [{lang === 'en' ? 'RU' : 'EN'}]
            </button>
          </div>
        </div>
      </nav>

      {/* 2. NEURAL HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[9px] font-black text-cyan-400 uppercase tracking-widest">
                System Status: Online
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
              <span className="text-[9px] font-mono text-white/20">Latency: 24ms</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              {t.heroTitle}
            </h1>

            <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-2xl mb-12">
              {t.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Launch Project Console
              </button>
              <button className="px-8 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors">
                Read Whitepapers
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERTISE GRID (THE SUBSTANCE) */}
      <section className="py-20 border-y border-white/[0.03] bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <header className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{t.expertise}</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {t.skills.map((skill, idx) => (
              <div key={idx} className="bg-[#020203] p-10 group hover:bg-white/[0.02] transition-colors">
                <div className="text-cyan-500/20 group-hover:text-cyan-400 transition-colors mb-6">
                  {idx % 3 === 0 ? <BrainCircuit size={32} /> : idx % 3 === 1 ? <Cpu size={32} /> : <Code2 size={32} />}
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.1em] text-white/80 leading-relaxed group-hover:text-white transition-colors">
                  {skill.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED PROJECT MAP */}
      <ProjectMap lang={lang} />

      {/* 5. INTERACTIVE CHAT & MESSENGER */}
      <div className="py-24">
        <NeuralChatUI lang={lang} />
      </div>

      {/* 6. TECHNICAL FOOTER */}
      <footer className="py-20 border-t border-white/[0.03] bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
              {t.title}
            </span>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">{t.footerCopyright}</span>
          </div>

          <div className="flex gap-10">
            <FooterLink label="GitHub" />
            <FooterLink label="LinkedIn" />
            <FooterLink label="Email" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="group flex flex-col items-center gap-1">
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-cyan-400 transition-colors">{label}</span>
      <div className="w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
