import React, { Component } from 'react';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <div className="skills" style={{height: '100vh', background: 'white'}}>Whatup</div>
      </div>
    );
  }
}

export default App;
