import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import {api_key, url_base_forecast} from '../constants/api_url'
import './styles.css';


class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    
    
    updateCity = city => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                //console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
                console.log(forecastData)
            }
        )
    }

    renderForecastItemDays(forecastData){
        //return <h3>datos</h3>
        return forecastData.map(forecast => (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} />) )
    }

    renderProgress = () => {
        return <h3>Cargando pronostico del tiempo... </h3>;
    }

    render(){
        const {city} = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className='forecas-title' > Pronóstico extendido para {city} </h2>
                {
                    forecastData ? 
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;