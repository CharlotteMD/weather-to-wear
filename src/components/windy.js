import React from 'react';

const Windy = ({ wind, isItWindy }) => {

    return (
        <div>
            {isItWindy()}
        </div>
    );
};

export default Windy;