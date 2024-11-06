import express from "express";
import userModel from "../models/user.model.js"

const router = express()

/** Generando funciones asyncronas (Siempre se usa con mongoose) **/
// Obtiene Lista de Usuarios
router.get("/", async(req,res)=>{
    try {
        let users = await userModel.find()
        res.send({ result: "success", payload: users })
    }
    catch (error) {
        console.error(error)
    }
})

// Inserta usuario nuevo
router.post("/", async(req,res)=>{
    let { nombre, apellido, email } = req.body
    //Validando Datos
    if (!nombre || !apellido || !email){
        res.send({status: "error", error: "Falta(n) parametro(s)"})
    }

    let result = await userModel.create({nombre, apellido, email})
    res.send({ result: "success", payload: result})
})

// Actualiza Usuario
router.put("/:uid", async(req,res)=>{
    let {uid} = req.params
    console.log(uid);
    let userToReplace = req.body
    if (!userToReplace.nombre || !userToReplace.apellido || !userToReplace.email){
        res.send({status: "error", error: "Falta(n) parametro(s)"})
    }

    let user = await userModel.updateOne({ _id: uid}, userToReplace)
    res.send({ result: "success", payload: user})
})

// Actualiza Usuario
router.delete("/:uid", async(req,res)=>{
    let {uid} = req.params
    console.log(uid);
    
    let user = await userModel.find({ _id:uid })
    if (!user) {
        res.send({status: "error", error: "Usuario no encontrado"})
    }
    else {
        let user = await userModel.deleteOne({ _id: uid})
        res.send({ result: "success", payload: user})
    }
    
})

// Exportando definición
export default router