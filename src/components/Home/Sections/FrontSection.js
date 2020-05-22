import React from 'react';
import './FrontSection.scss';

export const FrontSection = () => {
    return (
        <section className="first-container">
            <div className="box-container">
                <img
                    width="250"
                    height="200"
                    alt="desktop"
                    src="/images/desktopimg3.png"
                />
                <div className="front-text">
                    <h1>Jonathan Espinoza</h1>
                    <h2>Professional Web Developer</h2>
                    <p>
                        I code beautifully simple things, and I love
                        what I do
                    </p>
                    <div className="text-ani">
                        <h2 className="start-text">I love to </h2>
                        <ul className="list-text">
                            <li>Code</li>
                            <li>Learn</li>
                            <li>Improve</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="resume-container">
                <h3>Check Out My</h3>
                <div className="button">
                    <div>Resume</div>
                    <i className="fas fa-external-link-alt"></i>
                </div>
            </div>
        </section>
    )
}

export default FrontSection;