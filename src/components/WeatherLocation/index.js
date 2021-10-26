import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import propTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
//import {SUN} from '../../constants/weather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress';


class WeatherLocation extends Component{
    
    constructor({city}) {
        super();
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() //{
    //     this.handleUpdateClick();
    // }
    // handleUpdateClick = () => 
    {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data })
            //console.log(data);
        })
        //console.log("actualizado");
    }



    render(){
        const {onWeatherLocationClick} = this.props;
        const { city , data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                { data ? <WeatherData data={data} /> : <CircularProgress size={50}/> }
            </div>
        );    
    }
}

WeatherLocation.propTypes = {
    city: propTypes.string.isRequired,
    onWeatherLocationClick: propTypes.func,
}

export default WeatherLocation;