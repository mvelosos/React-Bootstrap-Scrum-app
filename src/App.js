import React, { Component } from 'react';
import NavBar from './ui/NavBar';
import Home from './contents/Home';

class App extends Component {
  render() {
    const logo = 'Scrum App'
    return (
      <div className="container">
        <NavBar logo={logo} />
        {this.props.children}
      </div>
    )
  }
}

export default App;
