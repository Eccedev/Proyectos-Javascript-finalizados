//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
//- Una variable que obtenga tu edad a partir del objeto anterior
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const misDatos = {
    nombre: "jon",
    apellido: "rodri",
    edad: 35,
    altura: 177,
    eresDesarrollador: true
}

let edad = misDatos.edad

const listaDatos = [
    {                                  // cada objeto aparece dentro del mismo array
        ...misDatos                    // si no lo hiciéramos así sino creando un array de objetos de amigos independiente
    },{                                //    ...entonces se ordenan pero cada uno dentro de su array y no nos valdría para este caso
        nombre: "migue",
        apellido: "ramir",
        edad: 25,
        altura: 165,
        eresDesarrollador: true
    },{
        nombre: "ana",
        apellido: "gonz",
        edad: 40,
        altura: 170,
        eresDesarrollador: true
    }
]

const listaOrdenadaEdad = listaDatos.sort((a, b) => b.edad - a.edad)   // de mayor a menor

console.log(listaOrdenadaEdad)
