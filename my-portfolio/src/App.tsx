import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Project from './components/SingleProject/Project';

const App: React.FC = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main>
                <AboutMe />
                <Skills />
                <Services />
                <Portfolio />
                <Contact />
              </main>
            </>
          }
        />
        <Route
          path='/:projectSlug'
          element={
            <>
              <main>
                <Project />
              </main>
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
