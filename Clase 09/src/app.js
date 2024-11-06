import express from "express"
import handlebars from "express-handlebars"
// Importar __DIRNAME
import __dirname from "./utils.js"
import viewsRouter from "./routes/views.router.js"

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


app.listen(PORT, ()=>{
  //console.log(__dirname)
  console.log(`Server running on port ${PORT}`)
})