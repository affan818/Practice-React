import  { useEffect, useState } from "react";
import "../Component/country.css";
import axios from "axios";

const CountryData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [time,setTime] = useState(new Date())
  const changeTime = () => {
    setTime(new Date())
  }
  useEffect(()=>{
    const tick = setInterval(()=>{
changeTime()
    },100)
    return ()=> clearInterval(tick)
  },[])
 
  return (
    <>
      <div className="first">
        <h1 className="first">UPDATE ABOUT WORLD</h1>
      </div>
      <div className="time"><h1>INDIAN STANDARD TIME : {time.toLocaleTimeString()}</h1></div>
      <div className="second">
        {data.map((a) => (
          <div className="main" key={Math.random() * 250}>
              <img
                src={a.flags.png}
                alt=""
                key={Math.random() * 250}
                height={"100px"}
                width={'180px'}
                style={{marginLeft:'80px'}}
              />
            <p>NAME : {a.name.common}</p>
            <p>CAPITAL : {a.capital}</p>
            <p>POPULATION : {a.population}</p>
            <p>CONTINENT : {a.continents}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryData;
