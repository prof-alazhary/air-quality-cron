const { CronJob } = require('cron');
const axios = require('axios');
const db = require('./config/db');
const AirQuality = require('./models/airQualityModel');
const API_KEY = process.env.API_KEY;
const IQAIR_API_URL = process.env.IQAIR_API_URL;
const NEAREST_CITY_API = process.env.NEAREST_CITY_API;
const CRON_SCHEDULE = process.env.CRON_SCHEDULE;

const job = new CronJob(CRON_SCHEDULE, async () => {
    const latitude = 48.856613;
    const longitude = 2.352222;

    try {
        const response = await axios.get(`${IQAIR_API_URL}${NEAREST_CITY_API}?lat=${latitude}&lon=${longitude}&key=${API_KEY}`);
        console.log("responded!");
        const { city, current: { pollution } } = response?.data?.data;
        await AirQuality.create({ city: city.toLowerCase(), pollution });
    } catch (error) {
        console.error('Error fetching air quality:', error);
    }
});

module.exports = job;