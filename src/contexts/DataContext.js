import React, {useState,createContext} from 'react';
import GetCountries from './../hooks/GetCountries';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [language, setLanguage] = useState('PE');
  const {data, loading} = GetCountries('countries');
  const currentCountry = data.find(
    element => element.countryInfo.iso2 === language,
  );

  const handleLanguaje = (value) => {
    setLanguage(value);
  };

  return ( 
    <DataContext.Provider value={{currentCountry, data, loading, language, handleLanguaje}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;