import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, target, rel, className = '', children, ...props }) => {
  // Classes usando o tema 'gold' definido no CDN
  const baseClasses = `
    relative inline-flex items-center justify-center px-8 py-4 
    bg-gradient-to-br from-gold via-gold-light to-gold-dark
    text-black font-extrabold text-lg md:text-xl uppercase tracking-wide rounded-full 
    transition-all duration-300 ease-out 
    shadow-[0_0_20px_rgba(218,165,32,0.4)] 
    hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(218,165,32,0.7)] hover:scale-105
    overflow-hidden group text-center cursor-pointer border border-white/20
    ${className}
  `;

  // Efeito de brilho ao passar o mouse
  const shineEffect = (
    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[100%]" />
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} target={target} rel={rel}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {shineEffect}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {shineEffect}
    </button>
  );
};