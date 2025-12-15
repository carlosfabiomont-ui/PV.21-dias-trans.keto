import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-5 text-center border-t border-[#DAA520]/10 bg-black">
      <div className="container mx-auto">
        <p className="text-gray-500 mb-4">© 2024 Keto Carnívora. Todos os direitos reservados.</p>
        <p className="text-gray-700 text-xs max-w-2xl mx-auto leading-relaxed">
          Este produto não substitui orientação médica profissional. Consulte seu médico antes de iniciar qualquer programa alimentar ou de exercícios. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};