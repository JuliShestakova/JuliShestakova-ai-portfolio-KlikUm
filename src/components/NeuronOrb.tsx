"use client";

import { motion } from "framer-motion";

/**
 * NeuronOrb Component (Ultra-HUD)
 * A high-performance animation component representing a central neural core.
 * Features nested orbits, internal plasma core, and glass refraction.
 */

interface NeuronOrbProps {
    size?: "xs" | "sm" | "md" | "lg";
    className?: string;
}

export default function NeuronOrb({ size = "md", className = "" }: NeuronOrbProps) {
    const dimensions = {
        xs: "w-8 h-8",
        sm: "w-32 h-32",
        md: "w-56 h-56",
        lg: "w-80 h-80"
    };

    return (
        <div className={`relative flex items-center justify-center ${dimensions[size]} ${className}`}>
            {/* SVG Filter Engine for Neural Core */}
            <svg className="absolute w-0 h-0 invisible">
                <filter id="neural-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
                </filter>
            </svg>

            {/* Background Atmosphere Glow */}
            <div className="absolute inset-[-50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse-slow" />

            {/* Outer Orbit 1 (Electric Path) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute border border-purple-500/20 rounded-full"
                style={{ width: "140%", height: "140%" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </motion.div>

            {/* Neural Connections (Floating Lines) */}
            <div className="absolute inset-0 z-0 opacity-40">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            rotate: [i * 60, i * 60 + 360],
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-x-1/2 -translate-y-1/2"
                    />
                ))}
            </div>

            {/* Main Sphere Body */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full h-full rounded-full z-10 overflow-hidden"
            >
                {/* Outer Glass Shell */}
                <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_0_40px_rgba(255,255,255,0.1)] z-30 pointer-events-none" />
                
                {/* Specular Highlight */}
                <div className="absolute top-[10%] left-[15%] w-[40%] h-[30%] bg-gradient-to-b from-white/20 to-transparent rounded-full blur-md z-30 rotate-[-15deg]" />

                {/* Inner Plasma Core */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.08, 1],
                        rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ 
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute inset-[10%] rounded-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-900 border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.5)]"
                    style={{ filter: "url(#neural-noise)" }}
                >
                    {/* Inner Central Nucleus */}
                    <motion.div 
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1/3 h-1/3 bg-white rounded-full blur-xl opacity-80"
                    />
                </motion.div>

                {/* Depth Texture Layers */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.6)_100%)] z-20" />
            </motion.div>

            {/* Final Outer Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full z-0 animate-pulse" />
        </div>
    );
}
