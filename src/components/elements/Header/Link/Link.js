import React from 'react';
import './Link.scss';

const Link = ({ name, pathName }) => {
    console.log(pathName);
    return (
        <a href={ pathName === '/Home' ? `#${name}` : `./Home#${name}`}>
            <div className="links">
                <h1>{name}</h1>
            </div>
        </a>
            
    )
}

export default Link;