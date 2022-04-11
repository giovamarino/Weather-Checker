const MainCard = ({
  typedCity,
  temperature,
  feelsLike,
  tempMax,
  tempMin,
  humidity,
  conditionsMain,
  windSpeed,
  gust,
  visibility,
}) => {
  return (
    <div className="mainCard">
      <div className="top-row">
        <div>
          <h1>Today</h1>
        </div>
        <div>
          <h1 className="mainCardCityName">{typedCity}</h1>
        </div>
      </div>
      <div className="bottom-row">
        <div className="data-col">
          <div className="data-col-row">
            <span className="label">Temperature:</span>
            <span className="value">{temperature}</span>
          </div>
          <div className="data-col-row">
            <span className="label">Feels like:</span>
            <span className="value">{feelsLike}</span>
          </div>
          <div className="data-col-row">
            <span className="label">High / Low:</span>
            <span className="value">
              {tempMax} {tempMin}
            </span>
          </div>
          <div className="data-col-row">
            <span className="label">Humidity:</span>
            <span className="value">{humidity}</span>
          </div>
        </div>
        <div className="data-col">
          <div className="data-col-row">
            <span className="label">Wind Speed:</span>
            <span className="value">{windSpeed}</span>
          </div>
          <div className="data-col-row">
            <span className="label">Gust:</span>
            <span className="value">{gust}</span>
          </div>
          <div className="data-col-row">
            <span className="label">Visibility:</span>
            <span className="value">{visibility}</span>
          </div>
          <div className="data-col-row">
            <span className="label">Conditions:</span>
            <span className="value">{conditionsMain}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
