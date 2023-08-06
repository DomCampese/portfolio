import React, { useState, useRef } from 'react';
import { useScrollSection } from 'react-scroll-section';
import './nav-styles.css'
import useMobile from '../../hooks/useMobile'

const Nav = () => {

  const aboutSection = useScrollSection('about');
  const skillsSection = useScrollSection('skills');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  const isMobile = useMobile();

  const mobileSideMenuRef = useRef(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
                <li onClick={() => handleSideMenuClick(skillsSection.onClick)} selected={skillsSection.selected}>Skills</li>
                <li onClick={() => handleSideMenuClick(projectsSection.onClick)} selected={projectsSection.selected}>Projects</li>
                <li onClick={() => handleSideMenuClick(contactSection.onClick)} selected={contactSection.selected}>Contact</li>
              </ul>
            </div>
          </div>
        : <div className='nav'>
            <div className="nav-content-left">
              <ul>
                <li onClick={aboutSection.onClick} selected={aboutSection.selected}>About</li>
                <li onClick={skillsSection.onClick} selected={skillsSection.selected}>Skills</li>
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
