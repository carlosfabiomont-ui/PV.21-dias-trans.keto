import React from 'react';

export const BeforeAfter: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black border-y border-[#DAA520]/20">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          Resultados <span className="text-gold">Reais e Comprovados</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Veja o que acontece quando você reseta seu metabolismo com o método Keto Carnívora em apenas 21 dias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#111] p-4 rounded-2xl border border-gray-800">
                <div className="flex gap-2 h-64 mb-4">
                    <div className="flex-1 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">ANTES</span>
                        <p className="text-gray-600 text-xs text-center px-2">Foto enviada pela aluna (simulação)</p>
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-gold/30">
                        <span className="absolute top-2 left-2 bg-gold text-black font-bold text-[10px] px-2 py-1 rounded">DEPOIS</span>
                        <p className="text-gray-600 text-xs text-center px-2">Foto enviada pela aluna (simulação)</p>
                    </div>
                </div>
                <div className="text-left">
                    <div className="text-gold font-bold text-xl">- 8.5 kg</div>
                    <p className="text-gray-400 text-sm">"Eu não conseguia fechar essa calça jeans há 3 anos."</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111] p-4 rounded-2xl border border-gray-800">
                <div className="flex gap-2 h-64 mb-4">
                    <div className="flex-1 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">ANTES</span>
                        <p className="text-gray-600 text-xs text-center px-2">Foto enviada pelo aluno (simulação)</p>
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-gold/30">
                        <span className="absolute top-2 left-2 bg-gold text-black font-bold text-[10px] px-2 py-1 rounded">DEPOIS</span>
                        <p className="text-gray-600 text-xs text-center px-2">Foto enviada pelo aluno (simulação)</p>
                    </div>
                </div>
                <div className="text-left">
                    <div className="text-gold font-bold text-xl">- 12 kg</div>
                    <p className="text-gray-400 text-sm">"Recuperei minha disposição e perdi a barriga de cerveja."</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111] p-4 rounded-2xl border border-gray-800">
                <div className="flex gap-2 h-64 mb-4">
                    <div className="flex-1 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">ANTES</span>
                        <p className="text-gray-600 text-xs text-center px-2">Foto enviada pela aluna (simulação)</p>
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-gold/30">
                        <span className="absolute top-2 left-2 bg-gold text-black font-bold text-[10px] px-2 py-1 rounded">DEPOIS</span>
                        <p className="text-gray-600 text-xs text-center px-2">Foto enviada pela aluna (simulação)</p>
                    </div>
                </div>
                <div className="text-left">
                    <div className="text-gold font-bold text-xl">- 6 kg</div>
                    <p className="text-gray-400 text-sm">"A desinflamação foi total. Meu rosto afinou muito!"</p>
                </div>
            </div>
        </div>
        
        <p className="mt-8 text-gray-500 text-xs border border-gray-800 inline-block px-4 py-2 rounded-full">
            ⚠️ As imagens acima são ilustrações dos espaços onde você deve visualizar sua transformação.
        </p>
      </div>
    </section>
  );
};