const express = require('express');
const router = express.Router();
const objectId =require('mongoose').Types.ObjectId;

const PatientVitals = require('../models/patientVital.js');
//getting all the data
// router.get('/',(req,res)=>{
//     PatientVital.find( (err, doc)=>{
//         if(err){
//             console.log("error in the get data"+err)
//         }
//         else{
//             res.send(doc)
//         }
//     })
// });

//getting data by ID
router.get('/:id',(req, res)=>{
    if(objectId.isValid(req.params.id)){
        PatientVitals.findById(req.params.id,(err, doc)=>{
            if(err){
                            console.log("error in the get data by ID"+err)
                        }
                        else{
                            res.send(doc)
                        }
        })
    }
    else{
        return res.status(400).send("No record found with ID" +req.params.id)
    }
    })


router.post('/', (req, res)=>{
let patientVital = new PatientVital({
    date: req.body.date,
    email: req.body.email,
    name: req.body.name,
    bp: req.body.bp,
    pulse: req.body.pulse,
    resp: req.body.resp,
    temp: req.body.temp,
    height: req.body.height,
    weight: req.body.weight
});
patientVital.save((err,doc)=>{
    if(err){
        console.log("Error in post data "+err);
    }
    else{
        res.send(doc);
    }
})
})
module.exports = router;