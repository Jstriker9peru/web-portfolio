import React from 'react';
import './SingleProject.scss';

const SingleProject = ({ match }) => {
    return(
        <div className="single-project-container">
            <div className="title-container">
                <h1>{match.params.projectId}</h1>
            </div>
            <div className="top-container">
                <div className="img-container">
                    <img src="https://image.freepik.com/free-psd/modern-website-mockup_23-2148043716.jpg" alt="project-img" />
                </div>
                <div className="description-container">
                    <h2>Project Details</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Iaculis nunc sed augue lacus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Cras tincidunt lobortis feugiat vivamus. Imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Faucibus interdum posuere lorem ipsum dolor. </p>
                </div>
            </div>
            <div className="middle-container">
                <div>
                    <div>Technology Used</div>
                    <div>Website Type</div>
                    <div>Mobile Responsive</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;