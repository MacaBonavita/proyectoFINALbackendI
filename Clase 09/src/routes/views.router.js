import express from "express"

const router = express.Router()
let food = [
    { name : "Carne", price : "4000" },
    { name : "papas", price : "2500" },
    { name : "Harinas", price : "1300" },
    { name : "Semillas", price : "2000" }
  ]
// Ruta que no debería estar acá
router.get("/", (req,res)=>{
    let testUser = {
      name : "Carlos",
      lastname : "Limón",
      role : "admin"
    }
    res.render('index', {
      user : testUser,
      isAdmin : testUser.role === "admin",
      food
    })
})

// Exportando 
export default router