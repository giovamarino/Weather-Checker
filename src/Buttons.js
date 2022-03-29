const Buttons = ({
  typedCity,
  stateCode,
  countryCode,
  fetchGeocoder,
  fetchWeather,
}) => {
  return (
    <div className="buttons">
      <p>
        <button onClick={() => fetchGeocoder()}>Fetch Geocoder</button>
        <button onClick={() => fetchWeather()}>Fetch Weather</button>
      </p>
    </div>
  );
};

export default Buttons;
