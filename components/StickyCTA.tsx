import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/95 backdrop-blur-lg border-t border-[#DAA520]/30 z-[999] md:hidden animate-fade-in-up">
      <Button 
        href="https://pay.hotmart.com/C103167515J" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full text-base py-3"
      >
        COMEÇAR AGORA
      </Button>
    </div>
  );
};