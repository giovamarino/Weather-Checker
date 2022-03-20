// index.js -> App.js -> Content.js
import { useState } from "react";
import Buttons from "./Buttons";
import ContentCards from "./ContentCards";
import MainCard from "./MainCard";
const kelvinToFarenheit = (n) => (((n - 273.15) * 9) / 5 + 32).toFixed(1);

const Content = () => {
  let [typedCity, setTypedCity] = useState("");
  let [stateCode, setStateCode] = useState("");
  let [countryCode, setCountryCode] = useState("US");
  let [lat, setLat] = useState("");
  let [lon, setLon] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [feelsLike, setFeelsLike] = useState(null);
  let [tempMin, setTempMin] = useState(null);
  let [tempMax, setTempMax] = useState(null);
  let [conditionsMain, setConditionsMain] = useState(null);

  const fetchGeocoder = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${typedCity},${stateCode},${countryCode}&limit=5&appid=06e3591b9709952a8a7949d6f377c2f1
      `
    )
      // City Required, State code Optional, Country code Optional (but make it required)
      .then((res) => res.json())
      .then((returnedData) => {
        console.log(returnedData);
        console.log(returnedData[0].lat);
        console.log(returnedData[0].lon);
        setLat(returnedData[0].lat);
        setLon(returnedData[0].lon);
      });
    // .then(() => {
    //   fetchWeather();
    // });
  };

  let tempMinDay1ContainerArray = [];
  let tempMaxDay1ContainerArray = [];
  // put them all in an array
  // pull the largest number of an array

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=06e3591b9709952a8a7949d6f377c2f1`
    )
      .then((res) => res.json())
      .then((returnedData) => {
        console.log(returnedData);
        setTemperature(kelvinToFarenheit(returnedData.list[0].main.temp));
        setFeelsLike(kelvinToFarenheit(returnedData.list[0].main.feels_like));
        tempMinDay1ContainerArray.push(
          returnedData.list[0].main.temp_min,
          returnedData.list[1].main.temp_min,
          returnedData.list[2].main.temp_min,
          returnedData.list[3].main.temp_min,
          returnedData.list[4].main.temp_min,
          returnedData.list[5].main.temp_min,
          returnedData.list[6].main.temp_min,
          returnedData.list[7].main.temp_min
        );
        setTempMin(kelvinToFarenheit(Math.min(...tempMinDay1ContainerArray)));
        tempMaxDay1ContainerArray.push(
          returnedData.list[0].main.temp_max,
          returnedData.list[1].main.temp_max,
          returnedData.list[2].main.temp_max,
          returnedData.list[3].main.temp_max,
          returnedData.list[4].main.temp_max,
          returnedData.list[5].main.temp_max,
          returnedData.list[6].main.temp_max,
          returnedData.list[7].main.temp_max
        );
        setTempMax(kelvinToFarenheit(Math.max(...tempMaxDay1ContainerArray)));
        setConditionsMain(returnedData.list[0].weather[0].description);
        // setTempMin(kelvinToFarenheit(returnedData.list[0].main.temp_min));
        // setTempMax(kelvinToFarenheit(returnedData.list[0].main.temp_max));
      });
  };

  return (
    <div className="content">
      <div className="input">
        <div className="inputChild">
          <label htmlFor="cityLabel">City: </label>
          <input
            type="text"
            placeholder="city"
            id="cityLabel"
            onChange={(e) => {
              setTypedCity(e.target.value);
            }}
            value={typedCity}
          ></input>
        </div>

        <div className="inputChild">
          <label htmlFor="stateCodeLabel">State Code: </label>
          <select
            id="stateCodeLabel"
            onChange={(e) => {
              setStateCode(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="AL">AL</option>
            <option value="FL">FL</option>
          </select>
        </div>

        <div className="inputChild">
          <label htmlFor="countryCodeLabel">Country Code: </label>
          <select
            id="countryCodeLabel"
            onChange={(e) => {
              setCountryCode(e.target.value);
            }}
          >
            <option value="US">US</option>
            <option value="KR">KR</option>
          </select>
        </div>
      </div>
      <div className="mainCardContainer">
        <MainCard typedCity={typedCity} />
      </div>
      <div className="contentCardsContainer">
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          conditionsMain={conditionsMain}
        />
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          conditionsMain={conditionsMain}
        />
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          conditionsMain={conditionsMain}
        />
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          conditionsMain={conditionsMain}
        />
      </div>

      <Buttons
        typedCity={typedCity}
        stateCode={stateCode}
        countryCode={countryCode}
        fetchGeocoder={fetchGeocoder}
        fetchWeather={fetchWeather}
        temperature={temperature}
      />
    </div>
  );
};

// input fetchLatLong data to fetchWeather (look into async stuff)

// Later:
// Look into <form></form> tag

export default Content;
