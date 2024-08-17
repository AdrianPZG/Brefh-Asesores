import React from 'react';
import './footer.css';
import footerLogo from '../assets/BREFH_Oscuro.png'; // Ajusta la ruta según tu estructura

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={footerLogo} alt="Logo de la empresa" />
                </div>
                <hr className="footer-line" />
                <div className="footer-info">
                    <ul>
                        <li><i className="ri-mail-fill"></i> contacto@breasesores.com</li>
                        <li><i className="ri-phone-fill"></i> +52 5589 55488 55</li>
                        <li><i className="ri-map-pin-fill"></i> Paseo de las Palmas 320, Miguel Hidalgo, CDMX 11000, México</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/p/BREFH-Asesores-61555260071307/?locale=es_LA" aria-label="Facebook">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/brefhasesores/" aria-label="Instagram">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/brefh-asesores/" aria-label="LinkedIn">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </div>
                <div className="footer-legal">
                    <p><a href="#">Política de Privacidad</a> | <a href="#">Términos y Condiciones</a></p>
                    <p>&copy; BREFH ASESORES 2024. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
