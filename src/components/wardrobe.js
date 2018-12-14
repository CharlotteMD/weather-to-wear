import React, { Component } from 'react';

import Axios from 'axios';

import '../wardrobe.css';

class Wardrobe extends Component {
    constructor() {
        super();
        this.state = {
            feelsTemp: '',
            actualTemp: '',
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

                var feelsTemp = response.data.currently.apparentTemperature;
                var actualTemp = response.data.currently.temperature;
                var wind = response.data.currently.windSpeed;
                var rain = response.data.daily.data[0].precipProbability;

                this.setState({
                    feelsTemp: feelsTemp,
                    actualTemp: actualTemp,
                    wind: wind,
                    rain: rain
                })

            })
            .catch(err => console.log(err));
    }

    roundTemp = () => {
        var roundFeels = Math.round(this.state.feelsTemp);
        return (
            <span>{roundFeels}c</span>
        )
    }


    willItRain = () => {
        var rainPercent = Math.round(this.state.rain * 100);
        if (rainPercent > 25) {
            return (<p>Take your coat! It will rain today!</p>)
        } else {
            return (<p>No rain is expected so take a chance!</p>)
        }
    }

    whichCoat = () => {
        var rainPercent = Math.round(this.state.rain * 100);
        var temp = Math.round(this.state.actualTemp);

        var purpleCoat = {
          color: '#7851A9',
          fontSize: '48px',
          padding: '2px',
          justifyContent: 'center'
        };

        var navyMac = {
          color: '#1A4876',
          fontSize: '48px',
          padding: '2px',
          justifyContent: 'center'
        };

        var sunny = {
          color: 'yellow',
          fontSize: '48px',
          padding: '2px',
          justifyContent: 'center'
        }

        if ((rainPercent < 25) && (temp < 10)) {
            return (
              <div>
                <span className="fas fa-user-secret" style={purpleCoat}></span>
                <p>
                  Dry but cold today. Take your purple coat.
                </p>
              </div>
              )
        }
        if ((rainPercent >= 25) && (temp < 7)) {
            return (
              <div>
                <span className="fas fa-user-secret" style={navyMac}></span>
                <p>
                  Today it will be rainy and cold. Wrap up warm but wear your Navy Mac as it's going to rain! Don't forget your gloves and scarf!
                </p>
              </div>)
        }
        if (temp < 15) {
            return (
              <div>
                <span className="fas fa-user-secret" style={navyMac}></span>
                <p>
                  A mild day today - wear your Navy Mac.
                </p>
              </div>)
        }
        if (temp < 27) {
            return (
              <div>
                <span className="fas fa-sun" style={sunny}></span>
                <p>
                  You can probably get away with just your suit jacket today!
                </p>
              </div>)
        }
        if (temp > 27) {
            return (
              <div>
                <span className="fas fa-sun" style={sunny}></span>
                <p>
                  It's a hotty! Stay hydrated!
                </p>
              </div>)
        }
    }

    whichSuit = () => {
        const javsTies = ['red', 'yellow', 'blue', 'green'];
        // const javsShirts = ['red', 'yellow', 'blue', 'green'];
        const javsSuits = ['grey', 'black', 'blue', 'navy'];
        // const javsShoes = ['grey', 'black', 'blue', 'navy'];
        // const javsCoats = ['rain', 'wool', 'biker', 'light'];

        const whichTie= (Math.ceil(Math.random() * (javsTies.length)) - 1);
        const whichSuit= (Math.ceil(Math.random() * (javsSuits.length)) - 1);

        return (
            <p>
              Today you should wear your {javsSuits[whichSuit]} suit with your {javsTies[whichTie]} tie. And don't forget that white shirt!
            </p>)
    }


    render() {




        return (
            <div>

                <h3>What shall I wear today?</h3>
                {this.whichSuit()}

                <div className="clothes">
                  <h3>What coat do I need?</h3>
                  {this.whichCoat()}
                </div>


            </div>
        );
    }
}


export default Wardrobe;
