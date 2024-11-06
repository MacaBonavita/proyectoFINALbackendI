import mongoose from "mongoose";

// Nombre de la collección
const studentCollection = "students"

// Definir esquema
const studentSchema = new mongoose.Schema({
    firstName: {type: String, required: true, max: 100, index: true },
    lastName: {type: String, required: true, max: 150},
    email: {type: String, required: true, max: 50},
    gender: {type: Number, required: true},
    courses: {
        type:[
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
})

// Creando y Exportando configuración
const studentModel = mongoose.model(studentCollection, studentSchema)
export default studentModel