import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';

const API_URL = 'http://localhost:5000';

// Maps OpenWeatherMap's main condition to one of our background themes
function getBgClass(condition) {
  const map = {
    Clear: 'bg-clear',
    Clouds: 'bg-clouds',
    Rain: 'bg-rain',
    Drizzle: 'bg-rain',
    Thunderstorm: 'bg-thunderstorm',
    Snow: 'bg-snow',
    Mist: 'bg-mist',
    Haze: 'bg-mist',
    Fog: 'bg-mist',
  };
  return map[condition] || 'bg-default';
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const res = await axios.get(`${API_URL}/api/weather/${city}`);
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'City not found');
    } finally {
      setLoading(false);
    }
  };

  const bgClass = weather ? getBgClass(weather.weather[0].main) : 'bg-default';

  return (
    <div className={`app ${bgClass}`}>
      {/* Ambient floating particles — purely decorative, changes with the mood of the gradient */}
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />

      <div className="content">
        <h1 className="title">Weather</h1>
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />

        {loading && <p className="status-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;