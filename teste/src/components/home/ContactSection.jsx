import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await base44.entities.Lead.create(formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contato" className="py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="gradient-border rounded-3xl p-12"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-black mb-4">Mensagem Enviada!</h3>
            <p className="text-muted-foreground text-lg">
              Recebemos sua mensagem e entraremos em contato em até 24 horas. Fique de olho no seu email!
            </p>
            <Button
              className="mt-8 bg-primary hover:bg-primary/90 rounded-2xl px-8 py-6"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", phone: "", service_interest: "", message: "" });
              }}
            >
              Enviar Outra Mensagem
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Contato</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-6">
              Vamos criar algo <span className="gradient-text">incrível juntos?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para transformar sua visão em realidade digital.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "contato@codewebstudio.com" },
                { icon: Phone, label: "(11) 99999-9999" },
                { icon: MessageCircle, label: "WhatsApp disponível" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="gradient-border rounded-3xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Nome *</label>
                  <Input
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Telefone</label>
                  <Input
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary/50 border-border rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Serviço</label>
                  <Select
                    value={formData.service_interest}
                    onValueChange={(value) => setFormData({ ...formData, service_interest: value })}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border rounded-xl h-12">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing_page">Landing Page</SelectItem>
                      <SelectItem value="site_institucional">Site Institucional</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="redesign">Redesign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 mb-2 block">Mensagem</label>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border rounded-xl min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg font-semibold glow-primary transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}