import React from 'react';

import './Launch.css';

const Launch = (props) => {
    const {name, year, patch} = props;
    return (
        <div className="Launch">
            <h2>{name} - {year}</h2>
            <img src={patch} alt={name}/>
        </div>
    );
};

export default Launch;