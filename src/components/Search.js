import React, { useState } from 'react';
import axios from 'axios';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geo_api_url,geo_api_options} from './api';

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // const loadOptions = (inputValue) => {
  //   return fetch(
  //     `${geo_api_url}/cities?namePrefix=${inputValue}`,
  //     geo_api_options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return {
  //         options: response.data.map((city) => {
  //           return {
  //             value: `${city.name}`,
  //             label: `${city.name},${city.region}, ${city.countryCode}`,
  //           };
  //         }),
  //       };
  //     });
  // };

  // const loadOptions = async (inputValue) =>{
  //   const response = await axios.get(`${geo_api_url}/cities?namePrefix=${inputValue}`,  geo_api_options);
  //   const data = await response.data;
  //   const options = data.map((city) => (
  //     {
  //       value: `${city.name}`,
  //       label: `${city.name}, ${city.region},${city.countryCode}`,
  //     }
  //   ));
      
  //   return{
  //     options 
  //   }
  // }

  const loadOptions = async (inputValue) =>{
    const response = await axios.get(`${geo_api_url}/cities?namePrefix=${inputValue}`, geo_api_options);
    const result = response.data; 

    const options = result.data.map((city) => ({
      value: `${city.name}`,
      
      label: city.name === city.region 
            ?`${city.name}, ${city.country}`
            : `${city.name},${city.region}, ${city.country}`
    }));

    return {
      options: options,
    };
  }




  return (
    <div>
      <AsyncPaginate
        placeholder="Search city name"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions} 
      />
      {/* <h1>{cityName}</h1> */}
    </div>
  );
};
