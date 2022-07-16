import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../../images/portrait.jpg'
import './home-styles.css'

const Home = () => {
  return (
    <div className='content'>
      <div className='greeting-wrapper'>
        <p className='greeting'>Hello.</p>
      </div>
      <div className='portrait-wrapper'>
        <img className='portrait' src={portrait} alt='Dom Campese'></img>
      </div>
      <div className='description'>
        <p>
          I'm Dom Campese, a Junior at the University of Pittsburgh studying Computer Science. 
          I'm passionate about Computer Science and full stack web development. Check out some
          of my work and feel free to contact me!
        </p>
      </div>
      <div className="contact-button-wrapper">
        <Link className='contact-button' to='/contact'>get in touch</Link>
      </div>
    </div>
  )
}

export default Home
