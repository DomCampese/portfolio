import React from 'react';
import { useScrollSection } from 'react-scroll-section';
import './styles.css'

const Nav = () => {
  const aboutSection = useScrollSection('about');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  return (
    <div className='nav'>
      <div className="nav-content-left">
        <ul>
          <li onClick={aboutSection.onClick} selected={aboutSection.selected}>Home</li>
          <li onClick={projectsSection.onClick} selected={projectsSection.selected}>Projects</li>
          <li onClick={contactSection.onClick} selected={contactSection.selected}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
