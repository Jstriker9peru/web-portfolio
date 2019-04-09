import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseOver(e) {
        this.setState(prevState => {
            return {
                hover: !prevState.hover
            }
        })
    }
    render() {
        const { name, projectId, projectSrc } = this.props;
        return (
            <div id={projectId} className={`project-preview ${this.state.hover ? 'hover-effect' : ''}`} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOver} >
                <img src={projectSrc} alt="mockup" width="450" height="250" />
                <div className="project-hover"><h3>{name}</h3></div>
            </div>
        )
    }
}

export default Project;