// Importación de dependencias, librerias, etc
const fs = require('fs')

/** Comandos
 * writeFileSync : Escritura de un archivo de manera sincrona
 * readFileSync : Lectura de un archivo de manera sincrona
 * appendFileSync : Actualizar un archivo de manera sincrona
 * unlinkFileSync : Elimina un archivo de manera sincrona
 * mkdirSync : Crea carpetas de manera sincrona
 */

const data = 'Contenido para escribir en un archivo'
//Manejo de errores
/*
try {
    fs.writeFileSync('MiArchivo.txt', data)
    console.log("Archivo creado exitosamente.")
}
catch (error) {
    console.error('Error al escribir el archivo', error)
}//*/

/*
try {
    const data = fs.readFileSync('MiArchivo.txt', 'utf8')
    console.log('Contenido para mostrar: ', data)
}
catch (error) {
    console.error('Error al leer el archivo', error)
}//*/

/*
const otraInfo = ": Info actualizada"

try {
    const data = fs.appendFileSync('MiArchivo.txt', otraInfo)
    console.log('Archivo actualizado con éxito')
}
catch (error) {
    console.error('Error al leer el archivo', error)
}//*/

/*
try {
    
    fs.unlinkSync('MiArchivo.txt')
    console.log('Archivo eliminado con éxito')
}
catch (error) {
    console.error('Error al leer el archivo', error)
}//*/

