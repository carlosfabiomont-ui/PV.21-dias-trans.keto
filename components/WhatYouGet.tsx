import React from 'react';

const includes = [
    {
        title: "Manual Keto Carnívora",
        desc: "O guia principal com toda a teoria e prática simplificada. O que comer, o que evitar e como montar seus pratos.",
        icon: "📘"
    },
    {
        title: "Cronograma de 21 Dias",
        desc: "Um calendário dia após dia para você saber exatamente em que fase está e o que esperar do seu corpo.",
        icon: "📅"
    },
    {
        title: "Cardápios Sugestivos",
        desc: "Exemplos práticos de refeições simples, baratas e deliciosas para café, almoço e jantar.",
        icon: "🍽️"
    },
    {
        title: "Lista de Alimentos Proibidos",
        desc: "A lista negra dos alimentos que travam seu emagrecimento (alguns você come achando que são saudáveis).",
        icon: "🚫"
    }
];

export const WhatYouGet: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-[#050505]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
            O Que Você Vai Receber Imediatamente?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Assim que seu pagamento for confirmado, você recebe um e-mail com acesso à nossa área de membros exclusiva contendo:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {includes.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#DAA520]/30 transition-colors">
              <div className="bg-[#DAA520]/10 w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
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