function WeatherCard({ weather }) {
  const { name, sys, main, weather: weatherArr } = weather;
  const icon = weatherArr[0].icon;
  const description = weatherArr[0].description;

  return (
    <div className="weather-card">
      <p className="location">{name}, {sys.country}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div className="temp">{Math.round(main.temp)}°</div>
      <p className="description">{description}</p>
      <div className="meta">
        <div>
          <strong>{Math.round(main.feels_like)}°C</strong>
          Feels like
        </div>
        <div>
          <strong>{main.humidity}%</strong>
          Humidity
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;