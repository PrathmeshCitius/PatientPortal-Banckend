const express = require('express');
const router = express.Router();
const objectId =require('mongoose').Types.ObjectId;

const MedicationList = require('../models/medicationList.js');

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
    MedicationList.findById(req.params.id,(err, doc)=>{
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
    let medicationList = new MedicationList({
        currentmedications:req.body.currentmedications,
        otc: req.body.otc,
        hvma: req.body.hvma,
        socialdrugs: req.body.socialdrugs,
        drugsallergies: req.body.drugsallergies,
        otherallergies: req.body.otherallergies,
        userId: req.body.userId
    });
    medicationList.save((err,doc)=>{
        if(err){
            console.log("Error in post data "+err);
        }
        else{
            res.send(doc);
        }
    })

})

module.exports=router;
