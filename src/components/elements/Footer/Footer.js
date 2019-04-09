import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer id="Contact">
            <div className="line1">
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
                    <i className="fab fa-linkedin"></i>
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
            <div className="line2">
            </div>
        </footer>
    )
}

export default Footer;