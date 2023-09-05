import { useEffect } from 'react'

const ThemeProvider = ({ isDarkMode }) => {
  useEffect(() => {
    document.documentElement.setAttribute('color-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return null;
}

export default ThemeProvider