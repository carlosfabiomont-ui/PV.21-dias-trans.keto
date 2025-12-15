import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Transformation } from './components/Transformation';
import { Bonuses } from './components/Bonuses'; // Nova importação
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
        <Benefits />
        <Transformation />
        <Bonuses /> {/* Inserido antes dos depoimentos para aumentar valor percebido */}
        <Testimonials />
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