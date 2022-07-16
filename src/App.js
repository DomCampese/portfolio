import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';

const App = () => {
  return (
    <div className='App'>
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
