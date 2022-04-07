const ContentCards = ({
  tempMinCards,
  tempMaxCards,
  humidityCards,
  windSpeedCards,
  gustCards,
  visibilityCards,
  conditionsCards,
  dateDay,
}) => {
  const visibilityChecker = (visibilityCards) => {
    if (visibilityCards > 30000) {
      console.log(`this works`);
    } else {
    }
  };
  return (
    <div className="contentCards">
      <div className="contentCardsTitle">
        <h3>{dateDay}</h3>
      </div>
      <div className="contentCardsBottomRow">
        <p>
          <span className="label">High / Low:</span> {tempMaxCards}{" "}
          {tempMinCards}
        </p>
        <p>Humidity: {humidityCards}</p>
        <p>Wind Speed: {windSpeedCards}</p>
        <p>Gust: {gustCards}</p>
        <p>Visibility: {visibilityCards}</p>
        <p>Conditions: {conditionsCards}</p>
      </div>
    </div>
  );
};

export default ContentCards;
