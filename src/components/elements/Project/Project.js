import React, { Component } from "react";
import "./Project.scss";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            clicked: false,
        };
    }

    onClick = (e) => {
        this.setState((prevState) => {
            return {
                clicked: !prevState.clicked,
            };
        });
    };

    render() {
        const { name, projectId, projectSrc } = this.props;
        const { hover, clicked } = this.state;
        return (
            <div
                id={projectId}
                className={`project-preview ${hover ? "hover-effect" : ""} ${clicked ? "click-transition-background" : ""}`}
                // onMouseEnter={this.onMouseOver}
                // onMouseLeave={this.onMouseOver}
                onClick={this.onClick}
            >
                <img
                    className={`${clicked ? "click-transition-img" : ""}`}
                    src={projectSrc}
                    alt="mockup"
                    width="450"
                    height="250"
                />
                <div className="project-hover">
                    <h3>{name}</h3>
                    <p>Click for more info</p>
                </div>
            </div>
        );
    }
}

export default Project;
