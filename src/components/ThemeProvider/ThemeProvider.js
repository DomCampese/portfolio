import { useEffect } from 'react'

const ThemeProvider = ({ isDarkMode }) => {
  const darkGray = '#212121';
  const white = '#FFFFFF';

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', isDarkMode ? 'dark' : 'light');
    document.querySelector("meta[name='theme-color']").setAttribute("content", isDarkMode ? darkGray : white);
  }, [isDarkMode]);

  return null;
}

export default ThemeProvider