import React from 'react';
import './Project.scss';

const Project = ({ name, projectId, projectSrc }) => {
    return (
        <div id={projectId} className="project-preview">
            <img src={projectSrc} alt="mockup" width="450" height="250" />
            <div className="project-hover"><h3>{name}</h3></div>
        </div>
    )
}

export default Project;