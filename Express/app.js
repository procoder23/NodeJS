const express = require('express')

const app = express() //We store express method in app now we can use it accordingly, it is like global declaration

app.use(express.json())

//Methods : GET, POST, PUT, DELETE
const courses = [
    {id:1, name:'Javascript'},
    {id:2, name:'NodeJS'},
    {id:3, name:'ReactJS'},
    {id:4, name:'Python'},
    {id:5, name:'Java'},
    {id:6, name:'Kotlin'},
];

app.get('/', (req, res)=>{
    res.send('Hello Prathamesh!')
})

app.get('/about', (req, res)=>{
    res.send('This is about Prathamesh :)')
})

app.get('/contact', (req, res)=>{
    res.send('Please feel free to contact Prathamesh :)')
})

// Route parameters
app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.post('/courses', (req, res)=>{
    const course = {
        id:courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.put("/courses/:id", (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send("Course you are looking for is not exist")
    course.name = req.body.name
    res.send(course)
})

app.delete("/courses/:id", (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send("The course you are looking for is not found")
    let newCourses = courses.filter(crse=> crse.id !== course.id)
    res.send(newCourses)
})

app.get('/courses/:id', (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send("Course you are looking for is not exist")
    res.send(course)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Port is running on : ${port}`)
})