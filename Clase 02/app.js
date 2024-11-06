// Operador exponencial

/*let resultado = 2 ** 3
let base = 5
let exp = 2
let resultado2 = base ** exp
console.log(resultado2) */

/*/ Includes
const numeros = [2,3,45,8,10]

console.log(numeros.includes(9))//*/

//find numero[] === 9
// let numero = '3'
// == 3 simplemente evalua el valor
// === evalua el valor y el tipo de dato
// console.log(typeof numero)

/*let bebidas = ["cafe", "agua", "mates"]
console.log(bebidas.includes("gaseosa"))//*/

/*/ Operador nullish
const nombre = undefined // "backend"
const nombreXDefecto = "Coderhouse"
const nombreCompleto = nombre ?? nombreXDefecto
console.log(nombreCompleto)//*/

/*/Ejemplo de métodos de "Object"
const persona = {
    nombre: "Coderhouse",
    edad: 30,
    Ciudad: "Córdoba"
}
//console.log(persona?.edad)
const entradas = Object.entries(persona)
const valores = Object.values(persona)
const claves = Object.keys(persona)
console.log(entradas)
console.log(valores)
console.log(claves) //*/

/*/Ejemplo de ASYNC
async function getUsers(){
    try {

    }
    catch (error){
        console.error({ "message" : "Not found", error })
    }
    return 
}//*/

/*/Ejemplo de Promesa-try/catch/finally
function ejemploPromesa(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const exito = true
            // if (exito === true) : redundante 
            // if (!exito) : se niega el bool
            if (exito){
                resolve("Éxito")
            }
            else {
                reject("Error")
            }
        }, 5000)
    })
}
ejemploPromesa()
.then((resultado) => {
    console.log(resultado)
})
.catch((error)=>{
    console.error(error)
})
.finally(()=>{
    console.log("La promesa ha sido finalizada")
})//*/

//Ejemplo administrador de tickets
class TicketManager {
    constructor(){
        this.eventos = []
        this.precioBaseGanancias = 0
        //this.participantes = []
    }
    getEventos(){
        return this.eventos
    }
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()){
        precio += precio * 0.15
        const evento_id = this.eventos.length+1
        const participantes = []
        const evento = {
            id: evento_id,
            nombre : nombre,
            lugar : lugar,
            precio : precio,
            capacidad : capacidad,
            fecha : fecha,
            participantes : participantes
        }
        this.eventos.push(evento)
    }
    agregarUsuario(evento_id, usuario_id){
        const evento_encontrado = this.eventos.find((evento)=>evento.id === evento_id)
        if (!evento_encontrado){
            console.error("El evento no fue encontrado")
            return //Si se coloca el return en un método de una clase, corta la ejecución
        }
        const participantes = evento_encontrado.participantes
        const usuario_registrado = participantes.includes(usuario_id)
        if (usuario_registrado){
            console.log("El usuario ya esta registrado en el evento")
            return
        }
        participantes.push(usuario_id)
        console.log("El usuario ha sido agregado al evento")
    }
    ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha){
        const evento_encontrado = this.eventos.find((evento)=>evento.id === evento_id)
        if (!evento_encontrado){
            console.error("El evento proporcionado, no existe")
            return
        }
        const evento_copiado = {...evento_encontrado}
        evento_copiado.id = this.eventos.length+1
        evento_copiado.lugar = nueva_localidad
        evento_copiado.fecha = nueva_fecha
        evento_copiado.participantes = []

        this.eventos.push(evento_copiado)
        console.log("El evento ha sido puesto en gira")
    }
}

const ticketManager = new TicketManager()
ticketManager.agregarEvento("Hongo Fest 2024", "Local Gpo 97", 100, 2000, new Date("2024-06-22"))
ticketManager.agregarEvento("Puntas de Flecha", "Aleatorio", 150, 1000, new Date("2024-07-06"))

const eventos = ticketManager.getEventos()
//console.log(eventos)
ticketManager.agregarUsuario(1, "Elrond")
ticketManager.agregarUsuario(2, "Ameyali")
ticketManager.agregarUsuario(3, "Caty")
ticketManager.agregarUsuario(4, "Conejo")


