import React from 'react';

const includes = [
    {
        title: "Manual Keto Carnívora",
        desc: "O passo a passo blindado para ativar sua queima de gordura natural sem precisar de suplementos caros.",
        icon: "📘"
    },
    {
        title: "Cronograma 21 Dias",
        desc: "O que fazer desde o primeiro minuto do dia 1 até a vitória no dia 21. Sem adivinhações.",
        icon: "📅"
    },
    {
        title: "Guia de Refeições Rápidas",
        desc: "Cardápios pensados na rotina brasileira: fáceis de encontrar e rápidos de preparar.",
        icon: "🍽️"
    },
    {
        title: "Acesso Vitalício",
        desc: "O material é seu para sempre. Pode baixar no celular, tablet ou computador e consultar quando quiser.",
        icon: "📱"
    }
];

export const WhatYouGet: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Tudo o que você leva por apenas <span className="text-gold">R$ 37</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Você terá em mãos o método exato que já transformou milhares de corpos, entregue de forma digital e imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {includes.map((item, index) => (
            <div key={index} className="flex items-start gap-6 p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-gold/40 transition-all group">
              <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};