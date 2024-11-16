const express = require('express')
const {Category, validate} = require('../models/categoriesModel')
const route = express.Router()



route.get('/', async (req, res)=>{
    let categories = await Category.find()
    res.send(categories)
});

route.get('/:id', async (req, res)=>{
    let categories = await Category.findById(req.params.id)
    if(!categories) res.status('404').send("Does not exist")
    res.send(categories)
});

route.post('/', async (req, res)=>{
    const {error} = validate(req.body.name)
    if(error) res.status(404).send("name is not in correct format")
    const category = new Category({
        name: req.body.name
    })
    await category.save()
    res.send(category);
})

route.put('/:id', async (req, res)=>{
    let categ = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new:true})
    if(!categ) res.status('404').send("Category you are looking for is not exist")
    res.send(categ);
})

route.delete('/:id', async (req, res)=>{
    const category = await Category.findByIdAndDelete(req.params.id)
    if(!category) res.status('404').send("Category you are looking for is not exist")
    res.send(category);
})




module.exports = route