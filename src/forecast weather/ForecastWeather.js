import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import "./forecast.css";

export default function ForecastWeather({ data }) {
    
    const week_days = ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'];

    const today = new Date().getDay();
    const forecast_days = week_days.slice(today,week_days.length).concat(week_days.slice(0,today));


    return (
        <>
            <label>Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img src={`icons/${item.weather[0].icon}.png`} className='icon-small' alt='weather' />
                                    <label className='day'>{forecast_days[index]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp)}°C / {Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure :</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>

                                <div className='daily-details-grid-item'>
                                    <label>Humidity :</label>
                                    <label>{item.main.humidity}%</label>
                                </div>


                                <div className='daily-details-grid-item'>
                                    <label>Clouds :</label>
                                    <label>{item.clouds.all}%</label>
                                </div>


                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed :</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>


                                <div className='daily-details-grid-item'>
                                    <label>Sea Level :</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>

                                <div className='daily-details-grid-item'>
                                    <label>Feels Like :</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>

        </>
    )
}


