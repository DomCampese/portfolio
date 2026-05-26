import { useState } from 'react';
import './App.css';
import { Nav, Skills, About, Contact, Projects, ThemeProvider } from '@components';
import { Section } from '@constants';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  );

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <>
      <ThemeProvider isDarkMode={isDarkMode} />
      <div className='App'>
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className='app'>
          <div id={Section.ABOUT}><About /></div>
          <div id={Section.SKILLS}><Skills /></div>
          <div id={Section.PROJECTS}><Projects /></div>
          <div id={Section.CONTACT}><Contact /></div>
        </div>
      </div>
    </>
  );
};

export default App;
