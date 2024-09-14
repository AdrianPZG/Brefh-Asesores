import React from 'react';
import './contact.css'; 
import empresaImage from '../assets/BREFH.png';

const ContactUs = () => {
    return (
        <section className="section-five" id="contacto_url">
            <div className="container">
                <div className="contact-content">
                    {/* Información de contacto */}
                    <div className="contact-info">
                        <h1>¡Queremos conocerte!</h1>
                        <p>Llena nuestro formulario y nuestro equipo con gusto se pondrá en contacto.</p>
                        <ul>
                            <li>
                                <span className="icon-circle"><i className="ri-phone-fill"></i></span>
                                +52 5589 55488 55
                            </li>
                            <li>
                                <span className="icon-circle"><i className="ri-mail-fill"></i></span>
                                contacto@breasesores.com
                            </li>
                            <li>
                                <span className="icon-circle"><i className="ri-map-pin-fill"></i></span>
                                Paseo de las Palmas 320<br />
                                Miguel Hidalgo, CDMX 11000, México
                            </li>
                        </ul>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="contact-form">
                        <img src={empresaImage} alt="Imagen de la empresa" className="contact-img" />
                        <form action="https://formsubmit.co/adrian@breasesores.com" method="POST">
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Nombre" required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Empresa" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Correo Electrónico" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phone" name="phone" placeholder="Teléfono" required />
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" rows="4" placeholder="Mensaje" required></textarea>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
