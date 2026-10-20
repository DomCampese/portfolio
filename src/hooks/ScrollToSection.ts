import { Section } from '@constants';

export const useScrollToSection = () => {
  return (section: string) => {
    const element = document.getElementById(section);
    if (!element) return;
    // Measure the rendered header so safe-area insets and rotation are included.
    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 64;
    const top = section === Section.ABOUT
      ? 0
      : element.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };
};
