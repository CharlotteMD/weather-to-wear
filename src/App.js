import React, { Component } from 'react';
import './App.css';

import Weather from './components/weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Weather to Wear
          </h1>
        </header>

        <div>

          <Weather />

        </div>

      </div>
    );
  }
}

export default App;
