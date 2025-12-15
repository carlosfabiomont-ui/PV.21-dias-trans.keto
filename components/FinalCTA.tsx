import React from 'react';
import { Button } from './ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-5 text-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#DAA520]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Caixa de Garantia - Destaque Principal */}
        <div className="mb-12 bg-white/[0.02] border border-[#DAA520]/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-black font-black">
                7
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Risco Zero: Garantia Blindada de 7 Dias</h3>
            <p className="text-gray-400 text-sm md:text-base">
                Compre, baixe e aplique. Se você achar que não é para você, basta enviar um único e-mail e devolvemos 100% do seu dinheiro. Sem letras miúdas.
            </p>
        </div>

        <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#DAA520]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-gray-400 mb-8">
            Protocolo Completo + 3 Bônus + Cardápios + Garantia
          </p>

          {/* Pricing Box - Ajustado para Pagamento Único */}
          <div className="bg-black/50 rounded-2xl p-6 mb-8 border border-white/10 max-w-md mx-auto relative overflow-hidden">
            {/* Faixa de Destaque */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#DAA520] text-black text-[10px] font-bold px-4 py-1 rounded-b-lg uppercase tracking-widest w-max">
              Valor Promocional
            </div>

            <div className="flex flex-col gap-1 mb-2 mt-4">
              <span className="text-gray-500 text-lg line-through">De R$ 149,90</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white text-6xl font-black tracking-tighter">R$ 39,90</span>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-[#DAA520] font-bold uppercase tracking-wide text-sm bg-[#DAA520]/10 px-3 py-1 rounded-full border border-[#DAA520]/20">
                Pagamento Único
              </p>
              <p className="text-gray-500 text-xs mt-1">Acesso Vitalício ao Material</p>
            </div>
          </div>

          <Button 
            href="https://pay.hotmart.com/C103167515J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto text-xl px-16 py-5 shadow-[0_0_30px_rgba(218,165,32,0.4)] animate-pulse-slow"
          >
            SIM! QUERO MUDAR MEU CORPO
          </Button>

          {/* Trust Elements */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 opacity-70">
             <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Pagamento Seguro
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2H6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Dados Criptografados
             </div>
          </div>
          
          <div className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest">
            Acesso enviado para o seu e-mail imediatamente
          </div>

        </div>
      </div>
    </section>
  );
};