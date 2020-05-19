import React, { Component } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Skill from '../elements/Skill/Skill';
import Project from '../elements/Project/Project';
import Footer from '../elements/Footer/Footer';
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
import projectBg from '../../images/project-bg.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

class Home extends Component {
    state = {
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
        configureAnchors({offset: -70, scrollDuration: 500});

        return (
            <div className="Home">
                
                <ScrollableAnchor id={'Home'}>
                <section className="first-container">
                    <div className="box-container">
                        <img width="250" height="200" alt="desktop" src="/images/desktopimg3.png" />
                        <div className="front-text">
                            <h1>Jonathan Espinoza</h1>
                            <h2>Professional Web Developer</h2>
                            <p>I code beautifully simple things, and I love what I do</p>
                            <div className="text-ani">
                                <h2 className="start-text">I love to </h2>
                                <ul className="list-text">
                                    <li>Code</li>
                                    <li>Learn</li>
                                    <li>Improve</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume-container">
                        <h3>Check Out My</h3>
                        <div className="button">
                            <div>Resume</div>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </section>
                </ScrollableAnchor>
                
                <ScrollableAnchor id={'About'}>
                    <div className="section-title">
                        <h1>SKILLS</h1>
                    </div>
                </ScrollableAnchor>
                <section className="skills-section">
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

                <ScrollableAnchor id={'Projects'}>                
                    <div className="section-title">
                        <h1>PROJECTS</h1>
                    </div>
                </ScrollableAnchor>

                <section className="project-section" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45),
                     rgba(0,30,100,0.45)), url(${projectBg})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    filter: 'grayscale(50%)'
                    }}>
                    <div className="projects-container">
                        {this.props.projectInfo.map((el, index) => {
                            return (
                                <Link to={{ pathname: `/${el.id}`, state: { projectList: this.props.projectInfo, allInfo: el } }} key={index} >
                                    <Project
                                        key={index}
                                        projectId={el.id}
                                        name={el.name}
                                        projectSrc={el.src}
                                    />
                                </Link>
                            )                            
                        })}
                    </div>
                </section>
                <ScrollableAnchor id={'Contact'}>
                    <div className="section-title">
                        <h1>CONTACT</h1>
                    </div>
                </ScrollableAnchor>
                <Footer />
            </div>
        )
    }
}

export default Home;