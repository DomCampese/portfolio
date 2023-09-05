import React from 'react'
import './projects-styles.css'
import { projects } from '../../content'
import Header from '../reusable/Header'

const Projects = () => {
  return (
    <div className='content'>
      <Header>Projects</Header>
      <div className='projects-wrapper'>
        {projects.map(({ title,image, description, demoUrl, githubUrl }, index) => {
          return (
            <div className='card' key={index}>
              <img className='image' alt={title} src={image}></img>
              <div className='card-text-wrapper'>
                <div className='card-text' style={{ margin: 10 }}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div style={{ display: 'flex' }}>
                    {demoUrl && <a href={demoUrl}>Demo</a>}
                    {githubUrl && <a href={githubUrl} style={demoUrl && { marginLeft: 12 }}>Code</a>}
                  </div>
                </div>
              </div>
             </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
