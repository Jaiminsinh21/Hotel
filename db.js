const mongoose= require('mongoose');


// Define the MongoDB connection URL
require('dotenv').config();
//const mongoURL ='mongodb://localhost:27017/mydatabases'  // as you wish you will add the name
const mongoURL=process.env.MONGODB_URL;
// Set up MongoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
})

// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.

const db=mongoose.connection;

// Define event listeners for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server')
})
db.on('error',()=>{
    console.log('Connected to MongoDB server',err)
})
db.on('disconnected',()=>{
    console.log('Connected to MongoDB server')
})

// export the database connection
module.exports=db;