import express from "express"
import handlebars from "express-handlebars"
// Importar __DIRNAME
import __dirname from "./utils.js" //Configuración Inicial
import viewsRouter from "./routes/views.router.js"
import { Server } from "socket.io"

//Inicializando express definiendo puerto
const app = express()
const PORT = 8080

// Configurar middlewares para formato JSON y parametros de la URL (Query Params)
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
// Configurar Handlebars para lectura de contenido de los endpoints
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
// Utilizar recursos estaticos
app.use(express.static(__dirname + '/public'))

//Indexando Routes
app.use("/", viewsRouter)

// Configurar uso de socket al inicio de la aplicación
const httpServer = app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))
const socketServer = new Server(httpServer)

let messages = []

socketServer.on("connection", socketServer => {
    console.log(`New Connected Client`)

    socketServer.on("message", data=>{
        messages.push(data)
        socketServer.emit("messagesLogs", messages)
    })
})