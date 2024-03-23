require('dotenv').config();
const job = require('./src/cron');
(function () {
    try {
        console.log('starting the cron job....');
        job.start();
    } catch (error) {
        job.stop();
        console.error('Error running the cron job:', error);
    }
})()