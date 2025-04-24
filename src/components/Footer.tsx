
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 py-16 border-t border-gold/20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and contact */}
          <div className="col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gold">LANG</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Online Marketing & Strategie<br />
              Deine Experten für erfolgreichen E-Commerce
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-gold">Home</a></li>
              <li><a href="#features" className="text-sm text-gray-400 hover:text-gold">Training</a></li>
              <li><a href="#about" className="text-sm text-gray-400 hover:text-gold">Über uns</a></li>
              <li><a href="#experience" className="text-sm text-gray-400 hover:text-gold">Erfolge</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-gold">Beratung</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-gold">Online Shops</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-gold">Marketing</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-gold">Skalierung</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">kontakt@lang-consulting.de</li>
              <li className="text-sm text-gray-400">+49 123 456789</li>
              <li className="text-sm text-gray-400">Berlin, Deutschland</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Lang Consulting. Alle Rechte vorbehalten. 
            <a href="#" className="ml-2 hover:text-gold">Impressum</a> | 
            <a href="#" className="ml-2 hover:text-gold">Datenschutz</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
