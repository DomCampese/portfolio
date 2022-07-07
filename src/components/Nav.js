import React from 'react';
import { SocialIcon } from 'react-social-icons';
import HoverableLink from './HoverableLink';

const Nav = () => {
  return (
    <div style={styles.nav}>
      <div style={styles.contentLeft}>
        <ul>
          <li style={styles.li}>
            <HoverableLink style={styles.link} hover={styles.linkHover} to='/'>Home</HoverableLink>
          </li>
          <li style={styles.li}>
            <HoverableLink style={styles.link} hover={styles.linkHover} to='/projects'>Projects</HoverableLink>
          </li>
          <li style={styles.li}>
            <HoverableLink style={styles.link} hover={styles.linkHover} to='/contact'>Contact</HoverableLink>
          </li>
        </ul>
      </div>
      <div styles={styles.contentRight}>
        <SocialIcon style={styles.socialIcon} url='https://www.linkedin.com/in/dominic-campese-560bb31b0/'/>
        <SocialIcon style={styles.socialIcon} url='https://github.com/DomCampese'/>
      </div>
    </div>
  )
}

export default Nav

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'white', 
    opacity: '.95',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px'
  },
  contentLeft: {
    flex: 1
  },
  li: {
    display: 'inline',
    paddingLeft: 10,
    padding: 10,
    textDecoration: 'none',
    height: 100,
    fontSize: 18
  },
  contentRight: {
    marginTop: 1,
    marginRight: 10
  },
  socialIcon: {
    margin: 5
  },
  link: {
    textDecoration: 'none',
    color: '#000'
  },
  linkHover: {
    textDecoration: 'underline',
    color: '#000'
  }
}
