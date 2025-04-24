
import React from 'react';
import GoldenButton from './GoldenButton';

const CTA = () => {
  return (
    <section id="training" className="py-16 md:py-24 bg-black relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Sieh dir jetzt das <span className="text-gold">kostenlose</span><br />
              Onlinetraining an.
            </h2>
            <p className="text-gray-300">
              Profitiere von unserer jahrelangen Erfahrung und lerne, wie du mit deinem Onlineshop erfolgreicher wirst. 
              Du erhältst Strategien und Einblicke, die dir direkt dabei helfen, deinen Umsatz zu steigern.
            </p>
            
            <GoldenButton>
              JETZT KOSTENFREIES TRAINING ANSCHAUEN
            </GoldenButton>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 rounded-lg h-72 flex items-center justify-center">
              <p className="text-gray-400">Video Thumbnail / Training Vorschau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
