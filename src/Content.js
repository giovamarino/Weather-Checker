// index.js -> App.js -> Content.js
import { useState } from "react";
const kelvinToFarenheit = (n) => ((n - 273.15) * 9) / 5 + 32;

const Content = () => {
  let [temperature, setTemperature] = useState(null);
  let [city, setCity] = useState(null);
  let [typedCity, setTypedCity] = useState("");
  let [stateCode, setStateCode] = useState("");
  let [countryCode, setCountryCode] = useState("US");

  const fetchLatLong = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${typedCity},${stateCode},${countryCode}&limit=5&appid=06e3591b9709952a8a7949d6f377c2f1
      `
    )
      // City Required, State code Optional,Country code Optional (but make it required)
      .then((res) => res.json())
      .then((returnedData) => {
        console.log(returnedData);
        console.log(returnedData[0].lat);
        console.log(returnedData[0].lon);
      });
  };

  // inject typedCity into URL
  // fetch whatever's in the URL

  // const fetchLocation = () => {
  //   let lat = 28;
  //   let lon = -81;
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=06e3591b9709952a8a7949d6f377c2f1`
  //   )
  //     .then((res) => res.json())
  //     .then((returnedData) => {
  //       console.log(returnedData);
  //       setTemperature(kelvinToFarenheit(returnedData.main.temp).toFixed(1));
  //       setCity(returnedData.name);
  //     });
  // };

  return (
    <div className="Content">
      <label htmlFor="cityLabel">City:</label>
      <input
        type="text"
        placeholder="city"
        id="cityLabel"
        onChange={(e) => {
          setTypedCity(e.target.value);
        }}
        value={typedCity}
      ></input>

      <label htmlFor="stateCodeLabel">State Code:</label>
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

      <label htmlFor="countryCodeLabel">Country Code:</label>
      <select
        id="countryCodeLabel"
        onChange={(e) => {
          setCountryCode(e.target.value);
        }}
      >
        <option value="US">US</option>
        <option value="KR">KR</option>
      </select>

      <p>
        The current temperature in {city} is {temperature}° F
      </p>
      <button
        onClick={() => {
          console.log(typedCity);
        }}
      >
        typedCity value
      </button>
      <button
        onClick={() => {
          console.log(stateCode);
        }}
      >
        stateCode value
      </button>
      <button
        onClick={() => {
          console.log(countryCode);
        }}
      >
        countryCode value
      </button>

      <p>
        <button onClick={() => fetchLatLong()}>Start Fetch</button>
        {/* logs fetch object, logs lat & long  */}
      </p>
    </div>
  );
};

// make input form for Zip Code (if in US)
// make dropdown menu for ISO 3166 country codes
// input fetchLatLong data to fetchLocation (look into async stuff)
//    BUG: typedCity value doesn't work if City doesn't have a value

// Later:
// Look into <form></form> tag

export default Content;
