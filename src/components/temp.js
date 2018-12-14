import React from 'react';
import '../weather.css';

const Temp = ({ feelsTemp, actualTemp, whatToWear, roundTemp }) => {

    return (
        <div className="tempData">
          <div className="temperature">
            {roundTemp()}
            {whatToWear()}
          </div>

          <meter min="-10" max="30" value={actualTemp}></meter>

        </div>
    );
};

export default Temp;
