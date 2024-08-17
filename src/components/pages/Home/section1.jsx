import React from 'react';
import './section1.css'; // Asegúrate de que la ruta sea correcta
import robotImage from '../..//assets/robot.png'; // Ajusta la ruta si es necesario

const Section1 = () => {
    return (
        <section className="section-one animate-on-scroll">
            <div className="content">
                <h1>
                    Impulsa tu empresa con
                    <span> Brefh Asesores.</span><br />
                    ¡Somos tu socio estratégico!
                </h1>
                <p>
                    Con nuestro equipo de expertos y nuestro
                    profundo conocimiento del entorno empresarial
                    mexicano, estamos aquí para ser su socio
                    estratégico en el camino hacia el éxito.
                </p>
                <div className="buttons">
                    <button className="btn secondary-btn">¡CONTÁCTANOS!</button>
                </div>
            </div>
            <div className="image">
                <img src={robotImage} alt="Sample Image" className="responsive-image" />
            </div>
        </section>
    );
};

export default Section1;
