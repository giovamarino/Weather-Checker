const ContentCards = ({
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
  // 0 22-03-18 6:00:00
  // 8 22-03-19 6:00:00
  // 16 22-03-20 6:00:00
  // 24 22-03-21 6:00:00
  // 32 22-03-22 6:00:00

  return (
    <div className="contentCards">
      <h2>Date:</h2>
      <p>Temperature: {temperature}</p>
      <p>Feels like: {feelsLike}</p>
      <p>
        High / Low: {tempMax} / {tempMin}
      </p>
      <p>Humidity: {humidity}</p>
      <p>Wind Speed: {windSpeed}</p>
      <p>Gust: {gust}</p>
      <p>Visibility: {visibility}</p>
      <p>Conditions: {conditionsMain}</p>
    </div>
  );
};

export default ContentCards;
