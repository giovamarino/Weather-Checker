// index.js -> App.js -> Content.js
import { useState } from "react";
import ContentCards from "./ContentCards";
import MainCard from "./MainCard";
const kelvinToFarenheit = (n) => (((n - 273.15) * 9) / 5 + 32).toFixed(1);
const metersToFeet = (n) => n * 3.28084;

const Content = () => {
  // day 1
  let [typedCity, setTypedCity] = useState("");
  let [stateCode, setStateCode] = useState("");
  let [countryCode, setCountryCode] = useState("US");
  let [temperature, setTemperature] = useState(null);
  let [feelsLike, setFeelsLike] = useState(null);
  let [tempMin, setTempMin] = useState(null);
  let [tempMax, setTempMax] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [gust, setGust] = useState(null);
  let [visibility, setVisiblity] = useState(null);
  let [conditionsMain, setConditionsMain] = useState(null);
  let [date, setDate] = useState(null);

  // day 2
  let [tempMin2, setTempMin2] = useState(null);
  let [tempMax2, setTempMax2] = useState(null);
  let [humidityDay2, setHumidityDay2] = useState(null);
  let [windSpeedDay2, setWindSpeedDay2] = useState(null);
  let [gustDay2, setGustDay2] = useState(null);
  let [visibilityDay2, setVisiblityDay2] = useState(null);
  let [conditionsDay2, setConditionsDay2] = useState(null);
  let [dateDay2, setdateDay2] = useState(null);

  // day 3
  let [tempMin3, setTempMin3] = useState(null);
  let [tempMax3, setTempMax3] = useState(null);
  let [humidityDay3, setHumidityDay3] = useState(null);
  let [windSpeedDay3, setWindSpeedDay3] = useState(null);
  let [gustDay3, setGustDay3] = useState(null);
  let [visibilityDay3, setVisiblityDay3] = useState(null);
  let [conditionsDay3, setConditionsDay3] = useState(null);
  let [dateDay3, setdateDay3] = useState(null);

  // day 4
  let [tempMin4, setTempMin4] = useState(null);
  let [tempMax4, setTempMax4] = useState(null);
  let [humidityDay4, setHumidityDay4] = useState(null);
  let [windSpeedDay4, setWindSpeedDay4] = useState(null);
  let [gustDay4, setGustDay4] = useState(null);
  let [visibilityDay4, setVisiblityDay4] = useState(null);
  let [conditionsDay4, setConditionsDay4] = useState(null);
  let [dateDay4, setdateDay4] = useState(null);

  // day 5
  let [tempMin5, setTempMin5] = useState(null);
  let [tempMax5, setTempMax5] = useState(null);
  let [humidityDay5, setHumidityDay5] = useState(null);
  let [windSpeedDay5, setWindSpeedDay5] = useState(null);
  let [gustDay5, setGustDay5] = useState(null);
  let [visibilityDay5, setVisiblityDay5] = useState(null);
  let [conditionsDay5, setConditionsDay5] = useState(null);
  let [dateDay5, setdateDay5] = useState(null);

  // Arrays for Highs / Lows for each day
  let tempMinMaxDay1ContainerArray = [];
  let tempMinMaxDay2ContainerArray = [];
  let tempMinMaxDay3ContainerArray = [];
  let tempMinMaxDay4ContainerArray = [];
  let tempMinMaxDay5ContainerArray = [];

  const [error, setError] = useState(false);

  // Grabs the dates for the next 5 days
  let dateDay = [];
  const getCurrentDays = () => {
    for (let i = 0; i < 5; i++) {
      let dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = new Date();
      day.setDate(day.getDate() + i);
      // add day of week with date of month in string
      dateDay.push(`${dayOfWeek[day.getDay()]} ${day.getDate()}`);
    }
  };

  const visibilityToWords = (visibilityCardsParam) => {
    if (!visibilityCardsParam) {
      return "";
    }
    let visibilityNumber = parseInt(visibilityCardsParam);
    if (visibilityNumber > 30000) {
      return `Clear`;
    }
    if (visibilityNumber < 29999 && visibilityNumber > 25000) {
      return `Good`;
    }
    if (visibilityNumber < 24999 && visibilityNumber > 15000) {
      return `Fair`;
    }
    if (visibilityNumber < 14999 && visibilityNumber > 5000) {
      return `Poor`;
    }
    if (visibilityNumber < 4999) {
      return `Very Poor`;
    }
    return "Test";
  };

  const fetchGeocoder = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${typedCity},${stateCode},${countryCode}&limit=5&appid=06e3591b9709952a8a7949d6f377c2f1
      `
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("THERE WAS AN ERROR");
        } else {
          return res.json();
        }
      })
      .then((returnedData) => {
        fetchWeather(returnedData[0].lat, returnedData[0].lon);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const fetchWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=06e3591b9709952a8a7949d6f377c2f1`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("THERE WAS AN ERROR");
        } else {
          return res.json();
        }
      })
      .then((returnedData) => {
        setError(false);
        console.log(returnedData);
        // dumping dateDays array in case multiple searches between multiple days w/o refreshing
        dateDay = [];
        getCurrentDays();

        // day 1
        setTemperature(
          kelvinToFarenheit(returnedData.list[0].main.temp) + "° F"
        );
        setFeelsLike(
          kelvinToFarenheit(returnedData.list[0].main.feels_like) + "° F"
        );
        tempMinMaxDay1ContainerArray = [];
        tempMinMaxDay1ContainerArray.push(
          returnedData.list[0].main.temp_min,
          returnedData.list[1].main.temp_min,
          returnedData.list[2].main.temp_min,
          returnedData.list[3].main.temp_min,
          returnedData.list[4].main.temp_min,
          returnedData.list[5].main.temp_min,
          returnedData.list[6].main.temp_min,
          returnedData.list[7].main.temp_min
        );
        setTempMin(
          kelvinToFarenheit(Math.min(...tempMinMaxDay1ContainerArray)) + "° F"
        );
        setTempMax(
          kelvinToFarenheit(Math.max(...tempMinMaxDay1ContainerArray)) + "° F /"
        );

        setHumidity(returnedData.list[0].main.humidity + "%");
        setWindSpeed(returnedData.list[0].wind.speed.toFixed(1) + " mph");
        setGust(returnedData.list[0].wind.gust.toFixed(1) + " mph");
        setVisiblity(metersToFeet(returnedData.list[0].visibility).toFixed(0));
        setConditionsMain(returnedData.list[0].weather[0].description);

        // day 2
        tempMinMaxDay2ContainerArray = [];
        tempMinMaxDay2ContainerArray.push(
          returnedData.list[8].main.temp_min,
          returnedData.list[9].main.temp_min,
          returnedData.list[10].main.temp_min,
          returnedData.list[11].main.temp_min,
          returnedData.list[12].main.temp_min,
          returnedData.list[13].main.temp_min,
          returnedData.list[14].main.temp_min,
          returnedData.list[15].main.temp_min
        );
        setTempMin2(
          kelvinToFarenheit(Math.min(...tempMinMaxDay2ContainerArray)) + "° F"
        );
        setTempMax2(
          kelvinToFarenheit(Math.max(...tempMinMaxDay2ContainerArray)) + "° F /"
        );
        setHumidityDay2(returnedData.list[8].main.humidity + "%");
        setWindSpeedDay2(returnedData.list[8].wind.speed.toFixed(1) + " mph");
        setGustDay2(returnedData.list[8].wind.gust.toFixed(1) + " mph");
        setVisiblityDay2(
          metersToFeet(returnedData.list[8].visibility).toFixed(0)
        );
        setConditionsDay2(returnedData.list[8].weather[0].description);
        setdateDay2(dateDay[1]);

        // day 3
        tempMinMaxDay3ContainerArray = [];
        tempMinMaxDay3ContainerArray.push(
          returnedData.list[16].main.temp_min,
          returnedData.list[17].main.temp_min,
          returnedData.list[18].main.temp_min,
          returnedData.list[19].main.temp_min,
          returnedData.list[20].main.temp_min,
          returnedData.list[21].main.temp_min,
          returnedData.list[22].main.temp_min,
          returnedData.list[23].main.temp_min
        );
        setTempMin3(
          kelvinToFarenheit(Math.min(...tempMinMaxDay3ContainerArray)) + "° F"
        );
        setTempMax3(
          kelvinToFarenheit(Math.max(...tempMinMaxDay3ContainerArray)) + "° F /"
        );
        setHumidityDay3(returnedData.list[16].main.humidity + "%");
        setWindSpeedDay3(returnedData.list[16].wind.speed.toFixed(1) + " mph");
        setGustDay3(returnedData.list[16].wind.gust.toFixed(1) + " mph");
        setVisiblityDay3(
          metersToFeet(returnedData.list[16].visibility).toFixed(0)
        );
        setConditionsDay3(returnedData.list[16].weather[0].description);
        setdateDay3(dateDay[2]);

        // day 4
        tempMinMaxDay4ContainerArray = [];
        tempMinMaxDay4ContainerArray.push(
          returnedData.list[24].main.temp_min,
          returnedData.list[25].main.temp_min,
          returnedData.list[26].main.temp_min,
          returnedData.list[27].main.temp_min,
          returnedData.list[28].main.temp_min,
          returnedData.list[29].main.temp_min,
          returnedData.list[30].main.temp_min,
          returnedData.list[31].main.temp_min
        );
        setTempMin4(
          kelvinToFarenheit(Math.min(...tempMinMaxDay4ContainerArray)) + "° F"
        );
        setTempMax4(
          kelvinToFarenheit(Math.max(...tempMinMaxDay4ContainerArray)) + "° F /"
        );
        setHumidityDay4(returnedData.list[24].main.humidity + "%");
        setWindSpeedDay4(returnedData.list[24].wind.speed.toFixed(1) + " mph");
        setGustDay4(returnedData.list[24].wind.gust.toFixed(1) + " mph");
        setVisiblityDay4(
          metersToFeet(returnedData.list[24].visibility).toFixed(0)
        );
        setConditionsDay4(returnedData.list[24].weather[0].description);
        setdateDay4(dateDay[3]);

        // day 5
        tempMinMaxDay5ContainerArray = [];
        tempMinMaxDay5ContainerArray.push(
          returnedData.list[32].main.temp_min,
          returnedData.list[33].main.temp_min,
          returnedData.list[34].main.temp_min,
          returnedData.list[35].main.temp_min,
          returnedData.list[36].main.temp_min,
          returnedData.list[37].main.temp_min,
          returnedData.list[38].main.temp_min,
          returnedData.list[39].main.temp_min
        );
        setTempMin5(
          kelvinToFarenheit(Math.min(...tempMinMaxDay5ContainerArray)) + "° F"
        );
        setTempMax5(
          kelvinToFarenheit(Math.max(...tempMinMaxDay5ContainerArray)) + "° F /"
        );
        setHumidityDay5(returnedData.list[32].main.humidity + "%");
        setWindSpeedDay5(returnedData.list[32].wind.speed.toFixed(1) + " mph");
        setGustDay5(returnedData.list[32].wind.gust.toFixed(1) + " mph");
        setVisiblityDay5(
          metersToFeet(returnedData.list[32].visibility).toFixed(0)
        );
        setConditionsDay5(returnedData.list[32].weather[0].description);
        setdateDay5(dateDay[4]);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="content">
      <div className="input">
        <div className="inputChild">
          {error && (
            <div style={{ color: "red", fontSize: 25 }}>
              There was an error retrieving the weather
            </div>
          )}

          <div style={{ display: "flex" }}>
            <label htmlFor="cityLabel">City: </label>
            <input
              type="text"
              placeholder="city"
              id="cityLabel"
              onChange={(e) => {
                if (e.target.value.length < 30) {
                  setTypedCity(e.target.value);
                }
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
          <button onClick={() => fetchGeocoder()}>Search Location</button>
        </div>
      </div>
      <div className="mainCardContainer">
        <MainCard
          typedCity={typedCity}
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          windSpeed={windSpeed}
          gust={gust}
          visibility={visibilityToWords(visibility)}
          conditionsMain={conditionsMain}
        />
      </div>
      <div className="contentCardsContainer">
        <ContentCards
          tempMinCards={tempMin2}
          tempMaxCards={tempMax2}
          humidityCards={humidityDay2}
          windSpeedCards={windSpeedDay2}
          gustCards={gustDay2}
          visibilityCards={visibilityToWords(visibilityDay2)}
          conditionsCards={conditionsDay2}
          dateDay={dateDay2}
        />
        <ContentCards
          tempMinCards={tempMin3}
          tempMaxCards={tempMax3}
          humidityCards={humidityDay3}
          windSpeedCards={windSpeedDay3}
          gustCards={gustDay3}
          visibilityCards={visibilityToWords(visibilityDay3)}
          conditionsCards={conditionsDay3}
          dateDay={dateDay3}
        />
        <ContentCards
          tempMinCards={tempMin4}
          tempMaxCards={tempMax4}
          humidityCards={humidityDay4}
          windSpeedCards={windSpeedDay4}
          gustCards={gustDay4}
          visibilityCards={visibilityToWords(visibilityDay4)}
          conditionsCards={conditionsDay4}
          dateDay={dateDay4}
        />
        <ContentCards
          tempMinCards={tempMin5}
          tempMaxCards={tempMax5}
          humidityCards={humidityDay5}
          windSpeedCards={windSpeedDay5}
          gustCards={gustDay5}
          visibilityCards={visibilityToWords(visibilityDay5)}
          conditionsCards={conditionsDay5}
          dateDay={dateDay5}
        />
      </div>
    </div>
  );
};

export default Content;
