import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const Location = (props) => {
    const {city} = props;
    return(
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    ); 
};

Location.prototype = {
    city: propTypes.string.isRequired,
}

export default Location;