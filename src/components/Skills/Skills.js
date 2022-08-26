import React from 'react'
import Header from '../reusable/Header'
import './skills-styles.css'
import { skills } from '../../content'

const Skills = () => {
  return (
    <div className='content'>
      <Header>Skills</Header>
      <div className='skill-cards'>
        {skills.map(({ Logo, name }, index) => {
          return (
            <div className='skill-card' key={index}>
              <Logo/>
              <p className='skill-card-text'>{name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills