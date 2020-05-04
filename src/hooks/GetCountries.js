import {useState, useEffect} from 'react';
import Axios from 'axios';
import URL from './../config';

const GetAnime = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetCountries = async () => {
      try {
        let res = await Axios.get(URL + url);
        let response = await res.data;
        setData(response);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    GetCountries();
  }, [url]);

  return {data, loading};
};

export default GetAnime;
