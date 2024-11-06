import mongoose from "mongoose";

// Nombre de la collección
const orderCollection = "orders"

// Definir esquema
const orderSchema = new mongoose.Schema({
    name: {type: String, required: true },
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

// Creando y Exportando configuración
const orderModel = mongoose.model(orderCollection, orderSchema)
export default orderModel