"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Lock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutUs() {
  // List of tech keywords that will animate
  const techWords = [
    "Algoritmos", "IA", "Machine Learning", "Blockchain", 
    "Big Data", "Automação", "Cloud", "APIs", 
    "Análise Preditiva", "Segurança", "Quantum"
  ];

  return (
    <section id="about" className="relative bg-card py-24 overflow-hidden">
      {/* Technology words background */}
      <div className="absolute inset-0 flex flex-wrap content-center justify-center opacity-[0.03] text-4xl font-bold overflow-hidden pointer-events-none">
        {techWords.map((word, index) => (
          <motion.div
            key={word}
            className="mx-4 my-4 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 10
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <SectionHeading
              pretitle="Quem somos"
              title="Uma gestora com o DNA da tecnologia e inovação"
              description="Somos uma gestora de FIDCs que nasceu com a tecnologia no centro de nossa operação. Atuamos com foco em crédito consignado e Saque-Aniversário FGTS, oferecendo soluções ágeis, escaláveis e 100% em linha com as exigências regulatórias."
            />
            
            <motion.div 
              className="mt-8 grid gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Key points */}
              <div className="flex items-start gap-4">
                <div className="bg-tech-cyan/10 p-3 rounded-lg">
                  <Database className="h-5 w-5 text-tech-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Software Proprietário</h3>
                  <p className="text-muted-foreground">Desenvolvimento de ferramentas tecnológicas exclusivas para análise de crédito e validação de lastro.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tech-cyan/10 p-3 rounded-lg">
                  <LineChart className="h-5 w-5 text-tech-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Eficiência Operacional</h3>
                  <p className="text-muted-foreground">Processamento completo dos ativos em tempo reduzido, permitindo liquidação total no mesmo dia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tech-cyan/10 p-3 rounded-lg">
                  <Lock className="h-5 w-5 text-tech-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Segurança e Compliance</h3>
                  <p className="text-muted-foreground">Operações totalmente alinhadas às exigências regulatórias, garantindo segurança aos investidores.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#solutions">
                <button className="group flex items-center text-tech-cyan hover:underline font-medium">
                  Conheça nossas soluções
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </motion.div>
          </div>
          
          {/* Visual Content */}
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden border border-border shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tech background grid */}
            <div className="absolute inset-0 bg-secondary grid-pattern"></div>
            
            {/* Visualization elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                {/* Central hub */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-tech-blue/20 backdrop-blur-md rounded-full flex items-center justify-center border border-tech-blue/50 z-10"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-12 h-12 bg-tech-blue/30 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-tech-cyan rounded-full"></div>
                  </div>
                </motion.div>
                
                {/* Orbiting elements */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const delay = i * 0.2;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 bg-tech-cyan/80 rounded-full flex items-center justify-center"
                      style={{
                        top: "50%",
                        left: "50%",
                        x: x,
                        y: y,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay }}
                    />
                  );
                })}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.circle 
                    cx="200" 
                    cy="200" 
                    r="120" 
                    fill="none" 
                    stroke="hsla(var(--tech-blue), 0.2)" 
                    strokeWidth="1" 
                    strokeDasharray="5 5"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.circle 
                    cx="200" 
                    cy="200" 
                    r="90" 
                    fill="none" 
                    stroke="hsla(var(--tech-cyan), 0.15)" 
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.circle 
                    cx="200" 
                    cy="200" 
                    r="150" 
                    fill="none" 
                    stroke="hsla(var(--tech-purple), 0.1)" 
                    strokeWidth="1"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
                
                {/* Data points flowing through the lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={`data-point-${i}`}
                    className="absolute w-2 h-2 bg-tech-cyan rounded-full"
                    initial={{ 
                      scale: 0,
                      top: "50%", 
                      left: "50%",
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      scale: [0, 1, 1, 0],
                      x: [0, Math.cos((i * 72) * (Math.PI / 180)) * 120, Math.cos(((i+1) * 72) * (Math.PI / 180)) * 120, 0],
                      y: [0, Math.sin((i * 72) * (Math.PI / 180)) * 120, Math.sin(((i+1) * 72) * (Math.PI / 180)) * 120, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.4,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}