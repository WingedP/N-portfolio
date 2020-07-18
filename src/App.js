import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-scroll';

import {Route, Switch } from "react-router-dom";
import Navi from './components/Navi';
import Loader from './components/Loader';
import Loader2 from './components/Loader2';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


// import Landing from './pages/Landing';
// import Projects from './pages/Projects';
// import Experiences from './pages/Experiences';
// const Landing = React.lazy(()=>import("./pages/Landing"));

const Landing = React.lazy(() => {
  return Promise.all([import("./pages/Landing"),
  new Promise(resolve => setTimeout(resolve, 1600))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Experiences = React.lazy(() => {
  return Promise.all([import("./pages/Experiences"),
  new Promise(resolve => setTimeout(resolve, 1600))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Projects = React.lazy(() => {
  return Promise.all([import("./pages/Projects"),
  new Promise(resolve => setTimeout(resolve, 1600))
  ])
  .then(([moduleExports]) => moduleExports);
});



function App() {
  return (
    <div className="portfolio">
      <Navi/>
      <Suspense fallback={<Loader/>}><Landing/></Suspense>
      <Suspense fallback={<Loader2/>}>
        <Experiences/>
        <Projects/>
      <Skills/>
      <Contact/>

        </Suspense>


    </div>
  );
}

export default App;
