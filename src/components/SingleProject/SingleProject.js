import React, { Component } from 'react';
import './SingleProject.scss';
import { Link } from 'react-router-dom';
import { goToTop } from 'react-scrollable-anchor';

class SingleProject extends Component {
    render() {
        goToTop();
        const { match } = this.props;
        const { state } = this.props.location;
        let otherList = state.projectList.filter((el) => {
            return el.src !== state.projectSrc;
        });
        return(
            <div className="single-project-container">
                <div className="title-container">
                    <h1>{match.params.projectId}</h1>
                </div>
                <div className="top-container">
                    <div className="img-container">
                        <img src={state.projectSrc} alt="project-img" width="626" height="375" />
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
                        {otherList.map((el, index) => {
                            return (
                                <Link to={{ pathname: `/${el.id}`, state: {projectSrc: `${el.src}`, projectList: state.projectList } }} key={index} >
                                    <div className="project-img" key={index}>
                                        <img src={el.src} alt="img1" width="200" height='150' />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProject;