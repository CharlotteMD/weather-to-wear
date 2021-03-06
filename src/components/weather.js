import React, { Component } from 'react';
import '../App.css';

import Axios from 'axios';

import Rainy from './rainy.js';
import Windy from './windy.js';
import Temp from './temp.js';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      feelstemp: '',
      actualtemp: '',
      wind: '',
      rain: ''
    };
  }


  componentDidMount() {
    var latitude = 51.4997;
    var longitude = -0.2353;
    var key = '63c7e1fe04debd05e2a196e39bc9e9c4';

    Axios
      .get(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=uk2`)
      .then((response) => {

        var feelstemp = response.data.currently.apparentTemperature;
        var actualtemp = response.data.currently.temperature;
        var wind = response.data.currently.windSpeed;
        var rain = response.data.daily.data[0].precipProbability;

        this.setState({
          feelstemp: feelstemp,
          actualtemp: actualtemp,
          wind: wind,
          rain: rain
        })

      })
      .catch(err => console.log(err));
  }

  isItWindy = () => {
    if ((this.state.wind >= 5) && (this.state.wind < 10)) {
      return (
        <p>
          It's a bit windy outside! Perhaps take an extra jumper!
        </p>
      )
    };
    if ((this.state.wind > 10)) {
      return (
        <p>
          It's pretty blustery! Wrap up and don't blow away!
        </p>
      )
    };
  }

  isItRainy = () => {
    var rainPercent = Math.round(this.state.rain*100);

    return (
      <div>
        {rainPercent > 0 && (
          <div className="probability">
            <meter className="rain" min="0" max="100" value={rainPercent}></meter>
          </div>
        )}
        <p>There is a {rainPercent}% chance of rain today</p>
      </div>
    )

  }

  roundTemp = () => {
    var roundActual = Math.round(this.state.actualtemp);
    var roundFeels = Math.round(this.state.feelstemp);
    return (
      <p>It is currently {roundActual}°C, although it feels like {roundFeels}°C!</p>
    )
  }

  whatToWear = () => {
    var temp = this.state.actualtemp;

    var cold = {
      color: '#77DDE7',
      fontSize: 'bold',
    };

    var hot = {
      color: '#FF7538',
      fontSize: 'bold',
    };

    var average = {
      fontSize: 'bold',
    };


    if (temp < 0) {
      return (
        <p style={cold}>
          Baby, it's cold outside! Wrap up warm and don't forget your gloves!
        </p>
      )
    };
    if ((temp < 5)) {
      return (
        <p style={cold}>
          Pretty cold today! Take a winter coat and don't forget a jumper to keep you warm all day!
        </p>
      )
    };
    if ((temp < 15)) {
      return (
        <p style={average}>
          Fairly mild today. Take your coat and a jumper but you won't freeze today!
        </p>
      )
    };
    if ((temp < 25)) {
      return (
        <p style={hot}>
          It's a lovely day outside! Take a jacket but you won't be cold!
        </p>
      )
    };
    if ((temp > 25)) {
      return (
        <p style={hot}>
          It's boiling outside! You won't need a coat!
        </p>
      )
    };
  }


  render() {
    return (
      <div className="Weather">
        <h2>Today's Weather</h2>
        <div className="weatherDiv">
          <Temp
            whatToWear={this.whatToWear}
            roundTemp={this.roundTemp}
          />

          <Windy
            wind={this.state.wind}
            isItWindy={this.isItWindy}
          />

          <Rainy
            rain={this.state.rain}
            isItRainy={this.isItRainy}
          />

        </div>

      </div>
    );
  }
}

export default Weather;
