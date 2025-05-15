"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Database, Code, Cloud, Network } from "lucide-react";
import AnimatedText from "@/components/ui/animated-text";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bars = useMemo(() => {
    return [...Array(20)].map(() => ({
      height: `${Math.random() * 70 + 30}%`,
      opacity: 0.4 + Math.random() * 0.6,
      color: `hsl(var(--tech-${
        ["blue", "cyan", "purple", "pink"][Math.floor(Math.random() * 4)]
      }))`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 opacity-30 bg-gradient-to-b from-background to-muted"
        style={
          {
            backgroundImage:
              "radial-gradient(circle at var(--x) var(--y), hsl(var(--tech-blue)/0.3), transparent 80%)",
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          } as any
        }
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Floating Technology Icons */}
      <motion.div
        className="absolute top-1/4 left-[15%] text-tech-cyan/40 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Database size={40} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-[20%] text-tech-cyan/40 animate-float-delay-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Code size={36} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[15%] text-tech-cyan/40 animate-float-delay-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <Cloud size={48} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-[22%] text-tech-cyan/40 animate-float-delay-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <Network size={32} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-tech-cyan/10 text-tech-cyan text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Gestora de Fundos com DNA Tecnológico
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Onde dados viram <span className="text-tech-cyan">decisões</span> e
            tecnologia vira <span className="text-tech-pink">resultado</span>
          </motion.h1>

          <AnimatedText
            text="Soluções tecnológicas avançadas para o mercado financeiro, tornando operações mais rápidas, seguras e escaláveis."
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          />

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#about">
              <motion.button
                className="px-8 py-3 rounded-lg bg-tech-cyan hover:bg-tech-cyan/90 text-white font-medium shadow-lg shadow-tech-blue/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                Conheça nossa solução
              </motion.button>
            </a>

            {/* <a href="#contact">
              <motion.button
                className="px-8 py-3 rounded-lg bg-tech-purple hover:bg-tech-purple/90 text-secondary-foreground font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                Entre em contato
              </motion.button>
            </a> */}
          </motion.div>
        </div>

        {/* Animated Data Visualization */}
        <motion.div
          className="relative max-w-4xl h-24 mx-auto mt-16 mask-gradient-r"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="h-0.5 w-full bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink opacity-50"></div>
          </div>

          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 rounded-t-sm"
              style={{
                left: `${i * 5}%`,
                height: bar.height,
                opacity: bar.opacity,
                backgroundColor: bar.color,
              }}
              initial={{ height: 0 }}
              animate={{ height: bar.height }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
