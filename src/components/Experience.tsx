
import React from 'react';
import GoldenButton from './GoldenButton';
import { CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    "Über 40+ Experten in unserem Team",
    "Über 1200+ betreute Onlineshops",
    "Über 150+ Millionen € Umsatz generiert"
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Vertraue auf <span className="text-gold">jahrelange</span><br />
            Erfahrung.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Während sich andere bereits Experten nennen, die noch nie einen erfolgreichen Onlineshop aufgebaut haben, 
            konnten wir durch unsere jahrelange Erfahrung zahlreichen Kunden zum Erfolg verhelfen.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Weltkarte / Visualisierung</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-xl font-bold">
              Sichere dir jetzt <span className="text-gold">dieses kostenfreie Onlinetraining</span> und lerne:
            </h3>
            
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-gold flex-shrink-0" size={20} />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <a href="#training">
                <GoldenButton>
                  JETZT KOSTENFREIES TRAINING ANSCHAUEN
                </GoldenButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
