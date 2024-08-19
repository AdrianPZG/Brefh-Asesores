import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/footer';
import Contacto from '../Contact_Us/contact';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Layout;