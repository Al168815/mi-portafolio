
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gothic-dark border-t border-burgundy/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/94badfb9-1269-4127-ab41-73929898d597.png" 
                alt="Laura Digital Creation's Logo" 
                className="h-8 w-auto" 
              />
              <span className="font-serif-gothic font-bold text-xl text-white">Laura Digital</span>
            </a>
            <p className="text-white/60 mt-2 max-w-md">
              De la idea al código: diseño y tecnología en perfecta sinfonía.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-3 rounded-full border border-burgundy/50 text-burgundy hover:bg-burgundy hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </button>
            
            <p className="text-white/50 text-sm">
              &copy; {currentYear} Laura Digital Creation's. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
