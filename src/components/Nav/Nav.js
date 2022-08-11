import React, { useState, useRef } from 'react';
import { useScrollSection } from 'react-scroll-section';
import './nav-styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Nav = () => {

  const aboutSection = useScrollSection('about');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  const width = useWindowDimensions().width;

  const mobileSideMenuRef = useRef(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isMobile = (width <= 750);

  const toggleMobileSideMenu = () => {
    if (mobileNavOpen) {
      mobileSideMenuRef.current.classList.add('slide-out');
      mobileSideMenuRef.current.classList.remove('slide-in');
    } else {
      mobileSideMenuRef.current.classList.add('slide-in');
      mobileSideMenuRef.current.classList.remove('slide-out');
    }
    setMobileNavOpen(!mobileNavOpen);
  }

  const handleSideMenuClick = (sectionOnclick) => {
    sectionOnclick();
    toggleMobileSideMenu();
  }

  return (
    <>
      {(isMobile)
        ? <div className={(mobileNavOpen) ? 'mobile-nav ex-mark' : 'mobile-nav' }>
            <button className='hamburger' onClick={toggleMobileSideMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div ref={mobileSideMenuRef} className='mobile-nav-side-menu'>
              <ul>
                <li onClick={() => handleSideMenuClick(aboutSection.onClick)} selected={aboutSection.selected}>About</li>
                <li onClick={() => handleSideMenuClick(projectsSection.onClick)} selected={projectsSection.selected}>Projects</li>
                <li onClick={() => handleSideMenuClick(contactSection.onClick)} selected={contactSection.selected}>Contact</li>
              </ul>
            </div>
          </div>                
        : <div className='nav'>
            <div className="nav-content-left">
              <ul>
                <li onClick={aboutSection.onClick} selected={aboutSection.selected}>About</li>
                <li onClick={projectsSection.onClick} selected={projectsSection.selected}>Projects</li>
                <li onClick={contactSection.onClick} selected={contactSection.selected}>Contact</li>
              </ul>
            </div>
          </div>
      }
    </>
  )
}

export default Nav
