import React, { Component } from 'react';
import '../App.css';

import Axios from 'axios';

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
      .get(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=si`)
      .then((response) => {
        console.log(response);

        var feelstemp = response.data.currently.apparentTemperature;
        var actualtemp = response.data.currently.temperature;
        var wind = response.data.currently.windSpeed;
        var rain = response.data.minutely.data[0].precipProbability;

        this.setState({ 
          feelstemp: feelstemp,
          actualtemp: actualtemp,
          wind: wind,
          rain: rain
        })

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Weather">
        <h2>What should I wear today?</h2>
        <div>

          <p>What kind of coat do I need? Should I take an umbrella? What kind of shoes should I wear? Do I need a jumper? Do I need a hat and scarf?</p>

          <p>It is currently {this.state.actualtemp}, although it feels like {this.state.feelstemp}!</p>


        {this.state.wind >= 5 &&
          <p>It's a bit windy outside! Perhaps take an extra jumper and don't wear a hat!</p>}

        { this.state.wind < 5 &&
          <p>There is a light breeze.</p>}

          <p>And there is a {this.state.rain} chance it's already raining!</p>

        </div>

      </div>
    );
  }
}

export default Weather;
