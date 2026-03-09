import React from "react";
import { Code2, Heart, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-primary/20">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold">
              Code<span className="text-primary">Web</span>Studio
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-chart-4 fill-chart-4" /> por Code Web Studio © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}