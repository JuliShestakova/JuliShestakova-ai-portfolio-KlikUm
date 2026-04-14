import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Terminal, Cpu, Zap, ShieldCheck, Database } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

/**
 * ProjectMap Component (Sleek Minimalist with Blueprint View)
 */

interface ProjectMapProps {
    lang: 'en' | 'ru';
}

const PROJECTS_DATA = {
    en: [
        { title: "Multi-Model AI Engine", desc: "Advanced orchestration of GPT-4o, Claude 3.5, GigaChat Pro, and YandexGPT 3. Custom prompt engineering for hybrid RU & Global markets.", type: "AI Orchestration", hasBlueprint: true },
        { title: "Real-time Messaging", desc: "Proprietary messaging engine for low-latency P2P communication, group sync, and active presence tracking.", type: "Communication", hasBlueprint: false },
        { title: "Generative Media & Video", desc: "Production-grade AI video workflows using Runway (Gen-3), Sora, and Kling AI. Creative visualization with Nano Banana.", type: "GenAI", hasBlueprint: false },
        { title: "Neural HUD Architecture", desc: "Modern UI/UX framework designed for high-density data dashboards, utilizing Tailwind 4 and Framer Motion.", type: "UI/UX", hasBlueprint: false },
        { title: "High-Load & Mobile", desc: "Scalable backend infrastructure on Supabase & Python. Seamless mobile cross-platform export via Capacitor.", type: "Engineering", hasBlueprint: false },
        { title: "Autonomous Agentic Sys", desc: "Engineering self-learning agent environments for task automation and intelligent user experience orchestration.", type: "Agents", hasBlueprint: false }
    ],
    ru: [
        { title: "Multi-Model AI Engine", desc: "Оркестрация GPT-4o, Claude 3.5, GigaChat Pro и YandexGPT 3. Тюнинг промптов для RU и глобальных рынков.", type: "AI Оркестрация", hasBlueprint: true },
        { title: "Real-time Мессенджер", desc: "Собственный движок для P2P-общения с низким пингом, синхронизацией групп и отслеживанием статусов присутствия.", type: "Связь", hasBlueprint: false },
        { title: "Generative Media & Video", desc: "Профессиональные конвейеры генерации видео (Runway Gen-3, Sora, Kling AI). Креативный AI (Nano Banana).", type: "GenAI", hasBlueprint: false },
        { title: "Neural HUD Архитектура", desc: "Дизайн-система для информационно-насыщенных дашбордов на базе Tailwind 4 и Framer Motion.", type: "UI/UX", hasBlueprint: false },
        { title: "High-Load & Mobile", desc: "Масштабируемая инфраструктура на базе Supabase и Python. Нативный экспорт в мобильные приложения через Capacitor.", type: "Engineering", hasBlueprint: false },
        { title: "Автономные AI-Агенты", desc: "Разработка самообучающихся сред для автоматизации задач и интеллектуальной оркестрации опыта.", type: "Агенты", hasBlueprint: false }
    ]
};

export default function ProjectMap({ lang }: ProjectMapProps) {
    const projects = PROJECTS_DATA[lang];
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const sectionTitle = lang === 'en' ? 'PROJECT_MAP' : 'КАРТА_ПРОЕКТОВ';

    return (
        <div className="w-full max-w-6xl mx-auto mt-20 px-6">
            <header className="flex items-center gap-4 mb-12">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{sectionTitle}</h2>
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-[10px] font-mono text-white/30 italic">1.0.0</span>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="glass-card rounded-2xl overflow-hidden group border border-white/5 flex flex-col h-full bg-white/[0.01]"
                    >
                        {/* Visual Header */}
                        <div className="h-44 bg-[#0c0c0e] relative flex items-center justify-center border-b border-white/5">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent)]" />
                            <Cpu size={48} className="text-white/5 group-hover:text-cyan-500/20 transition-colors" />
                            
                            {project.hasBlueprint && (
                                <button 
                                    onClick={() => setSelectedProject(project)}
                                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest">
                                        <Eye size={12} /> View Blueprint
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">{project.type}</span>
                                {project.hasBlueprint && <Zap size={10} className="text-yellow-500" />}
                            </div>
                            <h3 className="text-lg font-black text-white/90 mb-3 uppercase tracking-tight leading-none">
                                {project.title}
                            </h3>
                            <p className="text-xs text-white/40 leading-relaxed font-medium">
                                {project.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* BLUEPRINT MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto"
                    >
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setSelectedProject(null)} />
                        
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-6xl max-h-full bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-black uppercase tracking-tighter text-white">{selectedProject.title}</h2>
                                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Technical Blueprint // Rev 1.0</span>
                                </div>
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                                
                                {/* 1. The Diagram */}
                                <div className="lg:col-span-8">
                                    <ArchitectureDiagram lang={lang} />
                                </div>

                                {/* 2. Tech Specs */}
                                <div className="lg:col-span-4 flex flex-col gap-8">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">System Infrastructure</h4>
                                        <div className="space-y-3">
                                            <SpecItem icon={<Terminal size={12}/>} label="Orchestration" val="Next.js Edge / Vercel AI SDK" />
                                            <SpecItem icon={<Cpu size={12}/>} label="Response Latency" val="< 280ms (p95)" />
                                            <SpecItem icon={<ShieldCheck size={12}/>} label="Security" val="JWT / RBAC / Encrypted P2P" />
                                            <SpecItem icon={<Database size={12}/>} label="Persistence" val="PostgreSQL / Redis High-Availability" />
                                        </div>
                                    </div>

                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">Architect's Note</h4>
                                        <p className="text-[11px] text-white/60 leading-relaxed italic">
                                            {lang === 'en' 
                                                ? "Optimizing the path between global models and local RU APIs required a custom caching layer to ensure zero-latency switching for multi-modal user contexts."
                                                : "Оптимизация пути между глобальными моделями и локальными RU-API потребовала создания кастомного слоя кэширования для обеспечения мгновенного переключения контекстов."}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function SpecItem({ icon, label, val }: any) {
    return (
        <div className="flex items-center justify-between py-1 border-b border-white/[0.03]">
            <div className="flex items-center gap-2">
                <span className="text-cyan-500/50">{icon}</span>
                <span className="text-[9px] font-bold uppercase text-white/30">{label}</span>
            </div>
            <span className="text-[9px] font-mono text-white/60">{val}</span>
        </div>
    );
}
