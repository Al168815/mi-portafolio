
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/94badfb9-1269-4127-ab41-73929898d597.png" 
                alt="Laura Digital Creation's Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-serif-gothic font-bold text-xl md:text-2xl text-white">Laura Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className="nav-link">Inicio</Link>
            <a href="/#about" className="nav-link">Sobre Mí</a>
            <a href="/#web" className="nav-link">Web</a>
            <a href="/#games" className="nav-link">Videojuegos</a>
            <Link to="/practicas" className="nav-link">Prácticas</Link>
            <a href="/#contact" className="nav-link">Contacto</a>
            <a href="#cv" className="btn-primary ml-4">
              <span>Descargar CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-burgundy"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 items-center animate-fade-in">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Inicio</Link>
            <a href="/#about" className="nav-link" onClick={toggleMenu}>Sobre Mí</a>
            <a href="/#web" className="nav-link" onClick={toggleMenu}>Web</a>
            <a href="/#games" className="nav-link" onClick={toggleMenu}>Videojuegos</a>
            <Link to="/practicas" className="nav-link" onClick={toggleMenu}>Prácticas</Link>
            <a href="/#contact" className="nav-link" onClick={toggleMenu}>Contacto</a>
            <a href="#cv" className="btn-primary" onClick={toggleMenu}>
              <span>Descargar CV</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
