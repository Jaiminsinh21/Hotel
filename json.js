const { age } = require("./basic/import");

const jsonString='{"name":"john","age":30,"city":"New York"}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.age);

const objectToConvert={name:"alice",age:25};
const jsonStringified=JSON.stringify(objectToConvert);
console.log(jsonStringified);