/*let numeros = []

for (i=1; i<10000; i++){
    numeros[i] = Math.random() * 20
}

console.log("Los números fueron generador exitosamente. Total:"+numeros.length);

function numerosSalidos(nums){
    return new Promise((resolve, reject)=>{
        if (nums.length > 0){
            let conteos = nums.reduce((acumulador, valorActual)=>{
                if (!acumulador[valorActual])
                    acumulador[valorActual] = 1
                else
                    acumulador[valorActual]++
                return acumulador
            })
        }
        else {
            reject(`El arreglo debe de tener números`)
        }
    })
}
//*/

const crypto = require("crypto")

class UsersManager {
    static Usuarios = []

    //Método para crear un nuevo usuario
    static CrearUsuario(usuario){
        // Hash de la pass
        const hashedPsswrd = crypto.createHash("sha256").update(usuario.password).digest("hex")

        const newUser = {
            nombre : usuario.nombre,
            apellido : usuario.apellido,
            nombreCompleto : usuario.nombreCompleto,
            password : hashedPsswrd
        }

        //Agregar Usuario
        this.Usuarios.push(newUser)
    }

    // Muestra todos los usuarios
    static MostrarUsuarios(){
        this.Usuarios.forEach(usuario=>{
            console.log(`Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Nombre Completo: ${usuario.nombreCompleto}, Clave Encriptada: ${usuario.password}`)
        })
    }

    //Validación de usuarios
    static ValidaUsuario(nombreCompleto, psswrd){
        const usuario = this.Usuarios.find(u => u.nombreCompleto === nombreCompleto)
        if (!usuario) {
            console.log("Usuario logeado con exito")
        }
        else {
            console.log("Usuario no encontrado")
        }

        const hashedpassword = crypto.createHash("sha256").update(psswrd).digest("hex")

        if (usuario.password === hashedpassword){
            console.log("Usuario logeado con exito")
        }
        else {
            console.log("La contraseña no corresponde")
        }
    }
}

UsersManager.CrearUsuario({
    nombre : "Carlos",
    apellido : "Limón",
    nombreCompleto : "Carlos Elrond Limón Olvera",
    password : "123456"
})

UsersManager.MostrarUsuarios()