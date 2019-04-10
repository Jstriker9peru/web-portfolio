import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import SingleProject from '../SingleProject/SingleProject';
import NotFound from '../elements/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header  filePath={this.props.location}/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Home" component={Home} exact />
            <Route path='/:projectId' component={SingleProject} exact />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
