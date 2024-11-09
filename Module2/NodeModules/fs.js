//files

const fs = require('fs')

// // Reading a file
// let fileCont = fs.readFileSync('One.txt')
// console.log(fileCont.toString())

// //Writing in file
// fs.writeFileSync('One.txt', "How are you all?") 
// // It write data into file, it exist then it overight it wont append, If file dont exist then it will create
// console.log(fileCont.toString())

// //Appned a file
// fs.appendFileSync('One.txt', " This data is appended")
// console.log(fileCont.toString())

// //Deleting a file
// fs.unlinkSync('One.txt')

//-------------------------------------------------------------------------------------------------------------------------

//Directories
fs.mkdirSync("myDir") // Create Directory

//Check content inside of a directory
const folder = "D:/PrathameshMES3/Courses/NodeJS/Module2/NodeModules/myDir"
let dirCheck = fs.readdirSync(folder) //return an array of files in directory
console.log(dirCheck)

//Check directory whether it is existing or not (Work with files also)
let dirExist = fs.existsSync('myDir')
console.log(dirExist)

//Delete a directory
fs.rmdirSync('myDir')