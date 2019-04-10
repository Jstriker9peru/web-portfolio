import React, { Component } from 'react';
import './Header.scss';
import { Link as Linker, withRouter } from 'react-router-dom';
import Link from './Link/Link';

class Header extends Component {
    state = {
        links: ['Home', 'About', 'Projects', 'Contact']
    }
    render() {
        const { pathname } = this.props.location;
        return (
            <div className="Header">
                {/* <div className="icon">
                    <h1>Header</h1>
                </div> */}
                <div className="link-container">
                    {this.state.links.map((el, index) => {
                        if (el === 'Home') {
                            return (
                                <Linker key={index} to="/Home">
                                    <Link key={index} name={el}/>
                                </Linker>
                            )
                        } else {
                            return (
                              <Link key={index} name={el} pathName={pathname} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);