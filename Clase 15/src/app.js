import express from "express"
import mongoose, { mongo } from "mongoose"
import userRouter from "./routes/user.router.js"
//import userModel from "../models/users.js"

const app = express();
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://alastairblackwell:3lLd35UcActsfMLZ@cluster0.hprwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database connection succesful")
})
.catch(error=>{
    console.error("Error connecting to database", error)
})

app.use("/", userRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})