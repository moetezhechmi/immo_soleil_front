import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertyDetails from './pages/PropertyDetails';
import LandDetails from './pages/LandDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/bien/:id" element={<PropertyDetails />} />
        <Route path="/terrain/:id" element={<LandDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
