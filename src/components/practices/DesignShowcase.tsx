
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface DesignShowcaseProps {
  title: string;
  images: string[];
  altPrefix: string;
}

const DesignShowcase = ({ title, images, altPrefix }: DesignShowcaseProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-serif-gothic mb-6">{title}</h3>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="border-burgundy/20 overflow-hidden bg-gothic-light">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={image}
                      alt={`${altPrefix} - Diseño ${index + 1}`}
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 text-white bg-black/50 hover:bg-black/70 border-none" />
        <CarouselNext className="absolute right-4 text-white bg-black/50 hover:bg-black/70 border-none" />
      </Carousel>
    </div>
  );
};

export default DesignShowcase;
