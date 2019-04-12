import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="line1">
            </div>
            <div className="sites-container">
                <div className="email-container">
                    <a className="ext-link" href="mailto:jonespinoza111@gmail.com">
                        <div className="circle">
                            <i className="fas fa-envelope"></i> 
                        </div>
                    </a>
                    <span>jonespinoza111@gmail.com</span>
                </div>
                <div className="email-container">
                    <a className="ext-link" href="https://www.linkedin.com/in/jonathan-espinoza-21965a184/" target="_blank" rel="noopener noreferrer">
                        <div className="circle">
                        <i className="fab fa-linkedin"></i>
                        </div>
                    </a>
                    <span>LinkedIn</span>
                </div>
                <div className="email-container">
                    <a className="ext-link" href="https://github.com/Jstriker9peru" target="_blank" rel="noopener noreferrer">
                        <div className="circle">
                        <i className="fab fa-github-alt"></i>
                        </div>
                    </a>
                    <span>Github</span>
                </div>
            </div>
            <div className="line2">
            </div>
        </footer>
    )
}

export default Footer;