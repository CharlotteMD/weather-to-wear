import React, { Component } from 'react';
import '../App.css';

import Axios from 'axios';

class Weather extends Component {


  componentDidMount() {
    var latitude = 51.4997;
    var longitude = -0.2353;
    var key = '63c7e1fe04debd05e2a196e39bc9e9c4';

    Axios
      .get(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`)
      .then((response) => {
        console.log(response);
        var currentweather = response.data.currently.summary;
        console.log('weather ' + currentweather);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Weather">
        <h2>What should I wear today?</h2>
        <div>

        </div>

      </div>
    );
  }
}

export default Weather;
