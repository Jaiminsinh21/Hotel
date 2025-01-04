var fs=require('fs');//file created
var os=require('os');//system detail
const notes=require('./import.js');// import new file
var _=require('lodash');//


// os ::: systeam details
var user =os.userInfo(); 
console.log(user);
console.log(user.username);

// fs:::  created file
fs.appendFile('new file','hi\n',()=>{
    console.log("jsafhad");
})

// import new file
var age= notes.age;

var result =notes.addNumber(age+18,55);
console.log(result);
console.log(age);

// 
var data=['person','person',1,2,1,2,'name','age',2];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString("banna"));