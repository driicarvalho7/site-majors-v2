"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TechCard({
  title,
  description,
  icon,
  className,
  delay = 0,
}: TechCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-tech-blue/10 rounded-full blur-2xl" />
      
      <div className="text-tech-cyan mb-4">{icon}</div>
      
      <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}