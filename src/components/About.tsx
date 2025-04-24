
import React from 'react';
import GoldenButton from './GoldenButton';

const About = () => {
  const stats = [
    { value: "1200+", label: "Betreute Onlineshops" },
    { value: "40+", label: "Experten im Team" },
    { value: "150+ Mio", label: "Generierter Umsatz" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-black/50">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center">
          Wer ist <span className="text-gold">Lang Consulting?</span>
        </h2>
        
        <div className="mb-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-6xl">
            {/* Team photo */}
            <div className="md:col-span-6">
              <div className="bg-gray-800 h-60 rounded-lg flex items-center justify-center mb-8">
                <p className="text-gray-400 text-sm">Team Photo</p>
              </div>
            </div>
            
            {/* Tim Lang profile */}
            <div className="md:col-span-2">
              <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400 text-sm">Tim Lang Photo</p>
              </div>
              <h3 className="text-xl font-bold mb-1">Tim Lang</h3>
              <p className="text-gold text-sm mb-3">CEO • BERATER • STRATEGE • ENTWICKLER</p>
              <p className="text-gray-300 text-sm">
                "Unser Ziel ist es nicht nur, deinen Onlineshop profitabel zu machen, sondern ihn in seiner Nische zum Marktführer zu entwickeln. Mit unserer strategischen Beratung und Marketing-Expertise bringen wir dein Business auf das nächste Level."
              </p>
            </div>
            
            {/* Team grid */}
            <div className="md:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
                    <p className="text-gray-400 text-xs">Team Member</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-gold text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#training">
            <GoldenButton>
              JETZT KOSTENFREIES TRAINING ANSCHAUEN
            </GoldenButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
