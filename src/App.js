import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import { ScrollingProvider, Section } from 'react-scroll-section';
import useMobile from './hooks/useMobile';

const App = () => {
  return (
    <div className='App'>
      <ScrollingProvider offset={useMobile() ? -10 : -100}>
        <Nav/>
        <div className='app'>
          <Section id='about'><About/></Section>
          <Section id='skills'><div><p>Skills section goes here</p></div></Section>
          <Section id='projects'><Projects/></Section>
          <Section id='contact'><Contact/></Section>
        </div>
      </ScrollingProvider>
    </div>
  );
}

export default App;
