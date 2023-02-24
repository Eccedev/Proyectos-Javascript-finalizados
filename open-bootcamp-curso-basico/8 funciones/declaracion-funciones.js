// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Gorka"

// saludar
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)  // Hola Gorka
}

////

let nombre_2 = "Juan"
console.log(nombre_2)   // Juan

despedir(nombre_2)
console.log(nombre_2)   // Juan

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)   // Adiós Diego
}

////

let persona = { nombre: "Juan", apellido: "González" }
console.log(persona)      // { nombre: "Juan", apellido: "González" }

saludarPersona(persona)  // llamadafuncion

console.log(persona)     // { nombre: "Juan", apellido: "Villar" }  ¡cambia persona.apellido!

function saludarPersona(objeto) {
    objeto.apellido = "Villar"                               // cuidado que ha modificado el objeto (mirar apunte justo arriba)
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)  // Hola Juan Villar
}

saludar()

///////

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)           // 7 
}

imprimeNumero()  // si incluimos algún numero modifica el console.log de la funcion

/////////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })  // está imprimiendo todo pues (...parametros) es factor spread de propagación

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)  // suma todo lo de const s =  suma(1, 2, 3, 4, 9, 15, 16)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)  // 50, pero si no estuviera el return en la funcion sería undefined

//////
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)   // hola  (a pesar de estar definida fuera de la funcion)
    let variable_interna = "adiós"   //en cambio estra solo esta definida dentro del ambito de esta funcion
    console.log(variable_interna)    // si esto estuvira fuera de la funcion nos daria error por no estar definidad
    return a * b
}


console.log(multiplicar(4, 9) //36
