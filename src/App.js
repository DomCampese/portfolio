import React from 'react';
import './app.css';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import { ScrollingProvider, Section } from 'react-scroll-section';

const App = () => {
  return (
    <div className='App'>
      <ScrollingProvider offset={-100}>
        <Nav/>
        <Section id='home'><Home/></Section>
        <Section id='projects'><Projects/></Section>
        <Section id='contact'><Contact/></Section>
      </ScrollingProvider>
    </div>
  );
}

export default App;
