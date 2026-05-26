import { useEffect } from 'react';

interface ThemeProviderProps {
  isDarkMode: boolean
}

const ThemeProvider = ({ isDarkMode }: ThemeProviderProps) => {
  useEffect(() => {
    const documentElement = document.documentElement;
    documentElement.setAttribute('color-theme', isDarkMode ? 'dark' : 'light');
    const backgroundColor = getComputedStyle(documentElement).getPropertyValue('--background-color');
    document.querySelector("meta[name='theme-color']")?.setAttribute('content', backgroundColor);
  }, [isDarkMode]);

  return null;
};

export default ThemeProvider;
