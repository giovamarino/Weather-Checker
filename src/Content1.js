// index.js -> App.js -> Content.js
import { useState, useEffect } from "react";
const Content1 = () => {
  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(35);
  const [lon, setLon] = useState(139);

  const getWeather = (e) => {
    // remember http:// in fetch
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${lat}&appid=06e3591b9709952a8a7949d6f377c2f1`
    )
      .then((res) => res.json())
      .then((returnedData) => setTemp(returnedData.main.feels_likes))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Content">
      <input
        type="text"
        onChange={(e) => setLat(e.target.value)}
        placeholder="lat"
        value={lat}
      />
      <input
        type="text"
        onChange={(e) => setLon(e.target.value)}
        placeholder="lon"
        value={lon}
      />
      <button onClick={getWeather}>Get Weather</button>
      <h2>Hello</h2>
      <h2>{temp}</h2>
    </div>
  );
};

export default Content1;

// fetch(
//   `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=06e3591b9709952a8a7949d6f377c2f1`
// )
//   .then((res) => res.json())
//   .then((returnedData) => console.log(returnedData));

// fetch(`https://reqres.in/api/users/`)
//     .then((res) => res.json())
//     .then((returnedData) => console.log(returnedData));
