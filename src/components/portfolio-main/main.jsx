import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutMe } from '../AboutMe/AboutMe';
import ChartsOverviewDemo from '../skills/skills';
import { NavBar } from '../navbar/navbar';
import {LanguageProvider} from "../language";
import { Footer } from '../footer/footer';
import { Hero } from '../hero/hero';
import { Legal } from '../legal/legal';
import { Tools } from '../tools/tools';
import ProjectList from '../project-list/project-list';
import ItemDetail from '../project/project'; // Import the new ItemDetail component
import { Ambition } from '../ambition/ambition';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Nav } from 'react-bootstrap';
// import "../../index.scss";

export const Main = () => {
  return (
    <div className='main'>
    <Router>
      <LanguageProvider>
      <NavBar />
      <Routes>
        {/* Route for the main page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Ambition />
              <ProjectList />
              {/* <ChartsOverviewDemo /> */}
              <Tools />
              {/* <AboutMe /> */}
              <Footer />
            </>
          }
        />

        {/* Route for individual item detail pages */}
        <Route path="/item/:id" element={
          <ItemDetail />
        
          } />
        <Route path="/legal" element={
          <Legal />
    } />
      </Routes>
      </LanguageProvider>
    </Router>
    </div>
  );
};


