"use client";

import { motion } from "framer-motion";

/**
 * HologramPane Component (Ultra-HUD)
 * Adds background depth with floating data/code panes.
 */

interface HologramPaneProps {
    className?: string;
    delay?: number;
    duration?: number;
    title?: string;
    code?: string[];
}

export default function HologramPane({ 
    className = "", 
    delay = 0, 
    duration = 20,
    title = "SYSTEM_LOG",
    code = ["SYNC_KERNEL: OK", "FETCH_NEURAL: 12ms", "BUFFER_OVRL: 0%"]
}: HologramPaneProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: [0, 0.4, 0.4, 0],
                y: [-20, -100],
                x: [0, 10, -10, 0]
            }}
            transition={{ 
                duration, 
                delay, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className={`absolute pointer-events-none select-none z-0 ${className}`}
        >
            <div className="glass-card p-3 rounded-lg border border-white/5 backdrop-blur-sm min-w-[150px]">
                <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-1">
                    <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400/50">{title}</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                    </div>
                </div>
                <div className="space-y-1">
                    {code.map((line, idx) => (
                        <div key={idx} className="font-mono text-[7px] text-white/20 whitespace-nowrap">
                            <span className="text-purple-500/30 mr-1">$</span>
                            {line}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
