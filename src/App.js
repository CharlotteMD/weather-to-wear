import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';

import Weather from './components/weather';
import Wardrobe from './components/wardrobe';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rain: '',
      feelsTemp: ''
    };
  }

  componentDidMount() {
    var latitude = 51.4997;
    var longitude = -0.2353;
    var key = '63c7e1fe04debd05e2a196e39bc9e9c4';

    Axios
      .get(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=uk2`)
      .then((response) => {
        console.log(response);

        var rain = response.data.daily.data[0].precipProbability;
        var feelsTemp = response.data.currently.apparentTemperature;

        this.setState({
          rain: rain,
          feelsTemp: feelsTemp
        })

      })
      .catch(err => console.log(err));
  }

  headerLogic = () => {
    var rainPercent = Math.round(this.state.rain * 100);
    var temp = this.state.feelsTemp;

    var rainDiv = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80)',
      color: 'hotpink',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    var clearDiv = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1509218541462-aa68e407d0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)',
      color: 'blue',
      backgroundSize: 'cover',
    };

    var sunDiv = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1543770048-34a65b19b59a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1476&q=80)',
      color: 'white',
    };


    if (rainPercent > 25) {
      return (
        <header className="App-header" style={rainDiv}>
          <h1>
            Weather to Wear
          </h1>
        </header>
      )
    }
    if (temp >= 25) {
      return (
        <header className="App-header" style={sunDiv}>
          <h1>
            Weather to Wear
          </h1>
        </header>
      )
    }
    if (temp < 25) {
      return (
        <header className="App-header" style={clearDiv}>
          <h1>
            Weather to Wear
          </h1>
        </header>
      )
    }

  }

  footerLogic = () => {
    var rainPercent = Math.round(this.state.rain * 100);
    var temp = this.state.feelsTemp;

    var rainDiv = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80)',
      color: 'hotpink',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    var clearDiv = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1509218541462-aa68e407d0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)',
      color: 'blue',
      backgroundSize: 'cover',
    };

    var sunDiv = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1543770048-34a65b19b59a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1476&q=80)',
      color: 'white',
    };


    if (rainPercent > 25) {
      return (
        <footer className="App-header" style={rainDiv}>
          <h4>
            Coded By Charlotte for Javed 👩🏻‍💻
          </h4>
        </footer>
      )
    }
    if (temp >= 25) {
      return (
        <footer className="App-header" style={sunDiv}>
          <h4>
            Coded By Charlotte for Javed 👩🏻‍💻
          </h4>
        </footer>
      )
    }
    if (temp < 25) {
      return (
        <footer className="App-header" style={clearDiv}>
          <h4>
            Coded By Charlotte for Javed 👩🏻‍💻
          </h4>
        </footer>
      )
    }

  }

  render() {

    return (
      <div className="App">
        {this.headerLogic()}

        <div>

          <Weather />
          <Wardrobe />

        </div>

        {this.footerLogic()}

      </div>
    );
  }
}

export default App;
