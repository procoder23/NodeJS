const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDB') // Connecting to the mongodb
.then(()=>{
    console.log("DB is connected successfully")
})
.catch((err)=>{
    console.log(err)
})

//Schema
const courseSchema = mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
})

//Models
const Course = mongoose.model('Course', courseSchema)

async function createCourse(params) {
    const course = new Course({  //This is model
        name: 'NodeJS',
        creator: 'Shraddha',
        isPublished: true,
        rating: 4.2
    })
    
    const result = await course.save() //This is creating the course
    console.log(result)
}

// //Comparison Op (gt, eq, gte, lte, lt, in, not in)

// async function getCourses(params) { //Get the course
//     // const courses = await Course.find({creator: 'Madhuri'}) // Give me specific course of which creator: Madhuri
//     const courses = await Course.find({rating: {$in: [3, 4.5]}}).select({name: 1}) // Give me specific course of which creator: Madhuri
//     console.log(courses)
// }

// getCourses()



//Logical operator (and, or)

async function getCourses(params) { //Get the course
    // const courses = await Course.find({creator: 'Madhuri'}) // Give me specific course of which creator: Madhuri
    const courses = await Course.find({rating: {$in: [3, 4.5, 4.0]}}).select({name: 1}) // Give me specific course of which creator: Madhuri
    .and([{creator: "Prathamesh"}, {rating: 2.5}])
    console.log(courses)
}

// getCourses()

//Upate the document
// async function updateCourse(id) {
//     let course = await Course.findById(id)
//     if(!course) return;
//     course.name = "React"
//     course.creator = "Steve"
//     const updatedCourse = await course.save()
//     console.log(updatedCourse)
// }

// updateCourse('673333ae23b8cdfae825c7f7')

//Delete the document

async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}
deleteCourse('673333ae23b8cdfae825c7f7')
// createCourse()