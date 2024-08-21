import React, { useEffect } from 'react';
import './estadistica.css'; // Asegúrate de que el archivo CSS esté correctamente enlazado

const StatsSection = () => {
    useEffect(() => {
        const statsSection = document.querySelector('.stats-section');
        const statNumbers = document.querySelectorAll('.stat-number');

        const countUp = (element, endValue, duration) => {
            let startValue = 0;
            const stepTime = Math.abs(Math.floor(duration / endValue));
            const increment = endValue / (duration / stepTime);
            const interval = setInterval(() => {
                startValue += increment;
                if (startValue >= endValue) {
                    element.textContent = `+${endValue}`;
                    clearInterval(interval);
                } else {
                    element.textContent = `+${Math.floor(startValue)}`;
                }
            }, stepTime);
        };

        const animateStats = () => {
            statNumbers.forEach(stat => {
                const endValue = parseInt(stat.getAttribute('data-count'));
                countUp(stat, endValue, 1000); // Animación rápida de 1 segundo
            });
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsSection.classList.add('visible');
                    animateStats();
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.5 });

        // Inicializar el observer
        observer.observe(statsSection);
    }, []);

    return (
        <section className="stats-section">
            <div className="container">
            <div className="stats-container">
                <div className="stat-item">
                    <h2 className="stat-number" data-count="1000">+0</h2>
                    <p>Profesionales Contratados</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number" data-count="500">+0</h2>
                    <p>Estudiantes Capacitados</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number" data-count="98">+0</h2>
                    <p>% Satisfacción de las Empresas</p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default StatsSection;
