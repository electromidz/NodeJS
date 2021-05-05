var path = require("path");
var hello = "hello world node.js";
var justNode = hello.slice(17);
// console.log(`Rock in World ${justNode}`);
// console.log(__dirname);
console.log(`Rock in World ${path.basename(__filename)}`);
console.log('\n');
// console.log(__filename);
