import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const CursorLight = () => {
  const primaryLightRef = useRef<HTMLDivElement>(null);
  const secondaryLightRef = useRef<HTMLDivElement>(null);
  const ambientLightRef = useRef<HTMLDivElement>(null);
  const rimLightRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let secondaryX = 0;
    let secondaryY = 0;
    let rimX = 0;
    let rimY = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!primaryLightRef.current || !secondaryLightRef.current || !ambientLightRef.current || !rimLightRef.current) return;

      // Primary light - Quick response
      currentX = lerp(currentX, targetX, 0.2);
      currentY = lerp(currentY, targetY, 0.2);

      // Secondary light - Smooth follow
      secondaryX = lerp(secondaryX, currentX, 0.08);
      secondaryY = lerp(secondaryY, currentY, 0.08);

      // Rim light - Offset movement
      rimX = lerp(rimX, currentX + 50, 0.1);
      rimY = lerp(rimY, currentY - 50, 0.1);

      // Apply transforms
      primaryLightRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      secondaryLightRef.current.style.transform = `translate(${secondaryX}px, ${secondaryY}px)`;
      rimLightRef.current.style.transform = `translate(${rimX}px, ${rimY}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      targetX = e.touches[0].clientX;
      targetY = e.touches[0].clientY;
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      {/* Primary intense light source */}
      <div 
        ref={primaryLightRef}
        className={`fixed pointer-events-none z-0 mix-blend-soft-light
                  ${theme === 'light' 
                    ? 'bg-primary/45'
                    : 'bg-primary/55'}`}
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
      />
      
      {/* Secondary diffused light */}
      <div 
        ref={secondaryLightRef}
        className={`fixed pointer-events-none z-0 mix-blend-overlay
                  ${theme === 'light' 
                    ? 'bg-primary/25'
                    : 'bg-primary/35'}`}
        style={{
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(90px)',
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Ambient light fill */}
      <div 
        ref={ambientLightRef}
        className={`fixed pointer-events-none z-0 mix-blend-color-dodge
                  ${theme === 'light' 
                    ? 'bg-primary/10'
                    : 'bg-primary/15'}`}
        style={{
          width: '1200px',
          height: '1200px',
          borderRadius: '50%',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(120px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Rim lighting effect */}
      <div 
        ref={rimLightRef}
        className={`fixed pointer-events-none z-0 mix-blend-screen
                  ${theme === 'light' 
                    ? 'bg-primary/30'
                    : 'bg-primary/40'}`}
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(30px)',
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
};