import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechFlow SaaS",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    color: "from-primary/80 to-accent/80",
  },
  {
    title: "Bella Cosmetics",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    color: "from-chart-4/80 to-primary/80",
  },
  {
    title: "Nexus Finance",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    color: "from-accent/80 to-chart-5/80",
  },
  {
    title: "FitPro Academy",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    color: "from-chart-3/80 to-primary/80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Portfólio</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-6">
            Projetos que <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada projeto é uma história de sucesso. Veja como transformamos ideias em experiências digitais incríveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500`} />
              
              {/* Default label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-1">{project.title}</h3>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-center text-foreground">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm font-medium opacity-90 mb-4">{project.category}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/20 backdrop-blur-sm">
                    <span className="text-sm font-medium">Ver Projeto</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}