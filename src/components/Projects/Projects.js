import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './projects-styles.css'
import { projects } from '../../content'
import useMobile from '../../hooks/useMobile'

const Projects = () => {

  const isMobile = useMobile();

  return (
    <div className='content'>
      <h1 style={(!isMobile) ? { marginBottom: 5 } : {}}>Projects</h1>
      {(!isMobile) && <div className='underline'></div>}
      <div className='projects-wrapper'>
        {projects.map((currentProject, index) => {
          return (
            <ProjectCard key={index} {...currentProject}/>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
