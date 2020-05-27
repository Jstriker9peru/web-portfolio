import React, { Component } from 'react';
import './SingleProject.scss';
import { Link } from 'react-router-dom';
import { goToTop } from 'react-scrollable-anchor';


class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }
    transition = () => {
        setTimeout(() => {
            this.setState({
                ready: true
            })
        }, 1);
    }
    render() {
        goToTop();
        
        const { state } = this.props.location;
        const { ready } = this.state;
        if (!ready) {
            this.transition();
        }
        let otherList = state.projectList.filter((el) => {
            return el.src !== state.allInfo.src;
        });
        return(
            <div className={`single-project-container ${ready ? 'expand' : ''}`}>
                <div className="title-container">
                    <h1>{state.allInfo.name}</h1>
                </div>
                <div className="top-container">
                    <div className="img-container">
                        <img src={state.allInfo.src} alt="project-img" width="626" height="375" />
                    </div>
                    <div className="description-container">
                        <h2>Project Details</h2>
                        <p>{state.allInfo.info} </p>
                    </div>
                </div>
                <div className="middle-container">
                    <div className="extra-details">
                        <div className="extra1">
                            <h3>Technology Used</h3>
                            <h4>Something</h4>
                        </div>
                        <div className="line"></div>
                        <div className="extra2">
                            <h3>Website Type</h3>
                            <h4>Something</h4>
                        </div>
                        <div className="line"></div>
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
                                <Link to={{ pathname: `/${el.id}`, state: { projectList: state.projectList, allInfo: el } }} key={index} >
                                    <div className="project-img" key={index}>
                                        <img src={el.src} alt="img1" width="250" height='150' />
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