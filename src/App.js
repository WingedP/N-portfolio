import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-scroll';

import {Route, Switch } from "react-router-dom";
import Navi from './components/Navi';
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';

function App() {
  return (
    <div className="portfolio">
      <Navi/>
      <Landing/>
      <Experiences/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
