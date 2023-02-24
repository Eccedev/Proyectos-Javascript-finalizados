// Funciones tipo flecha - funciones anónimas

const ar ray = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)  //  duplicar valores del array. Con .map obtenemos otro array igual longitud
/*esta funcion flecha es esta de abajo:           //el return para flecha no hace falta en funcion flecha de arriba
const array2 = array.map(function(valor) {         //las funciones se definen preferentemente en una const 
    return valor * 2                              
})
*/

console.log(array2)   //[2, 10, 12, 4, 14, 24, 16, 184]

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2    //anonimas xq no se asignan a ningun nombre

console.log(doble(6)) //12   //ojo con el hoisting, variables y funciones no flechas se pueden acceder a ellas desde cualquier parte
console.log(dobleDelValor(6)) //12  // no hoisting, solo se accede después de inicializadas (ver q está más arriba)

const array3 = array.map(dobleDelValor)

console.log(array3)  //[2, 10, 12, 4, 14, 24, 16, 184]

function doble(valor) {
    return valor * 2
}

//por el hoisting(o no hoisting) mejor declarar variables y funciones al principio
