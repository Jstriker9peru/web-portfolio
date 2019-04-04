import React from 'react';
import './Link.scss';

const Link = ({ name }) => {
    return (
        <div className="hexagon">
            <h1>{name}</h1>
        </div>
            
    )
}

export default Link;