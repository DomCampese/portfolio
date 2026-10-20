import { useState } from 'react';
import './App.css';
import { Nav, Skills, About, Contact, Projects, ThemeProvider } from '@components';
import { Section } from '@constants';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') !== 'light';
    } catch {
      return true;
    }
  });

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    try {
      localStorage.setItem('portfolio-theme', checked ? 'dark' : 'light');
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  };

  return (
    <>
      <ThemeProvider isDarkMode={isDarkMode} />
      <div className='App'>
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className='app'>
          <div id={Section.ABOUT}><About /></div>
          <div id={Section.SKILLS}><Skills /></div>
          <div id={Section.PROJECTS}><Projects /></div>
          <div id={Section.CONTACT}><Contact /></div>
        </main>
      </div>
    </>
  );
};

export default App;
