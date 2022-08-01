import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import { ScrollingProvider, Section } from 'react-scroll-section';

const App = () => {
  return (
    <div className='App'>
      <ScrollingProvider offset={-100}>
        <Nav/>
        <Section id='about'><About/></Section>
        <Section id='projects'><Projects/></Section>
        <Section id='contact'><Contact/></Section>
      </ScrollingProvider>
    </div>
  );
}

export default App;
