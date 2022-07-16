import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../../images/portrait.jpg'
import './home-styles.css'

const Home = () => {
  return (
    <div className='content'>
      <div className="intro">
        <div className='portrait-wrapper'>
          <div>
            <img className='portrait' src={portrait} alt='Dom Campese'></img>
          </div>
        </div>
        <div className='description'>
          <p>
            My name's Dom Campese. I am a Senior at the University of Pittsburgh studying Computer Science
            with a minor in Spanish. I'm a passionate full-stack Software Engineer with industry experience
            in React and .NET and am comfortable with multiple other languages, frameworks, and technologies. I live and work in the greator Pittsburgh area. Feel free to check out my work 
            on <a href='https://www.linkedin.com/in/dominic-campese-560bb31b0/'>Github</a> or <a href='https://www.linkedin.com/in/dominic-campese-560bb31b0/'>LinkedIn</a> and please reach out with any questions or opportunities!
          </p>
        </div>
        <div className="contact-button-wrapper">
          <Link className='contact-button' to='/contact'>get in touch</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
