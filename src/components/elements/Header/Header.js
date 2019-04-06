import React from 'react';
import './Header.scss';
import Link from './Link/Link';

const Header = ({ links }) => {
    console.log(links);
    return (
        <div className="Header">
            {/* <div className="icon">
                <h1>Header</h1>
            </div> */}
            <div className="link-container">
                {links.map((el, index) => <Link key={index} name={el} />)}
            </div>
        </div>
    )
}

export default Header;