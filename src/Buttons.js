const Buttons = ({
  typedCity,
  stateCode,
  countryCode,
  fetchGeocoder,
  fetchWeather,
  temperature,
}) => {
  return (
    <div className="buttons">
      <button
        onClick={() => {
          console.log(typedCity);
        }}
      >
        typedCity value
      </button>
      <button
        onClick={() => {
          console.log(stateCode);
        }}
      >
        stateCode value
      </button>
      <button
        onClick={() => {
          console.log(countryCode);
        }}
      >
        countryCode value
      </button>

      <p>
        <button onClick={() => fetchGeocoder()}>Fetch Geocoder</button>
        <button onClick={() => fetchWeather()}>Fetch Weather</button>
        <button
          onClick={() => {
            console.log(temperature);
          }}
        >
          temperature
        </button>
      </p>
    </div>
  );
};

export default Buttons;
