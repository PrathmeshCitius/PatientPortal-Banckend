const mongoose = require('mongoose');
const PatientVital = mongoose.model('patientVital', {
    date: { type: String },
    email: { type: String },
    name: { type: String },
    bp: { type: String },
    pulse: { type: String },
    resp: { type: String },
    temp: { type: String },
    height: { type: String },
    weight: { type: String },
   
});
module.exports = PatientVital;