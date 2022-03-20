const ContentCards = ({
  temperature,
  feelsLike,
  tempMax,
  tempMin,
  conditionsMain,
}) => {
  // 0 22-03-18 6:00:00
  // 8 22-03-19 6:00:00
  // 16 22-03-20 6:00:00
  // 24 22-03-21 6:00:00
  // 32 22-03-22 6:00:00

  return (
    <div className="contentCards">
      <h2>Date:</h2>
      <p>Temperature: {temperature}° F</p>
      <p>Feels like: {feelsLike}° F</p>
      <p>
        High / Low: {tempMax}° / {tempMin}° F
      </p>
      <p>Humidity:</p>
      <p>Wind Speed:</p>
      <p>Gust:</p>
      <p>Visibility:</p>
      <p>Conditions: {conditionsMain}</p>
    </div>
  );
};

export default ContentCards;
