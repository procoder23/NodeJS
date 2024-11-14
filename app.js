const express = require('express')
const app = express()

app.use(express)


const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Port is running on ${port}`)
})