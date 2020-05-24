import React from 'react';
import './CircularImage.scss';

export const CircularImage = ({ img1, img2 }) => {
    return (
        <div className="circular-img">
            <i className={`${img1} image image1`}></i>
            <i className={`${img2} image image2 `}></i>
        </div>
    )
}

export default CircularImage;




