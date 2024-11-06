


//import express from 'express'

// ARROW FUNCTIONS
const saludar = ()=>{
    console.log("Hi bitches")
}
//saludar()

const sumar = (a,b)=>{
    return a+b
}
//console.log(sumar(3,8))
const duplicar = (n)=> {return n*2}
//console.log(duplicar(100))

// FUNCIONES CON MÉTODOS E UN OBJETO
const persona = {
    nombre : "Carlos",
    edad : 32,
    saludar : function(){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}
//persona.saludar()

// CALLBACKS
function obtenerDatosUsuarios(id, callback){
    setTimeout(()=>{
        const usuario = {
            id:id,
            nombre:"Coder",
            email:"coder@house.com"
        }
        callback(usuario)
    }, 5000)
}
function mostrarDatosUsuario(usuario){
    console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email} `)
}
//obtenerDatosUsuarios(123, mostrarDatosUsuario)

// CALLBACK HELL

/*
obtenerDatosUsuarios(function(resultado)){
    procesarDatos(resultado1)
        otraFuncion(resultado2)
}
*/

// PROMESAS (PROMISES)
/*
const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const respuesta = false
        if (respuesta){
            resolve(`Respuesta exitosa`)
        }
        else {
            reject(`Ocurrio un error`)
        }
    }, 5000);
})
//Ejecutando promesa
promesa.then((mensaje)=>{
    console.log(`Exito: ${mensaje}`)
}).catch((error)=>{
    console.error(`Error: ${error}`)
})
//*/

/**
 * funciones asincronas solamente cuando necesito traer externos desde la BD (async-await)
 * async const getUser = ()=>{
 *  let user = await getById(user.id)
 *  try...(Consiguio la info)
 *  catch...(Sino existe la info)
 * }
 * 
 *  **/

// HANDS ON LAB
function suma(a,b){
    return new Promise((resolve, reject)=>{
        if (a === 0 || b === 0){
            reject(`Operación innecesaria`)
        }
        else if ((a+b)<=0){
            reject(`Solo devuelve valores positivos`)
        }
        else {
            resolve(a+b)
        }
    })
}

function resta(minuendo, sustraendo){
    return new Promise((resolve, reject)=>{
        if (minuendo === 0 || sustraendo === 0)
            reject(`Operación invalida`)
        else if ((minuendo - sustraendo) <= 0)
            reject(`Operación invalida`)
        else
            resolve(minuendo-sustraendo)
    })
}

function multiplicacion(factor1, factor2){
    return new Promise((resolve, reject)=>{
        if (factor1 <= 0 || factor2 <= 0)
            reject(`Solo devuelve valores positivos`)
        else
            resolve(factor1*factor2)
    })
}

function division(dividendo, dividor){
    return new Promise((resolve, reject)=>{
        if (dividor === 0)
            reject(`No se puede dividir entre 0`)
        else
            resolve(dividendo/dividor)
    })
}

// Funciones asyncronas para realizar los calculos

async function calculos(){
    try {
        const resSuma = await suma(4,1)
        console.log(`Suma: ${resSuma}`)
        const resResta = await resta(10,4)
        console.log(`Resta: ${resResta}`)
        const resMult = await multiplicacion(4,10)
        console.log(`Multiplicación: ${resMult}`)
        const resDiv = await division(140,5)
        console.log(`División: ${resDiv}`)
    }
    catch (error) {
        console.error(error)
    }
}

const calculosAsync = async()=> {
    try {
        const resSuma = await suma(4,1)
        console.log(`Suma: ${resSuma}`)
        const resResta = await resta(10,4)
        console.log(`Resta: ${resResta}`)
        const resMult = await multiplicacion(4,10)
        console.log(`Multiplicación: ${resMult}`)
        const resDiv = await division(140,5)
        console.log(`División: ${resDiv}`)
    }
    catch (error) {
        console.error(error)
    }
}

//calculos()
calculosAsync()