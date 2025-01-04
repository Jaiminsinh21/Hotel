// function add(a,b) {
//     return a+b;
// }

// var add=function add(a,b) {
//     return a+b;
// }

// var add=(a,b)=>{return a+b}

// var add =(a,b) => a+b;


// var result=add(9,3);
// console.log(result);
// (function  () {
//     console.log("jjjjjjjjjjjjj")
// });


// callback function
// function callback() {
//     console.log("now adding succes");
// }

function add(a,b,callback){
    callback();

    var result=a+b;
    console.log(a+b);
}

add(5,5,function () {
    console.log("judhfdafmjmjm");
});

add(5,5,()=>{console.log("jdfdnsdf")})