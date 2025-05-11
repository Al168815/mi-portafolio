
import { Play } from 'lucide-react';

const VideoExperience = () => {
  return (
    <div className="mb-8 bg-gothic-light border border-burgundy/20 rounded-xl overflow-hidden">
      <div className="aspect-video relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gothic-dark/50">
          <div className="text-center">
            <h3 className="text-2xl font-serif-gothic mb-4">Mi Experiencia en TICSA</h3>
            <button className="bg-burgundy hover:bg-burgundy-light text-white p-4 rounded-full transition-all duration-300 group">
              <Play size={32} className="group-hover:scale-110 transition-transform" />
            </button>
            <p className="mt-4 text-white/70">Haz clic para reproducir el video</p>
          </div>
        </div>
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?controls=0" 
          title="Mi Experiencia en TICSA" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default VideoExperience;
