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
        ],
        projectInfo: [
            {
                id: 'project1',
                name: 'project1',
                src: 'https://image.freepik.com/free-psd/modern-website-mockup_23-2148043716.jpg',
                info: 'This is the way it goes',
                // hover: false
            },
            {
                id: 'project2',
                name: 'project2',
                src: 'https://i0.wp.com/365webresources.com/wp-content/uploads/2018/10/FREE-Website-MOCKUP.jpg?ssl=1',
                info: 'This is the way it shows',
                // hover: false
            },
            {
                id: 'project3',
                name: 'project3',
                src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/119072809/original/cc78b14638c8cae97938cd5839e5be74cf8394b2/design-creative-unique-psd-website-mockup-and-app-mockup-in-24-hours.png',
                info: 'This is the way it mows',
                // hover: false
            },
            {
                id: 'project4',
                name: 'project4',
                src: 'http://mockuplove.com/wp-content/uploads/2017/05/freshy-free-website-template.png',
                info: 'This is the way it blows',
                // hover: false
            }
        ]
    
    }


    render() {

        return (
            <div className="Home">
                <section className="first-container">
                    <div className="front-text">
                        <h1>Jonathan Espinoza</h1>
                        <h2>Professional Web Developer</h2>
                        <p>I design and code beautifully simple things, and I love what I do.</p>
                    </div>
                    <div className="pic">
                    <img src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170506999/78062109-young-man-face-isolated-on-white-background-handsome-boy-face-expression-cartoon-vector-illustration.jpg" alt="avatar" />
                    </div>
                    <div className="resume-container">
                        <h3>Check Out My</h3>
                        <div className="button">
                            <div>Resume</div>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </section>
                
                <div className="section-title">
                    <h1>SKILLS</h1>
                </div>
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

                <div className="section-title">
                    <h1>PROJECTS</h1>
                </div>

                <section className="project-section" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45),
                     rgba(0,30,100,0.45)), url(${projectBg})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    filter: 'grayscale(50%)'
                    }}>
                    <div className="projects-container">
                        {this.state.projectInfo.map((el, index) => {
                            return (
                                <Link to={`/${el.id}`} >
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
                <div className="section-title">
                    <h1>CONTACT</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;