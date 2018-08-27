import API from './api';

export const GetWeather = () => {

  let displayWeather = API.get('/weather?q=toronto,ca&appid=98afba39d30803d6ab73e7cb089afba3')
  .then(response => {
      return response
  })
  .catch(error => {
    return error;
  });

  return displayWeather;

}
