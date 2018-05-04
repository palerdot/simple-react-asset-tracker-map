import React, { Component } from 'react'
import './App.css'

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Asset Tracker</h1>
        </header>
        <div className="App-intro">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
