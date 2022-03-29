const ContentCards = ({
  tempMinCards,
  tempMaxCards,
  humidityCards,
  windSpeedCards,
  gustCards,
  visibilityCards,
  conditionsCards,
}) => {
  return (
    <div className="contentCards">
      <h2>Date:</h2>
      <p>
        <span className="label">High / Low:</span>
        <span className="value">
          {tempMinCards} / {tempMaxCards}
        </span>
      </p>
      <p>Humidity: {humidityCards}</p>
      <p>Wind Speed: {windSpeedCards}</p>
      <p>Gust: {gustCards}</p>
      <p>Visibility: {visibilityCards}</p>
      <p>Conditions: {conditionsCards}</p>
    </div>
  );
};

export default ContentCards;
