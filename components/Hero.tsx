import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Fundo com gradiente radial sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      
      {/* Glow Dourado no Topo */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Etiqueta de Escassez para Tráfego de Ads */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-red-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">Oferta Exclusiva para Visitantes do Facebook</span>
        </div>

        {/* Headline Principal */}
        <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter mb-6 drop-shadow-2xl">
          DESBLOQUEIE A QUEIMA DE GORDURA NATURAL <br />
          <span className="text-gold-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
            EM APENAS 21 DIAS
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-100 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          O protocolo passo a passo para secar sem passar fome, <span className="text-white font-bold">sem remédios</span> e sem precisar morar na academia. Baseado na ciência evolutiva.
        </p>

        {/* Botão e Preço */}
        <div className="animate-fade-in-up delay-200 flex flex-col items-center gap-4">
          <Button 
            href="https://pay.hotmart.com/C103167515J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto min-w-[320px] shadow-[0_0_30px_rgba(218,165,32,0.3)] animate-pulse-slow"
          >
            QUERO ACESSAR O PROTOCOLO
          </Button>

          {/* Preço Exibido - Estratégia "À Vista" */}
          <div className="mt-2 text-center">
            <p className="text-gray-500 text-xs line-through mb-0.5">De R$ 149,90</p>
            <p className="text-2xl font-bold text-white flex items-center gap-2">
              Por R$ 39,90 <span className="text-[10px] font-normal text-[#DAA520] border border-[#DAA520]/30 px-2 py-0.5 rounded uppercase">À Vista</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-2">
            <span className="flex items-center gap-1">🔒 Compra Segura</span>
            <span className="flex items-center gap-1">⚡ Acesso Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};