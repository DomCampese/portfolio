import React from 'react'
import './project-card-styles.css'

const ProjectCard = ({ image, title, description, demoUrl, githubUrl }) => {
  return (
    <div className='card'>
      <img className='image' src={image}></img>
      <div className='card-text-wrapper'>
        <div style={{ margin: 10 }}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div style={{ display: 'flex' }}>
            <a href={demoUrl}>Demo</a>
            <a href={githubUrl}>Code</a>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default ProjectCard