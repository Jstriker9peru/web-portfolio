import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import SingleProject from '../SingleProject/SingleProject';
import NotFound from '../elements/NotFound/NotFound';

class App extends Component {
  state = {
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
      <BrowserRouter>
        <React.Fragment>
          <Header  filePath={this.props.location}/>
          <Switch>
            <Route path="/" render={() => (<Home projectInfo={this.state.projectInfo} />)} exact />
            <Route path="/Home" render={() => (<Home projectInfo={this.state.projectInfo} />)} exact />
            <Route path='/:projectId' component={SingleProject} exact />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
