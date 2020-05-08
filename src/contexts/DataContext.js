import React, {useState, createContext} from 'react';
import GetCountries from './../hooks/GetCountries';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [country, setCountry] = useState('Peru');
  const {data, history, loading} = GetCountries('countries');
  const currentCountry = data.find(element => element.country === country);

  const currentCountryHistory = history.find(
    element => element.country === country,
  );

  const handleCountry = (value) => {
    setCountry(value);
  };

  return ( 
    <DataContext.Provider
      value={{
        currentCountry,
        currentCountryHistory,
        data,
        loading,
        country,
        handleCountry,
      }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
