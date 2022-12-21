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
import { DeleteArticle } from './pages/publish/DeleteArticle';
import { EditArticlesPage } from './pages/publish/EditArticlesPage';
import { EditArticle } from './pages/publish/EditArticle';

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

        <Route 
          path='/publish/delete' 
          element={
            <>
              <Navbar />
              <DeleteArticle />
            </>
          } 
        />

        <Route
          path='/publish/edit'
          element={
            <>
              <Navbar />
              <EditArticlesPage />
            </>
          }
        />

          <Route
          path='/publish/edit/:id'
          element={
            <>
              <Navbar />
              <EditArticle />
            </>
          }
        />
        
        </Routes>
      </Router>

      <Footer />

    </>
  );
}


