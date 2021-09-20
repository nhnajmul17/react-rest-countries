import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, flag, capital, population, region } = props.country;
    return (
        <div className='country'>

            <h3>This is {name}</h3>
            <img src={flag} alt="" />
            <p>Capital: {capital}</p>
            <small>Region: {region}</small>
            <p>Population: {population}</p>

        </div>
    );
};

export default Country;