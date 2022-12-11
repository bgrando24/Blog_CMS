import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/home/home';
import { Blog } from './pages/blog/Blog';
import { Navbar } from './shared/Navbar';
import { About } from './pages/about/About';
import { Footer } from './shared/Footer';

export function App() {
  return (
    <>

      <Navbar />

      <Router>
        <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        
        </Routes>
      </Router>

      <Footer />

    </>
  );
}


