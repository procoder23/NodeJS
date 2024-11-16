const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

app.use(express)

mongoose.connect('mongodb://127.0.0.1/testDB')
.then(()=>{
    console.log("DB is connected.")
})
.catch((err)=>{
    console.log(err)
})

//Schema
const courseSchema = mongoose.Schema({
    name: {type:String, required: true},
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
})

const course = mongoose.model('Course', courseSchema)