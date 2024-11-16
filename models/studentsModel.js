const joi = require('joi')
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30},
    isEnrolled: {type: Boolean, default: false},
    Phone: {type: String, required: true, minlength: 10, maxlength: 10}
})
const Student = new mongoose.model("Student", studentSchema)

function validateStudent(Student){
    const schema = joi.object({
        name: joi.string().min(3).max(50).required(),
        isEnrolled: joi.boolean(),
        Phone: joi.string().min(10).max(10)
    })
    return schema.validate(Student)
}

exports.model = Student
exports.validate = validateStudent