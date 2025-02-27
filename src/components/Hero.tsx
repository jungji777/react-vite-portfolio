import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in mix-blend-multiply dark:mix-blend-normal">
              Transformando
              <span className="block text-primary text-6xl md:text-7xl mt-2">Ideas</span>
              <span className="text-3xl md:text-4xl text-muted-foreground">en Experiencias Digitales</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Desarrollador Full Stack especializado en crear experiencias web únicas y memorables para empresas innovadoras.
            </p>

            <div className="flex gap-6 items-center">
              <a 
                href="#work"
                className="group inline-flex items-center gap-3 bg-primary/90 text-white px-8 py-4 rounded-full text-lg 
                         font-medium hover:bg-primary transition-all hover:gap-5 backdrop-blur-sm"
              >
                Ver mi trabajo
                <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-lg font-medium"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Featured work preview */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-background/30 backdrop-blur-md p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Project preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-sm font-medium text-primary">E-commerce Platform</h3>
                </div>
                <div className="bg-background/30 backdrop-blur-md p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="Project preview"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-sm font-medium text-primary">Restaurant Management</h3>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-background/30 backdrop-blur-md p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                    alt="Project preview"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-sm font-medium text-primary">Hotel Booking System</h3>
                </div>
                <div className="bg-background/30 backdrop-blur-md p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold text-primary">+10</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Proyectos completados en el último año</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};