import React, { Component } from 'react';

import Axios from 'axios';

class Wardrobe extends Component {
    constructor() {
        super();
        this.state = {
            feelsTemp: '',
            actualTemp: '',
            wind: '',
            rain: '',
            chanceOfRain: false
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

    // willItRain = () => {
    //     var rainPercent = Math.round(this.state.rain * 100);
    //     if (rainPercent > 25) {
    //         this.setState({
    //            chanceOfRain: true 
    //         })
    //     return <p>No rain</p>
    //     }
    // }

    effectsOfRain = () => {
        var rainPercent = Math.round(this.state.rain * 100);
        if (rainPercent > 25) {
            return (<p>Take your coat! It will rain today!</p>)
        } else {
            return (<p>No rain is expected so take a chance!</p>)
        }
    }



    render() {


        const javsTies = ['red', 'yellow', 'blue', 'green'];
        // const javsShirts = ['red', 'yellow', 'blue', 'green'];
        const javsSuits = ['grey', 'black', 'blue', 'navy'];
        // const javsShoes = ['grey', 'black', 'blue', 'navy'];
        // const javsCoats = ['rain', 'wool', 'biker', 'light'];

        return (
            <div>
                <h1>Good morning Javed! Today you should wear your {javsSuits[2]} suit with your {javsTies[1]} tie. And don't forget that white shirt!</h1>
                <h2>Today will be {this.roundTemp()} so remember your coat!</h2>

                {this.effectsOfRain()}

                
            </div>
        );
    }
}


export default Wardrobe;