import { useEffect } from 'react'

const ThemeProvider = ({ isDarkMode }) => {
  useEffect(() => {
    document.documentElement.setAttribute('color-theme', isDarkMode ? 'dark' : 'light');
    // Ensure the area around the iphone notch matches the background color of the theme
    const backgroundColorCssVar = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    document.getElementById('theme-color').setAttribute('content', backgroundColorCssVar);
  }, [isDarkMode]);

  return null;
}

export default ThemeProvider