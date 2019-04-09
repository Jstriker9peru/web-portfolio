import React, { Component } from 'react';
import './Header.scss';
import { Link as Linker } from 'react-router-dom';
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
                    {this.state.links.map((el, index) => {
                        if (el === 'Home') {
                            return (
                                <Linker to="/Home">
                                    <Link key={index} name={el}/>
                                </Linker>
                            )
                        } else {
                            return (
                              <Link key={index} name={el}/>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Header;