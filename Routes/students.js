const express = require('express')
const {Student, validate} = require('../models/studentsModel')
const route = express.Router()

route.get('/', async (req, res)=>{
    let students = await Student.find()
    res.send(students)
});

route.get('/:id', async (req, res)=>{
    let students = await Student.findById(req.params.id)
    if(!students) res.status('404').send("Does not exist")
    res.send(students)
});

route.post('/', async (req, res)=>{
    const {error} = validate(req.body.name)
    if(error) res.status(404).send("name is not in correct format")
    const student = new Student({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        Phone: req.body.Phone
    })
    await student.save()
    res.send(student);
})

route.put('/:id', async (req, res)=>{
    let stud = await Student.findByIdAndUpdate(req.params.id, {name: req.body.name, isEnrolled: req.body.isEnrolled, Phone: req.body.Phone}, {new:true})
    if(!stud) res.status('404').send("Student you are looking for is not exist")
    res.send(stud);
})

route.delete('/:id', async (req, res)=>{
    const student = await Student.findByIdAndDelete(req.params.id)
    if(!student) res.status('404').send("Student you are looking for is not exist")
    res.send(student);
})

module.exports = route