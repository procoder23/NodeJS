const path = require('path')

// let ext = path.extname('D:\PrathameshMES3\Courses\NodeJS\Module2\NodeModules\file.txt') // File extension
// console.log(ext)

let filename = path.basename('D:/PrathameshMES3/Courses/NodeJS/Module2/NodeModules/file.txt');
console.log(filename); // Outputs: 'file.txt'

console.log(__filename) //current file name
console.log(__dirname) //current file name