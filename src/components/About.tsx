import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description: "Especializado en React, Node.js y arquitecturas modernas"
  },
  {
    icon: Rocket,
    title: "Optimización y Rendimiento",
    description: "Creación de aplicaciones rápidas y escalables"
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo cercano con equipos para lograr objetivos"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre <span className="text-primary">Mí</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Con más de 5 años de experiencia en desarrollo web, me especializo en crear 
              soluciones digitales que combinan diseño excepcional con funcionalidad robusta. 
              Mi enfoque se centra en construir experiencias web que no solo se ven 
              increíbles, sino que también generan resultados tangibles para las empresas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              He trabajado con startups y empresas establecidas, ayudándoles a transformar 
              sus visiones en realidad digital. Mi experiencia abarca desde el desarrollo 
              frontend con las últimas tecnologías hasta la implementación de soluciones 
              backend escalables.
            </p>
          </div>
          
          <div className="grid gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-muted p-6 rounded-xl border border-muted hover:border-primary transition-all"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};