import React from 'react'
import propTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className = "weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
        <span className="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: propTypes.number.isRequired,
    wing: propTypes.string.isRequired,
}

export default WeatherExtraInfo;