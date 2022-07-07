import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />          
      </Routes>
    </div>
  );
}

export default App;
