
import React from 'react';
import GoldenButton from './GoldenButton';
import { ChevronRight, Target, Award, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Target className="h-10 w-10 text-gold" />,
      title: "Zielgruppen Definierung",
      description: "Wir zeigen dir die fortgeschrittene Methode, um deine Zielgruppe präzise zu definieren und anzusprechen.",
    },
    {
      icon: <Award className="h-10 w-10 text-gold" />,
      title: "Premium Produkt Erstellung",
      description: "Lerne wie du ein Premium Produkt erstellst, das deine Konkurrenz in den Schatten stellt.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-gold" />,
      title: "High-Ticket Marketing",
      description: "Wir zeigen dir die Strategien zur erfolgreichen Vermarktung von hochpreisigen Produkten und Dienstleistungen.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Was du in diesem Onlinetraining<br /> 
            <span className="text-gold">lernen wirst</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Mit Hilfe von hocheffizienten Marketingfunktionen gelingt es dir, deine Reichweite so stark zu erhöhen, 
            dass du dich garantiert aus der Masse abheben kannst. Direkte Beratung auf höchstem Niveau.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">{feature.title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#training">
            <GoldenButton className="flex items-center gap-2">
              JETZT KOSTENFREIES TRAINING ANSCHAUEN <ChevronRight />
            </GoldenButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
