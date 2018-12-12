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
      backgroundColor: 'pink',
      color: 'white',
    };

    var sunDiv = {
      backgroundColor: 'orange',
      color: 'white',
    };

    var clearDiv = {
      backgroundColor: 'green',
      color: 'white',
    };


    if (rainPercent > 25) {
      return (
        <h1 style={rainDiv}>
          Weather to Wear
        </h1>
      ) 
    }
    if (temp > 25) {
      return (
        <h1 style={sunDiv}>
          Weather to Wear{temp}
        </h1>
      ) 
    } else {
      return (
        <h1 style={clearDiv}>
          Weather to Wear
        </h1>
      ) 
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.headerLogic()}
        </header>

        <div>

          <Weather />
          <Wardrobe />

        </div>

      </div>
    );
  }
}

export default App;
