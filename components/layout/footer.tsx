"use client";

import { motion } from "framer-motion";
import { CircuitBoard, Mail, MapPin, FileText, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-card text-card-foreground border-t border-border overflow-hidden" id="contact">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                className="text-tech-withe"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CircuitBoard className="h-8 w-8" />
              </motion.div>
              <div className="font-montserrat font-bold text-xl">
                Majors Asset
              </div>
            </Link>
            
            <p className="text-muted-foreground mt-4 max-w-md">
              A Majors Asset encontra-se atualmente em processo de habilitação junto aos órgãos responsáveis. 
              Estamos trabalhando para atender a todas as exigências regulatórias e garantir a excelência em nossos serviços.
            </p>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-tech-cyan" />
              <p className="text-sm">Rua Helena 218 - Sala 204, Vila Olimpia, São Paulo</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-tech-cyan" />
              <a href="mailto:contato@majorsasset.com" className="text-sm hover:text-tech-blue transition-colors">
                contato@majorsasset.com
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <span className="mr-2">→</span> Quem somos
                </Link>
              </li>
              <li>
                <Link href="#pillars" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <span className="mr-2">→</span> Nossos pilares
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <span className="mr-2">→</span> Nossas soluções
                </Link>
              </li>
              <li>
                <Link href="#operation" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <span className="mr-2">→</span> Como atuamos
                </Link>
              </li>
              <li>
                <Link href="#documents" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <span className="mr-2">→</span> Documentos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Documents */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Documentos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <FileText className="h-5 w-5 mr-2" /> Termos de uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <Shield className="h-5 w-5 mr-2" /> Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-tech-blue transition-colors flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" /> Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Majors Asset. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}