import React from 'react';
import { GetWeather } from '../services';

const Weather = () => {

  GetWeather().then(data => {
    console.log(data.data);
  }).catch((error) => {
    return error
  });

  return (
    <div>

    </div>
    )
};

export default Weather;
