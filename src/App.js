import React, { Component } from 'react';

import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Content />
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;