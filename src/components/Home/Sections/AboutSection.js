import React from 'react';
import CircularImage from '../../elements/CircularImage/CircularImage';
import './AboutSection.scss';

export const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-row row-1">
                <CircularImage
                    img1="fas fa-mobile-alt"
                    img2="fas fa-desktop"
                />
                <div className="text text1">
                    <h2>Who am I?</h2>
                    <p>
                        I am a passionate web developer who enjoys
                        creating mobile-friendly websites.
                    </p>
                    <p>
                        My goal is to continually improve my development
                        skills and try to keep up to date with the
                        latest technologies.
                    </p>
                </div>
            </div>
            <div className="about-row row-2">
                <CircularImage
                    img1="fas fa-smile"
                    img2="fas fa-pencil-alt"
                />
                <div className="text text2">
                    <h2>What can I do?</h2>
                    <p>
                        I can help create a website that will enhance
                        your business and keep visitors satisfied with
                        it's ease-of-use
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;

