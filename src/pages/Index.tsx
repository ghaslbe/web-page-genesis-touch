
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Partners from '../components/Partners';
import Features from '../components/Features';
import About from '../components/About';
import Experience from '../components/Experience';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import GoldenButton from '../components/GoldenButton';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-darkBg overflow-x-hidden">
      <Header />
      <Partners />
      <Features />
      <About />
      <Experience />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
