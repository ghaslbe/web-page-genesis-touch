
import React from 'react';

const Partners = () => {
  // Sample partner logos - in a real project, you'd use actual logo images
  const partnerLogos = [
    { name: 'Google', logo: 'google' },
    { name: 'Taleoo', logo: 'taleoo' },
    { name: 'Partner 3', logo: 'partner3' },
    { name: 'Partner 4', logo: 'partner4' },
  ];
  
  const clients = [
    { name: 'Client 1', logo: 'client1' },
    { name: 'Client 2', logo: 'client2' },
    { name: 'Client 3', logo: 'client3' },
    { name: 'Client 4', logo: 'client4' },
    { name: 'Client 5', logo: 'client5' },
  ];
  
  return (
    <div className="bg-black py-12">
      <div className="section-container">
        <div className="flex justify-center gap-8 mb-16">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="h-10 w-24 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Über 1200 Onlineshops</h2>
          <p className="text-gray-400">vertrauen uns</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-6">
          {clients.map((client, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="h-8 w-20 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
