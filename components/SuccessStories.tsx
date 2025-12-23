import React from 'react';

const cases = [
  {
    result: "- 9kg",
    name: "Ana Paula S.",
    story: "Eu já tinha tentado de tudo, mas o que me surpreendeu na Keto Carnívora foi a falta de fome. Perdi 9kg em 21 dias e minha disposição para trabalhar dobrou. É libertador não ser escrava da comida.",
    tag: "Resultado em 21 dias"
  },
  {
    result: "- 12kg",
    name: "Marcos Vinícius",
    story: "Minha meta era perder a barriga. Em 3 semanas, minhas camisas que não serviam voltaram a fechar. O melhor é que não precisei me matar na academia, apenas segui o cardápio.",
    tag: "Caso Real"
  },
  {
    result: "- 7kg",
    name: "Beatriz Oliveira",
    story: "O que mais me impactou foi a desinflamação. Meu rosto afinou e as dores que eu sentia nas articulações sumiram. O peso perdido foi consequência de um corpo saudável.",
    tag: "Foco em Saúde"
  }
];

export const SuccessStories: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black border-y border-gold/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Histórias que <span className="text-gold">Inspiram</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Veja o depoimento de quem decidiu dar um basta no efeito sanfona e retomou o controle do próprio corpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-gray-900 to-black border border-white/10 p-8 rounded-3xl relative hover:border-gold/40 transition-all group"
            >
              <div className="absolute -top-4 left-8 bg-gold text-black font-black px-4 py-1 rounded-full text-xs uppercase tracking-widest shadow-lg">
                {item.tag}
              </div>
              
              <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform origin-left">
                {item.result}
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{item.story}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gold/30 text-gold font-bold">
                  {item.name.charAt(0)}
                </div>
                <span className="text-white font-bold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                <span className="text-green-500 text-xl">⭐</span>
                <span className="text-gray-300 font-medium">Mais de 2.400 vidas transformadas este ano.</span>
            </div>
        </div>
      </div>
    </section>
  );
};