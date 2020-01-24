import React from "react";
import "./projectpage-styles.scss";
import Dashboard from '../../components/project/Dashboard'
import ProjectSummary from '../../components/project/projectSummary'


function ProjectDashboard() {
    //if(path=='/project/:id')
  return (
    <div className="projectpage">
      <Dashboard />
      
    </div>
  );
}

export default ProjectDashboard;
