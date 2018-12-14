import React from 'react';
import '../weather.css';

const Temp = ({ feelsTemp, actualTemp, whatToWear, roundTemp }) => {

    return (
        <div className="tempData">
          <div className="temperature">
            {roundTemp()}
            {whatToWear()}
          </div>

          <div className="thermometer">
            <div className="mercury">
              <meter id="tempMeter" min="-10" max="30" value={actualTemp}></meter>
            </div>
            <div id="labels">
              <ul>
                <li>30</li>
                <li>20</li>
                <li>10</li>
                <li><span>0</span></li>
                <li>-10</li>
              </ul>
            </div>
            <div className="bulb"></div>
          </div>
        </div>
    );
};

export default Temp;
