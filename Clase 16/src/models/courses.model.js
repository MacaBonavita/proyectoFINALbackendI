import mongoose from "mongoose";

// Nombre de la collección
const courseCollection = "courses"

// Definir esquema
const courseSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    difficulty: {type: Number},
    topics: {
        type: Array,
        default: []
    },
    professor: {type: String},
    students:{
        type:Array,
        default: []
    }
})

// Creando y Exportando configuración
const courseModel = mongoose.model(courseCollection, courseSchema)
export default courseModel