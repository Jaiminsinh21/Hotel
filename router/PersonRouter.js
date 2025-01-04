const express=require('express');
const router= express.Router(); //express.Router fuction ne router variable ma store kri didho\

const Person=require('./../model/Person');
const { update } = require('lodash');

// POST route to add a person

router.post('/',async (req,res)=>{

    try {
        const data =req.body// Assuming the request body conatains the person data

        //  Create a new person document using the Mongoose model
        const newPersone= new Person(data);

        // save the new person to the database
        const response= await newPersone.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(200).json({error:'Internal Server Error'});
        
    }
 
})

// GET method for person
router.get('/',async (req,res)=>{
    try {
        const data=await Person.find();
        console.log('data fetch');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(200).json({error:'Internal Server Error'});
    }
 })

 //  parametrised API calls

router.get('/:workType', async(req,res)=>{
    try {
         const workType=req.params.workType;
         if (workType=='chef'||workType=='manager'||workType=='waiter') {
             
            const response= await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
         } else {
        res.status(404).json({error:'Invalid Work type'});
            
         }        
   

    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
 
    }
})

// Update using put

router.put('/:id',async(req,res)=>{
    try {
        const personId=req.params.id; //Extract the id from the url paramter
        const updatePersonData=req.body;//Update data for the Person // id sathe matvh tahy ae data aape
 
        const response= await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,//Return the updated document
            runValidators:true,// Run Mongoose validation

        })
        if (!response) {
            return res.status(404).json({error:'Person not found'});

        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (err) {
          console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

// Delete using delete
router.delete('/:id',async(req,res)=>{
    try {
        const personId=req.params.id; //Extract the id from the url paramter
        
        // Assuming you have a Person model
        const response =await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({error:'Person not found'});

        }
        console.log('data deleted');
        res.status(200).json({message:'person Deleted Successfully'});


    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

module.exports=router;