import React from "react";
import { motion } from "framer-motion";
import { Palette, Rocket, MonitorSmartphone, Search, Gauge, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Landing Pages",
    description: "Páginas focadas em conversão com design persuasivo e copy que vende. Ideal para lançamentos e campanhas.",
    gradient: "from-primary to-purple-400",
  },
  {
    icon: MonitorSmartphone,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade e fortalecem a presença digital da sua marca.",
    gradient: "from-accent to-emerald-400",
  },
  {
    icon: Rocket,
    title: "E-commerce",
    description: "Lojas virtuais otimizadas para vendas com experiência de compra fluida e design irresistível.",
    gradient: "from-chart-4 to-pink-400",
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Todos os nossos projetos são otimizados para mecanismos de busca, garantindo visibilidade orgânica.",
    gradient: "from-chart-3 to-amber-400",
  },
  {
    icon: Gauge,
    title: "Alta Performance",
    description: "Sites ultra-rápidos com tempo de carregamento mínimo. Velocidade é conversão.",
    gradient: "from-chart-5 to-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Contínuo",
    description: "Manutenção, atualizações e suporte dedicado para manter seu site sempre no topo.",
    gradient: "from-primary to-accent",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="gradient-border rounded-3xl p-8 h-full hover:bg-secondary/50 transition-all duration-500 relative overflow-hidden">
      {/* Hover glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
        <service.icon className="w-6 h-6 text-foreground" />
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  </motion.div>
);

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">O que fazemos</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-6">
            Soluções <span className="gradient-text">completas</span> para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do conceito ao lançamento, cuidamos de cada detalhe para que seu projeto digital seja um sucesso absoluto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}