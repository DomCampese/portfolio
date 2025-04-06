import { useEffect } from 'react'

const ThemeProvider = ({ isDarkMode }) => {
  useEffect(() => {
    const documentElement = document.documentElement;
    // color-theme used to set theme css vars
    documentElement.setAttribute('color-theme', isDarkMode ? 'dark' : 'light');
    // updates notch color to match new background color
    const backgroundColor = getComputedStyle(documentElement).getPropertyValue('--background-color');
    document.querySelector("meta[name='theme-color']").setAttribute("content", backgroundColor);
  }, [isDarkMode]);

  return null;
}

export default ThemeProvider