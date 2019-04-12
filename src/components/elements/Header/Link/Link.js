import React from 'react';
import './Link.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Link = ({ name, pathName }) => {
    console.log(pathName);
    return (
        <a href={ pathName === '/Home' || pathName === "/" ? `#${name}` : `./Home#${name}`}> 
            <div className="links">
                <h1>{name}</h1>
            </div>
        </a>            
    )
}

export default Link;