import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import './index.css'
import Card from '../Card/Card'

const Selector = () => {
  const [country, setCountry] = useState('Kyrgyzstan');
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const handleSelect = (e) => {
    setCountry(e.target.value);
    console.log(country);
  }

  const getCounries = useCallback(async () => {
    await axios.get('https://api.covid19api.com/countries')
    .then(res => {
      setCountries(res.data);
    })
    .catch(e => {
      console.log(e);
    })
  }, [setCountries]);

  const getDayOneTotalAllStatus = useCallback(async () => {
    await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
    .then(res => {
      let data = res.data;
      data = data.slice(Math.max(res.data.length - 5, 1)).reverse();
      setCountryData(data);
      console.log(data);
    })
    .catch(e => {
      console.log(e)
    })
  }, [setCountryData, country])

 

  useEffect(() => {
    getCounries();
  },[getCounries])

  useEffect(() => {
    getDayOneTotalAllStatus();
  },[getDayOneTotalAllStatus])



  return ( 
    <>
      <select className="selector" onChange={(e) => handleSelect(e)} value={country}>
      {countries.map(item => (
        <option key={item.ISO2} value={item.Country}>{item.Country}</option>
      ))}
      </select>
      {countryData.map((item, index) => (
        <Card key={index} card={item} />
      ))}
    </>
   );
}
 
export default Selector;