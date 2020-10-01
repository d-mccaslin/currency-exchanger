export default class WeatherService {  
  static getWeather(city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const key = process.env.API_KEY;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}