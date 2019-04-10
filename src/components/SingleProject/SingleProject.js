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
                <div className="extra-details">
                    <div className="extra1">
                        <h3>Technology Used</h3>
                        <h4>Something</h4>
                    </div>
                    <div className="extra2">
                        <h3>Website Type</h3>
                        <h4>Something</h4>
                    </div>
                    <div className="extra3">
                        <h3>Mobile Responsive</h3>
                        <h4>Something</h4>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <h2>Other Projects</h2>
                <div className="img-container">
                    <div className="project-img">
                        <img src="https://i0.wp.com/365webresources.com/wp-content/uploads/2018/10/FREE-Website-MOCKUP.jpg?ssl=1" alt="img1" width="200" height='150' />
                    </div>
                    <div className="project-img">
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/119072809/original/cc78b14638c8cae97938cd5839e5be74cf8394b2/design-creative-unique-psd-website-mockup-and-app-mockup-in-24-hours.png" alt="img2" width="200" height='150' />
                    </div>
                    <div className="project-img">
                        <img src="http://mockuplove.com/wp-content/uploads/2017/05/freshy-free-website-template.png" alt="img3" width="200" height='150' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;