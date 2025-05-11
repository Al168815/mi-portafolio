
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background overlay with subtle pattern */}
        <div className="absolute inset-0 bg-gothic-dark opacity-95"></div>
        
        {/* Gothic decorative elements - subtle vine patterns */}
        <div className="absolute bottom-0 left-0 w-32 h-64 opacity-15">
          <svg viewBox="0 0 100 200" className="w-full h-full text-burgundy/30">
            <path d="M10,0 Q30,25 10,50 Q30,75 10,100 Q30,125 10,150 Q30,175 10,200" 
                  stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M15,0 Q35,25 15,50 Q35,75 15,100 Q35,125 15,150 Q35,175 15,200" 
                  stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-64 opacity-15 rotate-180">
          <svg viewBox="0 0 100 200" className="w-full h-full text-burgundy/30">
            <path d="M10,0 Q30,25 10,50 Q30,75 10,100 Q30,125 10,150 Q30,175 10,200" 
                  stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M15,0 Q35,25 15,50 Q35,75 15,100 Q35,125 15,150 Q35,175 15,200" 
                  stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-slide-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-gothic font-bold mb-4 text-white">
                <span className="block">Laura</span>
                <span className="text-burgundy block">Digital Creation's</span>
              </h1>
              
              <div className="my-6 gothic-divider">
                <span className="text-white/60 font-serif-gothic italic">Portfolio</span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-light text-white/90 mb-8">
                <span className="block mb-2">Diseñadora Digital | Full Stack Developer</span>
                <span className="block">Video Game Developer</span>
              </h2>
              
              <p className="text-lg md:text-xl italic text-white/70 max-w-xl mx-auto lg:mx-0 font-serif-gothic mt-4">
                "De la idea al código: diseño y tecnología en perfecta sinfonía."
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="btn-primary">
                  <span>Contacto</span>
                </a>
                <a href="#about" className="btn-outline">
                  <span>Conocer Más</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Profile image with decorative frame */}
              <div className="border-2 border-burgundy/50 rounded-full p-3 rotate-3">
                <div className="overflow-hidden rounded-full h-80 w-80 border-4 border-gothic-light">
                  <img 
                    src="/lovable-uploads/162fe582-5012-4990-8854-be48efe77180.png" 
                    alt="Laura - Diseñadora Digital" 
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 border-l-2 border-b-2 border-burgundy/70 rounded-bl-3xl"></div>
              <div className="absolute -top-4 -right-4 h-24 w-24 border-t-2 border-r-2 border-burgundy/70 rounded-tr-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-burgundy flex flex-col items-center">
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
