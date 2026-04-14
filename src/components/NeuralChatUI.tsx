'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * NeuralChatUI (HUD Edition)
 * A sleek, high-transparancy glass widget for AI consultation logs.
 */

interface NeuralChatUIProps {
  lang: 'en' | 'ru';
}

const LOGS = {
  en: [
    { user: 'User', text: 'How can we optimize our ML pipeline?' },
    { user: 'EV', text: 'Hello! Let\'s discuss your architectural needs...' }
  ],
  ru: [
    { user: 'User', text: 'Как мы можем оптимизировать наш ML-пайплайн?' },
    { user: 'JS', text: 'Здравствуйте! Давайте обсудим ваши архитектурные задачи...' }
  ]
};

export default function NeuralChatUI({ lang }: NeuralChatUIProps) {
  const currentLogs = LOGS[lang];
  const userInitials = lang === 'en' ? 'User' : 'Пользователь';
  const expertInitials = lang === 'en' ? 'EV' : 'JS';

  return (
    <motion.div 
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
      className="w-full max-w-[320px] bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Decorative HUD Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/30 rounded-tr-2xl" />
      
      <header className="mb-6">
        <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-white/90 mb-1">
          AI_CONSULTATION <span className="text-cyan-500/50">[LIVE CHAT]</span>
        </h3>
        <p className="text-[9px] font-medium text-white/30 uppercase tracking-widest">Inter Semi-Bold, 16px</p>
      </header>

      <div className="space-y-4">
        {currentLogs.map((log, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-[10px] text-white/40 font-mono">
              [{log.user === 'User' ? userInitials : expertInitials}]: {log.text}
            </span>
          </div>
        ))}
        
        {/* Three dots animation */}
        <div className="flex gap-1.5 pt-2">
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-white/40 rounded-full" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-white/40 rounded-full" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-white/40 rounded-full" />
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
    </motion.div>
  );
}
