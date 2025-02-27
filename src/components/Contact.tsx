import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/jungji777',
    color: 'hover:text-[#6e5494]'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jungji-betancourth-49bba1345',
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:jungjibetancourth@gmail.com',
    color: 'hover:text-[#EA4335]'
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          ¿Listo para <span className="text-primary">Colaborar</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Estoy siempre interesado en nuevos proyectos y colaboraciones. 
          Si tienes una idea en mente, no dudes en contactarme.
        </p>

        <a
          href="mailto:jungjibetancourth@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full 
                   hover:bg-primary/90 transition-colors mb-16"
        >
          Contactar <ExternalLink className="w-4 h-4" />
        </a>

        <div className="flex justify-center gap-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground hover:scale-110 transition-all ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};