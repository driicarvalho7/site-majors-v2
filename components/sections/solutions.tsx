"use client";

import { motion } from "framer-motion";
import { Shield, Zap, LineChart } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function Solutions() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança",
      description: "Validação dos critérios de elegibilidade, documentos de lastro, registro dos recebíveis, garantindo segurança.",
      color: "tech-cyan",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Agilidade",
      description: "Validações em D-0, não limitando o fluxo de operações do fundo.",
      color: "tech-cyan",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Visibilidade",
      description: "Geração automática de relatórios, desde resumo das negociações até indicadores do fundo.",
      color: "tech-cyan",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          pretitle="Conheça as"
          title="Nossas soluções"
          description="Oferecemos um serviço de gestão em que a validação de lastro é feita com software proprietário que, além de possibilitar o processamento de todos os ativos e não apenas uma amostra, realiza isso em menos tempo."
          align="center"
          className="mb-16"
        />

        <motion.div
          className="text-center text-xl text-muted-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Com essa solução, no D-0 das negociações, já é possível liquidar a operação por completo.
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="p-6 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${benefit.color}/10 flex items-center justify-center mb-4 text-${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">+ {benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}