import React, {Component} from 'react'
import './App.css';
import LocationList from './components/LocationList';
import {Grid, Col, Row} from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';
//import WeatherLocation from "./components/WeatherLocation"

const cities = [
  'Buenos Aires',
  'Washington',
  'Bogota',
  'Ciudad de Mexico',
  'Madrid',
  'Lima'
]

class App extends Component {

  constructor(){
    super();
    this.state = {city: null}
  }

  handleSelectionLocation = city => {
    this.setState({city});
    //console.log(`handleSelectionLocation ${city}`);
  }
render(){
    
    return (
      <Grid className="App">
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant='h5' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4} >
                <div className="details">
                  {
                    this.state.city &&
                    <ForecastExtended city={this.state.city} />
                  }
                </div>
              </Paper>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
