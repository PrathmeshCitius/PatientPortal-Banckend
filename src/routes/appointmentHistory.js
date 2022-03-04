const express = require('express');
const router = express.Router();
const objectId =require('mongoose').Types.ObjectId;

const AppointmentHistory = require('../models/appointmentHistory.js')
///creating APIS get put post delete
//Basepath: http://localhost:3000/users
//getting all the data
// router.get('/',(req,res)=>{
//     AppointmentHistory.find( (err, doc)=>{
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
    AppointmentHistory.findById(req.params.id,(err, doc)=>{
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
    let appointmentHistory = new AppointmentHistory({
       
        selectPhysician: req.body.selectPhysician,
        status: req.body.status,
        StartTime: req.body.StartTime
    });

    appointmentHistory.save((err,doc)=>{
        if(err){
            console.log("Error in post data "+err);
        }
        else{
            res.send(doc);
        }
    })

})

module.exports=router;
