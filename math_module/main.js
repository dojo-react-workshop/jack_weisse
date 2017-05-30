let fs = require("fs");
let math = require("./math.js");

// fs.readFile("./node.txt","utf8",(err,data)=>{
// 	if(err) {
// 		throw err;
// 	}
// 	console.log(data.toUpperCase());
// });

// console.log("And now, for something completely different!");

console.log(math.sum(2,3)) // 5
console.log(math.product(2,3)) // 6
console.log(math.square(2)) // 4
console.log(math.rand(2, 9)) // 7