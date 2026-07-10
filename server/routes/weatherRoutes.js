const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// GET /api/weather/:city  -> current weather
router.get('/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || 'Something went wrong'
    });
  }
});

// GET /api/weather/forecast/:city  -> 5 day / 3 hour forecast
router.get('/forecast/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || 'Something went wrong'
    });
  }
});

module.exports = router;
