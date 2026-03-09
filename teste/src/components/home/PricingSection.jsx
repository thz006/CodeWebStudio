import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Landing Page",
    price: "997",
    description: "Perfeita para campanhas e lançamentos",
    features: [
      "Design personalizado",
      "Otimização para conversão",
      "Responsivo para todos os dispositivos",
      "Integração com analytics",
      "Entrega em até 7 dias",
      "1 revisão inclusa",
    ],
    popular: false,
    cta: "Começar Agora",
  },
  {
    name: "Site Profissional",
    price: "2.497",
    description: "Presença digital completa para seu negócio",
    features: [
      "Até 8 páginas personalizadas",
      "Design premium exclusivo",
      "SEO avançado",
      "Blog integrado",
      "Painel administrativo",
      "Suporte por 30 dias",
      "3 revisões inclusas",
    ],
    popular: true,
    cta: "Escolher Este Plano",
  },
  {
    name: "E-commerce",
    price: "4.997",
    description: "Sua loja virtual completa e otimizada",
    features: [
      "Catálogo de produtos ilimitado",
      "Gateway de pagamento integrado",
      "Design de alta conversão",
      "Gestão de estoque",
      "SEO para produtos",
      "Suporte por 60 dias",
      "Revisões ilimitadas",
    ],
    popular: false,
    cta: "Criar Minha Loja",
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precos" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Investimento</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-6">
            Planos que <span className="gradient-text">cabem no seu bolso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Investimento justo para resultados extraordinários. Escolha o plano ideal para o seu momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary/40 glow-primary"
                  : "gradient-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-black gradient-text">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">pagamento único</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 rounded-full bg-primary/20">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                onClick={scrollToContact}
                className={`w-full rounded-2xl py-6 font-semibold text-base group ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}