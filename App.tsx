import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SuccessStories } from './components/SuccessStories'; // Novo componente de depoimentos de impacto
import { Benefits } from './components/Benefits';
import { Transformation } from './components/Transformation';
import { WhatYouGet } from './components/WhatYouGet';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { Urgency } from './components/Urgency';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden selection:bg-gold selection:text-black">
      
      <Header />
      
      <main>
        <Hero />
        {/* Prova Social de Impacto logo após a promessa principal */}
        <SuccessStories /> 
        <Benefits />
        <Transformation />
        <Testimonials /> {/* Mural de depoimentos estilo social media para reforçar a comunidade */}
        <WhatYouGet />
        <Bonuses />
        <Urgency />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;