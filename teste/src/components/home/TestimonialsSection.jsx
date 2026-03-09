import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Santos",
    role: "CEO, TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    text: "A Code Web Studio transformou completamente nossa presença online. Nossa taxa de conversão triplicou em apenas 2 meses!",
    stars: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Fundador, Nexus Finance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "Profissionalismo do início ao fim. O site ficou melhor do que eu imaginava. Recomendo de olhos fechados!",
    stars: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Marketing, Bella Cosmetics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    text: "Design incrível e velocidade impressionante. O e-commerce que criaram para nós é uma máquina de vendas.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="gradient-border rounded-3xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-chart-3 text-chart-3" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-8 text-base">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}