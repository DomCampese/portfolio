import React from 'react'
import './projects-styles.css'
import { projects } from '../../content'
import Header from '../reusable/Header'

const Projects = () => {
  return (
    <div className='content projects-section'>
      <Header>Projects</Header>
      <div className='projects-list'>
        {projects.map(({ title, image, description, tags, demoUrl, githubUrl }, index) => (
          <div className='project-card' key={index}>
            <img className='project-image' alt={title} src={image} />
            <div className='project-text'>
              <h3 className='project-title'>{title}</h3>
              <p className='project-description'>{description}</p>
              {tags && (
                <div className='project-tags'>
                  {tags.map(tag => (
                    <span className='project-tag' key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <div className='project-links'>
                {demoUrl && (
                  <a href={demoUrl} className='project-link project-link-primary' target='_blank' rel='noreferrer'>
                    Live demo
                  </a>
                )}
                {githubUrl && (
                  <a href={githubUrl} className='project-link' target='_blank' rel='noreferrer'>
                    View code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
