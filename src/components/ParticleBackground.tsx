import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeDirection: 1 | -1;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Get the CSS variables for colors
    const computedStyle = getComputedStyle(document.documentElement);
    const getPrimaryColor = () => {
      const primaryRGB = computedStyle.getPropertyValue('--primary').trim().split(' ');
      return `rgba(${primaryRGB.join(',')}, 0.15)`;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000); // Responsive particle density
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 2, // 2-5px
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.5, // 50-80% opacity
          fadeDirection: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = getPrimaryColor();
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
    };

    const updateParticle = (particle: Particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Update opacity for fade effect
      particle.opacity += 0.005 * particle.fadeDirection;
      if (particle.opacity >= 0.8) particle.fadeDirection = -1;
      if (particle.opacity <= 0.5) particle.fadeDirection = 1;

      // Handle screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resize();
    createParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]); // Recreate particles when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(1px)' }}
    />
  );
};