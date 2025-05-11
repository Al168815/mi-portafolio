
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WebPortfolio from "@/components/WebPortfolio";
import GamePortfolio from "@/components/GamePortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Target all elements with reveal-item class
    document.querySelectorAll('.reveal-item').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gothic-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WebPortfolio />
        <GamePortfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
