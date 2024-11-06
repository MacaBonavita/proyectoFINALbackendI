const express = require("express")
const router = express.Router()


//Arreglo de mascotas de forma local
const users = []


// GET
router.get("/users", (req, res)=>{
    res.json(users)
})


// POST
router.post("/users", (req, res)=>{
    const newUser = req.body
    users.push(newUser) //Añadiendo al arreglo
    res.json({message: "Usuario agregado"})
})

// Para exportar las rutas
module.exports = router