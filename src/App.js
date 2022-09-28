import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import CropInfo from './Components/CropInfo';
import TopBar from './Components/TopBar';
import TopSecBar from './Components/TopSecBar';
import Search from './Components/WeatherBar';
import WeatherBar from './Components/WeatherBar';
import CurrentWeather from './Components/CurrentWeather';

import { WEATHER_API_KEY, WEATHER_API_URL } from './Components/api'

import { useState } from 'react'
import Forecast from './Components/Forecast';
import AgriProducts from './Components/AgriProducts';




function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange=(searchData)=>{
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    const ForeCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([CurrentWeatherFetch, ForeCastFetch])
    .then(async (response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label ,...weatherResponse});
      setForecast({city: searchData.label , ...forecastResponse});

    })
    .catch((err)=>{
      console.log(err)
    })
  }

  console.log(currentWeather)
  console.log(forecast)


  return <>
<TopBar/>
<TopSecBar/>
<CropInfo/>
<Search onSearchChange={handleOnSearchChange}/>
{currentWeather && <CurrentWeather data={currentWeather}/>}
{forecast && <Forecast data={forecast}/>}
<AgriProducts/>
  
  
  
  
  </>
}

export default App;
