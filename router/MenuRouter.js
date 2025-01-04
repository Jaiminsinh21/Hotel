const express=require('express');
const router=express.Router();

const Menu=require('./../model/Menu');


// POST route to add a menu

router.post('/',async (req,res)=>{

    try {
        const data =req.body// Assuming the request body conatains the person data

        //  Create a new person document using the Mongoose model
        const newMenu= new Menu(data);

        // save the new person to the database
        const response= await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(200).json({error:'Internal Server Error'});
        
    }
 
})


// GET method for menu
router.get('/',async (req,res)=>{
    try {
        const data=await Menu.find();
        console.log('data fetch');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(200).json({error:'Internal Server Error'});
    }
 })

//  parametrised api calls

router.get('/:taste',async(req,res)=>{

    try {
        const taste=req.params.taste;
        if (taste=='Sweet'||taste=='Spicy'||taste=='Sour') {
            
            const response=await Menu.find({taste:taste});
            console.log('response fetched');
            res.status(200).json(response);
        }else {
            res.status(404).json({error:'Invalid Work type'});
                
             } 

    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
 module.exports=router;
