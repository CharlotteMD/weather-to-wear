import React from 'react';

const Rainy = ({ rain, isItRainy }) => {

    return (
        <div>
            {isItRainy()}
        </div>
    );
};

export default Rainy;