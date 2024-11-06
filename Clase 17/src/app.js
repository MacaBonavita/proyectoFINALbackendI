import express from "express"
import mongoose, { mongo } from "mongoose"
import orderModel from "./models/order.model.js"
import userModel from "./models/users.model.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const enviroment = async()=>{
    await mongoose.connect("mongodb+srv://alastairblackwell:3lLd35UcActsfMLZ@cluster0.hprwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
    /*let result = await orderModel.insertMany([
        {
            name: "Pepperoni",
            size: "small",
            price: 19,
            quantity: 10,
            date: "2021-03-13T08:14"
        },
        {
            name: "Pepperoni",
            size: "medium",
            price: 20,
            quantity: 20,
            date: "2021-03-13T09:13"
        },
        {
            name: "Pepperoni",
            size: "large",
            price: 21,
            quantity: 30,
            date: "2021-03-17T09:22"
        },
        {
            name: "Cheese",
            size: "small",
            price: 12,
            quantity: 15,
            date: "2021-03-13T11:21"
        },
        {
            name: "Cheese",
            size: "medium",
            price: 13,
            quantity: 50,
            date: "2021-03-14T10:01"
        },
        {
            name: "Vegan",
            size: "small",
            price: 17,
            quantity: 10,
            date: "2021-03-13T05:08"
        },
        {
            name: "Vegan",
            size: "medium",
            price: 18,
            quantity: 10,
            date: "2021-03-14T05:10"
        }
    ])//*/

    /*let orders = await orderModel.aggregate([
        {
            $match : { size: "medium" }
        },
        {
            $group : { _id: "$name", totalQuantity: { $sum: "$quantity" } }
        },
        {
            $sort : { totalQuantity: -1 }
        },
        {
            $group : { _id: 1, orders: { $push: "$$ROOT" } }
        },
        {
            $project : { "_id": 0, orders: "$orders" }
        },
        {
            $merge : { into: "reports" }
        }
    ])
    console.log(orders)//*/

    let users = await userModel.paginate({gender: 1, limit: 20, page: 1})
    console.log(users)
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