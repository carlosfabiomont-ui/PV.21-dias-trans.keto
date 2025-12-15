import React from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      
      {/* Barra de Aviso Integrada (Fixa junto com o header) */}
      <div className="w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900 text-white text-center py-2 px-4 font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-md z-[51]">
        ⚠️ Vagas para o lote promocional encerram hoje ⚠️
      </div>

      <div className="w-full px-4 md:px-6 mt-3">
        <div className="bg-black/80 backdrop-blur-xl border border-[#DAA520]/20 rounded-full px-4 md:px-6 py-3 flex items-center justify-between max-w-6xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <h1 className="text-white text-lg md:text-xl font-extrabold tracking-tight uppercase hidden md:block">
              Keto <span className="text-[#DAA520]">Carnívora</span>
            </h1>
          </div>

          <a 
            href="https://pay.hotmart.com/C103167515J" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DAA520] hover:bg-[#B8860B] text-black font-bold text-xs md:text-sm px-4 md:px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(218,165,32,0.4)]"
          >
            GARANTIR VAGA
          </a>
        </div>
      </div>
    </header>
  );
};