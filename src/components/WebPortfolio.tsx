
import { ArrowRight, Link } from 'lucide-react';

const WebPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Boutique Gótica",
      description: "Tienda online responsive con sistema de carrito, pagos y panel de administración. Desarrollada con React, Node.js y MongoDB.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Portal de Noticias Culturales",
      description: "Plataforma de noticias con sistema de usuarios, comentarios y dashboard para editores. Implementada con Vue.js y Firebase.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      link: "#",
    },
    {
      id: 3,
      title: "App de Gestión de Eventos",
      description: "Aplicación para gestionar eventos culturales con mapas interactivos, sistema de tickets y estadísticas.",
      image: "/placeholder.svg",
      technologies: ["React Native", "GraphQL", "AWS", "Maps API"],
      link: "#",
    }
  ];

  return (
    <section id="web" className="py-20 bg-gothic-dark">
      <div className="container-section">
        <h2 className="section-title">Portafolio Web</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="card-portfolio group">
              <div className="overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif-gothic font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gothic-light/50 px-2 py-1 rounded text-xs text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Ver proyecto</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPortfolio;
