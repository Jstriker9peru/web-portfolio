import React from 'react';
import './Link.scss';
import { goToTop } from 'react-scrollable-anchor';

const Link = ({ name, pathName }) => {
    return (
        <a href={ pathName === '/Home' || pathName === "/" ? `#${name}` : `./Home#${name}`} onClick={() => { if (name === "Home") { return goToTop() } }}> 
            <div className="links">
                <h1>{name}</h1>
            </div>
        </a>            
    )
}

export default Link;