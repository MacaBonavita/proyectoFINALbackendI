import express from "express"
import mongoose, { mongo } from "mongoose"
import userModel from "./models/users.model.js"
import studentModel from "./models/student.model.js"
import courseModel from "./models/courses.model.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const enviroment = async()=>{
    await mongoose.connect("mongodb+srv://alastairblackwell:3lLd35UcActsfMLZ@cluster0.hprwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
    /*await courseModel.create({
        title: "Backend II",
        description: "Diseño y Arquitectura",
        difficulty: 7,
        topics: [ "fs", "express", "mongodb", "nodejs" ],
        professor: "Omar Manias"
    })//*/
    /*await studentModel.create({
        firstName: "Daniel",
        lastName: "Limón",
        email: "monachao98@gmail.com",
        gender: 1
    })//*/
    /*let response = await userModel.find().explain("executionStats")
      let response = await studentModel.find().explain("executionStats")
      console.log(response)//*/

    let student = await studentModel
        .findOne({_id: "66bba2d93c4989ca1721f0fc"})
        .populate("courses.course")
    console.log(JSON.stringify(student, null, '\t'))
    /*student.courses.push({
        course: "66bba5b9f60e473d39881171"
    })
    let result = await studentModel.updateOne(
        {
            _id: "66bba2d93c4989ca1721f0fc"
        },
        student
    )
    console.log(result)//*/
}

enviroment().then(()=>{
    console.log("Database connection succesful")
})
.catch(error=>{
    console.error("Error connecting to database", error)
})

app.listen(PORT, ()=>{
    console.log(`Server running on Port:${PORT}`)
})