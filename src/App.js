import "./App.css";
import { Search } from "./components/Search";
import CurrentWeather from "./current-weather/CurrentWeather";
import ForecastWeather from "./forecast weather/ForecastWeather";
//import Card from "./Card style if u want it/Card"
import { weather_api_url, weatherApi_key } from './components/api';
import { useState } from "react";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  
  const handleChangeData = (searchData) => {
    console.log("Geocoding API Response:", searchData);

    const city =  searchData.value;

    const currentWeatherFetch = fetch(`${weather_api_url}/weather?q=${city}&units=metric&appid=${weatherApi_key}`)
      .then(response => response.json());

    const weatherForecastFetch = fetch(`${weather_api_url}/forecast?q=${city}&units=metric&appid=${weatherApi_key}`)
      .then(response => response.json());

    Promise.all([currentWeatherFetch, weatherForecastFetch])
      .then(([weatherResponse, forecastResponse]) => {
        console.log("Weather API Response:", weatherResponse);
        console.log("Forecast API Response:", forecastResponse);

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div className="container">
      <Search onSearchChange={handleChangeData}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <ForecastWeather data={forecast}/>}
      {/* <Card data={currentWeather} /> */}
    </div>
  );
}

export default App;





