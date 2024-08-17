import React, { useEffect, useRef } from 'react';
import './section2.css'; // Asegúrate de que el archivo CSS esté correctamente enlazado

// Importa las imágenes
import servicioImage1 from '../../assets/servicios_1.jpg';

const SectionTwo = () => {
    const sectionTwoRef = useRef(null);
    const serviceCardsRef = useRef([]);

    useEffect(() => {
        const sectionTwo = sectionTwoRef.current;
        const serviceCards = serviceCardsRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sectionTwo.classList.add('visible');

                    serviceCards.forEach(card => {
                        card.classList.add('visible');
                    });

                    observer.unobserve(sectionTwo);
                }
            });
        }, { threshold: 0.3 });

        if (sectionTwo) {
            observer.observe(sectionTwo);
        }

        // Clean up the observer on component unmount
        return () => {
            if (sectionTwo) {
                observer.unobserve(sectionTwo);
            }
        };
    }, []);

    return (
        <section className="section-two" id="servicios_url" ref={sectionTwoRef}>
            <div className='container'>
            <h2>Servicios</h2>
            <div className="underline"></div>
            <div className="services-grid">
                <div className="service-card" ref={el => (serviceCardsRef.current[0] = el)}>
                    <img src={servicioImage1} alt="Reclutamiento y Selección" className="service-image" />
                    <h3>Reclutamiento y Selección</h3>
                    <p>Encuentra y contrata a los mejores talentos para tu empresa, optimizando la calidad del trabajo y fortaleciendo tu equipo.</p>
                    <a href="#servicios_url" className="more-info">Conoce más</a>
                </div>
                <div className="service-card" ref={el => (serviceCardsRef.current[1] = el)}>
                    <img src={servicioImage1} alt="Desarrollo Organizacional" className="service-image" />
                    <h3>Desarrollo Organizacional</h3>
                    <p>Fortalece la estructura y cultura de tu empresa con estrategias personalizadas que aumenten la eficiencia y productividad.</p>
                    <a href="#servicios_url" className="more-info">Conoce más</a>
                </div>
                <div className="service-card" ref={el => (serviceCardsRef.current[2] = el)}>
                    <img src={servicioImage1} alt="Administración y Contabilidad" className="service-image" />
                    <h3>Administración y Contabilidad</h3>
                    <p>Gestiona tus registros contables, informes financieros y nómina con precisión y cumplimiento fiscal.</p>
                    <a href="#servicios_url" className="more-info">Conoce más</a>
                </div>
                <div className="service-card" ref={el => (serviceCardsRef.current[3] = el)}>
                    <img src={servicioImage1} alt="Job Coaching" className="service-image" />
                    <h3>Job Coaching</h3>
                    <p>Desarrolla habilidades profesionales y mejora el desempeño de tus empleados con nuestro coaching personalizado.</p>
                    <a href="#servicios_url" className="more-info">Conoce más</a>
                </div>
            </div>
            <a href="/servicio1.html" className="cta-button">IR A SERVICIOS</a>
            </div>
        </section>
    );
};

export default SectionTwo;
