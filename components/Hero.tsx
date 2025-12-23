import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden flex flex-col items-center justify-center text-center bg-black">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Badge de Oferta */}
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-1.5 backdrop-blur-sm">
          <span className="text-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">Acesso Vitalício Liberado</span>
        </div>

        {/* Headline de Impacto Total */}
        <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6 max-w-5xl">
          RESETE SEU METABOLISMO E <span className="text-gold-gradient italic">SEQUE A BARRIGA</span> EM APENAS 21 DIAS
        </h1>

        <p className="animate-fade-in-up delay-100 text-gray-300 text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
          O protocolo passo a passo de <span className="text-white font-bold">Keto Carnívora</span> para quem quer emagrecer rápido, sem passar fome e sem gastar horas na academia.
        </p>

        {/* Mockup 3D do Produto (Visual do Kit) - Isso substitui o vídeo */}
        <div className="animate-fade-in-up delay-200 w-full flex justify-center mb-12 scale-90 md:scale-100">
           <div className="mockup-scene animate-float">
              {/* O Checklist (Card Atrás) */}
              <div className="mockup-card">
                 <div className="border-b-2 border-gray-200 pb-2 mb-2">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Checklist Diário</div>
                 </div>
                 <div className="space-y-2">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                        </div>
                    ))}
                 </div>
              </div>

              {/* A Caixa Principal */}
              <div className="mockup-box">
                  <div className="box-face box-front">
                      <div className="border border-gold/30 rounded-full p-2 mb-4">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <h2 className="text-2xl font-black text-white leading-none">KETO</h2>
                      <h2 className="text-2xl font-black text-gold leading-none mb-4">CARNÍVORA</h2>
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest text-center">Protocolo Oficial<br/>21 Dias</p>
                  </div>
                  <div className="box-face box-side">
                      <span className="box-spine-text">DESAFIO 21 DIAS</span>
                  </div>
              </div>

              {/* O Celular */}
              <div className="mockup-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen flex flex-col">
                      <div className="mt-6 flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black font-bold text-xs">KC</div>
                          <div className="flex flex-col">
                              <div className="h-1.5 bg-white/20 w-16 rounded mb-1"></div>
                              <div className="h-1.5 bg-white/10 w-10 rounded"></div>
                          </div>
                      </div>
                      <div className="space-y-3 mt-2">
                          <div className="bg-white/10 p-2 rounded-lg border border-white/5">
                              <div className="h-1 bg-white/10 rounded w-full"></div>
                          </div>
                          <div className="bg-gold/20 p-2 rounded-lg border border-gold/30 mt-auto">
                              <div className="text-[8px] text-center text-gold font-bold uppercase">Acesso Liberado</div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>

        {/* CTA e Preço no Hero */}
        <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-4 w-full">
          <div className="mb-2">
            <span className="text-gray-500 line-through text-lg">De R$ 147,00</span>
            <span className="text-white text-3xl font-black ml-3">Por apenas R$ 37,00</span>
          </div>
          <Button 
            href="https://pay.hotmart.com/C103167515J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto min-w-[320px] md:min-w-[450px] text-xl py-6 shadow-[0_0_50px_rgba(218,165,32,0.4)]"
          >
            QUERO O PROTOCOLO COMPLETO
          </Button>
          <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
            <span>🛡️ Compra 100% Segura</span>
            <span>•</span>
            <span>⚡ Acesso Imediato no E-mail</span>
          </p>
        </div>

      </div>
    </section>
  );
};