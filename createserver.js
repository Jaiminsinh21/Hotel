const express =require('express');
const app=express();
const db= require('./db') 

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body ma strore kare


//  import the router file for person
const personRouters=require('./router/PersonRouter');
app.use('/person',personRouters);

// for menu
const menuRouters=require('./router/MenuRouter');
app.use('/menu',menuRouters);






//aese hiii

app.get('/',function (req,res) {
    res.send('hello world')
})



// app.get('/one',function (req,res) {
//     res.send('chalo gumane')
// })
// app.get('/second',function (req,res) {
//     res.send('chalo fir chalte hai')
// })

// app.get('/three',function (req,res) { 
//     res.send('chalo maja aayenga')
// })

// app.get('/intro',function (req,res) {

//     var detail={
//         name:"berlin",
//         shok:"unche",
//         is_brave:true,
//     }
//     res.send(detail)
// })








app.listen(3000)