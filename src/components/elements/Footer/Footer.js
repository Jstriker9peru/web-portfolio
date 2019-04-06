import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="resume-container">
                <h3>Check Out My</h3>
                <div className="button">
                    <div>Resume</div>
                </div>
            </div>
            <div className="sites-container">
                <div className="email-container">
                    <div className="circle">
                        <i className="fas fa-envelope"></i> 
                    </div>
                    <span>jstriker9peru@gmail.com</span>
                </div>
                <div className="email-container">
                    <div className="circle">
                    <i className="fab fa-linkedin-in"></i>
                    </div>
                    <span>LinkedIn</span>
                </div>
                <div className="email-container">
                    <div className="circle">
                    <i className="fab fa-github-alt"></i>
                    </div>
                    <span>Github</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;