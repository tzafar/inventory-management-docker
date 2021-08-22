const axios = require('axios').default
const schedule = require('node-schedule');

schedule.tz = 'Etc/UTC';
schedule.scheduleJob('0 0 7 * * MON', function(fireDate){
    console.log('Exporting items sold data at ' + fireDate);
    axios.get(`${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/orders/airtable`)

});
