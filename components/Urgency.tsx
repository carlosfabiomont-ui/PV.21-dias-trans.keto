import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Urgency: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset for demo purposes if it hits zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-20 px-5 text-center bg-gradient-to-br from-[#DAA520]/10 to-transparent border-y border-[#DAA520]/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          ⏰ Oferta Por Tempo Limitado
        </h2>
        <p className="text-xl text-gray-400 mb-8">Esta oferta expira em:</p>
        
        <div className="flex justify-center flex-wrap gap-4 md:gap-8 my-10">
          {[
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="bg-[#DAA520]/10 border-2 border-[#DAA520]/30 rounded-2xl p-6 min-w-[110px] md:min-w-[140px] backdrop-blur-sm">
              <span className="block text-4xl md:text-5xl font-black text-[#DAA520]">
                {pad(item.value)}
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl text-[#DAA520] font-bold animate-pulse mb-8">
          ⚡ Apenas 47 vagas restantes neste lote
        </p>

        <Button 
          href="https://pay.hotmart.com/C103167515J" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto px-10"
        >
          GARANTIR MINHA VAGA AGORA
        </Button>
      </div>
    </section>
  );
};