import React from 'react';

const benefits = [
  {
    icon: "🔥",
    title: "Queima de Gordura Acelerada",
    description: "Entre em cetose profunda e transforme seu corpo em uma máquina de queimar gordura 24 horas por dia."
  },
  {
    icon: "💪",
    title: "Energia Ilimitada",
    description: "Diga adeus à fadiga e oscilações de energia. Sinta-se energizado o dia todo sem necessidade de estimulantes."
  },
  {
    icon: "🧠",
    title: "Clareza Mental Extrema",
    description: "Cérebro alimentado por cetonas = foco laser, memória aguçada e produtividade nas alturas."
  },
  {
    icon: "🍖",
    title: "Zero Fome, Zero Restrição",
    description: "Coma proteínas de qualidade até a saciedade. Sem contar calorias, sem passar fome."
  },
  {
    icon: "⚡",
    title: "Resultados Rápidos",
    description: "Veja mudanças visíveis já na primeira semana. Perda de peso, redução de medidas e mais definição."
  },
  {
    icon: "🛡️",
    title: "Saúde Otimizada",
    description: "Reduza inflamação, melhore marcadores metabólicos e fortaleça seu sistema imunológico."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-gradient-to-b from-transparent via-[#DAA520]/[0.02] to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
          Por Que a Keto Carnívora Funciona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/[0.02] backdrop-blur-md border border-[#DAA520]/20 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#DAA520]/50 hover:shadow-[0_20px_60px_rgba(218,165,32,0.15)] transition-all duration-300"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#DAA520] mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};