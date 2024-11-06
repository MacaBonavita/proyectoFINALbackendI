import express from "express"

const router = express.Router()
// Ruta que no debería estar acá
router.get("/", (req,res)=>{
    res.render('index')
})
// Exportando 
export default router