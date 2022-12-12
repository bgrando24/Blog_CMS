import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/home/home';
import { Blog } from './pages/blog/Blog';
import { Navbar } from './shared/Navbar';
import { About } from './pages/about/About';
import { Footer } from './shared/Footer';
import { HomeBanner } from './pages/home/components/HomeBanner';
import { ArticleView } from './pages/article/ArticleView';

export function App() {
  return (
    <>


      

      <Router>
        <Routes>
        
        <Route 
          path='/' 
          element={
            <>
              <HomeBanner />
              <Navbar />
              <Home />
            </>
          } 
        />

        <Route
          path="blog/:article"
          element={
            <ArticleView />
          }
        />

        <Route 
          path='/blog' 
          element={
            <>
              <Navbar />
              <Blog />
            </>
          } 
        />

        <Route 
          path='/about' 
          element={
            <>
              <Navbar />
              <About />
            </>
          } 
        />
        
        </Routes>
      </Router>

      <Footer />

    </>
  );
}


