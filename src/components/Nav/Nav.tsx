import { useState, useRef, useEffect, useCallback } from 'react';
import './nav-styles.css';
import { useMobile, useScrollToSection } from '@hooks';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Section } from '@constants';

interface NavProps {
  isDarkMode: boolean
  toggleDarkMode: (checked: boolean) => void
}

const Nav = ({ isDarkMode, toggleDarkMode }: NavProps) => {
  const isMobile = useMobile();
  const scrollToSection = useScrollToSection();
  const mobileSideMenuRef = useRef<HTMLElement>(null);
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

  const handleSideMenuClick = (section: string) => {
    scrollToSection(section);
    toggleMobileSideMenu();
  };

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
              <button className='hamburger' onClick={toggleMobileSideMenu} aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileNavOpen} aria-controls='mobile-menu'>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <nav id='mobile-menu' ref={mobileSideMenuRef} className='mobile-nav-side-menu' aria-label='Main navigation' aria-hidden={!mobileNavOpen}>
                <ul>
                  <li><button type='button' onClick={() => handleSideMenuClick(Section.ABOUT)}>About</button></li>
                  <li><button type='button' onClick={() => handleSideMenuClick(Section.SKILLS)}>Skills</button></li>
                  <li><button type='button' onClick={() => handleSideMenuClick(Section.PROJECTS)}>Projects</button></li>
                  <li><button type='button' onClick={() => handleSideMenuClick(Section.CONTACT)}>Contact</button></li>
                </ul>
              </nav>
              <div className='dark-mode-switch-mobile'>
                <button
                  type='button'
                  className='theme-toggle'
                  onClick={() => toggleDarkMode(!isDarkMode)}
                  aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                  {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
              </div>
            </div>
          </>
        : <div className='nav'>
            <div></div>
            <nav className='nav-center' aria-label='Main navigation'>
              <ul>
                <li><button type='button' onClick={() => scrollToSection(Section.ABOUT)}>About</button></li>
                <li><button type='button' onClick={() => scrollToSection(Section.SKILLS)}>Skills</button></li>
                <li><button type='button' onClick={() => scrollToSection(Section.PROJECTS)}>Projects</button></li>
                <li><button type='button' onClick={() => scrollToSection(Section.CONTACT)}>Contact</button></li>
              </ul>
            </nav>
            <div className='nav-right'>
              <button
                type='button'
                className='theme-toggle'
                onClick={() => toggleDarkMode(!isDarkMode)}
                aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>
      }
    </>
  );
};

export default Nav;
