import React from 'react';
import './servicio1.css'; // Asegúrate de tener este archivo CSS en la misma carpeta

const Servicios = () => {
  return (
    <div className="servicios">
      <header className="servicios-header">
        <h1>Reclutamiento y Selección</h1>
        <p>Encuentra y contrata a los mejores talentos para tu empresa.</p>
      </header>

      <section className="servicios-descripcion">
        <h2>Descripción del Servicio</h2>
        <p>
          Ayudamos a las empresas a encontrar y contratar a los candidatos más adecuados para sus vacantes. Este servicio les permite identificar talento, cubrir necesidades de personal, mejorar la calidad del trabajo y construir equipos sólidos que impulsen el crecimiento y el éxito de la empresa. Nosotros nos encargamos de todo el proceso, desde la atracción de candidatos hasta la selección final, garantizando que las empresas cuenten con el personal idóneo para alcanzar sus metas y objetivos comerciales.
        </p>
      </section>

      <section className="servicios-proceso">
        <h2>Proceso de Reclutamiento</h2>
        <ol>
          <li><strong>Definición de Requisitos:</strong> Entendemos las necesidades y requisitos del puesto.</li>
          <li><strong>Captación de Candidatos:</strong> Publicamos la oferta y buscamos candidatos adecuados.</li>
          <li><strong>Filtrado de Candidatos:</strong> Revisamos currículums y realizamos pre-entrevistas.</li>
          <li><strong>Entrevistas y Evaluaciones:</strong> Conducimos entrevistas y evaluaciones detalladas.</li>
          <li><strong>Selección Final:</strong> Presentamos a los candidatos finales y asistimos en la decisión final.</li>
          <li><strong>Incorporación:</strong> Acompañamos en el proceso de incorporación del nuevo empleado.</li>
        </ol>
      </section>

      <section className="servicios-beneficios">
        <h2>Beneficios de Nuestro Servicio</h2>
        <ul>
          <li>Acceso a una amplia red de candidatos cualificados.</li>
          <li>Proceso de selección riguroso y detallado.</li>
          <li>Reducción del tiempo y costes de contratación.</li>
          <li>Mejora en la calidad del personal y en el rendimiento de la empresa.</li>
          <li>Asesoramiento y soporte continuo durante el proceso.</li>
        </ul>
      </section>

      <section className="servicios-testimonios">
        <h2>Testimonios</h2>
        <div className="testimonio">
          <p><strong>Juan Pérez, CEO de Tech Solutions:</strong> "El servicio de reclutamiento ha sido fundamental para encontrar a nuestro equipo ideal. La calidad y rapidez del proceso fueron excepcionales."</p>
        </div>
        <div className="testimonio">
          <p><strong>Ana Gómez, Directora de Recursos Humanos en Creativa:</strong> "Gracias a su ayuda, hemos podido contratar a empleados altamente cualificados y encajan perfectamente con nuestra cultura."</p>
        </div>
      </section>

      <section className="servicios-contacto">
        <h2>Contacto</h2>
        <p>Para más información o para solicitar nuestros servicios, no dudes en ponerte en contacto con nosotros:</p>
        <p><strong>Teléfono:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contacto@reclutamiento.com</p>
        <p><strong>Dirección:</strong> Av. Ejemplo 123, Ciudad, País</p>
      </section>
    </div>
  );
};

export default Servicios;
