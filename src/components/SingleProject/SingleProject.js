import React from 'react';
import './SingleProject.scss';

const SingleProject = ({ match }) => {
    return(
        <div className="single-project-container">
            <h1>Hello this is {match.params.projectId}</h1>
        </div>
    )
}

export default SingleProject;