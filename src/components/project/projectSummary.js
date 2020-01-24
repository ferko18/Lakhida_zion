import React from 'react'
import {project} from '../../store/project/projectReducer'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">Project Name: {project.projectname}</span>
        <p>project ID: {project.projectId}</p>
        <p>Company : {project.company}</p>
        <p>Project Description : {project.projectdescription}</p>
        <p className="grey-text">January 18th, 2020 - 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary