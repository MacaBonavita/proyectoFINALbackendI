import express from "express"
import handlebars from "express-handlebars"
// Importar __DIRNAME
import __dirname from "./utils.js"
import viewsRouter from "./routes/views.router.js"
import { Server } from "socket.io"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Configurar Handlebars para lectura de contenido de los endpoints
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
// Utilizar recursos estaticos
app.use(express.static(__dirname + '/public'))

// Integrando "router" 
app.use("/", viewsRouter)

// Se realiza el levantamiento del Server desde SOCKET.IO
const httpServer = app.listen(PORT, ()=>{ console.log(`Server running on port ${PORT}`) })
const socketServer = new Server(httpServer)
// Se crear evento
socketServer.on("connection", socket => {
    console.log("Nuevo cliente conectado")
    socket.on("message", data=>{
      console.log("Funciona Evento Socket")  
      console.log(data)
    })
})

/*
app.listen(PORT, ()=>{
  //console.log(__dirname)
  console.log(`Server running on port ${PORT}`)
})//*/