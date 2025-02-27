import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

const posts = [
  {
    title: "Estrategia SEO para CEOs y Ejecutivos 2024",
    excerpt: "Guía completa de SEO para líderes empresariales con técnicas avanzadas y métricas clave.",
    date: "18 Mar 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "SEO",
    content: {
      sections: [
        {
          title: "Estrategias SEO para Liderazgo Ejecutivo",
          icon: TrendingUp,
          points: [
            "Optimización de perfiles LinkedIn y biografías corporativas",
            "Posicionamiento para términos de liderazgo empresarial",
            "Creación de contenido thought leadership",
            "Personal branding digital para CEOs"
          ],
          metrics: "85% mejora en visibilidad ejecutiva"
        },
        {
          title: "Keywords de Alto Valor",
          icon: Target,
          points: [
            "CEO [industria específica]",
            "Líder empresarial [ubicación]",
            "Experto en [nicho de mercado]",
            "Conferenciante ejecutivo [tema]"
          ],
          metrics: "60% incremento en tráfico cualificado"
        },
        {
          title: "KPIs y Métricas Clave",
          icon: BarChart3,
          points: [
            "Domain Authority de perfiles ejecutivos",
            "Engagement en contenido de liderazgo",
            "Conversiones desde búsquedas ejecutivas",
            "Share of Voice en la industria"
          ],
          metrics: "3x ROI en estrategias SEO ejecutivas"
        }
      ]
    }
  },
  {
    title: "Mejores Prácticas en Desarrollo Web 2024",
    excerpt: "Descubre las últimas tendencias y mejores prácticas en desarrollo web para este año.",
    date: "15 Mar 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    category: "Desarrollo"
  },
  {
    title: "Optimización de Rendimiento en React",
    excerpt: "Guía completa para mejorar el rendimiento de tus aplicaciones React.",
    date: "10 Mar 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    category: "React"
  }
];

export const Blog = () => {
  const [expandedPost, setExpandedPost] = React.useState<number | null>(null);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center">Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                {post.content && (
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedPost === index ? 'max-h-[2000px]' : 'max-h-0'
                  }`}>
                    <div className="mt-6 space-y-8">
                      {post.content.sections.map((section, sIdx) => {
                        const Icon = section.icon;
                        return (
                          <div key={sIdx} className="bg-white p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                              <Icon className="w-6 h-6 text-[#0071E3]" />
                              <h4 className="text-lg font-semibold">{section.title}</h4>
                            </div>
                            <ul className="space-y-2 mb-4">
                              {section.points.map((point, pIdx) => (
                                <li key={pIdx} className="text-gray-600 flex items-start gap-2">
                                  <span className="text-[#0071E3] font-bold">•</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                            <p className="text-[#0071E3] font-medium">{section.metrics}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                <button 
                  className="text-[#0071E3] font-medium flex items-center gap-2 hover:gap-3 transition-all mt-4"
                  onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                >
                  {expandedPost === index ? 'Leer menos' : 'Leer más'} 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}