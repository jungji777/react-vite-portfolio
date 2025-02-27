import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Rediseño Hotel de Lujo",
    industry: "Hostelería",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    metrics: "150% incremento en reservas"
  },
  {
    id: 2,
    title: "Plataforma para Cadena de Restaurantes",
    industry: "Restauración",
    category: "Sitios Web",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    metrics: "2.3M pedidos anuales"
  },
  {
    id: 3,
    title: "App de Experiencias Turísticas",
    industry: "Turismo",
    category: "Landing Pages",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    metrics: "98% satisfacción del usuario"
  }
];

const categories = ["Todos", "Branding", "Landing Pages", "Sitios Web"];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center">Nuestro Trabajo</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-[#0071E3] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl 
                       transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.industry}</p>
                <p className="text-[#0071E3] font-medium">{project.metrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}