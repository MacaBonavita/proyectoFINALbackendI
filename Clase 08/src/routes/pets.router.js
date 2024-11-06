const express = require("express")
const router = express.Router()


//Arreglo de mascotas de forma local
const pets = []


// GET
router.get("/pets", (req, res)=>{
    res.json(pets)
})


// POST
router.post("/pets", (req, res)=>{
    const newPets = req.body
    pets.push(newPets) //Añadiendo al arreglo
    res.json({message: "Mascota agregada"})
})

// Para exportar las rutas
module.exports = router