import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />

          <div className="relative z-10 text-center py-16 sm:py-24 px-8 sm:px-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">Oferta por tempo limitado</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-tight mb-6">
                Pronto para dominar
                <br />o mundo digital?
              </h2>

              <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-10">
                Entre em contato agora e ganhe uma consultoria estratégica gratuita para o seu projeto.
              </p>

              <Button
                size="lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl px-10 py-7 text-lg font-bold group"
              >
                Quero Minha Consultoria Grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}