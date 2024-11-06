/**let comision = 700650
console.log(comision)//**/


/*/Función sencilla/normal
function suma(a,b){
    return a+b
}
console.log(suma(1,2))//*/

/*/Función Flecha
const restar = (a,b) => a-b
console.log(restar(10,4))//*/

/*/Función Anonima
const saludar = function(nombre){
    console.log(`Hola ${nombre} ¿como estas prro?)`)
}
saludar("Elrond")//*/


/*/Clases
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
let per1 = new Persona("Elrond", 32)
console.log(per1.saludar())//*/

class Contador {
    static ctaGlobal = 0

    constructor(responsable){
        this.responsable = responsable
        this.ctaIndividual = 0
    }

    obtenerResponsable(){
        return this.responsable
    }

    obtenerCtaIndividual(){
        return this.ctaIndividual
    }

    static obtenerCtaGlobal(){
        return Contador.ctaGlobal
    }

    contar(){
        this.ctaIndividual++
        Contador.ctaGlobal++
    }
}
const cont1 = new Contador("Persona A")
console.log(cont1.obtenerResponsable())

cont1.contar()
cont1.contar()
cont1.contar()
cont1.contar()

console.log(cont1.obtenerCtaIndividual())
console.log(Contador.obtenerCtaGlobal())