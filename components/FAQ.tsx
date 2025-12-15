import React, { useState } from 'react';

const faqs = [
  {
    question: "É realmente possível perder peso em 21 dias?",
    answer: "Sim! A dieta Keto Carnívora coloca seu corpo em cetose profunda, onde você queima gordura como fonte primária de energia. Nossos alunos perdem em média 6-10kg nos primeiros 21 dias, com resultados visíveis já na primeira semana."
  },
  {
    question: "Vou passar fome nessa dieta?",
    answer: "Não! Uma das maiores vantagens da Keto Carnívora é a saciedade. Proteínas e gorduras mantêm você satisfeito por muito mais tempo. Você comerá quando tiver fome, sem restrições calóricas severas."
  },
  {
    question: "Preciso malhar todos os dias?",
    answer: "Não é obrigatório! A transformação acontece principalmente pela alimentação. Exercícios são recomendados para potencializar resultados, mas não são essenciais para o sucesso do programa."
  },
  {
    question: "E se eu não gostar do programa?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não estiver satisfeito, devolvemos 100% do seu investimento, sem perguntas, sem burocracia."
  },
  {
    question: "O programa funciona para qualquer idade?",
    answer: "Sim! Temos alunos de 18 a 70+ anos com resultados incríveis. O protocolo é adaptável e seguro para adultos de todas as idades. Consulte seu médico se tiver condições específicas."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-5">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white/[0.02] border border-[#DAA520]/20 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-[#DAA520]/[0.05]' : ''}`}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center cursor-pointer hover:bg-[#DAA520]/5 transition-colors focus:outline-none"
                onClick={() => toggle(index)}
              >
                <h4 className="text-lg md:text-xl font-bold text-white pr-4">{faq.question}</h4>
                <span className={`text-[#DAA520] text-2xl font-light transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};