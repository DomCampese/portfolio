import React, { useState, useRef, useEffect } from 'react';
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

  const toggleMobileSideMenu = () => {
    if (mobileNavOpen) {
      mobileSideMenuRef.current?.classList.add('slide-out');
      mobileSideMenuRef.current?.classList.remove('slide-in');
      document.documentElement?.classList.remove('no-scroll');
    } else {
      mobileSideMenuRef.current?.classList.add('slide-in');
      mobileSideMenuRef.current?.classList.remove('slide-out');
      document.documentElement.classList?.add('no-scroll');
    }
    setMobileNavOpen(!mobileNavOpen);
  }

  const handleSideMenuClick = (section) => {
    scrollToSection(section);
    toggleMobileSideMenu();
  }

  useEffect(() => {
    if (mobileNavOpen) {
      toggleMobileSideMenu();
    }
  }, [isMobile]);

  return (
    <>
      {(isMobile)
        ? 
          <>
            {mobileNavOpen && <div onClick={toggleMobileSideMenu} className='backdrop'></div>}
            <div className={(mobileNavOpen) ? 'mobile-nav ex-mark' : 'mobile-nav' }>
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
                  style={{ background: 'none' }}
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={30}
                />
              </div>
            </div>
          </>
        : <div className='nav'>
            <div className="nav-content-left">
              <ul>
                <li onClick={() => scrollToSection(Section.ABOUT)}>About</li>
                <li onClick={() => scrollToSection(Section.SKILLS)}>Skills</li>
                <li onClick={() => scrollToSection(Section.PROJECTS)}>Projects</li>
                <li onClick={() => scrollToSection(Section.CONTACT)}>Contact</li>
              </ul>
            </div>
            <DarkModeSwitch
              style={{ marginRight: 25 }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={25}
            />
          </div>
      }
    </>
  )
}

export default Nav
