# Weather App (MERN)

## Setup

### 1. Get an API key
Sign up at https://openweathermap.org/api and grab a free API key.
(New keys can take up to a couple hours to activate — don't panic if it doesn't work immediately.)

### 2. Backend
```bash
cd server
npm install
cp .env.example .env
```
Open `.env` and paste your API key into `OPENWEATHER_API_KEY`.

Run it:
```bash
npm run dev
```
Visit http://localhost:5000/api/weather/London — you should see JSON weather data.

### 3. Frontend
In a new terminal:
```bash
cd client
npm install
npm run dev
```
Visit the URL Vite prints (usually http://localhost:5173).

### 4. Try it
Type a city name and hit Search or press Enter.

## Next steps (once this works)
- Add a 5-day forecast using `/api/weather/forecast/:city` (route already built on the backend)
- Add a °C/°F toggle
- Add MongoDB + user auth so people can save favorite cities
