"use client";

import { motion } from "framer-motion";
import { FileText, Shield, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function Documents() {
  const documents = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Termos de uso",
      color: "tech-cyan",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Política de privacidade",
      color: "tech-cyan",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Compliance",
      color: "tech-cyan",
    },
  ];

  return (
    <section id="documents" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Documentos"
          description="Faça o download dos documentos oficiais de regulamentação e transparência da Majors Asset."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {documents.map((doc, index) => (
            <motion.a
              key={doc.title}
              href="#"
              className="p-6 rounded-xl border border-border group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${doc.color}/10 flex items-center justify-center mb-4 text-${doc.color} group-hover:bg-${doc.color}/20 transition-colors`}>
                {doc.icon}
              </div>
              <h3 className="text-xl font-semibold transition-colors">{doc.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}