
import { ScrollArea } from "@/components/ui/scroll-area";

const PracticeExperience = () => {
  return (
    <div className="mt-20 bg-gothic-light p-8 rounded-xl border border-burgundy/20">
      <h2 className="text-2xl md:text-3xl font-serif-gothic mb-6">Experiencia en TICSA - Primer Semestre 2025</h2>
      
      <ScrollArea className="h-[300px] rounded-md pr-4">
        <div className="space-y-6 text-white/80">
          <p>
            Durante el primer semestre del 2025, tuve la oportunidad de realizar mis prácticas profesionales 
            en TICSA Seguridad Industrial, una empresa líder en la distribución de equipos y suministros de 
            seguridad industrial, productos de limpieza y productos desechables para empresas.
          </p>
          
          <p>
            Mi labor principal consistió en el rediseño completo de su identidad visual corporativa y 
            la creación de contenido publicitario digital e impreso para sus distintas líneas de productos. 
            Este proceso incluyó un estudio inicial de la empresa, entrevistas con el personal directivo y 
            el desarrollo de propuestas que reflejaran los valores y la filosofía de TICSA.
          </p>
          
          <p>
            <strong className="text-burgundy">Principales responsabilidades y logros:</strong>
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Rediseño completo del logo y la identidad visual de la empresa, manteniendo su reconocimiento en el mercado pero modernizando su apariencia.</li>
            <li>Creación de un manual de identidad corporativa para guiar el uso consistente de la marca.</li>
            <li>Diseño de papelería corporativa: tarjetas de presentación, hojas membretadas, facturas, cotizaciones y formatos oficiales.</li>
            <li>Desarrollo de catálogos de productos para las diferentes líneas de negocio.</li>
            <li>Creación de material promocional para redes sociales y sitio web.</li>
            <li>Fotografía de productos y edición para su uso en catálogos y material publicitario.</li>
            <li>Diseño de stands para ferias comerciales y eventos corporativos.</li>
          </ul>
          
          <p>
            El trabajo realizado permitió a TICSA presentar una imagen más profesional y consistente ante 
            sus clientes, facilitando el reconocimiento de la marca y mejorando la percepción de calidad
            de sus productos y servicios. Además, los nuevos materiales promocionales contribuyeron a incrementar 
            la presencia digital de la empresa y a mejorar su comunicación con clientes potenciales.
          </p>
          
          <p>
            Esta experiencia me permitió aplicar conocimientos de diseño gráfico, branding, marketing digital
            y comunicación visual en un entorno empresarial real, comprendiendo las necesidades específicas
            de una empresa B2B en el sector industrial y adaptando las soluciones de diseño a sus requerimientos particulares.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default PracticeExperience;
