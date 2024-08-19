import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home';
import Servicios from './components/pages/Services/servicio1';
import Layout from './components/Layout/layout';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Servicios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;