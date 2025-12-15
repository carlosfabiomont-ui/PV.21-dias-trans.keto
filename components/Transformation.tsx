import React from 'react';

const timelineEvents = [
  {
    days: "Dias 1-7",
    title: "Adaptação",
    description: "Seu corpo começa a entrar em cetose. Você sentirá redução de inchaço e aumento de energia nos primeiros dias."
  },
  {
    days: "Dias 8-14",
    title: "Aceleração",
    description: "Cetose profunda! Aqui a mágica acontece: queima de gordura acelerada, clareza mental e energia estável."
  },
  {
    days: "Dias 15-21",
    title: "Transformação",
    description: "Resultados visíveis! Roupas mais folgadas, corpo mais definido e uma nova versão de você no espelho."
  }
];

export const Transformation: React.FC = () => {
  return (
    <section className="py-24 px-5 text-center">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-white">
          Sua Jornada de 21 Dias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mt-12">
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-[#DAA520]/5 border-2 border-[#DAA520]/20 rounded-2xl p-8 relative mt-8 md:mt-0"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#DAA520] text-black px-6 py-1 rounded-full font-extrabold text-sm shadow-lg">
                {event.days}
              </div>
              <h4 className="text-2xl font-bold text-white mt-4 mb-3">{event.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};