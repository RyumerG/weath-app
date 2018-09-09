import React, { Component } from 'react';

import { GetWeather } from '../services';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: '',
    }
  }

  componentDidMount() {
    GetWeather().then(data => {
      console.log(data.data);
      this.setState({weather: data.data});
    }).catch((error) => {
      return error
    });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.weather)}
      </div>
  );
  }
}

export default Weather;
