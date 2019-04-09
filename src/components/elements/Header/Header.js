import React, { Component } from 'react';
import './Header.scss';
import Link from './Link/Link';

class Header extends Component {
    state = {
        links: ['Home', 'About', 'Projects', 'Contact']
    }
    render() {
        return (
            <div className="Header">
                {/* <div className="icon">
                    <h1>Header</h1>
                </div> */}
                <div className="link-container">
                    {this.state.links.map((el, index) => <Link key={index} name={el} />)}
                </div>
            </div>
        )
    }
}

export default Header;