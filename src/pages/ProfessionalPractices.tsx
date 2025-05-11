
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoExperience from "@/components/practices/VideoExperience";
import ProjectCard from "@/components/practices/ProjectCard";
import DesignShowcase from "@/components/practices/DesignShowcase";
import PracticeExperience from "@/components/practices/PracticeExperience";
import { PracticeProject } from '@/types/practice-types';

const ProfessionalPractices = () => {
  // Practice projects data
  const [projects] = useState<PracticeProject[]>([
    {
      id: 1,
      title: "Diseño de Identidad Corporativa para TICSA",
      description: "Desarrollo de identidad visual para TICSA (Seguridad Industrial), incluyendo logotipos, papelería corporativa, catálogos de productos y material publicitario.",
      company: "TICSA Seguridad Industrial",
      period: "Enero - Marzo 2025",
      technologies: ["Diseño Gráfico", "Identidad Corporativa", "Adobe Illustrator", "Adobe Photoshop", "Branding"],
      images: [
        "/lovable-uploads/78da3b00-d6dc-45f7-abb4-c093a5816567.png",
        "/lovable-uploads/0019e559-ff1e-42b1-a8ee-dd17d50f8dc1.png",
        "/lovable-uploads/ea4f06c9-4b72-42f3-b399-29fec3020145.png",
        "/lovable-uploads/876ab4f0-4444-48fb-a506-cebe9abf5cac.png",
        "/lovable-uploads/0f761aa5-85b3-4b6f-bcbc-41d79559c165.png"
      ],
      link: "#"
    },
    {
      id: 2,
      title: "Diseño de Papelería y Documentos Corporativos",
      description: "Creación de plantillas para cotizaciones, facturas, tarjetas de presentación y documentos oficiales manteniendo la coherencia visual de la marca TICSA.",
      company: "TICSA Seguridad Industrial",
      period: "Abril - Mayo 2025",
      technologies: ["Diseño Editorial", "Adobe InDesign", "Tipografía", "Maquetación", "Identidad Visual"],
      images: [
        "/lovable-uploads/8fc4364e-bdea-42e9-b6fd-e1becac3e543.png",
        "/lovable-uploads/fac28207-3763-49ca-ac04-190f7f1cf023.png", 
        "/lovable-uploads/5dd242e3-a0bb-4e36-88cc-20988d091200.png",
        "/lovable-uploads/b4cf0e05-4e34-4f15-9010-c2ecbbb06705.png",
        "/lovable-uploads/2db69b93-d32d-4780-bfb3-af4ab9578d8b.png"
      ],
      link: "#"
    },
    {
      id: 3,
      title: "Diseño de Materiales Promocionales",
      description: "Desarrollo de material publicitario y promocional para productos de seguridad industrial, limpieza y productos desechables, enfatizando la calidad y excelencia de la marca.",
      company: "TICSA Seguridad Industrial",
      period: "Junio - Julio 2025",
      technologies: ["Diseño Publicitario", "Marketing Visual", "Composición", "Adobe Creative Suite", "Fotografía Comercial"],
      images: [
        "/lovable-uploads/93118537-9b02-42fd-8962-e44d07319fc5.png", 
        "/lovable-uploads/dc702b53-794b-4a78-a2c8-163c37fa6f5f.png",
        "/lovable-uploads/8f0bcc80-d1bf-4cb2-9336-448939218195.png",
        "/lovable-uploads/89668df8-2b2f-4074-ae7d-a72672d74ee0.png"
      ],
      link: "#"
    }
  ]);

  // Image collections for design showcases
  const brandingImages = [
    "/lovable-uploads/78da3b00-d6dc-45f7-abb4-c093a5816567.png",
    "/lovable-uploads/0019e559-ff1e-42b1-a8ee-dd17d50f8dc1.png",
    "/lovable-uploads/ea4f06c9-4b72-42f3-b399-29fec3020145.png"
  ];
  
  const stationeryImages = [
    "/lovable-uploads/8fc4364e-bdea-42e9-b6fd-e1becac3e543.png",
    "/lovable-uploads/fac28207-3763-49ca-ac04-190f7f1cf023.png", 
    "/lovable-uploads/5dd242e3-a0bb-4e36-88cc-20988d091200.png"
  ];
  
  const promotionalImages = [
    "/lovable-uploads/93118537-9b02-42fd-8962-e44d07319fc5.png", 
    "/lovable-uploads/dc702b53-794b-4a78-a2c8-163c37fa6f5f.png",
    "/lovable-uploads/8f0bcc80-d1bf-4cb2-9336-448939218195.png"
  ];
  
  const catalogueImages = [
    "/lovable-uploads/876ab4f0-4444-48fb-a506-cebe9abf5cac.png",
    "/lovable-uploads/0f761aa5-85b3-4b6f-bcbc-41d79559c165.png",
    "/lovable-uploads/b4cf0e05-4e34-4f15-9010-c2ecbbb06705.png"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gothic-dark text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Projects Section */}
        <section className="py-20 bg-gothic">
          <div className="container-section">
            <h1 className="section-title">Prácticas Profesionales 2025</h1>
            <p className="text-xl text-white/80 max-w-3xl mb-10">
              Colección de proyectos desarrollados durante mis prácticas profesionales en
              TICSA Seguridad Industrial durante el primer semestre del 2025.
            </p>
            
            {/* YouTube Video Player */}
            <VideoExperience />
            
            {/* Main Projects Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* Design Showcases */}
            <div className="mt-24">
              <h2 className="text-3xl font-serif-gothic font-bold mb-10 text-white">Detalles de Diseños TICSA</h2>
              
              <DesignShowcase 
                title="Branding e Identidad Visual"
                images={brandingImages}
                altPrefix="Branding TICSA"
              />
              
              <DesignShowcase 
                title="Papelería Corporativa"
                images={stationeryImages}
                altPrefix="Papelería TICSA"
              />
              
              <DesignShowcase 
                title="Material Promocional"
                images={promotionalImages}
                altPrefix="Material Promocional TICSA"
              />
              
              <DesignShowcase 
                title="Catálogos de Productos"
                images={catalogueImages}
                altPrefix="Catálogo TICSA"
              />
            </div>
            
            {/* TICSA Experience Section */}
            <PracticeExperience />
            
            <div className="mt-16 text-center">
              <p className="text-white/70 mb-6">
                Para conocer más sobre mi experiencia en TICSA o consultar sobre posibles colaboraciones...
              </p>
              <a href="/#contact" className="btn-primary inline-flex">
                <span>Contacta conmigo</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalPractices;
