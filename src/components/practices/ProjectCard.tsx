
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PracticeProject } from '@/types/practice-types';

interface ProjectCardProps {
  project: PracticeProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-gothic-light border-burgundy/30 text-white hover:border-burgundy/70 transition-all duration-300 reveal-item flex flex-col">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.title} - Imagen ${index + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-16 pointer-events-none"></div>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 border-none" />
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 border-none" />
        </Carousel>
      </div>
      
      {/* Project Details */}
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-serif-gothic text-white">{project.title}</CardTitle>
        </div>
        <CardDescription className="text-white/70">{project.company} | {project.period}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-white/80 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gothic-dark px-2 py-1 rounded text-xs text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-burgundy/20 pt-4">
        {project.link && (
          <a 
            href={project.link} 
            className="text-burgundy hover:text-burgundy-light transition-colors inline-flex items-center gap-2"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Ver proyecto completo</span>
            <ExternalLink size={16} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
