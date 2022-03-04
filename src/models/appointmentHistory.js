const mongoose = require('mongoose');
const AppointmentHistory = mongoose.model('eventList', {
    selectPhysician: {type: String},
    status: {type: String},
    StartTime: {type :String},
 
});
module.exports=AppointmentHistory;
