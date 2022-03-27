// index.js -> App.js -> Content.js
import { useState } from "react";
import ContentCards from "./ContentCards";
import MainCard from "./MainCard";
const kelvinToFarenheit = (n) => (((n - 273.15) * 9) / 5 + 32).toFixed(1);
const metersToFeet = (n) => n * 3.28084;

const Content = () => {
  let [typedCity, setTypedCity] = useState("");
  let [stateCode, setStateCode] = useState("");
  let [countryCode, setCountryCode] = useState("US");
  let [temperature, setTemperature] = useState(null);
  let [feelsLike, setFeelsLike] = useState(null);
  let [tempMax, setTempMax] = useState(null);
  let [tempMin, setTempMin] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [gust, setGust] = useState(null);
  let [visibility, setVisiblity] = useState(null);
  let [conditionsMain, setConditionsMain] = useState(null);

  // put them all in an array
  // pull the largest number of an array
  let tempMinDay1ContainerArray = [];
  let tempMaxDay1ContainerArray = [];

  // const futureTemps = (data) => {
  //   let temps = [
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //   ];

  //   // loops through all the data to figure where each data point belongs in the day of the week(9th 2nd, 10th 2nd etc)
  //   for (let dataPoint of data) {
  //     let dataDate = dataPoint.dt_txt.split("-");
  //     dataDate = dataDate[2].split(" ")[0];

  //     // getting today's date
  //     let today = new Date().getDate();

  //     // turn them to numbers
  //     let index = parseInt(dataDate) - parseInt(today) - 1;
  //     console.log(index, dataPoint.main.temp_min);

  //     if (temps[index].min === null) {
  //       temps[index].min = dataPoint.main.temp_min;
  //     } else {
  //       temps[index].min = (dataPoint.main.temp_min + temps[index].min) / 2;
  //     }

  //     // data = data passed into func
  //     // datapoint = iterator of object
  //     // index = date
  //     //
  //     //
  //   }
  // };

  let weatherObject = [
    {
      dt: 1648360800,
      main: {
        temp: 288.37,
        feels_like: 287.93,
        temp_min: 287.48,
        temp_max: 288.37,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1014,
        humidity: 76,
        temp_kf: 0.89,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.03,
        deg: 280,
        gust: 10.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-27 06:00:00",
    },
    {
      dt: 1648371600,
      main: {
        temp: 287.72,
        feels_like: 287.06,
        temp_min: 286.43,
        temp_max: 287.72,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 70,
        temp_kf: 1.29,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.63,
        deg: 321,
        gust: 13.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-27 09:00:00",
    },
    {
      dt: 1648382400,
      main: {
        temp: 285.97,
        feels_like: 284.93,
        temp_min: 284.77,
        temp_max: 285.97,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 62,
        temp_kf: 1.2,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.6,
        deg: 332,
        gust: 9.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-27 12:00:00",
    },
    {
      dt: 1648393200,
      main: {
        temp: 292.21,
        feels_like: 290.98,
        temp_min: 292.21,
        temp_max: 292.21,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.84,
        deg: 337,
        gust: 6.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-27 15:00:00",
    },
    {
      dt: 1648404000,
      main: {
        temp: 296.51,
        feels_like: 295.58,
        temp_min: 296.51,
        temp_max: 296.51,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.63,
        deg: 314,
        gust: 7.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-27 18:00:00",
    },
    {
      dt: 1648414800,
      main: {
        temp: 296.96,
        feels_like: 296.21,
        temp_min: 296.96,
        temp_max: 296.96,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.87,
        deg: 303,
        gust: 6.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-27 21:00:00",
    },
    {
      dt: 1648425600,
      main: {
        temp: 290.6,
        feels_like: 289.63,
        temp_min: 290.6,
        temp_max: 290.6,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1016,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.66,
        deg: 280,
        gust: 7.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-28 00:00:00",
    },
    {
      dt: 1648436400,
      main: {
        temp: 287.84,
        feels_like: 286.93,
        temp_min: 287.84,
        temp_max: 287.84,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.65,
        deg: 279,
        gust: 6.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-28 03:00:00",
    },
    {
      dt: 1648447200,
      main: {
        temp: 287.09,
        feels_like: 286.32,
        temp_min: 287.09,
        temp_max: 287.09,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.1,
        deg: 289,
        gust: 2.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-28 06:00:00",
    },
    {
      dt: 1648458000,
      main: {
        temp: 286.69,
        feels_like: 286.16,
        temp_min: 286.69,
        temp_max: 286.69,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1017,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 1.75,
        deg: 305,
        gust: 1.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-28 09:00:00",
    },
    {
      dt: 1648468800,
      main: {
        temp: 287.34,
        feels_like: 287.03,
        temp_min: 287.34,
        temp_max: 287.34,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1019,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 1.55,
        deg: 299,
        gust: 1.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-28 12:00:00",
    },
    {
      dt: 1648479600,
      main: {
        temp: 295.28,
        feels_like: 294.93,
        temp_min: 295.28,
        temp_max: 295.28,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.64,
        deg: 314,
        gust: 3.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-28 15:00:00",
    },
    {
      dt: 1648490400,
      main: {
        temp: 299.52,
        feels_like: 299.52,
        temp_min: 299.52,
        temp_max: 299.52,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1018,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.48,
        deg: 307,
        gust: 3.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-28 18:00:00",
    },
    {
      dt: 1648501200,
      main: {
        temp: 300.19,
        feels_like: 299.85,
        temp_min: 300.19,
        temp_max: 300.19,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.56,
        deg: 298,
        gust: 4.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-28 21:00:00",
    },
    {
      dt: 1648512000,
      main: {
        temp: 293.47,
        feels_like: 293.07,
        temp_min: 293.47,
        temp_max: 293.47,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1018,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.09,
        deg: 291,
        gust: 8.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-29 00:00:00",
    },
    {
      dt: 1648522800,
      main: {
        temp: 290.01,
        feels_like: 289.76,
        temp_min: 290.01,
        temp_max: 290.01,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.97,
        deg: 283,
        gust: 6.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-29 03:00:00",
    },
    {
      dt: 1648533600,
      main: {
        temp: 288.86,
        feels_like: 288.65,
        temp_min: 288.86,
        temp_max: 288.86,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.43,
        deg: 316,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-29 06:00:00",
    },
    {
      dt: 1648544400,
      main: {
        temp: 288.05,
        feels_like: 287.84,
        temp_min: 288.05,
        temp_max: 288.05,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 0.37,
        deg: 314,
        gust: 0.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-29 09:00:00",
    },
    {
      dt: 1648555200,
      main: {
        temp: 288.85,
        feels_like: 288.64,
        temp_min: 288.85,
        temp_max: 288.85,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 0.54,
        deg: 2,
        gust: 0.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-29 12:00:00",
    },
    {
      dt: 1648566000,
      main: {
        temp: 296.77,
        feels_like: 296.41,
        temp_min: 296.77,
        temp_max: 296.77,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.02,
        deg: 108,
        gust: 2.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-29 15:00:00",
    },
    {
      dt: 1648576800,
      main: {
        temp: 301.54,
        feels_like: 300.7,
        temp_min: 301.54,
        temp_max: 301.54,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.9,
        deg: 107,
        gust: 1.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-29 18:00:00",
    },
    {
      dt: 1648587600,
      main: {
        temp: 302.27,
        feels_like: 301.07,
        temp_min: 302.27,
        temp_max: 302.27,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.68,
        deg: 129,
        gust: 2.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-29 21:00:00",
    },
    {
      dt: 1648598400,
      main: {
        temp: 296.37,
        feels_like: 295.92,
        temp_min: 296.37,
        temp_max: 296.37,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.88,
        deg: 127,
        gust: 4.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-30 00:00:00",
    },
    {
      dt: 1648609200,
      main: {
        temp: 293.51,
        feels_like: 293.32,
        temp_min: 293.51,
        temp_max: 293.51,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1017,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 4.19,
        deg: 145,
        gust: 10.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-30 03:00:00",
    },
    {
      dt: 1648620000,
      main: {
        temp: 292.32,
        feels_like: 292.07,
        temp_min: 292.32,
        temp_max: 292.32,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1016,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 4.51,
        deg: 162,
        gust: 11.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-30 06:00:00",
    },
    {
      dt: 1648630800,
      main: {
        temp: 290.32,
        feels_like: 290.08,
        temp_min: 290.32,
        temp_max: 290.32,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 3.11,
        deg: 163,
        gust: 8.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-30 09:00:00",
    },
    {
      dt: 1648641600,
      main: {
        temp: 290.84,
        feels_like: 290.83,
        temp_min: 290.84,
        temp_max: 290.84,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1015,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 3.61,
        deg: 147,
        gust: 11.04,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-30 12:00:00",
    },
    {
      dt: 1648652400,
      main: {
        temp: 296.97,
        feels_like: 296.97,
        temp_min: 296.97,
        temp_max: 296.97,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1015,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.87,
        deg: 150,
        gust: 10.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-30 15:00:00",
    },
    {
      dt: 1648663200,
      main: {
        temp: 301.9,
        feels_like: 301.43,
        temp_min: 301.9,
        temp_max: 301.9,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.05,
        deg: 150,
        gust: 9.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-30 18:00:00",
    },
    {
      dt: 1648674000,
      main: {
        temp: 303.03,
        feels_like: 302.2,
        temp_min: 303.03,
        temp_max: 303.03,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 7.4,
        deg: 153,
        gust: 9.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-30 21:00:00",
    },
    {
      dt: 1648684800,
      main: {
        temp: 298.54,
        feels_like: 298.39,
        temp_min: 298.54,
        temp_max: 298.54,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 6.6,
        deg: 150,
        gust: 11.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-31 00:00:00",
    },
    {
      dt: 1648695600,
      main: {
        temp: 295.72,
        feels_like: 295.65,
        temp_min: 295.72,
        temp_max: 295.72,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1011,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 7.2,
        deg: 158,
        gust: 13.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-31 03:00:00",
    },
    {
      dt: 1648706400,
      main: {
        temp: 294.72,
        feels_like: 294.66,
        temp_min: 294.72,
        temp_max: 294.72,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 60,
      },
      wind: {
        speed: 6.39,
        deg: 170,
        gust: 14.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-31 06:00:00",
    },
    {
      dt: 1648717200,
      main: {
        temp: 293.95,
        feels_like: 294.17,
        temp_min: 293.95,
        temp_max: 293.95,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 6.5,
        deg: 167,
        gust: 14.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-03-31 09:00:00",
    },
    {
      dt: 1648728000,
      main: {
        temp: 293.95,
        feels_like: 294.2,
        temp_min: 293.95,
        temp_max: 293.95,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 6,
        deg: 169,
        gust: 14.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-31 12:00:00",
    },
    {
      dt: 1648738800,
      main: {
        temp: 299.8,
        feels_like: 299.8,
        temp_min: 299.8,
        temp_max: 299.8,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 8.1,
        deg: 182,
        gust: 11.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-31 15:00:00",
    },
    {
      dt: 1648749600,
      main: {
        temp: 304.07,
        feels_like: 304.25,
        temp_min: 304.07,
        temp_max: 304.07,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 7.03,
        deg: 209,
        gust: 10.24,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-31 18:00:00",
    },
    {
      dt: 1648760400,
      main: {
        temp: 300.76,
        feels_like: 301.76,
        temp_min: 300.76,
        temp_max: 300.76,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.62,
        deg: 239,
        gust: 10.86,
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-03-31 21:00:00",
    },
    {
      dt: 1648771200,
      main: {
        temp: 298.69,
        feels_like: 299,
        temp_min: 298.69,
        temp_max: 298.69,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.08,
        deg: 230,
        gust: 11.1,
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-04-01 00:00:00",
    },
    {
      dt: 1648782000,
      main: {
        temp: 296.56,
        feels_like: 296.97,
        temp_min: 296.56,
        temp_max: 296.56,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.82,
        deg: 219,
        gust: 11.2,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-04-01 03:00:00",
    },
  ];

  let today = new Date().getDate();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = tomorrow.toString();
  tomorrow = tomorrow.split(" ");
  let tomorrowDate = tomorrow[2];
  Number("tomorrowDate");

  console.log(typeof tomorrow[2]);
  console.log(tomorrow);
  console.log(tomorrow[2]);
  console.log(tomorrowDate);
  console.log(typeof tomorrowDate);

  var futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 5);

  let array = [1, 2, 3, 4, 5, 6, 7, 8];

  const loop = (object) => {
    for (const iterator of object) {
      console.log(iterator);
      let dtTxt = iterator.dt_txt.split("-");
      dtTxt = dtTxt[2].split(" ")[0];
      console.log(dtTxt);

      console.log(today);
    }
  };

  // if dtTxt === todaysdate
  // {
  //
  // }

  // const futureTemps = () => {
  //   let temps = [
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //     { min: null, max: null },
  //   ];

  //   let date = new Date().getDate();

  //   for (const iterator of object) {
  //     iterator;
  //   }
  // };

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

        fetchWeather(returnedData[0].lat, returnedData[0].lon);
      });
  };

  const fetchWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=06e3591b9709952a8a7949d6f377c2f1`
    )
      .then((res) => res.json())
      .then((returnedData) => {
        console.log(returnedData);
        setTemperature(
          kelvinToFarenheit(returnedData.list[0].main.temp) + "° F"
        );
        setFeelsLike(
          kelvinToFarenheit(returnedData.list[0].main.feels_like) + "° F"
        );
        console.log(returnedData.list);
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
        setTempMin(
          kelvinToFarenheit(Math.min(...tempMinDay1ContainerArray)) + "° F"
        );
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
        setTempMax(
          kelvinToFarenheit(Math.max(...tempMaxDay1ContainerArray)) + "° F"
        );
        setHumidity(returnedData.list[0].main.humidity + "%");
        setWindSpeed(returnedData.list[0].wind.speed.toFixed(1) + " mph");
        setGust(returnedData.list[0].wind.gust.toFixed(1) + " mph");
        setVisiblity(
          metersToFeet(returnedData.list[0].visibility).toFixed(0) + " ft"
        );
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
        {/* <button onClick={() => loop(array)}>Search Location</button> */}
        <button onClick={() => loop(weatherObject)}>Search Location</button>
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
          visibility={visibility}
          conditionsMain={conditionsMain}
        />
      </div>
      <div className="contentCardsContainer">
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          windSpeed={windSpeed}
          gust={gust}
          visibility={visibility}
          conditionsMain={conditionsMain}
        />
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          windSpeed={windSpeed}
          gust={gust}
          visibility={visibility}
          conditionsMain={conditionsMain}
        />
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          windSpeed={windSpeed}
          gust={gust}
          visibility={visibility}
          conditionsMain={conditionsMain}
        />
        <ContentCards
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          windSpeed={windSpeed}
          gust={gust}
          visibility={visibility}
          conditionsMain={conditionsMain}
        />
      </div>
    </div>
  );
};

export default Content;
