
import React from 'react';
import { Check } from 'lucide-react';
import GoldenButton from './GoldenButton';

const Header = () => {
  return (
    <header className="relative pt-16 pb-32 overflow-hidden">
      <div className="gold-progress-bar absolute top-0 left-0 w-full"></div>
      
      <div className="section-container text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto mb-6">
          <span className="text-gold">Erfahre die wichtigsten strategischen Grundlagen</span> um mit deinem Onlineshop
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          <span className="text-gold">500.000 €</span>
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Monatsumsatz
        </p>
        <p className="text-sm md:text-base text-gray-300 mb-12">
          und mehr zu <span className="text-gold">generieren.</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center mb-16">
          <div className="relative bg-black/50 p-6 rounded-lg border border-gray-800 w-full max-w-md">
            <img 
              src="/lovable-uploads/61abbc11-93e7-4aca-8bd6-d02e5a0f07fd.png" 
              alt="Online Training Screenshot" 
              className="max-w-full rounded mb-4"
            />
            <p className="text-gold font-bold mb-2">500.000 € Monatsumsatz+</p>
            <p className="text-sm text-gray-300">Erfahre wie...</p>
          </div>

          <div className="space-y-6 text-left max-w-md">
            <div className="flex items-start gap-3">
              <Check className="text-gold mt-1 flex-shrink-0" />
              <p className="text-sm">Lerne die wichtigsten strategischen Grundlagen, um deine Produkte in deinem Onlineshop erfolgreicher zu verkaufen.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-gold mt-1 flex-shrink-0" />
              <p className="text-sm">Sichere dir jetzt kostenlos die strategischen Grundlagen, die keine andere Agentur oder Onlineshop mit dir teilen würde.</p>
            </div>
          </div>
        </div>
        
        <a href="#training">
          <GoldenButton>
            JETZT KOSTENFREIES TRAINING ANSCHAUEN
          </GoldenButton>
        </a>
      </div>
    </header>
  );
};

export default Header;
