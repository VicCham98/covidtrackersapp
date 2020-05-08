import {useState, useEffect} from 'react';
import Axios from 'axios';
import URL from './../config';

const GetAnime = url => {
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetCountries = async () => {
      const requestOne = Axios.get(URL + url);
      const requestTwo = Axios.get(`${URL}historical`);
      Axios.all([requestOne, requestTwo])
        .then(
          Axios.spread((...responses) => {
            const responseOne = responses[0].data;
            const responseTwo = responses[1].data;
            setData(responseOne);
            setHistory(responseTwo);
            setLoading(false);
          }),
        )
        .catch(errors => {
          // console.log(errors);
          // console.error(errors);
        });
      // try {
      //   let res = await Axios.get(URL + url);
      //   let response = await res.data;
      //   setData(response);
      //   setLoading(false);
      // } catch (e) {
      //   console.log(e);
      // }
    };
    GetCountries();
  }, [url]);

  return {data, history, loading};
};

export default GetAnime;
