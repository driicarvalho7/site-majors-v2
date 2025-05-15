"use client";

import { motion } from "framer-motion";
import { Database, Server, BarChart4, CheckCircle } from "lucide-react";

export default function DataFlowAnimation() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative h-40 w-full flex items-center justify-center my-10">
      <svg 
        className="absolute w-4/5 max-w-lg"
        height="80" 
        viewBox="0 0 600 80"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M100,40 L200,40 L300,40 L400,40 L500,40"
          stroke="hsla(var(--tech-blue), 0.5)"
          strokeWidth="2"
          strokeDasharray="6 6"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        
        <motion.rect
          x="0" 
          y="35" 
          width="600" 
          height="10" 
          fill="url(#dataGradient)"
          initial={{ x: -600 }}
          animate={{ x: 600 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
        
        <defs>
          <linearGradient id="dataGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="hsla(var(--tech-blue), 0)" />
            <stop offset="0.2" stopColor="hsla(var(--tech-blue), 0.8)" />
            <stop offset="0.8" stopColor="hsla(var(--tech-cyan), 0.8)" />
            <stop offset="1" stopColor="hsla(var(--tech-cyan), 0)" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="relative w-4/5 max-w-lg flex justify-between">
        <motion.div
          className="flex flex-col items-center"
          custom={0}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-background p-3 rounded-full border border-border shadow-lg">
            <Database className="h-6 w-6 text-tech-blue" />
          </div>
          <span className="text-xs mt-2 text-center text-muted-foreground">Dados</span>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center"
          custom={1}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-background p-3 rounded-full border border-border shadow-lg">
            <Server className="h-6 w-6 text-tech-cyan" />
          </div>
          <span className="text-xs mt-2 text-center text-muted-foreground">Processamento</span>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center"
          custom={2}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-background p-3 rounded-full border border-border shadow-lg">
            <BarChart4 className="h-6 w-6 text-tech-purple" />
          </div>
          <span className="text-xs mt-2 text-center text-muted-foreground">Análise</span>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center"
          custom={3}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-background p-3 rounded-full border border-border shadow-lg">
            <CheckCircle className="h-6 w-6 text-tech-pink" />
          </div>
          <span className="text-xs mt-2 text-center text-muted-foreground">Decisões</span>
        </motion.div>
      </div>
    </div>
  );
}