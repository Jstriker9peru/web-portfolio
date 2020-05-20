import React, { Component } from "react";
import { configureAnchors } from "react-scrollable-anchor";
import ProjectsSection from "./Sections/ProjectsSection";
import Footer from "../elements/Footer/Footer";
import AboutSection from "./Sections/AboutSection";
import FrontSection from "./Sections/FrontSection";
import ScrollableAnchor from "react-scrollable-anchor";
import "./Home.scss";

class Home extends Component {
    render() {
        configureAnchors({ offset: 0, scrollDuration: 500 });

        const { projectInfo } = this.props;

        return (
            <div className="Home">
                <ScrollableAnchor id={"Home"}>
                    <FrontSection />
                </ScrollableAnchor>

                <ScrollableAnchor id={"About"}>
                    <div className="section-title">
                        <h1>ABOUT</h1>
                    </div>
                </ScrollableAnchor>
                <AboutSection />

                <ScrollableAnchor id={"Projects"}>
                    <div className="section-title">
                        <h1>PROJECTS</h1>
                    </div>
                </ScrollableAnchor>

                <ProjectsSection projectInfo={projectInfo} />

                <ScrollableAnchor id={"Contact"}>
                    <div className="section-title">
                        <h1>CONTACT</h1>
                    </div>
                </ScrollableAnchor>
                <Footer />
            </div>
        );
    }
}

export default Home;
