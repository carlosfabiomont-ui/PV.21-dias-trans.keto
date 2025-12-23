import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Urgency: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { hours: 0, minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-24 px-5 text-center bg-gradient-to-b from-black to-[#111] border-y border-gold/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 animate-bounce">
          Promoção por tempo limitado
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
          Não deixe sua saúde para amanhã
        </h2>
        
        <p className="text-lg text-gray-400 mb-10 max-w-xl">
          O valor de <span className="text-white font-bold">R$ 37,00</span> é exclusivo para as próximas vagas. Depois disso, o preço retornará para R$ 147,00.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          {[
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Seg', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="bg-gold/5 border border-gold/20 rounded-2xl p-6 min-w-[100px] backdrop-blur-sm">
              <span className="block text-5xl font-black text-gold">
                {pad(item.value)}
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <Button 
          href="https://pay.hotmart.com/C103167515J" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto px-16 text-xl"
        >
          GARANTIR MEU ACESSO POR R$ 37
        </Button>
        
        <p className="mt-6 text-gray-600 text-sm">
          Acesso imediato enviado para o seu e-mail após a confirmação.
        </p>
      </div>
    </section>
  );
};