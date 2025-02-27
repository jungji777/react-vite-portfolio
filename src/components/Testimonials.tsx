import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Su experiencia transformó completamente nuestra presencia digital. Nuestras reservas online aumentaron un 200% en tres meses.",
    name: "Sara Chen",
    position: "CEO",
    company: "Luxury Hotels Group",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    metrics: "200% incremento en reservas"
  },
  {
    quote: "La nueva plataforma que construyeron para nosotros optimizó nuestras operaciones y encantó a nuestros clientes. Vale cada centavo.",
    name: "Miguel Rodríguez",
    position: "Director de Operaciones",
    company: "Fresh Eats Chain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    metrics: "45% mejora en eficiencia"
  },
  {
    quote: "Profesionales, innovadores y orientados a resultados. No solo construyeron un sitio web, construyeron nuestro futuro digital.",
    name: "Emma Thompson",
    position: "Jefa de Marketing",
    company: "Adventure Tours",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    metrics: "3x alcance de clientes"
  }
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center">Historias de Éxito</h2>
        
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full 
                     shadow-lg hover:bg-gray-50 focus:outline-none"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[400px] flex-shrink-0 snap-center bg-gray-50 p-8 rounded-2xl"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-6 object-cover"
                  loading="lazy"
                />
                <blockquote className="text-lg text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                  <p className="text-[#0071E3] font-medium mt-4">{testimonial.metrics}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full 
                     shadow-lg hover:bg-gray-50 focus:outline-none"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}