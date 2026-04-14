"use client";

import { motion } from "framer-motion";

/**
 * NeuronOrb Component (Sleek Minimalist - Wireframe Edition)
 * A premium, clean geometric core representing a neural network.
 * Features rotating thin rings, subtle glow, and absolute clarity.
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
            {/* Soft Ambient Glow Pool */}
            <div className="absolute inset-[-40%] bg-blue-500/5 blur-[100px] rounded-full" />

            {/* Main Rotating Wireframe Container */}
            <motion.div
                animate={{ rotateY: 360, rotateZ: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full flex items-center justify-center preserve-3d"
            >
                {/* Horizontal Rings */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute w-full h-full rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        style={{ transform: `rotateX(${i * 36}deg)` }}
                    />
                ))}

                {/* Vertical Rings */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute w-full h-full rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        style={{ transform: `rotateY(${i * 36}deg)` }}
                    />
                ))}

                {/* Internal Pulsing Core (Minimal) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/4 h-1/4 bg-white/20 rounded-full blur-xl"
                />
            </motion.div>

            {/* Specular High-End Shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
        </div>
    );
}
