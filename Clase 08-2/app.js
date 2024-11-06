import express from "express"
import { fileURLToPath } from "url" //se configura la URL para las rutas
import { dirname, join } from "path" //Se obtiene para configurar el directorio
import multer from "multer" //Libreria para guardar archivos
import path from "path" //Libreria para rutas

const __filename = fileURLToPath(import.meta.url) //Se define el espacio de la ruta para archivos
const __dirname = dirname(__filename) //Se define el nombre del archivo en el directorio

const app = express()
const PORT = 8080

// Crear una carpeta que se llame descargas
const storage = multer.diskStorage({
    destination:(req, res, cb)=>{
        cb(null, path.resolve(__dirname, "./descargas")) //Se define el directorio físico por la librerias previas
    },
    filename:(req,file,cb)=>{
        const timestamp = Date.now() //Se define marca de tiempo
        const originalname = file.originalname //Se define nombre original del archivo
        const ext = path.extname(originalname) //Se define la extensión del archivo
        cb(null, `${timestamp}-${originalname}`)
    }
})
const upload = multer({storage})

app.use(express.static(path.join(__dirname, "public")))
// Creando endpoint para enviar información (no es buena práctica hacerlo por aquí)
app.post("/upload", upload.single("archivo", (req, res)=>{
    res.json({ mensage: "Archivo subido exitosamente"})
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} port`)
})