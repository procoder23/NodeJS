const express = require("express")
const myMiddleware = require("./middlewares/middle.js")
const middleware2 = require('./middlewares/middle2.js')
const morgan = require('morgan')

const app = express()

app.use(myMiddleware)
app.use(middleware2)
app.use(morgan('tiny'))

const courses = [
    {id: 1, name: "Java"},
    {id: 2, name: "Python"},
    {id: 3, name: "Javascript"}
]

app.get("/", (req, res)=>{
    res.send(courses)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Port is running on : ${port}`)
})