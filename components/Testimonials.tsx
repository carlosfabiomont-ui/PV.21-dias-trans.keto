import React from 'react';

const socialProofs = [
  {
    name: "Juliana Mendes",
    time: "Há 2 horas",
    text: "Gente, eu achava que era mentira, mas em 7 dias minhas calças já estão caindo! 😱 O cardápio é super simples, não passo fome nenhuma. Obrigada por tudo!",
    likes: 24,
    avatarColor: "bg-pink-600"
  },
  {
    name: "Roberto Campos",
    time: "Há 5 horas",
    text: "Já perdi 4kg e nem terminei a segunda semana. A energia que a gente sente é surreal. Melhor investimento que fiz pra minha saúde esse ano.",
    likes: 56,
    avatarColor: "bg-blue-600"
  },
  {
    name: "Fernanda Souza",
    time: "Ontem",
    text: "O que eu mais amei foi a lista de compras. Economizei muito no mercado e ainda emagreci. Meu marido tá fazendo junto e também tá adorando!",
    likes: 12,
    avatarColor: "bg-purple-600"
  },
  {
    name: "Carla Diniz",
    time: "Ontem",
    text: "Eu tinha muita compulsão por doce, achava que não ia conseguir. Mas o protocolo tira a vontade de comer açúcar, é impressionante. -6kg na balança hoje!",
    likes: 89,
    avatarColor: "bg-green-600"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">
          O Que Estão Falando na Nossa Comunidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialProofs.map((proof, index) => (
            <div 
              key={index}
              className="bg-[#181818] border border-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-start gap-3">
                {/* Avatar Simulado */}
                <div className={`w-10 h-10 rounded-full ${proof.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {proof.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-white font-bold text-sm">{proof.name}</h4>
                        <p className="text-gray-500 text-xs">{proof.time}</p>
                    </div>
                    <span className="text-gold text-xs">Compra Verificada</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    "{proof.text}"
                  </p>

                  <div className="mt-3 flex items-center gap-4 border-t border-gray-700/50 pt-2">
                     <button className="text-gray-500 text-xs hover:text-gold flex items-center gap-1">
                        ❤️ Curtir ({proof.likes})
                     </button>
                     <button className="text-gray-500 text-xs hover:text-white">
                        Responder
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
             <p className="text-gray-500 text-sm italic">Resultados variam de pessoa para pessoa.</p>
        </div>
      </div>
    </section>
  );
};