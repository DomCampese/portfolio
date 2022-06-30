import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Nav = () => {
    return (
        <div className='nav'>
            <div className="nav-content-left">
                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/projects'>Projects</Link></li>
                    <li><Link className='link' to='/contact'>Contact</Link></li>
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
