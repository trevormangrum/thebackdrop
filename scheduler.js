const cron = require('node-cron');

cron.schedule('* * * * *', () => {
    //TODO: Appointment cleanup like in TT.
    //Cleanup appointments that are: 10 mins old.... maybe more?
    console.log("Running the appointment scheduler cleanup...")
});