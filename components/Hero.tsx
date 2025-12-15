import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Fundo com gradiente radial sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      
      {/* Glow Dourado no Topo */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Coluna da Esquerda: Copy (Texto de Venda) */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
            {/* Etiqueta de Escassez */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm mx-auto md:mx-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">Atenção: Oferta Liberada Hoje</span>
            </div>

            <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6 drop-shadow-2xl">
              RESETE SEU METABOLISMO E <span className="text-gold-gradient">DERRETA GORDURA</span> SEM PASSAR FOME
            </h1>

            <p className="animate-fade-in-up delay-100 text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-normal">
              O Guia Digital passo a passo para aplicar o protocolo <b className="text-white">Keto Carnívora</b>. Simples, barato e direto ao ponto. Baixe agora e comece amanhã.
            </p>

            <div className="animate-fade-in-up delay-200 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <Button 
                href="https://pay.hotmart.com/C103167515J" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto min-w-[300px] shadow-[0_0_30px_rgba(218,165,32,0.3)] animate-pulse-slow"
              >
                BAIXAR MEU PROTOCOLO AGORA
              </Button>
            </div>
             <div className="mt-4 flex flex-col md:flex-row items-center gap-2 text-sm text-gray-500 justify-center md:justify-start animate-fade-in-up delay-300">
                <p>⚡ Acesso imediato no e-mail</p>
                <span className="hidden md:block">•</span>
                <p>🛡️ Garantia de 7 dias</p>
              </div>
        </div>

        {/* Coluna da Direita: Mockup 3D Gerado por CSS (Sem Imagens Externas) */}
        <div className="flex-1 w-full flex justify-center items-center animate-fade-in-up delay-300 relative px-4 md:px-0 mt-8 md:mt-0">
           
           {/* Glow atrás do mockup */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#DAA520]/20 blur-[80px] rounded-full pointer-events-none" />
           
           <div className="mockup-scene animate-float">
              
              {/* 1. O Checklist (Card Atrás) */}
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

              {/* 2. A Caixa Principal (Livro/Guia) */}
              <div className="mockup-box">
                  {/* Frente da Caixa */}
                  <div className="box-face box-front">
                      <div className="border border-gold/30 rounded-full p-2 mb-4">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <h2 className="text-2xl font-black text-white leading-none">KETO</h2>
                      <h2 className="text-2xl font-black text-gold leading-none mb-4">CARNÍVORA</h2>
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest text-center">Protocolo Oficial<br/>21 Dias</p>
                  </div>
                  {/* Lombada da Caixa */}
                  <div className="box-face box-side">
                      <span className="box-spine-text">DESAFIO 21 DIAS</span>
                  </div>
              </div>

              {/* 3. O Celular (App) */}
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
                      {/* Apps Fictícios */}
                      <div className="space-y-3 mt-2">
                          <div className="bg-white/10 p-2 rounded-lg border border-white/5">
                              <div className="flex justify-between items-center mb-1">
                                  <div className="text-[8px] text-gold font-bold">CARDÁPIO</div>
                              </div>
                              <div className="h-1 bg-white/10 rounded w-full"></div>
                          </div>
                          <div className="bg-white/10 p-2 rounded-lg border border-white/5">
                              <div className="flex justify-between items-center mb-1">
                                  <div className="text-[8px] text-gold font-bold">JEJUM</div>
                              </div>
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

      </div>
    </section>
  );
};