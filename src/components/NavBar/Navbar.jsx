// src/components/Navbar/Navbar.jsx
import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/BREFH.png'
import { Link } from 'react-router-dom';




const Navbar = () => {
    useEffect(() => {

        // --NAVBAR RESPONSIVE--
        const toggleButton = document.querySelector('.toggle-button');
        const navbarLinks = document.querySelector('.navbar-links');
        const closeButton = document.querySelector('.close-button');

        const handleToggle = () => {
            navbarLinks.classList.toggle('active');
        };

        const handleClose = () => {
            navbarLinks.classList.remove('active');
        };

        toggleButton.addEventListener('click', handleToggle);
        closeButton.addEventListener('click', handleClose);






        // --NAVBAR SCROLL--
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Al bajar, esfuma la barra
                navbar.style.opacity = '0';
                navbar.style.transform = 'translateY(0px)';
            } else {
                // Al subir, muestra la barra
                navbar.style.opacity = '1';
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);





        // Asegurar que la barra de navegación esté visible al cargar la página
        window.addEventListener('load', () => {
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0)';
        });





        // Cleanup function to remove event listeners
        return () => {
            toggleButton.removeEventListener('click', handleToggle);
            closeButton.removeEventListener('click', handleClose);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);





    return (
        <nav className="navbar">
            <div className="brand-title">
                <a href="index.html" aria-label="Volver a la página de inicio">
                    <img src={logo} alt="Logo" className="logo" />
                </a>
            </div>
            <a href="javascript:void(0);" className="toggle-button" aria-label="Toggle Menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <button className="close-button" aria-label="Close Menu">&times;</button>
                <ul className="nav_list">
                    <li className="nav_item"><a href="index.html">Inicio</a></li>
                    <li className="nav_item"><a href="#nosotros_url">Nosotros</a></li>
                    <li className="nav_item"><Link to="/services">Servicios</Link></li>
                    <li className="nav_item"><a href="#contacto_url" className="contact-button">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
