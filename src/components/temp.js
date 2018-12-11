import React from 'react';

const Temp = ({ feelsTemp, actualTemp, whatToWear, roundTemp }) => {

    return (
        <div>
            {roundTemp()}
            {whatToWear()}
        </div>
    );
};

export default Temp;