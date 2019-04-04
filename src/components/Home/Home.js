import React, { Component } from 'react';
import './Home.scss';
import Header from '../elements/Header/Header';

class Home extends Component {
    state = {
        links: ['Home', 'About', 'Projects', 'Contact']
    }
    render() {
        return (
            <div className="Home">
                <Header links={this.state.links} />
            </div>
        )
    }
}

export default Home;