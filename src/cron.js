// Import necessary modules and dependencies
const { CronJob } = require('cron');
const axios = require('axios');
const db = require('./config/db');
const AirQuality = require('./models/airQualityModel');
const API_KEY = '6b441523-dd55-4aad-91b9-9e4594a5dc9a';

const job = new CronJob('*/1 * * * *', async () => {
    const latitude = 48.856613;
    const longitude = 2.352222;

    try {
        const response = await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${API_KEY}`);

        console.log(response?.data?.data);
        const airQualityData = response?.data?.data?.current?.pollution;
        await AirQuality.create(airQualityData);
    } catch (error) {
        console.error('Error fetching air quality:', error);
    }
});

module.exports = job;