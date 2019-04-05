import React from 'react';
import './Skill.scss';
import logo from './logos/pug-logo.png';

const Skill = ({ name, imgsrc, alt }) => {
    return (
        <div className="container1">
            <div className="box">
                <div className="circle">
                    <img src={logo} alt={alt} />
                </div>
                <h3 className="tag">{name}</h3>
            </div>
        </div>
    )
}

export default Skill;