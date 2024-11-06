const express = require("express")

const app = express()
const PORT = 8080

//Middlewares
app.use(express.json()) //Cuando se necesite enviar información a travez del BODY (POST)
app.use(express.urlencoded({ extended:true })) //Par enviar información a travez de la URL

let tasks = [
    { id : 1, title : "Programming" },
    { id : 2, title : "Debug" },
    { id : 3, title : "Compile" }
]

app.post('/tasks', (req, res)=>{
    const { title } = req.body
    const newTask = { id : tasks.length+1, title : title || "Nueva Tarea" }
    tasks.push(newTask)
    res.status(201).json(newTask)
    //res.json({ msg : "POST API" })
})
app.put('/api', (req, res)=>{
    res.json({ msg : "PUT API" })
})
app.delete('/api', (req, res)=>{
    res.json({ msg : "DELETE API" })
})


app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})