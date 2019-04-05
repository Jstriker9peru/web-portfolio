import React, { Component } from 'react';
import './Home.scss';
import Header from '../elements/Header/Header';
import Skill from '../elements/Skill/Skill';
import pug from '../../images/logos/pug-logo.png';
import javascript from '../../images/logos/javascript-logo.png';
import react from '../../images/logos/react-logo.png';
import html5 from '../../images/logos/html5-logo.png';
import css3 from '../../images/logos/css3-logo.png';
import sass from '../../images/logos/sass-logo.png';
import jquery from '../../images/logos/jquery-logo.png';
import node from '../../images/logos/node-logo.png';
import gulp from '../../images/logos/gulp-logo.png';
import mysql from '../../images/logos/mysql-logo.png';
import php from '../../images/logos/php-logo.png';
import laravel from '../../images/logos/laravel-logo.png';
import wordpress from '../../images/logos/wordpress-logo.png';
import webpack from '../../images/logos/webpack-logo.png';

class Home extends Component {
    state = {
        links: ['Home', 'About', 'Projects', 'Contact'],
        front: [
            {
                name: 'React JS',
                src: react,
                alt: 'React Logo',
                width: '',
                height: '',
            },
            {
                name: 'JavaScript',
                src: javascript,
                alt: 'JavaScript Logo',
                width: '',
                height: '',
            },
            {
                name: 'HTML5',
                src: html5,
                alt: 'HTML5 Logo',
                width: '',
                height: '',
            },
            {
                name: 'CSS3',
                src: css3,
                alt: 'CSS3 Logo',
                width: '',
                height: '',
            },
            {
                name: 'Pug JS',
                src: pug,
                alt: 'Pug Logo',
                width: '',
                height: '',
            },
            {
                name: 'Sass',
                src: sass,
                alt: 'Sass Logo',
                width: '',
                height: '',
            },
            {
                name: 'jQuery',
                src: jquery,
                alt: 'jQuery Logo',
                width: '',
                height: '',
            },
            {
                name: 'Gulp',
                src: gulp,
                alt: 'Gulp Logo',
                width: '',
                height: '',
            }

        ],
        other: [
            {
                name: 'PHP',
                src: php,
                alt: 'PHP Logo',
                width: '',
                height: '',
            },
            {
                name: 'MySQL',
                src: mysql,
                alt: 'MySQL Logo',
                width: '',
                height: '',
            },
            {
                name: 'Node JS',
                src: node,
                alt: 'Node JS Logo',
                width: '',
                height: '',
            },
            {
                name: 'Laravel',
                src: laravel,
                alt: 'Laravel Logo',
                width: '',
                height: '',
            },
            {
                name: 'WordPress',
                src: wordpress,
                alt: 'WordPress Logo',
                width: '',
                height: '',
            },
            {
                name: 'Webpack',
                src: webpack,
                alt: 'Webpack Logo',
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
                        <h2>Front-End Web Developer</h2>
                        <p>I design and code beautifully simple things, and I love what I do.</p>
                    </div>
                    <div className="pic">
                        <img src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170506999/78062109-young-man-face-isolated-on-white-background-handsome-boy-face-expression-cartoon-vector-illustration.jpg" alt="avatar" />
                    </div>
                </section>
                <section className="skills-section">
                    <h1>Skills</h1>
                    <div className="skills-container">
                        <div className="skill-type type1">
                            <h2>Front-End</h2>
                            <div className="logo-box">
                                {this.state.front.map((el, index) => {
                                    return <Skill key={index} name={el.name} imgsrc={el.src} alt={el.alt}  />
                                })}
                            </div>
                        </div>
                        <div className="skill-type type2">
                            <h2>Other</h2>
                            <div className="logo-box">
                                {this.state.other.map((el, index) => {
                                    return <Skill key={index} name={el.name} imgsrc={el.src} alt={el.alt}  />
                                })}
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;