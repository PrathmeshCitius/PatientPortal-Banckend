const express = require('express');
const router = express.Router();
const objectId =require('mongoose').Types.ObjectId;

const Demographic =  require('../models/demographics.js')

///creating APIS get put post delete
//Basepath: http://localhost:3000/users
//getting all the data
// router.get('/',(req,res)=>{
//     Demographic.find( (err, doc)=>{
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
    Demographic.findById(req.params.id,(err, doc)=>{
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
    let demographic = new Demographic({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        gender: req.body.gender,
        ethnicity: req.body.ethnicity,
        education: req.body.education,
        occupation: req.body.occupation,
        address: req.body.address,
        contact: req.body.contact,
        medHist: req.body.medHist,
        fmMedHist: req.body.fmMedHist,
        surgery: req.body.surgery,
        insurance: req.body.insurance
    });

    demographic.save((err,doc)=>{
        if(err){
            console.log("Error in post data "+err);
        }
        else{
            res.send(doc);
        }
    })

})

module.exports=router;
