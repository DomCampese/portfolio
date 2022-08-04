import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './project-styles.css'
import { projectData } from './projectData'

const Projects = () => {
  return (
    <div className='content'>
      <h1 style={{ marginBottom: '5px' }}>Projects</h1>
      <div className='underline'></div>
      <div className='projects-wrapper'>
        {projectData.map((currentProject) => {
          return (
            <ProjectCard {...currentProject}/>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
