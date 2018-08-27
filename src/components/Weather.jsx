import React from 'react';
import { GetWeather } from '../services';

const Weather = () => {

  GetWeather().then(data => {
    console.log(data.data);
  }).catch((error) => {
    return error
  });
  
  return (
    <div className='App'>
      <Navigation/>
      {
        Data.map ((data, key) => {
          return (
            <DataDisplay key={key} firstName={data.first_name} lastName={data.last_name}/>
          )
        })
      }
    </div>
    )
};

export default Weather;
