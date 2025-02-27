import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleBackground } from './components/ParticleBackground';
import { CursorLight } from './components/CursorLight';
import { Skills } from './components/Skills';
import { DinoAnimation } from './components/DinoAnimation';

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans bg-background text-foreground">
        <CursorLight />
        <ParticleBackground />
        <DinoAnimation />
        <Navigation />
        <Hero />
        <Skills />
        <About />
        <Work />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;