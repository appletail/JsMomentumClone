import { WEATHER_BASE_URL, WEATHER_API_KEY } from "./env.js";


const onGeoOk = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

    
  const baseUrl = WEATHER_BASE_URL;
  const weatherApiKey = WEATHER_API_KEY;

  const params = {
    appid: weatherApiKey,
    lat,
    lon,
    units: 'metric',
    };

  const queryString = new URLSearchParams(params).toString();
  const requrl = `${baseUrl}?${queryString}`;

  try{
    const response = await fetch(requrl); 
    const weatherData = await response.json();
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');

    weather.innerText = `${weatherData.weather[0].main} / ${weatherData.main.temp}`;
    city.innerText = weatherData.name;

   } catch(error){
      console.log(error); 
   }

  };

  const onGeoError = () => {
    alert("Can't find you. No weather for you.");
  };


const location = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
