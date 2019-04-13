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
          name: 'Digital Space',
          src: 'https://image.freepik.com/free-psd/modern-website-mockup_23-2148043716.jpg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Iaculis nunc sed augue lacus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Cras tincidunt lobortis feugiat vivamus. Imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Faucibus interdum posuere lorem ipsum dolor.',
          // hover: false
      },
      {
          id: 'project2',
          name: 'Cuisine Trust',
          src: 'https://i0.wp.com/365webresources.com/wp-content/uploads/2018/10/FREE-Website-MOCKUP.jpg?ssl=1',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Iaculis nunc sed augue lacus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Cras tincidunt lobortis feugiat vivamus. Imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Faucibus interdum posuere lorem ipsum dolor.',
          // hover: false
      },
      {
          id: 'project3',
          name: 'Film Theater',
          src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/119072809/original/cc78b14638c8cae97938cd5839e5be74cf8394b2/design-creative-unique-psd-website-mockup-and-app-mockup-in-24-hours.png',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Iaculis nunc sed augue lacus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Cras tincidunt lobortis feugiat vivamus. Imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Faucibus interdum posuere lorem ipsum dolor.',
          // hover: false
      },
      {
          id: 'project4',
          name: 'Triple Frontier',
          src: 'http://mockuplove.com/wp-content/uploads/2017/05/freshy-free-website-template.png',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Iaculis nunc sed augue lacus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Cras tincidunt lobortis feugiat vivamus. Imperdiet nulla malesuada pellentesque elit. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Faucibus interdum posuere lorem ipsum dolor.',
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
