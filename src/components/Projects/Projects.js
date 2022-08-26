import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './projects-styles.css'
import { projectData } from '../../content'
import useMobile from '../../hooks/useMobile'

const Projects = () => {

  const isMobile = useMobile();

  return (
    <div className='content'>
      <h1 style={(!isMobile) ? { marginBottom: 5 } : {}}>Projects</h1>
      {(!isMobile) && <div className='underline'></div>}
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
