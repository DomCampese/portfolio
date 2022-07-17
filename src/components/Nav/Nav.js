import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useScrollSection } from 'react-scroll-section';
import './nav-styles.css'

const Nav = () => {
  const homeSection = useScrollSection('home');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  return (
    <div className='nav'>
      <div className="nav-content-left">
        <ul>
          <li onClick={homeSection.onClick} selected={homeSection.selected}>Home</li>
          <li onClick={projectsSection.onClick} selected={projectsSection.selected}>Projects</li>
          <li onClick={contactSection.onClick} selected={contactSection.selected}>Contact</li>
        </ul>
      </div>
      <div className="nav-content-right">
        <SocialIcon className='social-icon' url='https://www.linkedin.com/in/dominic-campese-560bb31b0/'/>
        <SocialIcon className='social-icon' url='https://github.com/DomCampese'/>
      </div>
    </div>
  )
}

export default Nav
