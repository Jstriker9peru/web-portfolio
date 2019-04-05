import React, { Component } from 'react';
import './Home.scss';
import Header from '../elements/Header/Header';
import Skill from '../elements/Skill/Skill';
import '../../images/logos/react-logo.png';

class Home extends Component {
    state = {
        links: ['Home', 'About', 'Projects', 'Contact'],
        front: [
            {
                name: 'React JS',
                src: './logos/react-logo.png',
                alt: 'React Logo',
                width: '',
                height: '',
            },
            {
                name: 'JavaScript',
                src: '../../../images/logos/javascript-logo.png',
                alt: 'JavaScript Logo',
                width: '',
                height: '',
            },
            {
                name: 'HTML5',
                src: '../../images/logos/html5-logo',
                alt: 'HTML5 Logo',
                width: '',
                height: '',
            },
            {
                name: 'CSS3',
                src: '../../images/logos/css3-logo',
                alt: 'CSS3 Logo',
                width: '',
                height: '',
            },
            {
                name: 'Pug JS',
                src: '../../images/logos/pug-logo',
                alt: 'Pug Logo',
                width: '',
                height: '',
            },
            {
                name: 'Sass',
                src: '../../images/logos/sass-logo',
                alt: 'Sass Logo',
                width: '',
                height: '',
            }

        ]
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
                            <div className="logo-box">
                                {this.state.front.map((el, index) => {
                                    return <Skill key={index} name={el.name} imgsrc={el.src} alt={el.alt}  />
                                })}
                            </div>
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