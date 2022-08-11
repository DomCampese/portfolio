import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './projects-styles.css'
import { projectData } from './projectData'

const Projects = () => {
  return (
    <div className='content'>
      <h1 style={{ marginBottom: '5px' }}>Projects</h1>
      <div className='underline'></div>
      <div className='projects-wrapper'>
        {projectData.map((currentProject, index) => {
          return (
            <ProjectCard key={index} {...currentProject}/>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
