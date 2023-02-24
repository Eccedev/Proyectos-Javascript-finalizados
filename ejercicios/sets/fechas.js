/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

let hoy = new Date()
console.log(hoy)

const nacimiento = new Date(2000, 10, 29)  // ojo que 10 es noviembre
console.log(nacimiento)

const comparacion = hoy > nacimiento
console.log(comparacion)

const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = nacimiento.getMonth() + 1   // este metodo da el nr 10 pero sabemos que es 11(noviembre)
console.log(mesNacimiento)

const anyoNacimiento = nacimiento.getFullYear()
console.log(anyoNacimiento)
