
const About = () => {
  // Skills list with proficiency percentages
  const skills = [
    { name: "UX/UI Design", percent: 90 },
    { name: "React", percent: 85 },
    { name: "Node.js", percent: 80 },
    { name: "API Development", percent: 75 },
    { name: "Unity", percent: 70 },
    { name: "Unreal Engine", percent: 65 },
    { name: "Vue.js", percent: 60 },
    { name: "TypeScript", percent: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-gothic">
      <div className="container-section">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-lg text-white/80 mb-6">
              Soy una diseñadora digital y desarrolladora full stack con pasión por crear experiencias digitales 
              atractivas y funcionales. Mi enfoque abarca desde el diseño UX/UI hasta el desarrollo web y de videojuegos,
              combinando estética con funcionalidad en cada proyecto.
            </p>
            
            <p className="text-lg text-white/80 mb-6">
              Con experiencia en la creación de sitios web con React y Node.js, así como videojuegos en Unity y Unreal Engine,
              busco constantemente desafíos que me permitan implementar soluciones creativas para problemas complejos.
            </p>
            
            <p className="text-lg text-white/80 mb-6">
              Mi estilo visual característico incorpora elegancia gótica con minimalismo moderno, creando interfaces 
              que son tanto visualmente impactantes como altamente funcionales y fáciles de usar.
            </p>
            
            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                <span>Trabajemos Juntos</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif-gothic font-bold mb-6">Habilidades Técnicas</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-burgundy font-medium">{skill.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gothic-light rounded-full overflow-hidden">
                    <div 
                      className="progress-bar"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-serif-gothic font-bold mt-10 mb-4">Áreas de Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {["Web Design", "UX/UI", "Full Stack Development", "Game Development", "Diseño Gráfico", "Animación", "API Integration", "Responsive Design"].map((tag, idx) => (
                <span key={idx} className="bg-gothic-light px-4 py-2 rounded-full text-sm text-white/80 border border-burgundy/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
