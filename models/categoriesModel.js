const joi = require('joi')
const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30}
})
const Category = new mongoose.model("Category", categorySchema)

function validateCategory(Category){
    const schema = joi.object({
        name: joi.string().min(3).required()
    })
    return schema.validate(Category)
}

exports.model = Category
exports.validate = validateCategory