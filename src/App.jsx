import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import PreLogin from './pages/PreLogin';

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prelogin" element={<PreLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}