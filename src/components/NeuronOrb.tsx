"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * NeuronOrb Component (Neural Network HUD Edition)
 * A dense point-cloud sphere representing an active neural network.
 * Features interconnected nodes and pulsing synaptic lines.
 */

interface NeuronOrbProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
}

export default function NeuronOrb({ size = "md", className = "" }: NeuronOrbProps) {
    const dimensions = {
        xs: "w-8 h-8",
        sm: "w-32 h-32",
        md: "w-64 h-64",
        lg: "w-96 h-96",
        xl: "w-[500px] h-[500px]"
    };

    // Generate stable random points for the "neural nodes"
    const nodes = useMemo(() => {
        const count = 40;
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            z: Math.random() * 100,
            size: Math.random() * 2 + 1,
            pulseDelay: Math.random() * 2
        }));
    }, []);

    // Generate connections between nearby points
    const connections = useMemo(() => {
        const links: { from: number; to: number }[] = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) +
                    Math.pow(nodes[i].y - nodes[j].y, 2) +
                    Math.pow(nodes[i].z - nodes[j].z, 2)
                );
                if (dist < 25) { // Connection threshold
                    links.push({ from: i, to: j });
                }
            }
        }
        return links;
    }, [nodes]);

    return (
        <div className={`relative flex items-center justify-center ${dimensions[size]} ${className}`}>
            {/* Reduced Ambient Glow */}
            <div className="absolute inset-0 bg-blue-500/[0.03] blur-[120px] rounded-full" />
            
            {/* 3D Container */}
            <motion.div
                animate={{ rotateY: 360, rotateZ: 10 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full preserve-3d"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                        <radialGradient id="nodeGradient">
                            <stop offset="0%" stopColor="#fff" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Connections */}
                    {connections.map((link, idx) => (
                        <motion.line
                            key={`link-${idx}`}
                            x1={nodes[link.from].x}
                            y1={nodes[link.from].y}
                            x2={nodes[link.to].x}
                            y2={nodes[link.to].y}
                            stroke="currentColor"
                            strokeWidth="0.1"
                            className="text-cyan-500/20"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                delay: Math.random() * 5 
                            }}
                        />
                    ))}

                    {/* Nodes */}
                    {nodes.map((node) => (
                        <g key={`node-${node.id}`}>
                            {/* Node Core */}
                            <motion.circle
                                cx={node.x}
                                cy={node.y}
                                r={node.size * 0.4}
                                fill="#22d3ee"
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: node.pulseDelay 
                                }}
                            />
                            {/* Subtle Glow Ring */}
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={node.size * 0.8}
                                fill="url(#nodeGradient)"
                                opacity="0.4"
                            />
                        </g>
                    ))}
                </svg>

                {/* Internal HUD Elements */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80%] h-[80%] rounded-full border border-white/5 animate-spin-slow opacity-20" />
                    <div className="w-[95%] h-[95%] rounded-full border border-cyan-500/5 animate-pulse opacity-10" />
                </div>
            </motion.div>

            {/* Specular High-End Shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none z-20" />
        </div>
    );
}
