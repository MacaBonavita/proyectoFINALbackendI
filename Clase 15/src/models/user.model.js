import mongoose from "mongoose";

// Nombre de la collección
const userCollection = "usuarios"

// Definir esquema
const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 150},
    email: {type: String, required: true, max: 50}
})

// Creando y Exportando configuración
const userModel = mongoose.model(userCollection, userSchema)
export default userModel