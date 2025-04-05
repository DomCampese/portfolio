import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Skills from './components/Skills/Skills.js'
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import useMobile from './hooks/useMobile';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import { Section } from './constants/Section';

const App = () => {
  const isDarkModePreferred = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const [isDarkMode, setIsDarkMode] = React.useState(isDarkModePreferred());

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  }

  const isMobile = useMobile();

  return (
    <>
      <ThemeProvider isDarkMode={isDarkMode}/>
      <div className='App'>
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <div className='app'>
          <div id={Section.ABOUT}><About/></div>
          <div id={Section.SKILLS}><Skills/></div>
          <div id={Section.PROJECTS}><Projects/></div>
          <div id={Section.CONTACT}><Contact/></div>
        </div>
      </div>
    </>
  );
}

export default App;
