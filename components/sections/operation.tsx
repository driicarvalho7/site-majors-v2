"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function Operation() {
  const steps = [
    "Alinhamento dos processos com stakeholders e setup inicial do sistema.",
    "Validação automática da elegibilidade e documentos dos ativos na cessão.",
    "Geração e envio de relatórios com resumo das movimentações diárias.",
    "Validação diária da carteira e conciliação de repasses, ambos de forma automatizada.",
    "Estrutura flexível para novos fluxos e demandas.",
  ];

  return (
    <section id="operation" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Como atuamos na operação"
          align="center"
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="h-6 w-6 text-tech-cyan" />
              </div>
              <div className="flex-1">
                <p className="text-lg">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}