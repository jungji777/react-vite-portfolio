import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Plataforma de comercio electrónico con React y Node.js",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1739649034/jungjicards_ezgvte.jpg",
    link: "#"
  },
  {
    title: "Páginas Web para Hoteles",
    description: "Diseño y desarrollo de sitios web modernos para hoteles",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Páginas Web para Restaurantes",
    description: "Soluciones digitales para restaurantes y servicios de comida",
    tech: ["React", "Node.js", "Stripe", "Google Maps"],
    image: "https://res.cloudinary.com/df5jie5rz/image/upload/v1739647977/Schlotzsky_b1makr.jpg",
    link: "https://locations.schlotzskys.com/tn/murfreesboro/4433-veterans-parkway?utm_source=google&utm_medium=sem&utm_campaign=fy25_perform_olo_push_go-murfreesboro-tn_pmax&utm_content=olo&utm_term=prospect&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfqxcoh7EI-Q-g88f-tzm1Q76bBImjSRhWJ6rs1q9Ow1Tkxk2NgbHXBoC6R4QAvD_BwE"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-[#0071E3] font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}