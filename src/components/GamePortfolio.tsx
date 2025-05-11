
import { ArrowRight, Play } from 'lucide-react';

const GamePortfolio = () => {
  const games = [
    {
      id: 1,
      title: "Shadows of Eternity",
      description: "Un RPG gótico ambientado en un mundo victoriano donde los jugadores desbloquean habilidades sobrenaturales para combatir criaturas de la oscuridad.",
      image: "/placeholder.svg",
      technologies: ["Unity", "C#", "Blender", "Adobe Photoshop"],
      demoLink: "https://aurora-avisal.itch.io/descoo-2d",
      detailsLink: "#"
    },
    {
      id: 2,
      title: "Neon Dystopia",
      description: "Juego de aventura cyberpunk en primera persona con elementos de sigilo y hackeo, desarrollado en Unreal Engine con un sistema de diálogos dinámicos.",
      image: "/placeholder.svg",
      technologies: ["Unreal Engine", "Blueprint", "Maya", "Substance Painter"],
      demoLink: "https://aurora-avisal.itch.io/lost-in-dreams",
      detailsLink: "#"
    }
  ];

  return (
    <section id="games" className="py-20 bg-gothic">
      <div className="container-section">
        <h2 className="section-title">Portafolio Videojuegos</h2>
        
        <div className="mt-12 space-y-16">
          {games.map((game) => (
            <div key={game.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg border-2 border-burgundy/30 shadow-lg shadow-black/20">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-serif-gothic font-bold text-white mb-4">
                  {game.title}
                </h3>
                
                <p className="text-lg text-white/80 mb-6">
                  {game.description}
                </p>
                
                <h4 className="text-lg font-medium text-burgundy mb-3">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.technologies.map((tech, index) => (
                    <span key={index} className="bg-gothic-dark px-3 py-1.5 rounded text-sm text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={game.demoLink} 
                    className="btn-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Play size={16} />
                    <span>Jugar Demo</span>
                  </a>
                  
                  <a 
                    href={game.detailsLink} 
                    className="btn-outline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Ver Detalles</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePortfolio;
