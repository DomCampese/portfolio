import { useMemo } from "react";
import { Section } from "../constants/Section";
import useMobile from "./useMobile";

export const useScrollToSection = () => {
  const isMobile = useMobile();

  const scrollToSection = (section) => {
    if (!Object.values(Section).includes(section)) {
      console.error(`Tried to scroll to invalid section: ${section}`);
      return;
    }

    const offset = isMobile ? 10 : 100;
    const element = document.getElementById(section);
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return scrollToSection;
}