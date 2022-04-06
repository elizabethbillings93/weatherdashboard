var APIkey= "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}"
var city= document.querySelector('#textarea');

var getcityweather = function (city) {
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city + '&limit=5&appid={API key}';
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayIssues(data);

        });
      } else {
        document.location.replace('#temp');
      }
    });
  };
  getcityweather();