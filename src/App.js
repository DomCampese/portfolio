import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Skills from './components/Skills/Skills.js'
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import { ScrollingProvider, Section } from 'react-scroll-section';
import useMobile from './hooks/useMobile';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

const App = () => {
  const isDarkModePreferred = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const [isDarkMode, setIsDarkMode] = React.useState(isDarkModePreferred());

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  }

  // Ensures the area around the iphone notch matches the background color of the theme
  useEffect(() => {
    const backgroundColorCssVar = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    document.getElementById('theme-color').setAttribute('content', backgroundColorCssVar);
  }, [isDarkMode])

  return (
    <>
      <ThemeProvider isDarkMode={isDarkMode}/>
      <div className='App'>
        <ScrollingProvider offset={useMobile() ? -12 : -80}>
          <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          <div className='app'>
            <Section id='about'><About/></Section>
            <Section id='skills'><Skills/></Section>
            <Section id='projects'><Projects/></Section>
            <Section id='contact'><Contact/></Section>
          </div>
        </ScrollingProvider>
      </div>
    </>
  );
}

export default App;
