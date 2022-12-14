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
import { Publish } from './pages/publish/Publish';
import { NewArticle } from './pages/publish/NewArticle';

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

        <Route 
          path='/publish' 
          element={
            <>
              <Navbar />
              <Publish />
            </>
          } 
        />

        <Route 
          path='/publish/new-article' 
          element={
            <>
              <Navbar />
              <NewArticle />
            </>
          } 
        />
        
        </Routes>
      </Router>

      <Footer />

    </>
  );
}


