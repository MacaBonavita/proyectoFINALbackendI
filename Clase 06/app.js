
/*/ CREAR SERVIDOR JS
const http = require("http")

const server = http.createServer((request, response)=>{
    response.end("Mi 1er servidor en backend")
})

server.listen(8080, ()=>{
    console.log("Escuchando en el puerto 8080")
})
//*/

/*/ CREAR SERVIDOR CON "EXPRESS"
const express = require("express")
const app = express()
//console.log(app)
//Crear puerto
const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT} actualmente`)
})//*/



/** Creación de Endpoint **/
/*const users = [
    { nombre: "Alumno 1", apellido : "A" },
    { nombre: "Alumno 2", apellido : "B" }
]
app.get("/saludo", (req, res)=>{
    //res.send("Saludo desde mi primer endpoint")
    req.send("")
    res.json({"Usuarios" : users})
})
app.get('/holamundo',(req, res)=>{
    res.send("Hola mundo!")
})//*/


const express = require("express")
const app = express()
const PORT = 8080

//Middleware
app.use(express.urlencoded({extended:true}))

const alumnos = [
    { id: "1", nombre : "Carlos" },
    { id: "2", nombre : "Elrond" },
    { id: "3", nombre : "Limón" },
    { id: "4", nombre : "Olvera" },
    { id: "5", nombre : "Daniel" },
    { id: "6", nombre : "Beren" },
    { id: "7", nombre : "Limón" },
    { id: "8", nombre : "Olvera" },
    { id: "9", nombre : "Liliana" },
    { id: "10", nombre : "Olvera" },
]

app.get("/alumnos/:idAlumno", (req, res)=>{
    let alumno_id = req.params.idAlumno
    //console.log(alumno_id)
    let alumno = alumnos.find((a)=>a.id === alumno_id)
    //console.log(alumno)
    if (!alumno)
        return res.send({error : `El Alumno con id ${alumno_id} no se encuentra en la lista`})
    res.send({alumno})
})

// Req.query
app.get("/alumnos", (req,res)=>{
    let limit = parseInt(req.query.limit)
    //console.log(typeof limit)
    let limitedAlumnos = [...alumnos]

    if (isNaN(limit) && limit > 0){
        limitedAlumnos = limitedAlumnos.slice(0,limit) //limitar cantidad del parametro
    }

    res.json(limitedAlumnos)
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT} actualmente`)
})
