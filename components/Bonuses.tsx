import React from 'react';

const bonuses = [
  {
    title: "BÔNUS 1: Guia de Carnes Econômicas",
    desc: "Como fazer a dieta gastando pouco no supermercado.",
    value: "R$ 47,00",
    image: "🥩"
  },
  {
    title: "BÔNUS 2: Lista de Compras Express",
    desc: "O checklist exato do que comprar para não errar.",
    value: "R$ 29,90",
    image: "📝"
  },
  {
    title: "BÔNUS 3: Jejum Intermitente Turbo",
    desc: "O segredo para acelerar seus resultados em 2x.",
    value: "R$ 57,00",
    image: "⚡"
  }
];

export const Bonuses: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-black border-t border-[#DAA520]/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-[#DAA520] font-bold tracking-widest text-sm uppercase">Oferta Especial</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            Leve Estes 3 Presentes <span className="text-[#DAA520] underline decoration-2 underline-offset-4">De Graça</span>
          </h2>
          <p className="text-gray-400 mt-4">Apenas para quem garantir a vaga hoje.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-[#111] border border-gray-800 p-6 rounded-2xl relative overflow-hidden group hover:border-[#DAA520]/50 transition-colors">
              <div className="absolute top-0 right-0 bg-[#DAA520] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                GRÁTIS
              </div>
              <div className="text-4xl mb-4">{bonus.image}</div>
              <h3 className="text-lg font-bold text-white mb-2">{bonus.title}</h3>
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{bonus.desc}</p>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 uppercase">Valor vendido separadamente:</p>
                <p className="text-red-500 line-through font-semibold">{bonus.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};