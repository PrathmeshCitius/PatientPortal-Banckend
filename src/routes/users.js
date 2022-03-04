const express = require('express');
const router = express.Router();
const objectId =require('mongoose').Types.ObjectId;

const User =  require('../models/users.js')

///creating APIS get put post delete
//Basepath: http://localhost:3000/users
//getting all the data
router.get('/',(req,res)=>{
    User.find( (err, doc)=>{
        if(err){
            console.log("error in the get data"+err)
        }
        else{
            res.send(doc)
        }
    })
});
//getting data by ID
// router.get('/:id',(req, res)=>{
// if(objectId.isValid(req.params.id)){
//     User.findById(req.params.id,(err, doc)=>{
//         if(err){
//                         console.log("error in the get data by ID"+err)
//                     }
//                     else{
//                         res.send(doc)
//                     }
//     })
// }
// else{
//     return res.status(400).send("No record found with ID" +req.params.id)
// }
// })

router.post('/', (req, res)=>{
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        phone: req.body.phone,
        password: req.body.password,
        address: req.body.address,
        image: req.body.image,
        role: req.body.role,
        isAuthenticated: req.body.isAuthenticated
    });
    user.save((err,doc)=>{
        if(err){
            console.log("Error in post data "+err);
        }
        else{
            res.send(doc);
        }
    })

})

module.exports=router;
