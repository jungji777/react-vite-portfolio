import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const DINO_WIDTH = 44;
const DINO_HEIGHT = 48;
const CACTUS_WIDTH = 24;
const CACTUS_HEIGHT = 48;
const CLOUD_WIDTH = 48;
const CLOUD_HEIGHT = 24;

export const DinoAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Game objects
    const dino = {
      x: 50,
      y: canvas.height - DINO_HEIGHT - 20,
      frame: 0,
      frameCount: 2,
      frameTimer: 0,
      frameInterval: 100,
    };

    const cacti: { x: number; y: number }[] = [];
    const clouds: { x: number; y: number }[] = [];

    // Initialize cacti
    for (let i = 0; i < 3; i++) {
      cacti.push({
        x: canvas.width + i * (canvas.width / 3),
        y: canvas.height - CACTUS_HEIGHT - 20,
      });
    }

    // Initialize clouds
    for (let i = 0; i < 4; i++) {
      clouds.push({
        x: canvas.width + i * (canvas.width / 4),
        y: Math.random() * (canvas.height / 2),
      });
    }

    const drawDino = () => {
      ctx.fillStyle = theme === 'light' ? '#CCCCCC' : '#444444';
      // Body
      ctx.fillRect(dino.x, dino.y, DINO_WIDTH, DINO_HEIGHT);
      // Head
      ctx.fillRect(dino.x + DINO_WIDTH - 10, dino.y - 20, 20, 20);
      // Eye
      ctx.fillStyle = theme === 'light' ? '#999999' : '#666666';
      ctx.fillRect(dino.x + DINO_WIDTH + 2, dino.y - 15, 4, 4);
      // Leg
      const legOffset = dino.frame * 10;
      ctx.fillRect(dino.x + 10, dino.y + DINO_HEIGHT, 8, 10 + legOffset);
      ctx.fillRect(dino.x + 30, dino.y + DINO_HEIGHT, 8, 10 - legOffset);
    };

    const drawCactus = (x: number, y: number) => {
      ctx.fillStyle = theme === 'light' ? '#DDDDDD' : '#555555';
      // Main stem
      ctx.fillRect(x, y, CACTUS_WIDTH, CACTUS_HEIGHT);
      // Side branches
      ctx.fillRect(x - 10, y + 15, 10, 8);
      ctx.fillRect(x + CACTUS_WIDTH, y + 25, 10, 8);
    };

    const drawCloud = (x: number, y: number) => {
      ctx.fillStyle = theme === 'light' ? '#F5F5F5' : '#333333';
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.arc(x + 15, y - 10, 12, 0, Math.PI * 2);
      ctx.arc(x + 30, y, 15, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update dino animation frame
      if (timestamp - dino.frameTimer > dino.frameInterval) {
        dino.frame = (dino.frame + 1) % dino.frameCount;
        dino.frameTimer = timestamp;
      }

      // Update and draw cacti
      cacti.forEach(cactus => {
        cactus.x -= 2;
        if (cactus.x < -CACTUS_WIDTH) {
          cactus.x = canvas.width;
        }
        drawCactus(cactus.x, cactus.y);
      });

      // Update and draw clouds
      clouds.forEach(cloud => {
        cloud.x -= 0.5;
        if (cloud.x < -CLOUD_WIDTH) {
          cloud.x = canvas.width;
          cloud.y = Math.random() * (canvas.height / 2);
        }
        drawCloud(cloud.x, cloud.y);
      });

      // Draw dino
      drawDino();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200; // Fixed height for the animation strip
    };

    resize();
    window.addEventListener('resize', resize);
    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 left-0 w-full pointer-events-none z-0"
      style={{ opacity: theme === 'light' ? 0.4 : 0.2 }}
    />
  );
};