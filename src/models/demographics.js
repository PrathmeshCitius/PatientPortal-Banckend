const mongoose = require('mongoose');
const Demographics = mongoose.model('patientDemo', {
    firstName: {type: String},
    lastName: {type :String},
    dob: {type:String},
    gender:{type:String},
    ethnicity:{type:String},
    education: {type:String},
    occupation: {type:String},
    address: {type:String},
    contact: {type:Number },
    medHist: {type:String},
    fmMedHist: {type:String},
    surgery:{type:String},
    insurance:{type:String}

});
module.exports=Demographics;
