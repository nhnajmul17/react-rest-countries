import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, flags, capital, population, region } = props.country;
    return (
        <div className='country'>

            <h3>{name.common}</h3>
            <img src={flags.svg} alt="" />
            {/* <p>Capital: {capital[0]}</p> */}
            <small>Region: {region}</small>
            <p>Population: {population}</p>

        </div>
    );
};

export default Country;