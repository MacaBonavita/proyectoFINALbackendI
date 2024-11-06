import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const userCollection = "users"

// Definir esquema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: Number
})

// Creando y Exportando configuración
userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model(userCollection, userSchema)
export default userModel
