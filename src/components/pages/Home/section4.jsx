import React from 'react';
import './section4.css'; // Asegúrate de que el archivo CSS esté correctamente enlazado

// Importa la imagen
import sectionImage from '../../assets/robot.png';

const SectionFour = () => {
    return (
        <section className="section-four">
            <div className="container">
                <div className="text-image-wrapper">
                    <div className="image-content">
                        <img src={sectionImage} alt="Descripción de la imagen" className="section-image" />
                    </div>
                    <div className="text-content">
                        <h2>¿Por qué elegir a Brefh Asesores?</h2>
                        <p>
                            "En Brefh Asesores, no solo ofrecemos servicios, sino que construimos alianzas estratégicas. Nuestro enfoque innovador, respaldado por tecnología avanzada y un equipo de expertos, asegura soluciones personalizadas que optimizan tu eficiencia y potencian tu éxito."
                        </p>
                    </div>
                </div>
                <div className="cards-wrapper">
                    <div className="card">
                        <div className="icon">📈</div>
                        <h3>Optimiza Recursos y Costos</h3>
                        <p>
                            "Externalizar funciones como contabilidad y gestión fiscal puede reducir costos operativos en hasta un 30%. Al delegar estas tareas, ahorras en contratación y formación, obteniendo eficiencia y precisión, y liberas recursos para crecimiento estratégico."
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">💹</div>
                        <h3>Mejora Continua en el Crecimiento Financiero</h3>
                        <p>
                            "Nuestro enfoque basado en datos y análisis avanzados impulsa el crecimiento financiero de las empresas. Implementamos estrategias a medida para optimizar operaciones y tomar decisiones informadas, facilitando un crecimiento sostenible."
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">✔️</div>
                        <h3>Cumplimiento Normativo Integral</h3>
                        <p>
                            "El 90% de las empresas con asesoría especializada logran cumplir con las regulaciones vigentes, evitando sanciones y problemas legales. Nuestra experiencia asegura que tu empresa mantenga un cumplimiento normativo integral y minimice riesgos."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
