// API key
var APIkey= "f19aba065a3efccb7384abb2c5f87624";
var searchButton= document.querySelector('#searchbutton');
var city= document.querySelector('#city-name');
var searchCity= document.querySelector('#textarea')
// city.textContent=searchCity.value;
var tempId= document.querySelector('.temp');
var windID= document.querySelector('.wind');
var humidityId= document.querySelector('.humidity');
var cloud= document.querySelector('.cloud');
var currentDay= moment().format("L");

var geoCode= 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid='+APIkey

function getcityweather(city) {
    var apiURL =' https://api.openweathermap.org/data/2.5/weather?q='+ city+'&units=imperial&appid='+ APIkey
    fetch(apiURL).then(function (response) {
        return response.json();
      })
        .then(function (data) {
          tempId.textContent="Temp:   " +data.main.temp+ "  F";
          windID.textContent= "Wind Speed:    "+data.wind.speed;
          humidityId.textContent = "Humidity:    "+data.main.humidity;
          cloud.textContent="Sky:   "+data.weather[0].main;
        })
      }
var futureTemp =document.querySelector("#future-temp1");
var futureWind= document.querySelector('#future-wind1');
var futureHumidity= document.querySelector('#future-humidity1');
var futureCloud=document.querySelector('#future-cloud1');  
var futTemp2=document.querySelector('#future-temp2');
var futWind2=document.querySelector('#future-wind2');
var futHum2=document.querySelector('#future-humidity2');
var futCloud2=document.querySelector('#future-cloud2');
var futTemp3=document.querySelector('#future-temp3');
var futWind3=document.querySelector('#future-wind3');
var futHum3=document.querySelector('#future-humidity3');
var futCloud3=document.querySelector('#future-cloud3');
var futTemp4=document.querySelector('#future-temp4');
var futWind4=document.querySelector('#future-wind4');
var futHum4=document.querySelector('#future-humidity4');
var futCloud4=document.querySelector('#future-cloud4');
var futTemp5=document.querySelector('#future-temp5');
var futWind5=document.querySelector('#future-wind5');
var futHum5=document.querySelector('#future-humidity5');
var futCloud5=document.querySelector('#future-cloud5');


function getforecast(city) {
  var futureApi= "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+ APIkey
  fetch(futureApi).then(function (response) {
     
    return response.json(); 
      
    })
  
      .then(function (data) {
       for (let index = 0; index < data.list.length; index++) { 
         if(data.list[index].dt_txt.endsWith("15:00:00")){
           console.log(data.list);
          futureTemp.textContent="Temp:"+data.list[0].main.temp;
          futureWind.textContent="Wind:"+data.list[0].wind.speed;
          futureHumidity.textContent="Humidity:"+data.list[0].main.humidity;
          futureCloud.textContent="Sky:"+data.list[0].weather[0].main;
          futTemp2.textContent=data.list[1].main.temp;
          futWind2.textContent=data.list[1].wind.speed;
          futHum2.textContent=data.list[1].main.humidity;
          futCloud2.textContent=data.list[1].weather[0].main;
          futTemp3.textContent=data.list[2].main.temp;
          futWind3.textContent=data.list[2].wind.speed;
          futHum3.textContent=data.list[2].main.humidity;
          futCloud3.textContent=data.list[2].weather[0].main;
          futTemp4.textContent=data.list[3].main.temp;
          futWind4.textContent=data.list[3].wind.speed;
          futHum4.textContent=data.list[3].main.humidity;
          futCloud4.textContent=data.list[3].weather[0].main;
          futTemp5.textContent=data.list[4].main.temp;
          futWind5.textContent=data.list[4].wind.speed;
          futHum5.textContent=data.list[4].main.humidity;
          futCloud5.textContent=data.list[4].weather[0].main;
       }}
      })
    }
    searchButton.addEventListener('click',function(){
 
  getforecast(searchCity.value);
  getcityweather(searchCity.value);
})
