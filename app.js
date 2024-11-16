const express = require('express')
const mongoose = require('mongoose')
const categories = require('./Routes/categories')
const students = require('./Routes/students')

const app = express()
app.use(express.json())
app.use('/api/categories', categories)
app.use('/api/students',students)

mongoose.connect('mongodb://127.0.0.1/testDB')
.then(()=>{
    console.log("DB is connected successfully")
})
.catch((err)=>{
    console.log(err)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Port is running on ${port}`);
});