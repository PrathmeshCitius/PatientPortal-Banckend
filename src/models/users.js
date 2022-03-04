const mongoose = require('mongoose');
const User = mongoose.model('User', {
    firstName: {type: String},
    lastName: {type :String},
    email: {type: String},
    dob: {type:String},
    phone: {type:Number},
    password: {type:String},
    address: {type:String},
    image: {type:String },
    role: {type:String},
    isAuthenticated: {type:Boolean}

});
module.exports=User;