import React from 'react';

const testimonials = [
  {
    initials: "MR",
    name: "Maria Rodrigues",
    result: "-9kg em 21 dias",
    text: "Tentei todas as dietas possíveis e nada funcionava. Com a Keto Carnívora, perdi 9kg em 21 dias sem passar fome. Minha energia está nas alturas e nunca me senti tão bem!"
  },
  {
    initials: "JS",
    name: "João Silva",
    result: "-12kg em 21 dias",
    text: "Como homem de negócios, preciso de energia e foco. A Keto Carnívora me deu isso e ainda perdi 12kg! Minha produtividade dobrou e minha saúde melhorou drasticamente."
  },
  {
    initials: "AC",
    name: "Ana Costa",
    result: "-7kg em 21 dias",
    text: "Depois da gravidez lutei muito com o peso. Em apenas 21 dias perdi 7kg, recuperei minha autoestima e aprendi um estilo de vida sustentável. Transformação completa!"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-gradient-to-b from-transparent via-[#DAA520]/[0.05] to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
          Resultados Reais de Pessoas Reais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="bg-white/[0.03] border border-[#DAA520]/20 rounded-3xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center text-black font-black text-lg">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <p className="text-[#DAA520] font-semibold text-sm">{t.result}</p>
                </div>
              </div>
              
              <div className="text-[#DAA520] mb-4 text-lg">★★★★★</div>
              
              <p className="text-gray-300 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};