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
                <section className="first-container">
                    <div className="front-text">
                        <h1>Jonathan Espinoza</h1>
                        <h2>Front-End Developer</h2>
                        <p>I design and code beautifully simple things, and I love what I do.</p>
                    </div>
                    <div className="pic">
                        <img src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170506999/78062109-young-man-face-isolated-on-white-background-handsome-boy-face-expression-cartoon-vector-illustration.jpg" alt="avatar" />
                    </div>
                </section>
                <section className="skills-section" style={{height: '100vh', background: 'white'}}>
                    <h1>Skills</h1>
                    <div className="skills-container">
                        <div className="skill-type">
                            <h3>Front</h3>
                        </div>
                        <div className="skill-type">
                            <h3>Back</h3>                            
                        </div>
                        <div className="skill-type">
                            <h3>CMS</h3>                        
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;