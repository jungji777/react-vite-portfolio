import React from 'react';
import { Hotel, Utensils, Plane, Rocket } from 'lucide-react';

const solutions = [
  {
    icon: Hotel,
    title: "Hostelería",
    solutions: ["Sistemas de Reservas", "Experiencia del Huésped", "Gestión de Ingresos"],
    metrics: "Promedio 40% incremento RevPAR"
  },
  {
    icon: Utensils,
    title: "Restaurantes",
    solutions: ["Pedidos Online", "Gestión de Mesas", "Programas de Fidelización"],
    metrics: "2.5x volumen de pedidos"
  },
  {
    icon: Plane,
    title: "Turismo",
    solutions: ["Reserva de Tours", "Plataforma de Experiencias", "Planificación de Viajes"],
    metrics: "90% retención de clientes"
  },
  {
    icon: Rocket,
    title: "Startups",
    solutions: ["Desarrollo MVP", "Estrategia de Escalado", "Growth Hacking"],
    metrics: "3x entrada más rápida al mercado"
  }
];

export const Solutions = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-16 text-center">Soluciones por Industria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 
                         transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-[#0071E3] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <ul className="space-y-2 mb-6">
                  {solution.solutions.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
                <p className="text-[#0071E3] font-medium">{solution.metrics}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}