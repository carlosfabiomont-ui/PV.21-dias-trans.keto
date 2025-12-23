import React from 'react';
import { Button } from './ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-5 text-center relative overflow-hidden bg-black">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#DAA520]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Garantia */}
        <div className="mb-12 bg-[#111] border border-[#DAA520]/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-black font-black shadow-lg">
                7
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Sua Satisfação ou seu Dinheiro de Volta</h3>
            <p className="text-gray-400">
                Você tem 7 dias para testar todo o material. Se não gostar do que vir, ou achar que não é pra você, devolvemos cada centavo do seu investimento de R$ 37,00. O risco é todo meu.
            </p>
        </div>

        <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-[#DAA520]/30 rounded-3xl p-8 md:p-16 shadow-[0_0_60px_rgba(0,0,0,1)]">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            ÚLTIMA CHANCE
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Garanta seu acesso ao Protocolo Keto Carnívora + Todos os Bônus pelo menor preço já feito.
          </p>

          {/* Pricing Box Final */}
          <div className="bg-black/80 rounded-3xl p-8 mb-10 border border-gold/20 max-w-sm mx-auto shadow-inner">
            <div className="text-gray-500 line-through text-xl mb-2">De R$ 147,00</div>
            <div className="text-white text-7xl font-black tracking-tighter mb-4">
              R$ 37,00
            </div>
            <div className="text-gold font-bold uppercase tracking-widest text-xs py-2 px-4 bg-gold/10 rounded-full inline-block">
              PAGAMENTO ÚNICO
            </div>
          </div>

          <Button 
            href="https://pay.hotmart.com/C103167515J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-xl px-16 py-6 shadow-[0_0_40px_rgba(218,165,32,0.5)]"
          >
            GARANTIR MINHA VAGA AGORA
          </Button>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 opacity-60">
             <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6 grayscale hover:grayscale-0 transition-all" />
             <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6 grayscale hover:grayscale-0 transition-all" />
             <img src="https://img.icons8.com/color/48/000000/pix.png" alt="Pix" className="h-6 grayscale hover:grayscale-0 transition-all" />
          </div>
          
          <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-[0.3em]">
            Ambiente de pagamento 100% seguro e criptografado
          </p>
        </div>
      </div>
    </section>
  );
};