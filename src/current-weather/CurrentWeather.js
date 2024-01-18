import React from 'react';
import './currentWeather.css';

const CurrentWeather = ({ data }) => {
    if (!data) {
        return null;
    };

    const {
        city,
        weather,
        main: { temp, feels_like, pressure, humidity },
        wind,
    } = data;

    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{city}</p>
                    <p className='weather-description'>{weather[0].description}</p>
                </div>
                <img src={`icons/${weather[0].icon}.png`} className='weather-icon' alt='weather' />
            </div>

            <div className='bottom'>
                <p className='temperature'>{Math.round(temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
