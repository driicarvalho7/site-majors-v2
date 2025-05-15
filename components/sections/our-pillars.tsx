"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowUpRight, Gauge, Network } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import TechCard from "@/components/ui/tech-card";

type TechCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

export default function OurPillars() {
  const pillars = [
    {
      title: "Tecnologia",
      description:
        "Soluções tecnológicas que otimizam operações com segurança e eficiência.",
      icon: <Cpu className="h-8 w-8" />,
      delay: 0.1,
      color: "tech-blue",
    },
    {
      title: "Escalabilidade",
      description:
        "Sistemas e processos projetados para crescer de forma sustentável.",
      icon: <ArrowUpRight className="h-8 w-8" />,
      delay: 0.2,
      color: "tech-cyan",
    },
    {
      title: "Eficiência",
      description:
        "Automação e conhecimento para garantir operações ágeis e confiáveis.",
      icon: <Gauge className="h-8 w-8" />,
      delay: 0.3,
      color: "tech-purple",
    },
    {
      title: "Conexão",
      description:
        "Relações sólidas e transparentes para entrega de valor real.",
      icon: <Network className="h-8 w-8" />,
      delay: 0.4,
      color: "tech-pink",
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          pretitle="Nossos pilares"
          title="Fundamentos que sustentam nossa excelência"
          description="Nossa abordagem é construída sobre quatro pilares essenciais que garantem um serviço de alta qualidade e resultados excepcionais."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((pillar, index) => (
            <TechCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              delay={pillar.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
