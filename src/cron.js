// Import necessary modules and dependencies
const { CronJob } = require('cron');
const axios = require('axios');
const db = require('./config/db');
const AirQuality = require('./models/airQualityModel');
const API_KEY = process.env.API_KEY;
const IQAIR_API_URL = process.env.IQAIR_API_URL;
const NEAREST_CITY_API = process.env.NEAREST_CITY_API;

const job = new CronJob('*/1 * * * *', async () => {
    const latitude = 48.856613;
    const longitude = 2.352222;

    try {
        const response = await axios.get(`${IQAIR_API_URL}${NEAREST_CITY_API}?lat=${latitude}&lon=${longitude}&key=${API_KEY}`);

        console.log(response?.data?.data);
        const airQualityData = response?.data?.data?.current?.pollution;
        await AirQuality.create(airQualityData);
    } catch (error) {
        console.error('Error fetching air quality:', error);
    }
});

module.exports = job;