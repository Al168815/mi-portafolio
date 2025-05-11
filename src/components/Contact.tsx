
import { useState } from 'react';
import { Mail, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This is where you would integrate with a service like EmailJS, Formspree, etc.
      // For now we'll simulate a submission with a timeout
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error al enviar el mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gothic-dark">
      <div className="container-section">
        <h2 className="section-title">Contacto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-serif-gothic font-bold mb-6">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif-gothic font-bold mb-6">Conectemos</h3>
            
            <p className="text-lg text-white/70 mb-8">
              Si tienes un proyecto interesante o quieres charlar sobre diseño y desarrollo, ¡contáctame! 
              Estoy disponible para trabajos freelance y colaboraciones.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-burgundy mb-4">Email Directo</h4>
              <a 
                href="mailto:contacto@lauradigital.com" 
                className="flex items-center gap-3 text-white/80 hover:text-burgundy transition-colors"
              >
                <Mail size={20} />
                <span>contacto@lauradigital.com</span>
              </a>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-burgundy mb-4">Redes Sociales</h4>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="social-link">
                  <Facebook size={24} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#" className="btn-primary">
                <Download size={18} />
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
