const MainCard = ({
  typedCity,
  temperature,
  feelsLike,
  tempMax,
  tempMin,
  conditionsMain,
  humidity,
  windSpeed,
  gust,
  visibility,
}) => {
  return (
    <div className="mainCard">
      <div>
        <h1>Today</h1>
      </div>
      <div>
        <h1 className="mainCardCityName">{typedCity}</h1>
      </div>
      <div></div>
      <div class="mainCardData">
        <div>
          <p>Temperature: {temperature}</p>
          <p>Feels like: {feelsLike}</p>
          <p>
            High / Low: {tempMax} / {tempMin}
          </p>
          <p>Humidity: {humidity}</p>
        </div>
        <div>
          <p>Wind Speed: {windSpeed}</p>
          <p>Gust: {gust}</p>
          <p>Visibility: {visibility}</p>
          <p>Conditions: {conditionsMain}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
