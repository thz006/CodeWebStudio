import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Briefing",
    description: "Entendemos suas necessidades, objetivos e o DNA da sua marca em uma conversa detalhada.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Criamos o layout perfeito com foco em UX/UI, conversão e identidade visual única.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Desenvolvimento",
    description: "Transformamos o design em código limpo, rápido e 100% responsivo.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lançamento",
    description: "Publicamos seu projeto e acompanhamos os primeiros resultados juntos.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Como funciona</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-6">
            Simples como <span className="gradient-text">1, 2, 3, 4</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nosso processo é transparente e eficiente. Você acompanha cada etapa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center relative"
            >
              {/* Connector line - hidden on mobile and last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 mb-6 relative">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-background border border-primary/30 rounded-full w-7 h-7 flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}