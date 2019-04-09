import React from 'react';
import './Link.scss';

const Link = ({ name }) => {
    return (
        <a href={`#${name}`}>
            <div className="links">
                <h1>{name}</h1>
            </div>
        </a>
            
    )
}

export default Link;