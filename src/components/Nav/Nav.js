import React, { useState, useRef, useEffect, useCallback } from 'react';
import './nav-styles.css'
import useMobile from '../../hooks/useMobile'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Section } from '../../constants/Section';
import { useScrollToSection } from '../../hooks/ScrollToSection';

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const isMobile = useMobile();
  const scrollToSection = useScrollToSection();
  const mobileSideMenuRef = useRef(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileSideMenu = useCallback(() => {
    setMobileNavOpen(isMobileNavOpen => {
      if (isMobileNavOpen) {
        mobileSideMenuRef.current?.classList.add('slide-out');
        mobileSideMenuRef.current?.classList.remove('slide-in');
        document.documentElement?.classList.remove('no-scroll');
      } else {
        mobileSideMenuRef.current?.classList.add('slide-in');
        mobileSideMenuRef.current?.classList.remove('slide-out');
        document.documentElement.classList?.add('no-scroll');
      }
      return !isMobileNavOpen;
    });
  }, [mobileSideMenuRef]);

  const handleSideMenuClick = (section) => {
    scrollToSection(section);
    toggleMobileSideMenu();
  }

  useEffect(() => {
    if (mobileNavOpen && !isMobile) {
      toggleMobileSideMenu();
    }
  }, [isMobile, mobileNavOpen, toggleMobileSideMenu]);

  return (
    <>
      {isMobile
        ? <>
            {mobileNavOpen && <div onClick={toggleMobileSideMenu} className='backdrop'></div>}
            <div className={mobileNavOpen ? 'mobile-nav ex-mark' : 'mobile-nav'}>
              <button className='hamburger' onClick={toggleMobileSideMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div ref={mobileSideMenuRef} className='mobile-nav-side-menu'>
                <ul>
                  <li onClick={() => handleSideMenuClick(Section.ABOUT)}>About</li>
                  <li onClick={() => handleSideMenuClick(Section.SKILLS)}>Skills</li>
                  <li onClick={() => handleSideMenuClick(Section.PROJECTS)}>Projects</li>
                  <li onClick={() => handleSideMenuClick(Section.CONTACT)}>Contact</li>
                </ul>
              </div>
              <div className='dark-mode-switch-mobile'>
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={28}
                />
              </div>
            </div>
          </>
        : <div className='nav'>
            <div></div>
            <nav className='nav-center'>
              <ul>
                <li onClick={() => scrollToSection(Section.ABOUT)}>About</li>
                <li onClick={() => scrollToSection(Section.SKILLS)}>Skills</li>
                <li onClick={() => scrollToSection(Section.PROJECTS)}>Projects</li>
                <li onClick={() => scrollToSection(Section.CONTACT)}>Contact</li>
              </ul>
            </nav>
            <div className='nav-right'>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={22}
              />
            </div>
          </div>
      }
    </>
  )
}

export default Nav
