import React, { useState } from 'react';
import './servicio1.css';
import Servicio1 from '../../assets/services1.JPG'
import Servicio2 from '../../assets/services.JPG'



const Servicios = () => {
  const [activeService, setActiveService] = useState(null);

  const serviceDetails = {
    headhunter: "Nos encargamos de identificar y atraer a los mejores talentos para puestos clave en tu empresa, asegurando que cuentes con líderes altamente cualificados y con el perfil exacto que necesitas.",
    auditoria: "Realizamos un análisis detallado de las habilidades y competencias de tu equipo para ayudarte a maximizar su potencial y mejorar su rendimiento.",
    socialRecruiting: "Utilizamos las redes sociales para promover tu marca y atraer candidatos calificados, ampliando el alcance de tu búsqueda de talento de manera moderna y eficaz.",
    socioEconomico: "Verificamos la estabilidad y confiabilidad de los candidatos evaluando su situación económica, laboral y social, asegurando contrataciones seguras y responsables.",
    headhunting: "Combinamos técnicas tradicionales y digitales para encontrar a los mejores talentos, sin importar si están buscando empleo activamente, asegurando que tu empresa cuente con los mejores profesionales.",
    reclutamiento: "Nos ocupamos de todo el proceso de selección, desde la atracción hasta la evaluación, garantizando que solo los candidatos más adecuados lleguen a formar parte de tu equipo.",
  };

  const toggleService = (service) => {
    setActiveService(activeService === service ? null : service);
  };

  return (
    <div>
      <div className="servicios">
        <div className="imagen-fondo">
          <div className="contenido-centrado">
            <h1>Reclutamiento y Selección</h1>
            <button className="boton-cotiza">Cotiza</button>
          </div>
        </div>
      </div>





      <div className="reclutamiento-seleccion">
        <div className="texto-izquierda">
          <h1>RECLUTAMIENTO Y SELECCIÓN</h1>
          <p>
            Nuestro objetivo es garantizar un <span className="texto-destacado">proceso de contratación organizado y transparente</span> que asegure que cada candidato seleccionado no solo cumpla con los requisitos técnicos del puesto, sino que también <span className="texto-destacado">encaje perfectamente con la cultura y objetivos de tu empresa</span>.
          </p>
          <p>
            Entendemos que una <span className="texto-destacado">contratación exitosa va más allá de evaluar habilidades en papel</span>; se trata de encontrar personas que combinen el conocimiento adecuado, la habilidad para ejecutar las tareas con excelencia y la disposición de contribuir al crecimiento del equipo.
          </p>
        </div>
        <div className="imagen-derecha">
          <img src={Servicio1} alt="Reclutamiento y Selección"/>
        </div>
      </div>






      <div className="seccion-contacto">
        <p className="texto-contacto">
          Nuestro servicio de reclutamiento no solo busca cubrir vacantes, sino que ayuda a crear una plantilla sólida y motivada, capaz de impulsar el éxito empresarial a largo plazo.
        </p>
          <a href="#contacto_url" className="boton-contactanos">Contáctanos</a>
      </div>






      <div className="seccion-servicios">
        <div className="imagen-servicios">
          <img src={Servicio2} alt="Servicios"/>
        </div>
        <div className="menu-servicios">
          <h1>Servicios</h1>
          <ul className={activeService ? 'single-service' : ''}>
            {Object.entries(serviceDetails).map(([key, value]) => (
              <li 
                key={key} 
                className={activeService === key ? 'active' : ''}
                onClick={() => toggleService(key)}
              >
                → {key.toUpperCase().replace('_', ' ')}
                {activeService === key && (
                  <div className="detalle-servicio">
                    <p>{value}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Servicios;