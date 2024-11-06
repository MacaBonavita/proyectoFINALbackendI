const express = require("express")
const path = require("path")
const petsRouter = require("./routes/pets.router") //Se importa route (Con todo y extensión)
const usersRouter = require("./routes/users.router")

const app = express()
const PORT = 8080

app.use(express.json()) //Middleware body (cuando envio info desde una URL)
app.use(express.urlencoded({ extended: true})) //Middleware para recibir parametros por URL

//Servidoro archivos estaticos
app.use(express.static(path.join(__dirname, '/public')))

app.use("/", petsRouter)
app.use("/", usersRouter)
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, ()=>{
    console.log("Server running on port "+PORT)
})