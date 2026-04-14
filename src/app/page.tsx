'use client';

import React from 'react';
import LiquidGlass from '@/components/LiquidGlass';
import NeuronOrb from '@/components/NeuronOrb';
import HexagonMissionMap from '@/components/HexagonMissionMap';
import NeuralChatUI from '@/components/NeuralChatUI';
import ScanlineOverlay from '@/components/ScanlineOverlay';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Cpu } from 'lucide-react';
import HologramPane from '@/components/HologramPane';

/**
 * Portfolio Home Page (Ultra-HUD Evolution)
 * High-end immersive dashboard with 3D depth and parallax effects.
 */

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white relative overflow-hidden font-sans selection:bg-purple-500/30 perspective-[2000px]">
      {/* HUD Effects */}
      <ScanlineOverlay />

      {/* Background Holographic Layers (Z-Depth) */}
      <div className="absolute inset-0 pointer-events-none">
        <HologramPane className="top-[10%] left-[5%]" delay={1} duration={15} title="NEURAL_STREAM" />
        <HologramPane className="top-[60%] right-[10%]" delay={5} duration={18} title="LOGIC_KERN" />
        <HologramPane className="bottom-[20%] left-[15%]" delay={3} duration={25} title="VECTOR_SYNC" />
        <HologramPane className="top-[30%] left-[60%]" delay={7} duration={20} title="AGENT_POOL" />
      </div>
      
      {/* Layout Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-between min-h-screen">
        
        {/* TOP Header Section */}
        <header className="w-full flex justify-between items-start mb-8 z-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic text-white/90">
              SHESTAKOVA <span className="text-purple_neural-500 font-normal not-italic">AI/PORTFOLIO</span>
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold">System Status: Active</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex gap-10 mt-2">
             <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase text-white/30 tracking-widest">Logic Engine</span>
                <span className="text-xs font-mono text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">v4.0.0-PRO-MAX</span>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase text-white/30 tracking-widest">Kernel Sync</span>
                <span className="text-xs font-mono text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">0.042ms</span>
             </div>
          </div>
        </header>

        {/* MIDDLE Main Section: Perspective Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 items-center flex-1 preserve-3d">
          
          {/* Left Side: Neural Chat (Angled Inward) */}
          <section className="lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start">
             <motion.div 
               initial={{ opacity: 0, x: -80, rotateY: 35 }} 
               animate={{ opacity: 1, x: 0, rotateY: 20 }}
               transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
               className="w-full max-w-sm"
               style={{ transformStyle: 'preserve-3d' }}
             >
                <NeuralChatUI />
             </motion.div>
          </section>

          {/* Center: Neuron Orb (Front & Center) */}
          <section className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center min-h-[450px] z-20">
             <motion.div 
               initial={{ opacity: 0, scale: 0.6, z: -200 }} 
               animate={{ opacity: 1, scale: 1, z: 0 }}
               transition={{ type: "spring", damping: 15, delay: 0.2 }}
               className="relative"
             >
                <LiquidGlass id="main-orb" intensity={8}>
                   <NeuronOrb size="lg" />
                </LiquidGlass>
             </motion.div>
          </section>

          {/* Right Side: Map & Stats (Angled Inward) */}
          <section className="lg:col-span-4 order-3 flex flex-col gap-6 items-center lg:items-end">
             <motion.div 
               initial={{ opacity: 0, x: 80, rotateY: -35 }} 
               animate={{ opacity: 1, x: 0, rotateY: -20 }}
               transition={{ delay: 0.7, duration: 1.2, type: "spring" }}
               style={{ transformStyle: 'preserve-3d' }}
             >
                <HexagonMissionMap />
             </motion.div>

             {/* Tech Badges (Pill Style Elevation) */}
             <div className="grid grid-cols-2 gap-3 w-full max-w-[320px]">
                {[
                  { icon: Shield, label: "Secure AI", color: "purple" },
                  { icon: Zap, label: "Edge Sync", color: "cyan" },
                  { icon: Database, label: "Vector DB", color: "orange" },
                  { icon: Cpu, label: "Neural Net", color: "pink" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="glass-pill px-4 py-3 rounded-full flex items-center gap-3 group transition-all cursor-crosshair border border-white/5"
                  >
                     <item.icon size={16} className={`text-${item.color}-400 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all`} />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                        {item.label}
                     </span>
                  </motion.div>
                ))}
             </div>
          </section>
        </div>

        {/* BOTTOM Footer */}
        <footer className="w-full mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 z-20">
          <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">
             // KERNEL_ARCHITECT: JULI_SHESTAKOVA // TERMINAL_READY
          </p>
          <div className="flex gap-10">
            <span className="text-[9px] text-white/40 uppercase tracking-widest hover:text-purple-400 cursor-pointer transition-colors border-b border-transparent hover:border-purple-400/50 pb-1">Documentation</span>
            <span className="text-[9px] text-white/40 uppercase tracking-widest hover:text-cyan-400 cursor-pointer transition-colors border-b border-transparent hover:border-cyan-400/50 pb-1">Engineering Logs</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
