import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <div className="glass rounded-2xl p-3 glow-primary">
      <Icon className="w-6 h-6 text-primary" />
    </div>
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating icons - hidden on mobile */}
      <div className="hidden lg:block">
        <FloatingIcon icon={Code2} className="top-32 left-[15%]" delay={0} />
        <FloatingIcon icon={Sparkles} className="top-48 right-[18%]" delay={1} />
        <FloatingIcon icon={Zap} className="bottom-40 left-[20%]" delay={2} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sites que Convertem de Verdade</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            Transformamos sua{" "}
            <span className="gradient-text">ideia em pixels</span>{" "}
            que vendem
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Criamos landing pages e sites de alta performance que não só impressionam visualmente, 
            mas transformam visitantes em clientes reais.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-2xl glow-primary transition-all duration-300"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero Meu Site
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-2xl border-border hover:bg-secondary transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16"
          >
            {[
              { value: "150+", label: "Projetos Entregues" },
              { value: "98%", label: "Clientes Satisfeitos" },
              { value: "3x", label: "Mais Conversões" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-black gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}