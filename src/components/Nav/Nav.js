import React, { useState } from 'react';
import { useScrollSection } from 'react-scroll-section';
import './nav-styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Nav = () => {

  const aboutSection = useScrollSection('about');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  const width = useWindowDimensions().width;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isMobile = (width <= 750);

  return (
    <>
      {(isMobile)
        ? <div className='mobile-nav'>
            {(mobileNavOpen)
              ? <div className='mobile-nav-side-menu'>
                  <ul>
                    <li onClick={aboutSection.onClick} selected={aboutSection.selected}>About</li>
                    <li onClick={projectsSection.onClick} selected={projectsSection.selected}>Projects</li>
                    <li onClick={contactSection.onClick} selected={contactSection.selected}>Contact</li>
                  </ul>
                </div>
              : <button 
                  className='hamburger'
                  onClick={() => setMobileNavOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
            }                       
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
