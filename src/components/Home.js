import React from 'react';
import portrait from '../images/portrait.jpg'
import HoverableLink from './HoverableLink';

const Home = () => {
  return (
    <div style={styles.content}>
      <div style={styles.portraitWrapper}>
        <img style={styles.portrait} src={portrait} alt='Dom Campese'></img>
      </div>
      <div style={styles.description}>
        <p style={{ lineHeight: 1.5 }}>
          I'm Dom Campese - a Junior at the University of Pittsburgh studying Computer Science. 
          I'm passionate about Computer Science and full stack web development. Check out some
          of my work and feel free to contact me!
        </p>
      </div>
      <div style={styles.contactButtonWrapper}>
        <HoverableLink 
          style={styles.contactButton}
          hover={styles.contactButtonHover}
          to='/contact'>get in touch
        </HoverableLink>
      </div>
    </div>
  )
}

export default Home

const styles = {
  content: {
    fontSize: 18,
    marginTop: 90,
    marginLeft: '10%',
    marginRight: '15%'
  },
  contactButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactButton: {
    backgroundImage: 'linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%)',
    textDecoration: 'none',
    padding: '15px 45px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',            
    boxShadow: '0 0 20px #eee',
    borderRadius: 10,
    fontWeight: 'bold' 
  },
  contactButtonHover: {
    backgroundPosition: 'right center',
    color: '#fff'
  },
  portraitWrapper: {
    width: '100%',
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  portrait: {
    height: 400,
    width: 500
  },
  description: {
    margin: '0 20% 0 20%'
  }
}