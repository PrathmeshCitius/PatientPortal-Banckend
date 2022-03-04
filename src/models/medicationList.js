const mongoose = require('mongoose');
const MedicationList = mongoose.model('medicationList', {
    currentmedications: {type: String},
    otc: {type: String},
    hvma: {type :String},
    socialdrugs: {type:String},
    drugsallergies:{type:String},
    otherallergies:{type:String},
    userId: {type:String},

});
module.exports=MedicationList;

