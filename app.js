const express = require('express')
const fs = require('fs')

const app = express()

app.use(express())

console.log("First line")

//------------------readFileSync() read the file synchronously-----------------------------------------
// let data = fs.readFileSync('f1.txt')
// console.log(data.toString())
//----------------------------------------------------------------------------------------------------

//------------------readFile() read the file asynchronously-----------------------------------------
// fs.readFile('f1.txt', "UTF-8", function cb1(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log(`File1 data -->> ${data}`)
// })

// fs.readFile('f2.txt', "UTF-8", function cb1(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log(`File2 data -->> ${data}`)
// })

// fs.readFile('f3.txt', "UTF-8", function cb1(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log(`File3 data -->> ${data}`)
// })

// fs.readFile('f4.txt', "UTF-8", function cb1(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log(`File4 data -->> ${data}`)
// })

// console.log("Last line")

//---------------------------- Serial execution -----------------------------------------------------
fs.readFile('f1.txt', "UTF-8", function cb1(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(`File1 data -->> ${data}`);

        fs.readFile('f2.txt', "UTF-8", function cb2(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(`File2 data -->> ${data}`);

                fs.readFile('f3.txt', "UTF-8", function cb3(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`File3 data -->> ${data}`);

                        fs.readFile('f4.txt', "UTF-8", function cb4(err, data) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(`File4 data -->> ${data}`);
                            }
                        });
                    }
                });
            }
        });
    }
});

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Port is running on ${port}`)
})