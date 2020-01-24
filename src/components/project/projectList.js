import React from 'react'
import ProjectSummary from './projectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.projectId} />
        )
      })}  
    </div>
  )
}

export default ProjectList